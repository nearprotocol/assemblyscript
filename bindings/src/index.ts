// tslint:disable: no-void-expression as-types as-variables
import {
  Source,
  NodeKind,
  ClassDeclaration,
  FunctionDeclaration,
  TypeNode,
  FieldDeclaration,
  Statement,
  Node,
  NamedTypeNode,
  SourceKind,
  DeclarationStatement
} from "../../src/ast";
import { CommonFlags } from "../../src/common";
import { Parser } from "./mockTypes";

import { ASTBuilder } from "./sourceBuilder";
import { BaseVisitor } from "./base";
import { preamble } from "./preamble";

interface SimpleField {
  name: string;
  type: TypeNode;
  isGeneric: boolean;
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

function isEntry(source: Source | Node): boolean {
  let _source = <Source>((source.kind == NodeKind.SOURCE) ? source : source.range.source);
  return _source.sourceKind == SourceKind.USER_ENTRY;
}

function isArrayType(type: TypeNode | ClassDeclaration): boolean {
  return !!(
    (type.kind == NodeKind.NAMEDTYPE) &&
    toString(type).startsWith("Array") &&
    (<NamedTypeNode>type).typeArguments &&
    (<NamedTypeNode>type).typeArguments!.length > 0
  );
}

function isClass(type: Node): boolean {
  return type.kind == NodeKind.CLASSDECLARATION;
}

function isField(mem: DeclarationStatement){
  return mem.kind == NodeKind.FIELDDECLARATION;
}

function isReference(type: TypeNode): boolean {
  let simpleTypes = [
    "i32",
    "u32",
    "string",
    "bool",
    "i64",
    "u64",
    "Uint8Array",
    "u128",
    "boolean"
  ];
  return !simpleTypes.includes(toString(type));
}

// TODO: Extract this into separate module, preferrable pluggable
class NEARBindingsBuilder extends BaseVisitor {
  private typeMapping: { [key: string]: string } = {
    i32: "Integer",
    u32: "Integer",
    i64: "String",
    u64: "String",
    string: "String",
    bool: "Boolean",
    Uint8Array: "String",
    u128: "String"
  };
  

  private nonNullableTypes = ["i32", "u32", "i64", "u64", "bool", "boolean"];

  private sb: string[] = [];
  static generatedEncodeFunctions = new Set<string>();
  static generatedDecodeFunctions = new Set<string>();
  private exportedClasses: Map<string, ClassDeclaration> = new Map();
  generatedArgParserFunctions: Set<string> = new Set();

  static build(parser: Parser, source: Source): string {
    return (new NEARBindingsBuilder().build(source));
  }

  static nearFiles(parser: Parser): Source[] {
    return parser.program.sources.filter(hasNearDecorator);
  }

  visitClassDeclaration(node: ClassDeclaration): void {
    if (this.exportedClasses.has(toString(node.name))) return;
    this.generateHandler(node);
    // this.generateDecodeFunction(node);
    // this.generateEncodeFunction(node);
    this.exportedClasses.set(toString(node.name), node);
  }

  visitFunctionDeclaration(node: FunctionDeclaration): void {
    if (!(node.is(CommonFlags.EXPORT))) {
      return;
    }
    this.generateArgsParser(node);
    this.generateWrapperFunction(node);
    node.flags = node.flags ^ CommonFlags.EXPORT;
    node.name.symbol = "wrapped_" + node.name.symbol;
    node.name.text = "wrapped_" + node.name.text;
  }

  private generateArgsParser(node: FunctionDeclaration): void {
    var signature = node.signature;
    let name = toString(node.name);
    var args: SimpleField[] = signature.parameters.map(param => {
      let name = toString(param.name);
      let type = param.type;
      return { name,
        type,
        isGeneric: node.typeParameters != null && node.typeParameters.some(T => toString(T) == toString(type))
       };
    });
    // args.filter(arg => isArrayType(arg.type))
    //   .forEach(field => this.generateDecodeFunction(field.type));

    let _export = isEntry(node) ? "" : "export ";
    this.sb.push(`
      ${_export}class __near_ArgsParser_${name} extends ThrowingJSONHandler {
          buffer: Uint8Array;
          decoder: JSONDecoder<__near_ArgsParser_${name}>;
          handledRoot: boolean = false;`);
    if (args.length > 0) {
      args.forEach(arg => {
        this.sb.push(
          `__near_param_${arg.name}: ${this.typeName(arg.type)};`
        );
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
    let name = element.name.symbol;
    this.sb.push(`export function ${name}(): void {
  // Reading input bytes.
  input(0);
  let json_len = register_len(0);
  if (json_len == U32.MAX_VALUE) {
    panic();
  }
  let json = new Uint8Array(json_len as u32);
  read_register(0, <usize>json.buffer);

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
      this.sb.push(
        params
          .map(paramName => `handler.__near_param_${paramName.name.symbol}`)
          .join(",")
      );
    }
    this.sb.push(");");
    if (toString(returnType) !== "void") {
      this.sb.push(`
          let encoder = new JSONEncoder();
          let val = encode<${toString(returnType)}>(encoder, result).serialize();
          value_return(val.byteLength, <usize>val.buffer);
        `);
    }
    this.sb.push(`}`);
  }

  private generateHandlerMethods(
    valuePrefix: string,
    fields: SimpleField[]
  ): void {
    var fieldsWithTypes = (types: string[]): SimpleField[] =>
      fields.filter(field => 
            types.indexOf(this.typeName(field.type)) != -1 || field.isGeneric);

    this.generateBasicSetterHandlers(
      valuePrefix,
      "Integer",
      "i64",
      fieldsWithTypes(["i32", "u32"])
    );
    this.generateBasicSetterHandlers(
      valuePrefix,
      "String",
      "string",
      fieldsWithTypes(["string", "i64", "u64", "Uint8Array", "u128"])
    );
    this.generateBasicSetterHandlers(
      valuePrefix,
      "Boolean",
      "bool",
      fieldsWithTypes(["bool"])
    );

    var nonBasicFields = fields.filter(field => isReference(field.type) || field.isGeneric);

    this.sb.push("setNull(name: string): void {");
    nonBasicFields.forEach(field => {
      this.sb.push(
`      if (name == "${field.name}") {`);
      let setter = `${valuePrefix}${field.name} = <${this.typeName(field.type)}>null`;
      if (field.isGeneric) {
        this.sb.push(
`         if (isNullable<${this.typeName(field.type)}>()){
             ${setter}
             return;
          }`);
        }else {
          this.sb.push(
`         ${setter}
           return;`);
        }
      this.sb.push(
`      }`);
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
    this.generatePushHandler(
      valuePrefix,
      nonBasicFields.filter(field => !isArrayType(field.type))
    );
    this.sb.push(`
          return super.pushObject(name);
        }`);
    this.sb.push(`
        pushArray(name: string): bool {`);
    this.generatePushHandler(
      valuePrefix,
      nonBasicFields.filter(field => isArrayType(field.type))
    );
    this.sb.push(`
          return super.pushArray(name);
        }`);
  }

  private generateBasicSetterHandlers(
    valuePrefix: string,
    setterType: string,
    setterValueType: string,
    matchingFields: SimpleField[]
  ) {
    if (matchingFields.length > 0) {
      this.sb.push(
        `set${setterType}(name: string, value: ${setterValueType}): void {`
      );
      matchingFields.forEach(field => {
        // tslint:disable-next-line: as-variables
        let fieldTypeName = this.typeName(field.type);
        if (setterType == "String" && fieldTypeName != "string") {
          if (fieldTypeName == "Uint8Array") {
            this.sb.push(`
            if (name == "${field.name}") {
                ${valuePrefix}${field.name} = base64.decode(value);
                return;
              }`);
          } else if (fieldTypeName == "u128") {
            this.sb.push(`
            if (name == "${field.name}") {
                ${valuePrefix}${field.name} = u128.fromString(value);
                return;
              }`);
          } else {
            let className = this.typeName(field.type) === "u64" ? "U64" : "I64";
            this.sb.push(`
            if (name == "${field.name}") {
                ${valuePrefix}${field.name} = ${field.isGeneric ? "<" + toString(field.type) + ">" : ""}${className}.parseInt(value);
                return;
              }`);
          }
        } else {
          this.sb.push(
            `if (name == "${field.name}") {
              ${valuePrefix}${field.name} = <${fieldTypeName}>value;
              return;
            }`);
        }
        if (field.isGeneric) {
          this.sb.push(
            `assert(is${setterType}<${fieldTypeName}>(), "${field.name} is not a ${setterType}")`);
        }
      });

      this.sb.push(`
          super.set${setterType}(name, value);
        }`);
    }
  }

  private generatePushHandler(valuePrefix: string, fields: SimpleField[]) {
    fields.forEach(field => {
      if (!(this.typeName(field.type) in this.typeMapping)) {
        let referenceCheck = field.isGeneric ? ` && isReference<${this.typeName(field.type)}>()`: "";
        this.sb.push(
`       if (name == "${field.name}"${referenceCheck}) {
          ${valuePrefix}${field.name} = decode<${toString(field.type)}>(this.buffer, this.decoder.state);
          return false;
        }`);
      }
    });
  }


  private generateHandler(type: TypeNode | ClassDeclaration) {
    if (isArrayType(type)){
      return;
    }
    let typeName = this.typeName(type);
    this.sb
      .push(`export class __near_JSONHandler_${typeName} extends ThrowingJSONHandler {
        buffer: Uint8Array;
        decoder: JSONDecoder<__near_JSONHandler_${typeName}>;
        handledRoot: boolean = false;
        value: ${this.typeName(type)};

        constructor(value_: ${this.typeName(type)}) {
          super();
          this.value = value_;
        }
      `);
    
    this.generateHandlerMethods("this.value.", this.getFields(type));
    
    this.sb.push("}\n");
  }


  private typeName(type: TypeNode | ClassDeclaration): string {
    if (!isClass(type)) {
      return ASTBuilder.build(type);
    }
    type = <ClassDeclaration>(type);
    let className = toString(type.name);
    if (type.isGeneric) {
      className += "<" + type.typeParameters!.map(toString).join(", ") + ">";
    }
    return className;
  }

  // private generateDecodeFunction(type: TypeNode | ClassDeclaration) {
  //   if (!isClass(type) && !isReference(<TypeNode>type)) {
  //     return;
  //   }

  //   var typeName = this.typeName(type);
  //   var encodedTypeName = this.encodeType(typeName);
  //   if (
  //     NEARBindingsBuilder.generatedDecodeFunctions.has(encodedTypeName) ||
  //     typeName in this.typeMapping
  //   ) {
  //     return;
  //   }
  //   NEARBindingsBuilder.generatedDecodeFunctions.add(encodedTypeName);

  //   this.generateHandler(type);
  //   if (isArrayType(type)) {
  //     assert(type.kind == NodeKind.NAMEDTYPE);
  //     let arrayElementType = (<NamedTypeNode>type).typeArguments![0];
  //     // Array
  //     if (isArrayType(arrayElementType) || !isReference(<TypeNode>type)) {
  //       this.generateDecodeFunction(arrayElementType);
  //     }
  //   } else {
  //     // Object
  //     this.getFields(type).forEach(field => {
  //       this.generateDecodeFunction(field.type!);
  //     });
  //   }

  //   this.sb.push(`@global
  //     export function __near_decode_${encodedTypeName}(
  //         buffer: Uint8Array, state: DecoderState | null, value: ${typeName} | null = null):${typeName} {
  //       if (value == null) {
  //         value =  instantiate<${typeName}>(); // Allocate without constructor
  //       }
  //       let handler = new __near_JSONHandler_${encodedTypeName}(value!);
  //       handler.buffer = buffer;
  //       handler.decoder = new JSONDecoder<__near_JSONHandler_${encodedTypeName}>(handler);
  //       handler.decoder.deserialize(buffer, state);
  //       return value!;
  //     }\n`);
  // }

  // private generateFieldEncoder(
  //   fieldType: TypeNode,
  //   fieldExpr: string,
  //   sourceExpr: string
  // ) {
  //   var fieldTypeName = this.typeName(fieldType);
  //   var setterType = this.typeMapping[fieldTypeName];
  //   if (!setterType) {
  //     // Object / array
  //     let pushType = isArrayType(fieldType) ? "Array" : "Object";
  //     if (isArrayType(fieldType)) {
  //       this.sb.push(`if (${sourceExpr} != null) {
  //             encoder.push${pushType}(${fieldExpr});
  //             __near_encode_${this.encodeType(
  //               fieldType
  //             )}(${sourceExpr}, encoder);
  //             encoder.pop${pushType}();
  //           } else {
  //             encoder.setNull(${fieldExpr});
  //           }`);
  //     } else {
  //       this.sb.push(`if (${sourceExpr} != null) {
  //             ${sourceExpr}.encode(encoder, ${fieldExpr});
  //           } else {
  //             encoder.setNull(${fieldExpr});
  //           }`);
  //     }
  //   } else {
  //     // Basic types
  //     if (this.nonNullableTypes.indexOf(fieldTypeName) != -1) {
  //       if (["i64", "u64"].indexOf(fieldTypeName) != -1) {
  //         this.sb.push(
  //           `encoder.set${setterType}(${fieldExpr}, ${sourceExpr}.toString());`
  //         );
  //       } else {
  //         this.sb.push(
  //           `encoder.set${setterType}(${fieldExpr}, ${sourceExpr});`
  //         );
  //       }
  //     } else if (fieldTypeName == "Uint8Array") {
  //       this.sb.push(`if (${sourceExpr} != null) {
  //             encoder.setString(${fieldExpr}, base64.encode(${sourceExpr}));
  //           } else {
  //             encoder.setNull(${fieldExpr});
  //           };`);
  //     } else if (fieldTypeName == "u128") {
  //       this.sb.push(`if (<${fieldTypeName}>null != ${sourceExpr}) {
  //             encoder.setString(${fieldExpr}, ${sourceExpr}.toString());
  //           } else {
  //             encoder.setNull(${fieldExpr});
  //           };`);
  //     } else {
  //       this.sb.push(`if (${sourceExpr} != null) {
  //             encoder.set${setterType}(${fieldExpr}, ${sourceExpr});
  //           } else {
  //             encoder.setNull(${fieldExpr});
  //           }`);
  //     }
  //   }
  // }

  private getFields(type: TypeNode | ClassDeclaration): SimpleField[] {
    let _class = <ClassDeclaration> ((isClass(type))
        ? type
        : this.exportedClasses.get(toString(type)));
    if (_class == null) {
      return [];
    }

    return _class.members
      .filter(member => member.kind == NodeKind.FIELDDECLARATION)
      .map(
        (field: FieldDeclaration): SimpleField => {
          return { name: toString(field.name), type: field.type!, isGeneric: isGeneric(_class, field)};
        }
      );
  }

  build(source: Source): string {
      this.sb = [preamble];
      this.visit(source);
      let sourceText = source.statements.map(stmt => {
        let str = ASTBuilder.build(stmt);
        if (isClass(stmt)) {
          let _class = <ClassDeclaration> stmt;
          str = str.slice(0, str.lastIndexOf("}"));
          let fields = _class.members.filter(isField).map((field: FieldDeclaration) => field);
          if (fields.some(field => field.type == null)){
            throw new Error("All Fields must have explict type declaration.");
          }
          let className = this.typeName(_class);
          str += `
  static decode(json: Uint8Array, state: DecoderState | null = null): ${className} {
    let value = instantiate<${className}>(); // Allocate without constructor
    value.decode(json, state);
    return value;
  }

  decode(json: Uint8Array, state: DecoderState | null): ${className} {
    let handler: __near_JSONHandler_${className} = new __near_JSONHandler_${className}(this);
    handler.buffer = json;
    let decoder = new JSONDecoder<__near_JSONHandler_${className}>(handler);
    handler.decoder = decoder;
    decoder.deserialize(json, state);
    return this;
  }

  private _encoder(encoder: JSONEncoder, name: string | null): JSONEncoder {
    encoder.pushObject(name);
    ${createEncodeStatements(_class).join("\n    ")}
    encoder.popObject();
    return encoder;
  }

  encode(_encoder: JSONEncoder | null = null, name: string | null = ""): JSONEncoder {
    let encoder = _encoder != null ? _encoder : new JSONEncoder();
    return this._encoder(encoder!, name);
  }

  serialize(): Uint8Array {
    return this.encode().serialize();
  }

  toString(): string {
    return this.encode().toString();
  }  
}`;
        }
        return str;
      });

      return this.sb.concat(sourceText).join("\n");
    }

}

function createEncodeStatements(_class: ClassDeclaration): string[] {
  return _class.members.filter(isField).map(
    (field: FieldDeclaration): string  => {
      let T = toString(field.type!);
      let name = toString(field.name);
      return `encode<${T}>(encoder, this.${name}, "${name}");`;
    }
  )
}
// TODO: Make work for non-simple generics e.g. field: Array<T>
function isGeneric(_class: ClassDeclaration, field: FieldDeclaration): boolean {
  if (_class.typeParameters == null) {
    return false;
  }
  return _class.typeParameters.some(param => toString(param.name) == toString(field.type!));
}

export function afterParse(parser: Parser, writeFile: FileWriter, baseDir: string): void {
  let files = NEARBindingsBuilder.nearFiles(parser);
  files.forEach(source => {
    let writeOut = source.text.substr(0, source.text.indexOf('\n')).endsWith("out");
    // Remove from logs in parser
    parser.donelog.delete(source.internalPath);
    parser.seenlog.delete(source.internalPath);
    // Remove from programs sources
    parser.program.sources = parser.program.sources.filter(
      (_source: Source) => _source !== source
    );
    // Build new Source
    let sourceText = NEARBindingsBuilder.build(parser, source);
    if (writeOut) {
     writeFile("out/" + source.normalizedPath, sourceText, baseDir);
    }
    // Parses file and any new imports added to the source
    parser.parseFile(
      sourceText,
      (isEntry(source) ? "" : "./") + source.normalizedPath,
      isEntry(source)
    );
  });

}
