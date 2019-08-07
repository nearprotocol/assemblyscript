// tslint:disable: no-void-expression as-types as-variables

import {
  Source,
  ExportsWalker,
  Class,
  Range,
  Program,
  Global,
  Enum,
  CommonFlags,
  Interface,
  Field,
  Element,
  Type,
  ImportStatement,
  NodeKind,
  DeclarationStatement,
  Function,
  TypeKind,
  Parser,
  CommentNode,
  CommentKind,
  File,
  ClassDeclaration,
  FunctionDeclaration,
  TypeNode,
  FieldDeclaration,
  Statement,
  Node,
  NamedTypeNode
} from "assemblyscript";
import { Transformer } from "./transformer";

import { ASTBuilder } from "./sourceBuilder";

interface SimpleField {
    name: string;
    type: TypeNode;
}

function isComment(stmt: Statement): boolean {
  return stmt.kind == NodeKind.COMMENT;
}

function hasNearDecorator(stmt: Source): boolean {
  return stmt.text.startsWith("//@nearfile");
}

function toString(node: Node): string {
  return ASTBuilder.build(node);
}

function isReference(type: TypeNode): boolean {
  let simpleTypes = ["i32", "u32", "string", "bool", "i64", "u64", "Uint8Array", "u128", "boolean"];
  return !simpleTypes.includes(toString(type));
}

// TODO: Extract this into separate module, preferrable pluggable
class NEARBindingsBuilder extends Transformer {
    private typeMapping: { [key: string]: string } = {
      "i32": "Integer",
      "u32": "Integer",
      "i64": "String",
      "u64": "String",
      "string": "String",
      "bool": "Boolean",
      "Uint8Array": "String",
      "u128": "String"
    };

    private nonNullableTypes = ["i32", "u32", "i64", "u64", "bool"];

    private sb: string[] = [];
    private generatedEncodeFunctions = new Set<string>();
    private generatedDecodeFunctions = new Set<string>();
    private exportedClasses: Map<string, ClassDeclaration> = new Map();
    private exportedFunctions: Function[] = [];
    classInjections = new Map<string, string>();
    classRanges = new Map<string, Range>();
    generatedArgParserFunctions: Set<string> = new Set();

    static build(parser: Parser, source: Source[]): void {
      new NEARBindingsBuilder(parser).build(source);
    }

    constructor(parser: Parser) {
      super(parser);
    }

    static nearFiles(parser: Parser): Source[] {
      return parser.program.sources.filter(hasNearDecorator);
    }

    walk(): void {
    }

    visitClassDeclaration(node: ClassDeclaration): void {
      if (this.exportedClasses.has(toString(node.name))) return;
      this.classRanges.set(toString(node.name), node.range);
      // if (!node.is(CommonFlags.MODULE_EXPORT)){
      //   return;
      // }
      this.exportedClasses.set(toString(node.name), node);
    }

    // visitFunctionDeclaration(node: FunctionDeclaration): void {
    //   if (!node.is(CommonFlags.MODULE_EXPORT)) {
    //     return;
    //   }
    //   this.generateArgsParser(node);
    //   this.generateWrapperFunction(node);
    //   this.exportedFunctions.push(node);

    // }

    // visitClass(name: string, element: Class): void {
    //   this.classRanges.set(element.name, element.declaration.range);
    //   if (!element.is(CommonFlags.MODULE_EXPORT)) {
    //     return;
    //   }
    //   this.exportedClasses.push(element);
    // }

    // visitFunction(name: string, element: Function): void {
    //   if (!element.is(CommonFlags.MODULE_EXPORT)) {
    //     return;
    //   }
    //   this.generateArgsParser(element);
    //   this.generateWrapperFunction(element);
    //   this.exportedFunctions.push(element);
    // }



    

    private generateArgsParser(element: FunctionDeclaration): void {
      var signature = element.signature;
      let name = toString(element.name);
      var args: SimpleField[] = signature.parameters.map((param) => {
        return { name: toString(param.name), type: param.type };
      });
      args.filter(arg=> this.isArrayType(arg.type)).forEach(field => this.generateDecodeFunction(field.type));
      this.sb.push(`
      export class __near_ArgsParser_${name} extends ThrowingJSONHandler {
          buffer: Uint8Array;
          decoder: JSONDecoder<__near_ArgsParser_${name}>;
          handledRoot: boolean = false;`);
      if (args.length > 0) {
        args.forEach((field) => {
          this.sb.push(`__near_param_${field.name}: ${this.typeName(field.type)};`);
        });
        this.generateHandlerMethods("this.__near_param_", args);
      } else {
        this.generateHandlerMethods("this.__near_param_", []);
      }
      this.sb.push(`}`);
    }

    private generateWrapperFunction(element: FunctionDeclaration) {
      let signature = element.signature;
      let params = signature.parameters;
      let returnType = signature.returnType;
      if (this.isArrayType(returnType)) {
        this.generateEncodeFunction(returnType);
      }
      let name = element.name.symbol;
      this.sb.push(`export function ${name}(): void {
        // Reading input bytes.
        let json = storage._internalReadBytes(4, 0, 0)!;
        let handler = new __near_ArgsParser_${name}();
        handler.buffer = json;
        handler.decoder = new JSONDecoder<__near_ArgsParser_${name}>(handler);
        handler.decoder.deserialize(json);`);
      if (toString(returnType) !== "void") {
        this.sb.push(`let result: ${toString(returnType)} = wrapped_${name}(`);
      } else {
        this.sb.push(`wrapped_${name}(`);
      }
      if (params.length > 0) {
        this.sb.push(params.map(paramName => `handler.__near_param_${paramName.name.symbol}`).join(","));
      }
      this.sb.push(");");
      if (toString(returnType) !== "void") {
        this.sb.push(`
          let encoder = new JSONEncoder();
        `);
        this.generateFieldEncoder(returnType, "null", "result");
        this.sb.push(`
          let val = encoder.serialize();
          return_value(val.byteLength, <usize>val.buffer);
        `);
      }
      this.sb.push(`}`);
    }



    private generateHandlerMethods(valuePrefix: string, fields: SimpleField[]) : void {
      
      var fieldsWithTypes = (types: string[]): SimpleField[] =>
        fields.filter(field => types.indexOf(this.typeName(field.type)) != -1);

      this.generateBasicSetterHandlers(valuePrefix, "Integer", "i64", fieldsWithTypes(["i32", "u32"]));
      this.generateBasicSetterHandlers(valuePrefix, "String", "string", fieldsWithTypes(["string", "i64", "u64", "Uint8Array", "u128"]));
      this.generateBasicSetterHandlers(valuePrefix, "Boolean", "bool", fieldsWithTypes(["bool"]));

      var nonBasicFields = fields.filter(field => isReference(field.type));

      this.sb.push("setNull(name: string): void {");
      nonBasicFields.forEach((field) => {
        this.sb.push(`if (name == "${field.name}") {
          ${valuePrefix}${field.name} = <${this.typeName(field.type)}>null;
          return;
        }`);
      });
      this.sb.push(`
        super.setNull(name);
      }`);

      this.sb.push(`
        pushObject(name: string): bool {`);
      this.sb.push(`if (!this.handledRoot) {
        assert(name == null || name.length == 0);
        this.handledRoot = true;
        return true;
      } else {
        assert(name != null || name.length != 0);
      }`);
      this.generatePushHandler(valuePrefix, nonBasicFields.filter(field => !this.isArrayType(field.type)));
      this.sb.push(`
          return super.pushObject(name);
        }`);
      this.sb.push(`
        pushArray(name: string): bool {`);
      this.generatePushHandler(valuePrefix, nonBasicFields.filter(field => this.isArrayType(field.type)));
      this.sb.push(`
          return super.pushArray(name);
        }`);
    }

    private generateBasicSetterHandlers(valuePrefix: string, setterType: string, setterValueType: string, matchingFields: SimpleField[]) {
      if (matchingFields.length > 0) {
        this.sb.push(`set${setterType}(name: string, value: ${setterValueType}): void {`);
        matchingFields.forEach(field => {
          // tslint:disable-next-line: as-variables
          let fieldTypeName = this.typeName(field.type);
          if (setterType == "string" && fieldTypeName != "string") {
            if (fieldTypeName == "Uint8Array") {
              this.sb.push(`if (name == "${field.name}") {
                ${valuePrefix}${field.name} = base64.decode(value);
                return;
              }`);
            } else if (fieldTypeName == "u128") {
              this.sb.push(`if (name == "${field.name}") {
                ${valuePrefix}${field.name} = u128.fromString(value);
                return;
              }`);
            } else {
              let className = this.typeName(field.type) === "u64" ? "U64" : "I64";
              this.sb.push(`if (name == "${field.name}") {
                ${valuePrefix}${field.name} = ${className}.parseInt(value);
                return;
              }`);
            }
          } else {
            this.sb.push(`if (name == "${field.name}") {
              ${valuePrefix}${field.name} = <${fieldTypeName}>value;
              return;
            }`);
          }
        });
        this.sb.push(`
          super.set${setterType}(name, value);
        }`);
      }
    }

    private generatePushHandler(valuePrefix: string, fields: SimpleField[]) {
      fields.forEach((field) => {
        if (!(this.typeName(field.type) in this.typeMapping)) {
          if (this.isArrayType(field.type)) {
            this.sb.push(`if (name == "${field.name}") {
              ${valuePrefix}${field.name} = __near_decode_${this.encodeType(field.type)}(this.buffer, this.decoder.state);
              return false;
            }`);
          } else {
            this.sb.push(`if (name == "${field.name}") {
              ${valuePrefix}${field.name} = ${this.encodeType(field.type)}.decode(this.buffer, this.decoder.state);
              return false;
            }`);
          }
        }
      });
    }

    private generateArrayHandlerMethods(valuePrefix: string, fieldType: TypeNode) : void {
      var fieldTypeName = this.typeName(fieldType);
      var setterTypeName = this.typeMapping[fieldTypeName];
      if (setterTypeName) {
        if (fieldTypeName == "u64" || fieldTypeName == "i64") {
          let className = fieldTypeName == "u64" ? "U64" : "I64";
          this.sb.push(`setString(name: string, value: string): void {
            ${valuePrefix}.push(${className}.parseInt(value));
          }`);
        } else if (fieldTypeName == "Uint8Array") {
          this.sb.push(`setString(name: string, value: string): void {
            ${valuePrefix}.push(base64.decode(value));
          }`);
        } else {
          let valueType = fieldTypeName;
          if (valueType == "u32" || valueType == "i32") {
            valueType = "i64";
          }
          this.sb.push(`set${setterTypeName}(name: string, value: ${valueType}): void {
            ${valuePrefix}.push(<${fieldTypeName}>value);
          }`);
        }
        this.sb.push(`setNull(name: string): void {
          ${valuePrefix}.push(<${fieldTypeName}>null);
        }
        pushArray(name: string): bool {
          assert((name == null || name.length == 0) && !this.handledRoot);
          this.handledRoot = true;
          return true;
        }`);
      } else {
        this.sb.push(`pushObject(name: string): bool {
          ${valuePrefix}.push(__near_decode_${this.encodeType(fieldType)}(this.buffer, this.decoder.state));
          return false;
        }
        pushArray(name: string): bool {
          assert(name == null || name.length == 0);
          if (!this.handledRoot) {
            this.handledRoot = true;
            return true;
          }
          ${valuePrefix}.push(__near_decode_${this.encodeType(fieldType)}(this.buffer, this.decoder.state));
          return false;
        }`);
      }
    }

    private generateEncodeFunction(type: TypeNode | ClassDeclaration) {
      if (type instanceof TypeNode && !isReference(type)) {
        return;
      }
      let typeName = this.typeName(type);
      let encodedTypeName = this.encodeType(typeName);
      if (this.generatedEncodeFunctions.has(encodedTypeName) || typeName in this.typeMapping) {
        return;
      }
      this.generatedEncodeFunctions.add(encodedTypeName);

      // let methodName = `__near_encode_${encodedTypeName}`;
      // if (this.tryUsingImport(type, methodName)) {
      //   return;
      // }

      if (this.isArrayType(type)) {
        let arrayType = (<NamedTypeNode>type);
        let typeArg = arrayType.typeArguments![0];
        // Array
        if (this.isArrayType(typeArg)) {
          this.generateEncodeFunction(typeArg);
        }

        this.sb.push(`@global
        export function __near_encode_${encodedTypeName}(
            value: ${typeName},
            encoder: JSONEncoder): void {`);
        this.sb.push(`for (let i = 0; i < value.length; i++) {`);
        this.generateFieldEncoder(arrayType.typeArguments![0], "null", "value[i]");
        this.sb.push("}");

      } else {
        // Object
        this.getFields(type).forEach(field => {
          this.generateEncodeFunction(field.type);
        });

        this.sb.push(`@global
        export function __near_encode_${encodedTypeName}(
            value: ${typeName},
            encoder: JSONEncoder): void {`);
        this.getFields(type).forEach(field => {
          let fieldType = field.type;
          let fieldName = field.name;
          let sourceExpr = `value.${fieldName}`;
          this.generateFieldEncoder(fieldType, `"${fieldName}"`, sourceExpr);
        });
      }

      this.sb.push("}");
      let className = this.typeName(type);
      // this.classInjections.set(type.classReference.name, injections);
    }

    // private tryUsingImport(type: Type, methodName: string): bool {
    //   let sourcesWithExport = this.program.sources.filter(source =>
    //     this.getExports(source).filter(d => d.name.text == methodName).length > 0);

    //   if (sourcesWithExport.length == 0) {
    //     return false;
    //   }

    //   if (sourcesWithExport.length > 1) {
    //     // tslint:disable-next-line: deprecation
    //     console.log(`WARN: more than one file exporting ${methodName}: ${sourcesWithExport.map(s => s.normalizedPath)}`);
    //   }
    //   let importPath = sourcesWithExport[0].normalizedPath.replace(".ts", "");
    //   this.sb.push(`import { ${methodName} } from "./${importPath}";`);
    //   return true;
    // }

    private generateHandler(type: TypeNode | ClassDeclaration) {
      let typeName = this.encodeType(type);
      this.sb.push(`export class __near_JSONHandler_${typeName} extends ThrowingJSONHandler {
        buffer: Uint8Array;
        decoder: JSONDecoder<__near_JSONHandler_${typeName}>;
        handledRoot: boolean = false;
        value: ${this.typeName(type)};

        constructor(value_: ${this.typeName(type)}) {
          super();
          this.value = value_;
        }
      `);
      if (this.isArrayType(type)) {
        this.generateArrayHandlerMethods("this.value", (<NamedTypeNode>type).typeArguments![0]);
      } else {
        this.generateHandlerMethods("this.value.", this.getFields(type));
      }
      this.sb.push("}\n");
    }

    private encodeType(type: TypeNode | ClassDeclaration | string) : string {
        let str = (typeof type === "string") ? type : this.typeName(type);
        return str
        //@ts-ignore
        .replace(/_/g, "__")
        .replace(/>/g, "")
        .replace(/</g, "_");
    }

    private typeName(type: TypeNode | ClassDeclaration): string {
      if (type instanceof TypeNode){
        return ASTBuilder.build(type);
      }
      let className = toString(type.name);
      if (type.isGeneric) {
        className += "<" + type.typeParameters!.map(toString).join(", ") + ">";
      }
      return className;
    }

    private generateDecodeFunction(type: TypeNode | ClassDeclaration) {
      if (type instanceof TypeNode && !isReference(type)) {
        return;
      }

      var typeName = this.typeName(type);
      var encodedTypeName = this.encodeType(typeName);
      if (this.generatedDecodeFunctions.has(encodedTypeName) || typeName in this.typeMapping) {
        return;
      }
      this.generatedDecodeFunctions.add(encodedTypeName);

      // var methodName = `__near_decode_${encodedTypeName}`;
      // if (this.tryUsingImport(type, methodName)) {
      //   return;
      // }
      this.generateHandler(type);
      if (this.isArrayType(type)) {
        assert (type instanceof NamedTypeNode);
        // Array
        this.generateDecodeFunction((<NamedTypeNode>type).typeArguments![0]);
    } else {
        // Object
        this.getFields(type).forEach(field => {
            this.generateDecodeFunction(field.type!);
        });
    }

      this.sb.push(`@global
      export function __near_decode_${encodedTypeName}(
          buffer: Uint8Array, state: DecoderState | null, value: ${typeName} = null):${typeName} {
        if (value == null) {
          value = new ${typeName}();
        }
        let handler = new __near_JSONHandler_${encodedTypeName}(value);
        handler.buffer = buffer;
        handler.decoder = new JSONDecoder<__near_JSONHandler_${encodedTypeName}>(handler);
        handler.decoder.deserialize(buffer, state);
        return value;
      }\n`);
    }

    private generateFieldEncoder(fieldType: TypeNode, fieldExpr: string, sourceExpr: string) {
      var fieldTypeName = this.typeName(fieldType);
      var setterType = this.typeMapping[fieldTypeName];
      if (!setterType) {
        // Object / array
        let pushType = this.isArrayType(fieldType) ? "Array" : "Object";
        if (this.isArrayType(fieldType)){
          this.sb.push(`if (${sourceExpr} != null) {
              encoder.push${pushType}(${fieldExpr});
              __near_encode_${this.encodeType(fieldType)}(${sourceExpr}, encoder);
              encoder.pop${pushType}();
            } else {
              encoder.setNull(${fieldExpr});
            }`);
          }else {
            this.sb.push(`if (${sourceExpr} != null) {
              ${sourceExpr}.encode(encoder);
            } else {
              encoder.setNull(${fieldExpr});
            }`);
        }
      } else {
        // Basic types
        if (this.nonNullableTypes.indexOf(fieldTypeName) != -1) {
          if (["i64", "u64"].indexOf(fieldTypeName) != -1) {
            this.sb.push(`encoder.set${setterType}(${fieldExpr}, ${sourceExpr}.toString());`);
          } else {
            this.sb.push(`encoder.set${setterType}(${fieldExpr}, ${sourceExpr});`);
          }
        } else if (fieldTypeName == "Uint8Array") {
          this.sb.push(`if (${sourceExpr} != null) {
              encoder.setString(${fieldExpr}, base64.encode(${sourceExpr}));
            } else {
              encoder.setNull(${fieldExpr});
            };`);
        } else if (fieldTypeName == "u128") {
          this.sb.push(`if (${sourceExpr} != null) {
              encoder.setString(${fieldExpr}, ${sourceExpr}.toString());
            } else {
              encoder.setNull(${fieldExpr});
            };`);
        } else {
          this.sb.push(`if (${sourceExpr} != null) {
              encoder.set${setterType}(${fieldExpr}, ${sourceExpr});
            } else {
              encoder.setNull(${fieldExpr});
            }`);
        }
      }
    }

    private isArrayType(type: TypeNode | ClassDeclaration): boolean {
      return !!(type instanceof NamedTypeNode
              && toString(type).startsWith("Array") && type.typeArguments && type.typeArguments.length > 0);

    }

    private getFields(type: TypeNode | ClassDeclaration): SimpleField[] {
      let _class = type instanceof ClassDeclaration ? type : this.exportedClasses.get(toString(type));
      if (_class == null) {
        return [];
      }

      return _class.members.filter(member => member instanceof FieldDeclaration).map((param: FieldDeclaration): SimpleField => {
          return { name: toString(param.name), type: param.type! };
        });
    }

    build(sources: Source[]): void {
      let classDeclarations: Map<Source,ClassDeclaration[]> = new Map();
      let funcDeclarations: Map<Source, FunctionDeclaration[]> = new Map();
      sources.forEach(source => {
        classDeclarations.set(source, []);
        funcDeclarations.set(source, []);
        source.statements.forEach(stmt => {
          if (stmt instanceof ClassDeclaration) classDeclarations.get(source)!.push(stmt);
          if (stmt instanceof FunctionDeclaration && (stmt.is(CommonFlags.EXPORT) || stmt.is(CommonFlags.MODULE_EXPORT))) {
            funcDeclarations.get(source)!.push(stmt);
          }
        });
      });


      let funcsToWrap: FunctionDeclaration[] = [];


      let funcRename = (node: Node): Node  => {
        if (!(node instanceof FunctionDeclaration)) return node;
        if (!(node.is(CommonFlags.MODULE_EXPORT) || node.is(CommonFlags.EXPORT))) return node;
        node.flags = node.is(CommonFlags.MODULE_EXPORT) ? node.flags ^ CommonFlags.MODULE_EXPORT : node.flags ^ CommonFlags.EXPORT;
        node.name.symbol = "wrapped_" + node.name.symbol;
        node.name.text = "wrapped_" + node.name.text;
        return node;
      };

      let newSource = (source: Source): string => { 
        this.sb = [`import { storage, near, base64, return_value } from "near-runtime-ts";
import { JSONEncoder } from "assemblyscript-json";
import { JSONDecoder, ThrowingJSONHandler, DecoderState } from "assemblyscript-json";`];
        funcDeclarations.get(source)!.forEach(func => {
          this.generateArgsParser(func);
          this.generateWrapperFunction(func);
        });
        classDeclarations.get(source)!.forEach(_class => {
          this.generateDecodeFunction(_class);
          this.generateEncodeFunction(_class);
        });
          let sourceText = source.statements.map(stmt =>{
            let str = ASTBuilder.build(stmt, funcRename);
            if (stmt instanceof ClassDeclaration) {
              str = str.slice(0, str.lastIndexOf("}"));
              let className = toString(stmt.name);
              str += `
  static decode(json: Uint8Array, state: DecoderState | null = null): ${className} {
    let value = new ${className}();
    value.decode(json, state);
    return value;
  }

  decode(json: Uint8Array, state: DecoderState | null): ${className} {
    __near_decode_${className}(json, state, this);
    return this;
  }

  private _encoder(encoder: JSONEncoder): JSONEncoder {
    encoder.pushObject("");
    __near_encode_${className}(this, encoder);
    encoder.popObject();
    return encoder;
  }

  encode(_encoder: JSONEncoder | null = null): JSONEncoder {
    let encoder = _encoder != null ? _encoder : new JSONEncoder();
    return this._encoder(encoder!)
  }

  serialize(): Uint8Array {
    return this.encode().serialize();
  }

  toString(): string {
    return this._encoder().toString();
  }
}`;
            }
            return str;
          });

        return this.sb.concat(sourceText).join("\n");
      }
      sources.forEach(source => {
        this.parser.donelog.delete(source.internalPath);
        this.parser.seenlog.delete(source.internalPath);
        this.parser.program.sources = this.parser.program.sources.filter(_source => _source !== source);
        let sourceText = newSource(source);
        this.parser.parseFile(sourceText, (source.isEntry ? "" : "./") + source.normalizedPath, source.isEntry);
        console.log(source.normalizedPath +"-----");
        console.log(sourceText);
      })

      debugger;

  //     this.copyImports(source);
  //     // this.visitFile(file);

  //     this.exportedClasses.forEach(c => {
  //       this.generateEncodeFunction(c.);
  //       this.generateDecodeFunction(c.type);
  //     });

  //     let allExported = <Element[]>this.exportedFunctions.filter(e => e.is(CommonFlags.MODULE_EXPORT));
  //     let allImportsStr = allExported.map(c => `${c.name} as wrapped_${c.name}`).join(", ");
  //     // let preamble = this.nearFile.split("/").length > 1 ? ".." : ".";

  //     this.sb = [`import { storage, near, base64, return_value } from "near-runtime-ts";
  // import { JSONEncoder } from "assemblyscript-json";
  // import { JSONDecoder, ThrowingJSONHandler, DecoderState } from "assemblyscript-json";
  // `,
  // // allImportsStr.length > 0 ? `import {${allImportsStr}} from "${preamble}/${source.normalizedPath.replace(".ts", "")}";`  : ""
  //     ].concat(this.sb);

  //     for (let [key, value] of this.classRanges) {
  //       let injections = this.classInjections.get(key);
  //       if (injections) {
  //         let str = value.toString();
  //         let bracketIndex = str.lastIndexOf("}");
  //         let classText = str.substring(0, bracketIndex) + `\n${injections}\n}`;
  //         this.sb.push(classText);
  //       }
  //     }
  //     var sourceText = this.sb.join("\n");
  //     this.parser.parseFile(sourceText, source.normalizedPath, source.isEntry);
    }

    private copyImports(mainSource: Source): void {
      this.getImports(mainSource).forEach(statement => {
        if (statement.declarations) {
          let declarationsStr = statement.declarations!
            .map(declaration => `${declaration.foreignName.text} as ${declaration.name.text}`)
            .join(",");
          this.sb.push(`import {${declarationsStr}} from "${statement.path.value}";`);
        }
      });
    }

    private getImports(source: Source): ImportStatement[] {
      return <ImportStatement[]>source.statements
        .filter(statement => statement.kind == NodeKind.IMPORT);
    }

    private getExports(source: Source): DeclarationStatement[] {
      let declarations = <DeclarationStatement[]>source.statements
        .filter(statement =>
          statement.kind == NodeKind.FUNCTIONDECLARATION ||
          statement.kind == NodeKind.CLASSDECLARATION);
      return declarations.filter(d => d.is(CommonFlags.EXPORT));
    }
  }

export function afterParse(parser: Parser): void {
  let files = NEARBindingsBuilder.nearFiles(parser);
  NEARBindingsBuilder.build(parser, files);
  

}
