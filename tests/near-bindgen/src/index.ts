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
  Statement
} from "assemblyscript";
import { Transformer } from "./transformer";

interface SimpleField {
    name: string;
    type: TypeNode;
}

function isComment(stmt: Statement): boolean {
  return stmt.kind == NodeKind.COMMENT;
}

function hasNearDecorator(stmt: Statement): boolean {
  return (<CommentNode>stmt).text.trim().startsWith("@nearfile");
}

// TODO: Extract this into separate module, preferrable pluggable
class NEARBindingsBuilder extends Transformer {
    private typeMapping: { [key: string]: string } = {
      "i32": "Integer",
      "u32": "Integer",
      "i64": "String",
      "u64": "String",
      "String": "String",
      "bool": "Boolean",
      "Uint8Array": "String",
      "u128": "String"
    };

    private nonNullableTypes = ["i32", "u32", "i64", "u64", "bool"];

    private sb: string[] = [];
    private generatedEncodeFunctions = new Set<string>();
    private generatedDecodeFunctions = new Set<string>();
    private exportedClasses: (ClassDeclaration)[] = [];
    private exportedFunctions: Function[] = [];
    classInjections = new Map<string, string>();
    classRanges = new Map<string, Range>();

    static build(parser: Parser, source: Source): void {
      new NEARBindingsBuilder(parser).build(source);
    }

    constructor(parser: Parser) {
      super(parser);
    }

    static nearFiles(parser: Parser): Source[] {
      let sources = parser.program.sources.filter(source => !source.normalizedPath.startsWith("~"));
      return sources.filter(source => source.statements.filter(isComment).some(hasNearDecorator));
    }

    walk(): void {
    }

    // visitClassDeclaration(node: ClassDeclaration): void {
    //   this.classRanges(node.name, node.range);
    //   if (!node.is(CommonFlags.MODULE_EXPORT)){
    //     return;
    //   }
    //   this.exportedClasses.push(node);
    // }

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

    

    // private generateArgsParser(element: FunctionDeclaration): void {
    //   var signature = element.signature;
    //   var fields: SimpleField[] = signature.parameters.map((param) => {
    //     return { name: param.name, type: param.type };
    //   }) : [];
    //   fields.forEach(field => this.generateDecodeFunction(field.type));
    //   this.sb.push(`export class __near_ArgsParser_${element.name} extends ThrowingJSONHandler {
    //       buffer: Uint8Array;
    //       decoder: JSONDecoder<__near_ArgsParser_${element.name}>;
    //       handledRoot: boolean = false;
    //     `);
    //   if (signature.parameterNames) {
    //     fields.forEach((field) => {
    //       this.sb.push(`__near_param_${field.name}: ${this.typeName(field.type)};`);
    //     });
    //     this.generateHandlerMethods("this.__near_param_", fields);
    //   } else {
    //     this.generateHandlerMethods("this.__near_param_", []);
    //   }
    //   this.sb.push(`}`);
    // }

    // private generateWrapperFunction(element: FunctionDeclaration) {
    //   let signature = element.signature;
    //   let params = signature.parameters;
    //   let returnType = signature.returnType;
    //   this.generateEncodeFunction(returnType);
    //   let name = element.name.symbol;
    //   this.sb.push(`export function ${name}(): void {
    //     // Reading input bytes.
    //     let json = storage._internalReadBytes(4, 0, 0)!;
    //     let handler = new __near_ArgsParser_${name}();
    //     handler.buffer = json;
    //     handler.decoder = new JSONDecoder<__near_ArgsParser_${name}>(handler);
    //     handler.decoder.deserialize(json);`);
    //   if (returnType.toString() !== "void") {
    //     this.sb.push(`let result = wrapped_${name}(`);
    //   } else {
    //     this.sb.push(`wrapped_${name}(`);
    //   }
    //   if (params.length > 0) {
    //     this.sb.push(params.map(paramName => `handler.__near_param_${paramName.name.symbol}`).join(","));
    //   }
    //   this.sb.push(");");
    //   if (returnType.toString() !== "void") {
    //     this.sb.push(`
    //       let encoder = new JSONEncoder();
    //     `);
    //     this.generateFieldEncoder(returnType, "null", "result");
    //     this.sb.push(`
    //       let val = encoder.serialize();
    //       return_value(val.byteLength, <usize>val.buffer);
    //     `);
    //   }
    //   this.sb.push(`}`);
    // }

    // private generateHandlerMethods(valuePrefix: string, fields: SimpleField[]) : void {
    //   var fieldsWithTypes = (types: string[]): SimpleField[] =>
    //     fields.filter(field => types.indexOf(this.typeName(field.type)) != -1);

    //   this.generateBasicSetterHandlers(valuePrefix, "Integer", "i64", fieldsWithTypes(["i32", "u32"]));
    //   this.generateBasicSetterHandlers(valuePrefix, "String", "String", fieldsWithTypes(["String", "i64", "u64", "Uint8Array", "u128"]));
    //   this.generateBasicSetterHandlers(valuePrefix, "Boolean", "bool", fieldsWithTypes(["bool"]));

    //   this.sb.push("setNull(name: string): void {");
    //   fields.forEach((field) => {
    //     this.sb.push(`if (name == "${field.name}") {
    //       ${valuePrefix}${field.name} = <${this.typeName(field.type)}>null;
    //       return;
    //     }`);
    //   });
    //   this.sb.push(`
    //     super.setNull(name);
    //   }`);

    //   var nonBasicFields = fields.filter(field => field.type.classReference != null);
    //   this.sb.push(`
    //     pushObject(name: string): bool {`);
    //   this.sb.push(`if (!this.handledRoot) {
    //     assert(name == null || name.length == 0);
    //     this.handledRoot = true;
    //     return true;
    //   } else {
    //     assert(name != null || name.length != 0);
    //   }`);
    //   this.generatePushHandler(valuePrefix, nonBasicFields.filter(field => !this.isArrayType(field.type)));
    //   this.sb.push(`
    //       return super.pushObject(name);
    //     }`);
    //   this.sb.push(`
    //     pushArray(name: string): bool {`);
    //   this.generatePushHandler(valuePrefix, nonBasicFields.filter(field => this.isArrayType(field.type)));
    //   this.sb.push(`
    //       return super.pushArray(name);
    //     }`);
    // }

    // private generateBasicSetterHandlers(valuePrefix: string, setterType: string, setterValueType: string, matchingFields: SimpleField[]) {
    //   if (matchingFields.length > 0) {
    //     this.sb.push(`set${setterType}(name: string, value: ${setterValueType}): void {`);
    //     matchingFields.forEach(field => {
    //       // tslint:disable-next-line: as-variables
    //       let fieldTypeName = this.typeName(field.type);
    //       if (setterType == "String" && fieldTypeName != "String") {
    //         if (fieldTypeName == "Uint8Array") {
    //           this.sb.push(`if (name == "${field.name}") {
    //             ${valuePrefix}${field.name} = base64.decode(value);
    //             return;
    //           }`);
    //         } else if (fieldTypeName == "u128") {
    //           this.sb.push(`if (name == "${field.name}") {
    //             ${valuePrefix}${field.name} = u128.fromString(value);
    //             return;
    //           }`);
    //         } else {
    //           let className = field.type.kind == TypeKind.U64 ? "U64" : "I64";
    //           this.sb.push(`if (name == "${field.name}") {
    //             ${valuePrefix}${field.name} = ${className}.parseInt(value);
    //             return;
    //           }`);
    //         }
    //       } else {
    //         this.sb.push(`if (name == "${field.name}") {
    //           ${valuePrefix}${field.name} = <${fieldTypeName}>value;
    //           return;
    //         }`);
    //       }
    //     });
    //     this.sb.push(`
    //       super.set${setterType}(name, value);
    //     }`);
    //   }
    // }

    // private generatePushHandler(valuePrefix: string, fields: SimpleField[]) {
    //   fields.forEach((field) => {
    //     if (!(this.typeName(field.type) in this.typeMapping)) {
    //       this.sb.push(`if (name == "${field.name}") {
    //         ${valuePrefix}${field.name} = __near_decode_${this.encodeType(field.type)}(this.buffer, this.decoder.state);
    //         return false;
    //       }`);
    //     }
    //   });
    // }

    // private generateArrayHandlerMethods(valuePrefix: string, fieldType: TypeNode) : void {
    //   var fieldTypeName = this.typeName(fieldType);
    //   var setterTypeName = this.typeMapping[fieldTypeName];
    //   if (setterTypeName) {
    //     if (fieldTypeName == "u64" || fieldTypeName == "i64") {
    //       let className = fieldTypeName == "u64" ? "U64" : "I64";
    //       this.sb.push(`setString(name: string, value: string): void {
    //         ${valuePrefix}.push(${className}.parseInt(value));
    //       }`);
    //     } else if (fieldTypeName == "Uint8Array") {
    //       this.sb.push(`setString(name: string, value: string): void {
    //         ${valuePrefix}.push(base64.decode(value));
    //       }`);
    //     } else {
    //       let valueType = fieldTypeName;
    //       if (valueType == "u32" || valueType == "i32") {
    //         valueType = "i64";
    //       }
    //       this.sb.push(`set${setterTypeName}(name: string, value: ${valueType}): void {
    //         ${valuePrefix}.push(<${fieldTypeName}>value);
    //       }`);
    //     }
    //     this.sb.push(`setNull(name: string): void {
    //       ${valuePrefix}.push(<${fieldTypeName}>null);
    //     }
    //     pushArray(name: string): bool {
    //       assert((name == null || name.length == 0) && !this.handledRoot);
    //       this.handledRoot = true;
    //       return true;
    //     }`);
    //   } else {
    //     this.sb.push(`pushObject(name: string): bool {
    //       ${valuePrefix}.push(__near_decode_${this.encodeType(fieldType)}(this.buffer, this.decoder.state));
    //       return false;
    //     }
    //     pushArray(name: string): bool {
    //       assert(name == null || name.length == 0);
    //       if (!this.handledRoot) {
    //         this.handledRoot = true;
    //         return true;
    //       }
    //       ${valuePrefix}.push(__near_decode_${this.encodeType(fieldType)}(this.buffer, this.decoder.state));
    //       return false;
    //     }`);
    //   }
    // }

    // private generateEncodeFunction(node: ClassDeclaration) {
    //   if (!node) {
    //     return;
    //   }
    //   let typeName = node.name.symbol + (node.typeParameters ? + "<" + node.typeParameters.map(node => node.name.symbol).join(",") + ">" : "");
    //   let encodedTypeName = this.encodeType(typeName);
    //   if (this.generatedEncodeFunctions.has(encodedTypeName) || typeName in this.typeMapping) {
    //     return;
    //   }
    //   this.generatedEncodeFunctions.add(encodedTypeName);

    //   let methodName = `__near_encode_${encodedTypeName}`;
    //   if (this.tryUsingImport(type, methodName)) {
    //     return;
    //   }

    //   if (this.isArrayType(type)) {
    //     // Array
    //     this.generateEncodeFunction(type.classReference.typeArguments![0]);

    //     this.sb.push(`export function __near_encode_${encodedTypeName}(
    //         value: ${typeName},
    //         encoder: JSONEncoder): void {`);
    //     this.sb.push(`for (let i = 0; i < value.length; i++) {`);
    //     this.generateFieldEncoder(type.classReference.typeArguments![0], "null", "value[i]");
    //     this.sb.push("}");

    //   } else {
    //     // Object
    //     this.getFields(type.classReference).forEach(field => {
    //       this.generateEncodeFunction(field.type);
    //     });

    //     this.sb.push(`export function __near_encode_${encodedTypeName}(
    //         value: ${typeName},
    //         encoder: JSONEncoder): void {`);
    //     this.getFields(type.classReference).forEach(field => {
    //       let fieldType = field.type;
    //       let fieldName = field.name;
    //       let sourceExpr = `value.${fieldName}`;
    //       this.generateFieldEncoder(fieldType, `"${fieldName}"`, sourceExpr);
    //     });
    //   }

    //   this.sb.push("}");
    //   let className = this.typeName(type);

    //   let injections = `
    //       static decode(json: Uint8Array): ${className} {
    //         let value = new ${className}();
    //         value.decode(json);
    //         return value;
    //       }

    //       decode(json: Uint8Array): ${className} {
    //         __near_decode_${typeName}(json, null, this);
    //         return this;
    //       }

    //       private _encoder(): JSONEncoder {
    //         let encoder: JSONEncoder = new JSONEncoder();
    //         encoder.pushObject("");
    //         __near_encode_${typeName}(this, encoder);
    //         encoder.popObject();
    //         return encoder;
    //       }

    //       encode(): Uint8Array {
    //         return this._encoder().serialize();
    //       }

    //       toString(): string {
    //         return this._encoder().toString();
    //       }
    //     `;
    //   this.classInjections.set(type.classReference.name, injections);
    // }

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

    // private generateHandler(type: TypeNode) {
    //   let typeName = this.encodeType(type);
    //   this.sb.push(`export class __near_JSONHandler_${typeName} extends ThrowingJSONHandler {
    //     buffer: Uint8Array;
    //     decoder: JSONDecoder<__near_JSONHandler_${typeName}>;
    //     handledRoot: boolean = false;
    //     value: ${this.typeName(type)};

    //     constructor(value_: ${this.typeName(type)}) {
    //       super();
    //       this.value = value_;
    //     }
    //   `);
    //   if (this.isArrayType(type)) {
    //     this.generateArrayHandlerMethods("this.value", type.classReference!.typeArguments![0]);
    //   } else {
    //     this.generateHandlerMethods("this.value.", this.getFields(type.classReference!));
    //   }
    //   this.sb.push("}\n");
    // }

    // private encodeType(type: TypeNode| string) : string {
    //     let str = (type instanceof TypeNode) ? this.typeName(type) : type;
    //     return str
    //     //@ts-ignore
    //     .replace(/_/g, "__")
    //     .replace(/>/g, "")
    //     .replace(/</g, "_");
    // }

    // private typeName(type: TypeNode): string {
    //   if (!type.isNullable) {
    //     return type.toString();
    //   }
    //   return type.toString();
    //   // var cls = type.classReference;
    //   // if (cls.typeArguments && cls.typeArguments.length > 0) {
    //   //   return cls.prototype.name + "<" +
    //   //     cls.typeArguments.map(argType => this.typeName(argType)).join(", ") +
    //   //     ">";
    //   // }
    //   // return cls.prototype.name;
    // }

    // private generateDecodeFunction(type: TypeNode) {
    //   if (!type.isNullable) {
    //     return;
    //   }

    //   var encodedTypeName = this.encodeType(type);
    //   var typeName = this.typeName(type);
    //   if (this.generatedDecodeFunctions.has(encodedTypeName) || typeName in this.typeMapping) {
    //     return;
    //   }
    //   this.generatedDecodeFunctions.add(encodedTypeName);

    //   var methodName = `__near_decode_${encodedTypeName}`;
    //   if (this.tryUsingImport(type, methodName)) {
    //     return;
    //   }

    //   this.generateHandler(type);
    //   if (this.isArrayType(type)) {
    //     // Array
    //     this.generateDecodeFunction(type.classReference.typeArguments![0]);
    // } else {
    //     // Object
    //     this.getFields(type.classReference).forEach(field => {
    //         this.generateDecodeFunction(field.type);
    //     });
    // }

    //   this.sb.push(`export function __near_decode_${encodedTypeName}(
    //       buffer: Uint8Array, state: DecoderState, value: ${typeName} = null):${typeName} {
    //     if (value == null) {
    //       value = new ${typeName}();
    //     }
    //     let handler = new __near_JSONHandler_${encodedTypeName}(value);
    //     handler.buffer = buffer;
    //     handler.decoder = new JSONDecoder<__near_JSONHandler_${encodedTypeName}>(handler);
    //     handler.decoder.deserialize(buffer, state);
    //     return value;
    //   }\n`);
    // }

    // private generateFieldEncoder(fieldType: TypeNode, fieldExpr: string, sourceExpr: string) {
    //   var fieldTypeName = this.typeName(fieldType);
    //   var setterType = this.typeMapping[fieldTypeName];
    //   if (!setterType) {
    //     // Object / array
    //     let pushType = this.isArrayType(fieldType) ? "Array" : "Object";
    //     this.sb.push(`if (${sourceExpr} != null) {
    //         encoder.push${pushType}(${fieldExpr});
    //         __near_encode_${this.encodeType(fieldType)}(${sourceExpr}, encoder);
    //         encoder.pop${pushType}();
    //       } else {
    //         encoder.setNull(${fieldExpr});
    //       }`);
    //   } else {
    //     // Basic types
    //     if (this.nonNullableTypes.indexOf(fieldTypeName) != -1) {
    //       if (["i64", "u64"].indexOf(fieldTypeName) != -1) {
    //         this.sb.push(`encoder.set${setterType}(${fieldExpr}, ${sourceExpr}.toString());`);
    //       } else {
    //         this.sb.push(`encoder.set${setterType}(${fieldExpr}, ${sourceExpr});`);
    //       }
    //     } else if (fieldTypeName == "Uint8Array") {
    //       this.sb.push(`if (${sourceExpr} != null) {
    //           encoder.setString(${fieldExpr}, base64.encode(${sourceExpr}));
    //         } else {
    //           encoder.setNull(${fieldExpr});
    //         };`);
    //     } else if (fieldTypeName == "u128") {
    //       this.sb.push(`if (${sourceExpr} != null) {
    //           encoder.setString(${fieldExpr}, ${sourceExpr}.toString());
    //         } else {
    //           encoder.setNull(${fieldExpr});
    //         };`);
    //     } else {
    //       this.sb.push(`if (${sourceExpr} != null) {
    //           encoder.set${setterType}(${fieldExpr}, ${sourceExpr});
    //         } else {
    //           encoder.setNull(${fieldExpr});
    //         }`);
    //     }
    //   }
    // }

    // private isArrayType(type: TypeNode): bool {
    //   return !!(type.isNullable && type.toString().startsWith("Array") && type);
    // }

    // private getFields(element: ClassDeclaration): FieldDeclaration[] {
    //   if (element.members.length == 0) {
    //     return [];
    //   }

    //   return <FieldDeclaration[]> element.members.filter(member => member instanceof FieldDeclaration);
    // }

    build(source: Source): void {
      this.parser.donelog.delete(source.normalizedPath);
      this.parser.seenlog.delete(source.normalizedPath);

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
  debugger;
  let files = NEARBindingsBuilder.nearFiles(parser);
  files.forEach(file => {
    NEARBindingsBuilder.build(parser, file);
  });
}
