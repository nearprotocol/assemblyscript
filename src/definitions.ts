/**
 * Definition builders for WebIDL and TypeScript.
 * @module definitions
 *//***/

import {
  CommonFlags
} from "./common";

import {
  Program,
  Element,
  ElementKind,
  Global,
  Enum,
  EnumValue,
  Field,
  Function,
  FunctionPrototype,
  Class,
  ClassPrototype,
  Namespace,
  ConstantValueKind,
  Interface,
  Property,
  PropertyPrototype
} from "./program";

import {
  Type,
  TypeKind
} from "./types";

import {
  indent
} from "./util";
import { Source, NodeKind, ImportStatement, DeclarationStatement, ExportStatement } from "./ast";

/** Walker base class. */
abstract class ExportsWalker {

  /** Program reference. */
  program: Program;
  /** Whether to include private members */
  includePrivate: bool;
  /** Elements still to do. */
  todo: Element[] = [];
  /** Already seen elements. */
  seen: Set<Element> = new Set();

  /** Constructs a new Element walker. */
  constructor(program: Program, includePrivate: bool = false) {
    this.program = program;
    this.includePrivate;
  }

  /** Walks all elements and calls the respective handlers. */
  walk(): void {
    for (let file of this.program.filesByName.values()) {
      let members = file.members;
      if (!members) continue;
      for (let member of members.values()) {
        // FIXME: doesn't honor the actual externally visible name
        this.visitElement(member);
      }
    }
    var todo = this.todo;
    for (let i = 0; i < todo.length; ) this.visitElement(todo[i]);
  }

  /** Visits an element.*/
  visitElement(element: Element): void {
    if (element.is(CommonFlags.PRIVATE) && !this.includePrivate) return;
    if (this.seen.has(element)) return;
    this.seen.add(element);
    switch (element.kind) {
      case ElementKind.GLOBAL: {
        if (element.is(CommonFlags.COMPILED)) this.visitGlobal(<Global>element);
        break;
      }
      case ElementKind.ENUM: {
        if (element.is(CommonFlags.COMPILED)) this.visitEnum(<Enum>element);
        break;
      }
      case ElementKind.FUNCTION_PROTOTYPE: {
        this.visitFunctionInstances(<FunctionPrototype>element);
        break;
      }
      case ElementKind.CLASS_PROTOTYPE: {
        this.visitClassInstances(<ClassPrototype>element);
        break;
      }
      case ElementKind.FIELD: {
        if ((<Field>element).is(CommonFlags.COMPILED)) this.visitField(<Field>element);
        break;
      }
      case ElementKind.PROPERTY_PROTOTYPE: {
        this.visitPropertyInstances(<PropertyPrototype>element);
        break;
      }
      case ElementKind.PROPERTY: {
        let prop = <Property>element;
        let getter = prop.getterInstance;
        if (getter) this.visitFunction(getter);
        let setter = prop.setterInstance;
        if (setter) this.visitFunction(setter);
        break;
      }
      case ElementKind.NAMESPACE: {
        if (hasCompiledMember(element)) this.visitNamespace(element);
        break;
      }
      case ElementKind.TYPEDEFINITION: break;
      default: assert(false);
    }
  }

  private visitFunctionInstances(element: FunctionPrototype): void {
    var instances = element.instances;
    if (instances) {
      for (let instance of instances.values()) {
        if (instance.is(CommonFlags.COMPILED)) this.visitFunction(<Function>instance);
      }
    }
  }

  private visitClassInstances(element: ClassPrototype): void {
    var instances = element.instances;
    if (instances) {
      for (let instance of instances.values()) {
        if (instance.is(CommonFlags.COMPILED)) this.visitClass(<Class>instance);
      }
    }
  }

  private visitPropertyInstances(element: PropertyPrototype): void {
    // var instances = element.instances;
    // if (instances) {
    //   for (let instance of instances.values()) {
    //     if (instance.is(CommonFlags.COMPILED)) this.visitProperty(<Property>instance);
    //   }
    // }
    assert(false);
  }

  abstract visitGlobal(element: Global): void;
  abstract visitEnum(element: Enum): void;
  abstract visitFunction(element: Function): void;
  abstract visitClass(element: Class): void;
  abstract visitInterface(element: Interface): void;
  abstract visitField(element: Field): void;
  abstract visitNamespace(element: Element): void;
}

// TODO: Extract this into separate module, preferrable pluggable
export class NEARBindingsBuilder extends ExportsWalker {
  private typeMapping: { [key: string]: string } = {
    "i32": "Integer",
    "u32": "Integer",
    "String": "String",
    "bool": "Boolean"
  };

  private nonNullableTypes = ["i32", "u32", "bool"];

  private sb: string[] = [];
  private generatedEncodeFunctions = new Set<string>();
  private generatedDecodeFunctions = new Set<string>();
  private exportedClasses: Class[] = [];
  private exportedFunctions: Function[] = [];

  static build(program: Program): string {
    return new NEARBindingsBuilder(program).build();
  }

  visitGlobal(element: Global): void {
    // Do nothing
  }

  visitEnum(element: Enum): void {
    // Do nothing
  }

  visitClass(element: Class): void {
    if (!element.is(CommonFlags.MODULE_EXPORT)) {
      return;
    }
    this.exportedClasses.push(element);
  }

  visitFunction(element: Function): void {
    if (!element.is(CommonFlags.MODULE_EXPORT)) {
      return;
    }
    this.exportedFunctions.push(element);
    this.generateArgsParser(element);
    this.generateWrapperFunction(element);
  }

  visitInterface(element: Interface): void {
    // Do nothing
  }

  visitField(element: Field): void {
    throw new Error("Shouldn't be called");
  }

  visitNamespace(element: Element): void {
    // Do nothing
  }

  private generateArgsParser(element: Function) {
    let signature = element.signature;
    let fields = signature.parameterNames ? signature.parameterNames.map((paramName, i) => {
      return { name: paramName, type: signature.parameterTypes[i] };
    }) : [];
    fields.forEach(field => this.generateDecodeFunction(field.type));
    this.sb.push(`export class __near_ArgsParser_${element.name} extends ThrowingJSONHandler {
        buffer: Uint8Array;
        decoder: JSONDecoder<__near_ArgsParser_${element.name}>;
        handledRoot: boolean = false;
      `);
    if (signature.parameterNames) {
      fields.forEach((field) => {
        this.sb.push(`__near_param_${field.name}: ${this.wrappedTypeName(field.type)};`);
      });
      this.generateHandlerMethods("this.__near_param_", fields);
    } else {
      this.generateHandlerMethods("this.__near_param_", []);
    }
    this.sb.push(`}`);
  }

  private generateWrapperFunction(element: Function) {
    let signature = element.signature;
    let returnType = signature.returnType;
    this.generateEncodeFunction(returnType);
    this.sb.push(`export function near_func_${element.name}(): void {
      let json = new Uint8Array(input_read_len());
      input_read_into(json.buffer.data);
      let handler = new __near_ArgsParser_${element.name}();
      handler.buffer = json;
      handler.decoder = new JSONDecoder<__near_ArgsParser_${element.name}>(handler);
      handler.decoder.deserialize(json);`);
    if (returnType.toString() != "void") {
      this.sb.push(`let result = wrapped_${element.name}(`);
    } else {
      this.sb.push(`wrapped_${element.name}(`);
    }
    if (signature.parameterNames) {
      this.sb.push(signature.parameterNames.map(paramName => `handler.__near_param_${paramName}`).join(","));
    }
    this.sb.push(");");
    if (returnType.toString() != "void") {
      this.sb.push(`
        let encoder = new JSONEncoder();
        encoder.pushObject(null);
      `);
      this.generateFieldEncoder(returnType, '"result"', "result");
      this.sb.push(`
        encoder.popObject();
        return_value(near.bufferWithSize(encoder.serialize()).buffer.data);
      `);
    }
    this.sb.push(`}`);
  }

  private generateHandlerMethods(valuePrefix: string, fields: any[]) : void {
    function fieldsWithType(type: string) {
      return fields.filter(field => field.type.toString() == type);
    }

    this.generateBasicSetterHandlers(valuePrefix, "Integer", "i64", fieldsWithType("i32").concat(fieldsWithType("u32")));
    this.generateBasicSetterHandlers(valuePrefix, "String", "String", fieldsWithType("String"));
    this.generateBasicSetterHandlers(valuePrefix, "Boolean", "bool", fieldsWithType("bool"));

    this.sb.push("setNull(name: string): void {");
    fields.forEach((field) => {
      this.sb.push(`if (name == "${field.name}") {
        ${valuePrefix}${field.name} = <${this.wrappedTypeName(field.type)}>null;
        return;
      }`);
    });
    this.sb.push(`
      super.setNull(name);
    }`);

    let nonBasicFields = fields.filter(field => !(field.type.toString() in this.typeMapping));
    this.sb.push(`
      pushObject(name: string): bool {`);
    this.sb.push(`if (!this.handledRoot) {
      assert(name == null);
      this.handledRoot = true;
      return true;
    } else {
      assert(name != null);
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

  private generateBasicSetterHandlers(valuePrefix: string, setterType: string, setterValueType: string, matchingFields: any[]) {
      if (matchingFields.length > 0) {
        this.sb.push(`set${setterType}(name: string, value: ${setterValueType}): void {`);
        matchingFields.forEach(field => {
          this.sb.push(`if (name == "${field.name}") {
            ${valuePrefix}${field.name} = <${field.type}>value;
            return;
          }`);
        });
        this.sb.push(`
          super.set${setterType}(name, value);
        }`);
      }
  }

  private generatePushHandler(valuePrefix: string, fields: any[]) {
    fields.forEach((field) => {
      if (!(field.type.toString() in this.typeMapping)) {
        this.sb.push(`if (name == "${field.name}") {
          ${valuePrefix}${field.name} = <${field.type}>__near_decode_${this.encodeType(field.type)}(this.buffer, this.decoder.state);
          return false;
        }`);
      }
    });
  }

  private generateArrayHandlerMethods(valuePrefix: string, fieldType: Type) : void {
    let setterType = this.typeMapping[fieldType.toString()];
    if (setterType) {
      let valueType = fieldType.toString();
      if (valueType == "u32" || valueType == "i32") {
        valueType = "i64"
      }
      this.sb.push(`set${setterType}(name: string, value: ${valueType}): void {
        ${valuePrefix}.push(<${fieldType}>value);
      }
      setNull(name: string): void {
        ${valuePrefix}.push(<${fieldType}>null);
      }
      pushArray(name: string): bool {
        assert(name == null && !this.handledRoot);
        this.handledRoot = true;
        return true;
      }`);
    } else {
      this.sb.push(`pushObject(name: string): bool {
        ${valuePrefix}.push(<${fieldType}>__near_decode_${this.encodeType(fieldType)}(this.buffer, this.decoder.state));
        return false;
      }
      pushArray(name: string): bool {
        assert(name == null);
        if (!this.handledRoot) {
          this.handledRoot = true;
          return true;
        }
        ${valuePrefix}.push(<${fieldType}>__near_decode_${this.encodeType(fieldType)}(this.buffer, this.decoder.state));
        return false;
      }`);
    }
  }


  private generateEncodeFunction(type: Type) {
    if (!type.classReference) {
      return;
    }

    let typeName = this.encodeType(type);
    if (this.generatedEncodeFunctions.has(typeName) || typeName in this.typeMapping) {
      return;
    }
    this.generatedEncodeFunctions.add(typeName);

    let methodName = `__near_encode_${typeName}`;
    if (this.tryUsingImport(type, methodName)) {
      return;
    }

    if (this.isArrayType(type)) {
      // Array
      this.generateEncodeFunction(type.classReference.typeArguments![0]);

      this.sb.push(`export function __near_encode_${typeName}(
          value: ${this.wrappedTypeName(type)},
          encoder: JSONEncoder): void {`);
      this.sb.push(`for (let i = 0; i < value.length; i++) {`);
      this.generateFieldEncoder(type.classReference.typeArguments![0], "null", "value[i]");
      this.sb.push("}");

    } else {
      // Object
      this.getFields(type.classReference).forEach(field => {
        this.generateEncodeFunction(field.type);
      });

      this.sb.push(`export function __near_encode_${typeName}(
          value: ${this.wrappedTypeName(type)},
          encoder: JSONEncoder): void {`);
      this.getFields(type.classReference).forEach((field) => {
        let fieldType = field.type;
        let fieldName = field.name;
        let sourceExpr = `value.${fieldName}`;
        this.generateFieldEncoder(fieldType, `"${fieldName}"`, sourceExpr);
      });
    }

    this.sb.push("}");
  }

  private tryUsingImport(type: Type, methodName: string): bool {
    let sourcesWithExport = this.program.sources.filter(source =>
      this.getExports(source).filter(d => d.name.text == methodName).length > 0);

    if (sourcesWithExport.length == 0) {
      return false;
    }

    if (sourcesWithExport.length > 1) {
      console.log(`WARN: more than one file exporting ${methodName}: ${sourcesWithExport.map(s => s.normalizedPath)}`);
    }

    let importPath = sourcesWithExport[0].normalizedPath.replace('.ts', '');
    this.sb.push(`import { ${methodName} } from "./${importPath}";`);
    return true;
  }

  private generateHandler(type: Type) {
    let typeName = this.encodeType(type);
    this.sb.push(`export class __near_JSONHandler_${typeName} extends ThrowingJSONHandler {
      buffer: Uint8Array;
      decoder: JSONDecoder<__near_JSONHandler_${typeName}>;
      handledRoot: boolean = false;
      value: ${this.wrappedTypeName(type)} = new ${this.wrappedTypeName(type)}();`);
    if (this.isArrayType(type)) {
      this.generateArrayHandlerMethods("this.value", type.classReference!.typeArguments![0]);
    } else {
      this.generateHandlerMethods("this.value.", this.getFields(type.classReference!));
    }
    this.sb.push("}\n");
  }

  private wrappedTypeName(type: Type): string {
    if (!type.classReference) {
      return type.toString();
    }
    let cls = type.classReference;
    if (this.exportedClasses.indexOf(cls) != -1) {
      return "wrapped_" + cls.name;
    }
    if (cls.typeArguments && cls.typeArguments.length > 0) {
      return cls.prototype.name + "<" +
        cls.typeArguments.map(argType => this.wrappedTypeName(argType)).join(", ") +
      ">"
    }
    return cls.name;
  }

  private generateDecodeFunction(type: Type) {
    if (!type.classReference) {
      return;
    }

    let typeName = this.encodeType(type);
    if (this.generatedDecodeFunctions.has(typeName) || typeName in this.typeMapping) {
      return;
    }
    this.generatedDecodeFunctions.add(typeName);

    let methodName = `__near_decode_${typeName}`;
    if (this.tryUsingImport(type, methodName)) {
      return;
    }

    this.generateHandler(type);
    if (this.isArrayType(type)) {
      // Array
      this.generateDecodeFunction(type.classReference.typeArguments![0]);
    } else {
      // Object
      this.getFields(type.classReference).forEach(field => {
        this.generateDecodeFunction(field.type);
      });
    }

    this.sb.push(`export function __near_decode_${typeName}(
        buffer: Uint8Array, state: DecoderState):${this.wrappedTypeName(type)} {
      let handler = new __near_JSONHandler_${typeName}();
      handler.buffer = buffer;
      handler.decoder = new JSONDecoder<__near_JSONHandler_${typeName}>(handler);
      handler.decoder.deserialize(buffer, state);
      return handler.value;
    }\n`);
  }

  private generateFieldEncoder(fieldType: Type, fieldExpr: string, sourceExpr: string) {
    let setterType = this.typeMapping[fieldType.toString()];
    if (!setterType) {
      // Object / array
      let pushType = this.isArrayType(fieldType) ? "Array" : "Object";
      this.sb.push(`if (${sourceExpr} != null) {
          encoder.push${pushType}(${fieldExpr});
          __near_encode_${this.encodeType(fieldType)}(<${fieldType}>${sourceExpr}, encoder);
          encoder.pop${pushType}();
        } else {
          encoder.setNull(${fieldExpr});
        }`);
    } else {
      // Basic types
      if (this.nonNullableTypes.indexOf(fieldType.toString()) != -1) {
        this.sb.push(`encoder.set${setterType}(${fieldExpr}, ${sourceExpr});`);
      } else {
        this.sb.push(`if (${sourceExpr} != null) {
            encoder.set${setterType}(${fieldExpr}, ${sourceExpr});
          } else {
            encoder.setNull(${fieldExpr});
          }`);
      }
    }
  }

  private encodeType(type: Type) : string {
    return (<any>type.toString())
      .replace(/_/g, '__')
      .replace(/>/g, '')
      .replace(/</g, '_');
  }

  private isArrayType(type: Type): bool {
    return !!(type.classReference && type.classReference.prototype.name == "Array" && type.classReference.typeArguments);
  }

  private getFields(element: Class): Field[] {
    if (!element.members) {
      return [];
    }

    return <Field[]>[...element.members.values()].filter(member => member instanceof Field);
  }

  build(): string {
    let mainSource = this.program.sources
      .filter(s => s.normalizedPath.indexOf("~lib") != 0)[0];
    this.copyImports(mainSource);

    this.walk();

    this.exportedClasses.forEach(c => {
      this.generateEncodeFunction(c.type);
      this.generateDecodeFunction(c.type);
    });

    let allExported = (<Element[]>this.exportedClasses).concat(<Element[]>this.exportedFunctions).filter(e => e.is(CommonFlags.MODULE_EXPORT));
    let allImportsStr = allExported.map(c => `${c.name} as wrapped_${c.name}`).join(", ");
    this.sb = [`
      import { near } from "./near";
      import { JSONEncoder} from "./json/encoder"
      import { JSONDecoder, ThrowingJSONHandler, DecoderState  } from "./json/decoder"
      import {${allImportsStr}} from "./${mainSource.normalizedPath.replace(".ts", "")}";

      // Runtime functions
      @external("env", "return_value")
      declare function return_value(value_ptr: u32): void;
      @external("env", "input_read_len")
      declare function input_read_len(): u32;
      @external("env", "input_read_into")
      declare function input_read_into(ptr: usize): void;
    `].concat(this.sb);
    this.exportedClasses.forEach(c => {
      this.sb.push(`export class ${c.name} extends ${this.wrappedTypeName(c.type)} {
        static decode(json: Uint8Array): ${c.name} {
          return <${c.name}>__near_decode_${this.encodeType(c.type)}(json, null);
        }

        encode(): Uint8Array {
          let encoder: JSONEncoder = new JSONEncoder();
          encoder.pushObject(null);
          __near_encode_${this.encodeType(c.type)}(<${c.name}>this, encoder);
          encoder.popObject();
          return encoder.serialize();
        }
      }`);
    })
    return this.sb.join("\n");
  }

  private copyImports(mainSource: Source): any {
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

/** A WebIDL definitions builder. */
export class IDLBuilder extends ExportsWalker {

  /** Builds WebIDL definitions for the specified program. */
  static build(program: Program): string {
    return new IDLBuilder(program).build();
  }

  private sb: string[] = [];
  private indentLevel: i32 = 0;

  /** Constructs a new WebIDL builder. */
  constructor(program: Program, includePrivate: bool = false) {
    super(program, includePrivate);
  }

  visitGlobal(element: Global): void {
    var sb = this.sb;
    var isConst = element.is(CommonFlags.INLINED);
    indent(sb, this.indentLevel);
    if (isConst) sb.push("const ");
    sb.push(this.typeToString(element.type));
    sb.push(" ");
    sb.push(element.name);
    if (isConst) {
      switch (element.constantValueKind) {
        case ConstantValueKind.INTEGER: {
          sb.push(" = ");
          sb.push(i64_to_string(element.constantIntegerValue));
          break;
        }
        case ConstantValueKind.FLOAT: {
          sb.push(" = ");
          sb.push(element.constantFloatValue.toString());
          break;
        }
        default: assert(false);
      }
    }
    sb.push(";\n");
  }

  visitEnum(element: Enum): void {
    var sb = this.sb;
    indent(sb, this.indentLevel++);
    sb.push("interface ");
    sb.push(element.name);
    sb.push(" {\n");
    var members = element.members;
    if (members) {
      for (let [name, member] of members) {
        if (member.kind == ElementKind.ENUMVALUE) {
          let isConst = (<EnumValue>member).is(CommonFlags.INLINED);
          indent(sb, this.indentLevel);
          if (isConst) sb.push("const ");
          else sb.push("readonly ");
          sb.push("unsigned long ");
          sb.push(name);
          if (isConst) {
            sb.push(" = ");
            assert((<EnumValue>member).constantValueKind == ConstantValueKind.INTEGER);
            sb.push(i64_low((<EnumValue>member).constantIntegerValue).toString(10));
          }
          sb.push(";\n");
        }
      }
      for (let member of members.values()) {
        if (member.kind != ElementKind.ENUMVALUE) this.visitElement(member);
      }
    }
    indent(sb, --this.indentLevel);
    sb.push("}\n");
  }

  visitFunction(element: Function): void {
    var sb = this.sb;
    var signature = element.signature;
    indent(sb, this.indentLevel);
    sb.push(this.typeToString(signature.returnType));
    sb.push(" ");
    sb.push(element.name);
    sb.push("(");
    var parameters = signature.parameterTypes;
    var numParameters = parameters.length;
    // var requiredParameters = signature.requiredParameters;
    for (let i = 0; i < numParameters; ++i) {
      if (i) sb.push(", ");
      // if (i >= requiredParameters) sb.push("optional ");
      sb.push(this.typeToString(parameters[i]));
      sb.push(" ");
      sb.push(signature.getParameterName(i));
    }
    sb.push(");\n");
    var members = element.members;
    if (members && members.size) {
      indent(sb, this.indentLevel);
      sb.push("interface ");
      sb.push(element.name);
      sb.push(" {\n");
      for (let member of members.values()) this.visitElement(member);
      indent(sb, --this.indentLevel);
      sb.push("}\n");
    }
  }

  visitClass(element: Class): void {
    var sb = this.sb;
    indent(sb, this.indentLevel++);
    sb.push("interface ");
    sb.push(element.name);
    sb.push(" {\n");
    // TODO
    indent(sb, --this.indentLevel);
    sb.push("}\n");
  }

  visitInterface(element: Interface): void {
    this.visitClass(element);
  }

  visitField(element: Field): void {
    // TODO
  }

  visitNamespace(element: Namespace): void {
    var sb = this.sb;
    indent(sb, this.indentLevel++);
    sb.push("interface ");
    sb.push(element.name);
    sb.push(" {\n");
    var members = element.members;
    if (members) {
      for (let member of members.values()) this.visitElement(member);
    }
    indent(sb, --this.indentLevel);
    sb.push("}\n");
  }

  typeToString(type: Type): string {
    switch (type.kind) {
      case TypeKind.I8: return "byte";
      case TypeKind.I16: return "short";
      case TypeKind.I32: return "long";
      case TypeKind.I64: return "long long";
      case TypeKind.ISIZE: return this.program.options.isWasm64 ? "long long" : "long";
      case TypeKind.U8: return "octet";
      case TypeKind.U16: return "unsigned short";
      case TypeKind.U32: return "unsigned long";
        // ^ TODO: function types
      case TypeKind.U64: return "unsigned long long";
      case TypeKind.USIZE: return this.program.options.isWasm64 ? "unsigned long long" : "unsigned long";
        // ^ TODO: class types
      case TypeKind.BOOL: return "boolean";
      case TypeKind.F32: return "unrestricted float";
      case TypeKind.F64: return "unrestricted double";
      case TypeKind.VOID: return "void";
      default: {
        assert(false);
        return "";
      }
    }
  }

  build(): string {
    var sb = this.sb;
    sb.push("interface ASModule {\n");
    ++this.indentLevel;
    this.walk();
    --this.indentLevel;
    sb.push("}\n");
    return sb.join("");
  }
}

/** A TypeScript definitions builder. */
export class TSDBuilder extends ExportsWalker {

  /** Builds TypeScript definitions for the specified program. */
  static build(program: Program): string {
    return new TSDBuilder(program).build();
  }

  private sb: string[] = [];
  private indentLevel: i32 = 0;

  /** Constructs a new WebIDL builder. */
  constructor(program: Program, includePrivate: bool = false) {
    super(program, includePrivate);
  }

  visitGlobal(element: Global): void {
    var sb = this.sb;
    var isConst = element.is(CommonFlags.INLINED);
    indent(sb, this.indentLevel);
    if (element.is(CommonFlags.STATIC)) {
      if (isConst) sb.push("static readonly ");
      else sb.push("static ");
    } else {
      if (isConst) sb.push("const ");
      else sb.push("var ");
    }
    sb.push(element.name);
    sb.push(": ");
    sb.push(this.typeToString(element.type));
    sb.push(";\n");
    this.visitNamespace(element);
  }

  visitEnum(element: Enum): void {
    var sb = this.sb;
    indent(sb, this.indentLevel++);
    sb.push("enum ");
    sb.push(element.name);
    sb.push(" {\n");
    var members = element.members;
    if (members) {
      let numMembers = members.size;
      for (let [name, member] of members) {
        if (member.kind == ElementKind.ENUMVALUE) {
          indent(sb, this.indentLevel);
          sb.push(name);
          if (member.is(CommonFlags.INLINED)) {
            sb.push(" = ");
            assert((<EnumValue>member).constantValueKind == ConstantValueKind.INTEGER);
            sb.push(i64_low((<EnumValue>member).constantIntegerValue).toString(10));
          }
          sb.push(",\n");
          --numMembers;
        }
      }
      if (numMembers) this.visitNamespace(element);
    }
    indent(sb, --this.indentLevel);
    sb.push("}\n");
  }

  visitFunction(element: Function): void {
    if (element.isAny(CommonFlags.PRIVATE | CommonFlags.SET)) return;
    var sb = this.sb;
    var signature = element.signature;
    indent(sb, this.indentLevel);
    if (element.is(CommonFlags.PROTECTED)) sb.push("protected ");
    if (element.is(CommonFlags.STATIC)) sb.push("static ");
    if (element.is(CommonFlags.GET)) {
      sb.push(element.identifierNode.text); // 'get:funcName' internally
      sb.push(": ");
      sb.push(this.typeToString(signature.returnType));
      sb.push(";\n");
      return;
    } else {
      if (!element.isAny(CommonFlags.STATIC | CommonFlags.INSTANCE)) sb.push("function ");
      sb.push(element.name);
    }
    sb.push("(");
    var parameters = signature.parameterTypes;
    var numParameters = parameters.length;
    // var requiredParameters = signature.requiredParameters;
    for (let i = 0; i < numParameters; ++i) {
      if (i) sb.push(", ");
      // if (i >= requiredParameters) sb.push("optional ");
      sb.push(signature.getParameterName(i));
      sb.push(": ");
      sb.push(this.typeToString(parameters[i]));
    }
    if (element.isAny(CommonFlags.CONSTRUCTOR | CommonFlags.SET)) {
      sb.push(")");
    } else {
      sb.push("): ");
      sb.push(this.typeToString(signature.returnType));
    }
    sb.push(";\n");
    this.visitNamespace(element);
  }

  visitClass(element: Class): void {
    var sb = this.sb;
    var isInterface = element.kind == ElementKind.INTERFACE;
    indent(sb, this.indentLevel++);
    if (isInterface) {
      sb.push("interface ");
    } else {
      if (element.is(CommonFlags.ABSTRACT)) sb.push("abstract ");
      sb.push("class ");
    }
    sb.push(element.name);
    var base = element.base;
    if (base && base.is(CommonFlags.COMPILED | CommonFlags.MODULE_EXPORT)) {
      sb.push(" extends ");
      sb.push(base.name); // TODO: fqn
    }
    sb.push(" {\n");
    var members = element.parent.members; // static
    if (members) {
      for (let member of members.values()) {
        this.visitElement(member);
      }
    }
    var ctor = element.constructorInstance;
    if (ctor) this.visitFunction(ctor);
    members = element.members; // instance
    if (members) {
      for (let member of members.values()) this.visitElement(member);
    }
    indent(sb, --this.indentLevel);
    sb.push("}\n");
  }

  visitInterface(element: Interface): void {
    this.visitClass(element);
  }

  visitField(element: Field): void {
    if (element.is(CommonFlags.PRIVATE)) return;
    var sb = this.sb;
    indent(sb, this.indentLevel);
    if (element.is(CommonFlags.PROTECTED)) sb.push("protected ");
    if (element.is(CommonFlags.STATIC)) sb.push("static ");
    if (element.is(CommonFlags.READONLY)) sb.push("readonly ");
    sb.push(element.name);
    sb.push(": ");
    sb.push(this.typeToString(element.type));
    sb.push(";\n");
  }

  visitNamespace(element: Element): void {
    var members = element.members;
    if (members && members.size) {
      let sb = this.sb;
      indent(sb, this.indentLevel++);
      sb.push("namespace ");
      sb.push(element.name);
      sb.push(" {\n");
      for (let member of members.values()) this.visitElement(member);
      indent(sb, --this.indentLevel);
      sb.push("}\n");
    }
  }

  typeToString(type: Type): string {
    switch (type.kind) {
      case TypeKind.I8: return "i8";
      case TypeKind.I16: return "i16";
      case TypeKind.I32: return "i32";
      case TypeKind.I64: return "I64";
      case TypeKind.ISIZE: return this.program.options.isWasm64 ? "I64" : "i32";
      case TypeKind.U8: return "u8";
      case TypeKind.U16: return "u16";
      case TypeKind.U32: return "u32";
        // ^ TODO: function types
      case TypeKind.U64: return "U64";
      case TypeKind.USIZE: return this.program.options.isWasm64 ? "U64" : "u32";
        // ^ TODO: class types
      case TypeKind.BOOL: return "bool";
      case TypeKind.F32: return "f32";
      case TypeKind.F64: return "f64";
      case TypeKind.V128: return "v128";
      case TypeKind.VOID: return "void";
      default: {
        assert(false);
        return "";
      }
    }
  }

  build(): string {
    var sb = this.sb;
    sb.push("declare module ASModule {\n");
    sb.push("  type i8 = number;\n");
    sb.push("  type i16 = number;\n");
    sb.push("  type i32 = number;\n");
    sb.push("  type u8 = number;\n");
    sb.push("  type u16 = number;\n");
    sb.push("  type u32 = number;\n");
    sb.push("  type f32 = number;\n");
    sb.push("  type f64 = number;\n");
    sb.push("  type bool = any;\n");
    ++this.indentLevel;
    this.walk();
    --this.indentLevel;
    sb.push("}\n");
    sb.push("export default ASModule;\n");
    return this.sb.join("");
  }
}

// helpers

/** Tests if a namespace-like element has at least one compiled member. */
function hasCompiledMember(element: Element): bool {
  var members = element.members;
  if (members) {
    for (let member of members.values()) {
      switch (member.kind) {
        case ElementKind.FUNCTION_PROTOTYPE: {
          let instances = (<FunctionPrototype>member).instances;
          if (instances) {
            for (let instance of instances.values()) {
              if (instance.is(CommonFlags.COMPILED)) return true;
            }
          }
          break;
        }
        case ElementKind.CLASS_PROTOTYPE: {
          let instances = (<ClassPrototype>member).instances;
          if (instances) {
            for (let instance of instances.values()) {
              if (instance.is(CommonFlags.COMPILED)) return true;
            }
          }
          break;
        }
        default: {
          if (member.is(CommonFlags.COMPILED) || hasCompiledMember(member)) return true;
          break;
        }
      }
    }
  }
  return false;
}
