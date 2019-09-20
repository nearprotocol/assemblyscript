// tslint:disable: no-void-expression as-types as-variables
import {
  ClassDeclaration,
  DeclarationStatement,
  FieldDeclaration,
  FunctionDeclaration, ImportDeclaration, ImportStatement,
  Node,
  NodeKind,
  ParameterNode,
  Source,
  SourceKind,
  Statement,
  TypeNode
} from "../../src/ast";
import { CommonFlags } from "../../src/common";
import { Parser } from "./mockTypes";

import { ASTBuilder } from "./sourceBuilder";
import { BaseVisitor } from "./base";
import { preamble } from "./preamble";
import { isEntry, isField, isClass, toString } from "./utils";
import { ContractMetadata, generateClassMetadata, generateFunctionMetadata, METADATA_VERSION } from "./metadata";
import { main } from "../../cli/asc";

interface SimpleField {
  name: string;
  type: TypeNode;
  isGeneric: boolean;
}

function returnsVoid(node: FunctionDeclaration): boolean {
  return toString(node.signature.returnType) === "void";
}

function numOfParameters(node: FunctionDeclaration): number {
  return node.signature.parameters.length;
}

function isComment(stmt: Statement): boolean {
  return stmt.kind == NodeKind.COMMENT;
}

function hasNearDecorator(stmt: Source): boolean {
  return stmt.text.includes("@nearfile") || isEntry(stmt);
}

class NEARBindingsBuilder extends BaseVisitor {
  private sb: string[] = [];
  exportedClasses: Map<string, ClassDeclaration> = new Map();
  exportedFunctions: Map<string, FunctionDeclaration> = new Map();
  imports: Map<string, Set<string> | string> = new Map();
  wrappedFuncs: Set<string> = new Set();

  static build(source: Source): string {
    return (new NEARBindingsBuilder().build(source));
  }

  static nearFiles(parser: Parser): Source[] {
    return parser.program.sources.filter(hasNearDecorator);
  }

  visitClassDeclaration(node: ClassDeclaration): void {
    if (this.exportedClasses.has(toString(node.name))) return;
    this.exportedClasses.set(toString(node.name), node);
  }

  visitFunctionDeclaration(node: FunctionDeclaration): void {
    if (node.is(CommonFlags.EXPORT) && !this.exportedFunctions.has(toString(node.name))) {
      this.exportedFunctions.set(toString(node.name), node);
    }
    if (!isEntry(node)
        || this.wrappedFuncs.has(toString(node.name))
        || !node.is(CommonFlags.EXPORT)
        || (numOfParameters(node) == 0 && returnsVoid(node))
        ) {
        super.visitFunctionDeclaration(node);
        return;
    }
    // if (numOfParameters(node) > 0){
    //   this.generateArgsParser(node);
    // }
    this.generateWrapperFunction(node);
    // Change function to not be an export
    node.flags = node.flags ^ CommonFlags.EXPORT;
    this.wrappedFuncs.add(toString(node.name));
  }

  visitImportStatement(node: ImportStatement): void {
    let path = node.internalPath;
    if (node.declarations) {
      node.declarations!.forEach(decl => {
        let curImports = this.imports.get(path);
        curImports = curImports ? curImports! : new Set();
        if (curImports instanceof Set) {
          curImports.add(toString(decl.foreignName));
        }
        this.imports.set(path, curImports);
      });
    } else {
      assert(node.namespaceName, "Using wildcard with empty namespace");
      this.imports.set(path, toString(node.namespaceName!));
    }
  }

  /*
  Create a wrapper function that will be export in the function's place.
  */
  private generateWrapperFunction(func: FunctionDeclaration) {
    let signature = func.signature;
    let params = signature.parameters;
    let returnType = signature.returnType;
    let returnTypeName = toString(returnType).split("|").filter(name => name.trim() !== "null").join("|");
    let hasNull = toString(returnType).includes("null");
    let name = func.name.symbol;
    this.sb.push(`
//@ts-ignore
function __wrapper_${name}(): void {`);
   if (params.length > 0){
     this.sb.push(
`  // Reading input bytes.
  input(0);
  let json_len = register_len(0);
  if (json_len == U32.MAX_VALUE) {
    panic();
  }
  let json = new Uint8Array(json_len as u32);
  read_register(0, <usize>json.buffer);
  const obj: Obj = JSON.parse(json);`);
    }
    if (toString(returnType) !== "void") {
      this.sb.push(
`  let result: ${toString(returnType)} = ${name}(`);
    } else {
      this.sb.push(
`  ${name}(`);
    }
    if (params.length > 0) {
      this.sb[this.sb.length - 1] += (
        params
          .map((param) => createDecodeStatement(param))
          .join(", ")
      );
    }
    this.sb[this.sb.length - 1] += ");";
    if (toString(returnType) !== "void") {
      this.sb.push(`
  let encoder = new JSONEncoder();
  let val: Uint8Array;
  if ((isString<${returnTypeName}>() || isNullable<${returnTypeName}>()) && result == null) {
    encoder.setNull(null);
    val = encoder.serialize();
  } else {
    val = encode<${returnTypeName}>(result${hasNull ? "!" : ""}, null, encoder);
  }
  value_return(val.byteLength, <usize>val.buffer);`);
    }
    this.sb.push(`}

export { __wrapper_${name} as ${name} }
`);
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
          if (fields.some(field => field.type == null)) {
            throw new Error("All Fields must have explict type declaration.");
          }
          let className = this.typeName(_class);
          str += `
  static decode(json: Uint8Array): ${className} {
    let value = instantiate<${className}>(); // Allocate without constructor
    return value.decode<Uint8Array>(json);
  }

  decode<V = Uint8Array>(buf: V): ${className} {
    let json: Obj;
    if (buf instanceof Uint8Array) {
      json = JSON.parse(buf);
    }else {
      assert(buf instanceof Obj, "argument must be Uint8Array or Json Object");
      json = <Obj> buf;
    }
    return this._decode(json);
  }

  private _decode(obj: Obj): ${className} {
    ${createDecodeStatements(_class).join("\n    ")}
    return this;
  }

  _encode(name: string | null = "", _encoder: JSONEncoder | null = null): JSONEncoder {
    let encoder = (_encoder != null ? _encoder : new JSONEncoder())!;
    encoder.pushObject(name);
    ${createEncodeStatements(_class).join("\n    ")}
    encoder.popObject();
    return encoder;
  }

  encode(): Uint8Array {
    return this._encode().serialize();
  }

  serialize(): Uint8Array {
    return this.encode();
  }

  toJSON(): string {
    return this._encode().toString();
  }
}`;
        }
        return str;
      });

      return this.sb.concat(sourceText).join("\n");
    }

}

function createDecodeStatements(_class: ClassDeclaration): string[] {
  return _class.members.filter(isField).map((field: FieldDeclaration): string  => {
    const name = toString(field.name);
    return createDecodeStatement(field, `this.${name} = obj.has("${name}") ? `) + `: this.${name};`
  })
}

function createDecodeStatement(field: FieldDeclaration | ParameterNode, setterPrefix: string = ""): string {
  let T = toString(field.type!);
  let name = toString(field.name);
  return `${setterPrefix}decode<${T}, Obj>(obj, "${name}")`;

}

function createEncodeStatements(_class: ClassDeclaration): string[] {
  return _class.members.filter(isField).map(
    (field: FieldDeclaration): string  => {
      let T = toString(field.type!);
      let name = toString(field.name);
      return `encode<${T}, JSONEncoder>(this.${name}, "${name}", encoder);`;
    }
  );
}
// TODO: Make work for non-simple generics e.g. field: Array<T>
function isGeneric(_class: ClassDeclaration, field: FieldDeclaration): boolean {
  if (_class.typeParameters == null) {
    return false;
  }
  return _class.typeParameters.some(param => toString(param.name) == toString(field.type!));
}

function deleteSource(parser: Parser, source: Source): boolean {
  let writeOut = source.text.substr(0, source.text.indexOf("\n")).includes("out");
  // Remove from logs in parser
  parser.donelog.delete(source.internalPath);
  parser.seenlog.delete(source.internalPath);
  // Remove from programs sources
  parser.program.sources = parser.program.sources.filter(
      (_source: Source) => _source !== source
  );
  return writeOut;
}

export function afterParse(parser: Parser, writeFile: FileWriter, baseDir: string): void {
  let files = NEARBindingsBuilder.nearFiles(parser);
  let mainSource = files.filter(source => source.simplePath == "main")[0];
  let writeOut = deleteSource(parser, mainSource);
  let nearBindingsBuilder = new NEARBindingsBuilder();
  let sourceText = nearBindingsBuilder.build(mainSource);
  let imports = nearBindingsBuilder.imports;
  let allExportedFunctions = nearBindingsBuilder.exportedFunctions;
  let allExportedClasses: Map<string, ClassDeclaration> = new Map();

  files.forEach(source => {
    if (source.simplePath != "main") {
      let writeOut = deleteSource(parser, source);
      // Build new Source
      let bindingsBuilder = new NEARBindingsBuilder();
      let sourceText = bindingsBuilder.build(source);
      let importsFromSource = imports.get(source.internalPath);
      if (importsFromSource) {
        if (typeof importsFromSource === "string") {
          for (let [key, value] of bindingsBuilder.exportedClasses) {
            let typeName = importsFromSource + "." + key;
            allExportedClasses.set(typeName, value);
          }
        } else {
          for (let name of importsFromSource) {
            allExportedClasses.set(name, bindingsBuilder.exportedClasses.get(name)!);
          }
        }
      }
      if (writeOut) {
        writeFile("out/" + source.normalizedPath, sourceText, baseDir);
      }
      // Parses file and any new imports added to the source
      parser.parseFile(
          sourceText,
          (isEntry(source) ? "" : "./") + source.normalizedPath,
          isEntry(source)
      );
    }
  });
  // generate contract metadata
  let functionMetadata = [];
  for (let value of allExportedFunctions.values()) {
    functionMetadata.push(generateFunctionMetadata(value));
  }
  let classMetadata = [];
  for (let value of allExportedClasses.values()) {
    classMetadata.push(generateClassMetadata(value));
  }
  let description = null;
  let descriptionFunc = allExportedFunctions.get("description");
  if (descriptionFunc) {
    description = JSON.parse(toString(descriptionFunc.body!));
  }
  let contractMedata: ContractMetadata = {
    functions: functionMetadata,
    classes: classMetadata,
    description,
    version: METADATA_VERSION
  };
  let metadataStr = `
export function metadata(): string {
  return ${JSON.stringify(JSON.stringify(contractMedata))};
}`;
  sourceText += metadataStr;
  if (writeOut) {
    writeFile("out/" + mainSource.normalizedPath, sourceText, baseDir);
  }
  parser.parseFile(
      sourceText,
      (isEntry(mainSource) ? "" : "./") + mainSource.normalizedPath,
      isEntry(mainSource)
  );
}
