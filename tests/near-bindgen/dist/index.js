"use strict";
// tslint:disable: no-void-expression as-types as-variables
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var assemblyscript_1 = require("assemblyscript");
var transformer_1 = require("./transformer");
var sourceBuilder_1 = require("./sourceBuilder");
function isComment(stmt) {
    return stmt.kind == assemblyscript_1.NodeKind.COMMENT;
}
function hasNearDecorator(stmt) {
    return stmt.text.startsWith("//@nearfile");
}
function toString(node) {
    return sourceBuilder_1.ASTBuilder.build(node);
}
function isEntry(source) {
    return source.sourceKind == assemblyscript_1.SourceKind.USER_ENTRY;
}
function isReference(type) {
    var simpleTypes = [
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
var NEARBindingsBuilder = /** @class */ (function (_super) {
    __extends(NEARBindingsBuilder, _super);
    function NEARBindingsBuilder(parser) {
        var _this = _super.call(this, parser) || this;
        _this.typeMapping = {
            i32: "Integer",
            u32: "Integer",
            i64: "String",
            u64: "String",
            string: "String",
            bool: "Boolean",
            Uint8Array: "String",
            u128: "String"
        };
        _this.nonNullableTypes = ["i32", "u32", "i64", "u64", "bool"];
        _this.sb = [];
        _this.generatedEncodeFunctions = new Set();
        _this.generatedDecodeFunctions = new Set();
        _this.exportedClasses = new Map();
        _this.exportedFunctions = [];
        _this.classInjections = new Map();
        _this.classRanges = new Map();
        _this.generatedArgParserFunctions = new Set();
        return _this;
    }
    NEARBindingsBuilder.build = function (parser, source) {
        new NEARBindingsBuilder(parser).build(source);
    };
    NEARBindingsBuilder.nearFiles = function (parser) {
        return parser.program.sources.filter(hasNearDecorator);
    };
    NEARBindingsBuilder.prototype.walk = function () { };
    NEARBindingsBuilder.prototype.visitClassDeclaration = function (node) {
        if (this.exportedClasses.has(toString(node.name)))
            return;
        this.classRanges.set(toString(node.name), node.range);
        // if (!node.is(CommonFlags.MODULE_EXPORT)){
        //   return;
        // }
        this.exportedClasses.set(toString(node.name), node);
    };
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
    NEARBindingsBuilder.prototype.generateArgsParser = function (element) {
        var _this = this;
        var signature = element.signature;
        var name = toString(element.name);
        var args = signature.parameters.map(function (param) {
            return { name: toString(param.name), type: param.type };
        });
        args
            .filter(function (arg) { return _this.isArrayType(arg.type); })
            .forEach(function (field) { return _this.generateDecodeFunction(field.type); });
        this.sb.push("\n      export class __near_ArgsParser_" + name + " extends ThrowingJSONHandler {\n          buffer: Uint8Array;\n          decoder: JSONDecoder<__near_ArgsParser_" + name + ">;\n          handledRoot: boolean = false;");
        if (args.length > 0) {
            args.forEach(function (field) {
                _this.sb.push("__near_param_" + field.name + ": " + _this.typeName(field.type) + ";");
            });
            this.generateHandlerMethods("this.__near_param_", args);
        }
        else {
            this.generateHandlerMethods("this.__near_param_", []);
        }
        this.sb.push("}");
    };
    NEARBindingsBuilder.prototype.generateWrapperFunction = function (element) {
        var signature = element.signature;
        var params = signature.parameters;
        var returnType = signature.returnType;
        if (this.isArrayType(returnType)) {
            this.generateEncodeFunction(returnType);
        }
        var name = element.name.symbol;
        this.sb.push("export function " + name + "(): void {\n        // Reading input bytes.\n        let json = storage._internalReadBytes(4, 0, 0)!;\n        let handler = new __near_ArgsParser_" + name + "();\n        handler.buffer = json;\n        handler.decoder = new JSONDecoder<__near_ArgsParser_" + name + ">(handler);\n        handler.decoder.deserialize(json);");
        if (toString(returnType) !== "void") {
            this.sb.push("let result: " + toString(returnType) + " = wrapped_" + name + "(");
        }
        else {
            this.sb.push("wrapped_" + name + "(");
        }
        if (params.length > 0) {
            this.sb.push(params
                .map(function (paramName) { return "handler.__near_param_" + paramName.name.symbol; })
                .join(","));
        }
        this.sb.push(");");
        if (toString(returnType) !== "void") {
            this.sb.push("\n          let encoder = new JSONEncoder();\n        ");
            this.generateFieldEncoder(returnType, "null", "result");
            this.sb.push("\n          let val = encoder.serialize();\n          return_value(val.byteLength, <usize>val.buffer);\n        ");
        }
        this.sb.push("}");
    };
    NEARBindingsBuilder.prototype.generateHandlerMethods = function (valuePrefix, fields) {
        var _this = this;
        var fieldsWithTypes = function (types) {
            return fields.filter(function (field) { return types.indexOf(_this.typeName(field.type)) != -1; });
        };
        this.generateBasicSetterHandlers(valuePrefix, "Integer", "i64", fieldsWithTypes(["i32", "u32"]));
        this.generateBasicSetterHandlers(valuePrefix, "String", "string", fieldsWithTypes(["string", "i64", "u64", "Uint8Array", "u128"]));
        this.generateBasicSetterHandlers(valuePrefix, "Boolean", "bool", fieldsWithTypes(["bool"]));
        var nonBasicFields = fields.filter(function (field) { return isReference(field.type); });
        this.sb.push("setNull(name: string): void {");
        nonBasicFields.forEach(function (field) {
            _this.sb.push("if (name == \"" + field.name + "\") {\n          " + valuePrefix + field.name + " = <" + _this.typeName(field.type) + ">null;\n          return;\n        }");
        });
        this.sb.push("\n        super.setNull(name);\n      }");
        this.sb.push("\n        pushObject(name: string): bool {");
        this.sb.push("if (!this.handledRoot) {\n        assert(name == null || name.length == 0);\n        this.handledRoot = true;\n        return true;\n      } else {\n        assert(name != null || name.length != 0);\n      }");
        this.generatePushHandler(valuePrefix, nonBasicFields.filter(function (field) { return !_this.isArrayType(field.type); }));
        this.sb.push("\n          return super.pushObject(name);\n        }");
        this.sb.push("\n        pushArray(name: string): bool {");
        this.generatePushHandler(valuePrefix, nonBasicFields.filter(function (field) { return _this.isArrayType(field.type); }));
        this.sb.push("\n          return super.pushArray(name);\n        }");
    };
    NEARBindingsBuilder.prototype.generateBasicSetterHandlers = function (valuePrefix, setterType, setterValueType, matchingFields) {
        var _this = this;
        if (matchingFields.length > 0) {
            this.sb.push("set" + setterType + "(name: string, value: " + setterValueType + "): void {");
            matchingFields.forEach(function (field) {
                // tslint:disable-next-line: as-variables
                var fieldTypeName = _this.typeName(field.type);
                if (setterType == "string" && fieldTypeName != "string") {
                    if (fieldTypeName == "Uint8Array") {
                        _this.sb.push("if (name == \"" + field.name + "\") {\n                " + valuePrefix + field.name + " = base64.decode(value);\n                return;\n              }");
                    }
                    else if (fieldTypeName == "u128") {
                        _this.sb.push("if (name == \"" + field.name + "\") {\n                " + valuePrefix + field.name + " = u128.fromString(value);\n                return;\n              }");
                    }
                    else {
                        var className = _this.typeName(field.type) === "u64" ? "U64" : "I64";
                        _this.sb.push("if (name == \"" + field.name + "\") {\n                " + valuePrefix + field.name + " = " + className + ".parseInt(value);\n                return;\n              }");
                    }
                }
                else {
                    _this.sb.push("if (name == \"" + field.name + "\") {\n              " + valuePrefix + field.name + " = <" + fieldTypeName + ">value;\n              return;\n            }");
                }
            });
            this.sb.push("\n          super.set" + setterType + "(name, value);\n        }");
        }
    };
    NEARBindingsBuilder.prototype.generatePushHandler = function (valuePrefix, fields) {
        var _this = this;
        fields.forEach(function (field) {
            if (!(_this.typeName(field.type) in _this.typeMapping)) {
                if (_this.isArrayType(field.type)) {
                    _this.sb.push("if (name == \"" + field.name + "\") {\n              " + valuePrefix + field.name + " = __near_decode_" + _this.encodeType(field.type) + "(this.buffer, this.decoder.state);\n              return false;\n            }");
                }
                else {
                    _this.sb.push("if (name == \"" + field.name + "\") {\n              " + valuePrefix + field.name + " = " + _this.encodeType(field.type) + ".decode(this.buffer, this.decoder.state);\n              return false;\n            }");
                }
            }
        });
    };
    NEARBindingsBuilder.prototype.generateArrayHandlerMethods = function (valuePrefix, fieldType) {
        var fieldTypeName = this.typeName(fieldType);
        var setterTypeName = this.typeMapping[fieldTypeName];
        if (setterTypeName) {
            if (fieldTypeName == "u64" || fieldTypeName == "i64") {
                var className = fieldTypeName == "u64" ? "U64" : "I64";
                this.sb.push("setString(name: string, value: string): void {\n            " + valuePrefix + ".push(" + className + ".parseInt(value));\n          }");
            }
            else if (fieldTypeName == "Uint8Array") {
                this.sb.push("setString(name: string, value: string): void {\n            " + valuePrefix + ".push(base64.decode(value));\n          }");
            }
            else {
                var valueType = fieldTypeName;
                if (valueType == "u32" || valueType == "i32") {
                    valueType = "i64";
                }
                this.sb
                    .push("set" + setterTypeName + "(name: string, value: " + valueType + "): void {\n            " + valuePrefix + ".push(<" + fieldTypeName + ">value);\n          }");
            }
            this.sb.push("setNull(name: string): void {\n          " + valuePrefix + ".push(<" + fieldTypeName + ">null);\n        }\n        pushArray(name: string): bool {\n          assert((name == null || name.length == 0) && !this.handledRoot);\n          this.handledRoot = true;\n          return true;\n        }");
        }
        else {
            this.sb.push("pushObject(name: string): bool {\n          " + valuePrefix + ".push(__near_decode_" + this.encodeType(fieldType) + "(this.buffer, this.decoder.state));\n          return false;\n        }\n        pushArray(name: string): bool {\n          assert(name == null || name.length == 0);\n          if (!this.handledRoot) {\n            this.handledRoot = true;\n            return true;\n          }\n          " + valuePrefix + ".push(__near_decode_" + this.encodeType(fieldType) + "(this.buffer, this.decoder.state));\n          return false;\n        }");
        }
    };
    NEARBindingsBuilder.prototype.generateEncodeFunction = function (type) {
        var _this = this;
        if (type instanceof assemblyscript_1.TypeNode && !isReference(type)) {
            return;
        }
        var typeName = this.typeName(type);
        var encodedTypeName = this.encodeType(typeName);
        if (this.generatedEncodeFunctions.has(encodedTypeName) ||
            typeName in this.typeMapping) {
            return;
        }
        this.generatedEncodeFunctions.add(encodedTypeName);
        // let methodName = `__near_encode_${encodedTypeName}`;
        // if (this.tryUsingImport(type, methodName)) {
        //   return;
        // }
        if (this.isArrayType(type)) {
            var arrayType = type;
            var typeArg = arrayType.typeArguments[0];
            // Array
            if (this.isArrayType(typeArg)) {
                this.generateEncodeFunction(typeArg);
            }
            this.sb.push("@global\n        export function __near_encode_" + encodedTypeName + "(\n            value: " + typeName + ",\n            encoder: JSONEncoder): void {");
            this.sb.push("for (let i = 0; i < value.length; i++) {");
            this.generateFieldEncoder(arrayType.typeArguments[0], "null", "value[i]");
            this.sb.push("}");
        }
        else {
            // Object
            this.getFields(type).forEach(function (field) {
                _this.generateEncodeFunction(field.type);
            });
            this.sb.push("@global\n        export function __near_encode_" + encodedTypeName + "(\n            value: " + typeName + ",\n            encoder: JSONEncoder): void {");
            this.getFields(type).forEach(function (field) {
                var fieldType = field.type;
                var fieldName = field.name;
                var sourceExpr = "value." + fieldName;
                _this.generateFieldEncoder(fieldType, "\"" + fieldName + "\"", sourceExpr);
            });
        }
        this.sb.push("}");
        var className = this.typeName(type);
        // this.classInjections.set(type.classReference.name, injections);
    };
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
    NEARBindingsBuilder.prototype.generateHandler = function (type) {
        var typeName = this.encodeType(type);
        this.sb
            .push("export class __near_JSONHandler_" + typeName + " extends ThrowingJSONHandler {\n        buffer: Uint8Array;\n        decoder: JSONDecoder<__near_JSONHandler_" + typeName + ">;\n        handledRoot: boolean = false;\n        value: " + this.typeName(type) + ";\n\n        constructor(value_: " + this.typeName(type) + ") {\n          super();\n          this.value = value_;\n        }\n      ");
        if (this.isArrayType(type)) {
            this.generateArrayHandlerMethods("this.value", type.typeArguments[0]);
        }
        else {
            this.generateHandlerMethods("this.value.", this.getFields(type));
        }
        this.sb.push("}\n");
    };
    NEARBindingsBuilder.prototype.encodeType = function (type) {
        var str = typeof type === "string" ? type : this.typeName(type);
        return (str
            //@ts-ignore
            .replace(/_/g, "__")
            .replace(/>/g, "")
            .replace(/</g, "_"));
    };
    NEARBindingsBuilder.prototype.typeName = function (type) {
        if (type instanceof assemblyscript_1.TypeNode) {
            return sourceBuilder_1.ASTBuilder.build(type);
        }
        var className = toString(type.name);
        if (type.isGeneric) {
            className += "<" + type.typeParameters.map(toString).join(", ") + ">";
        }
        return className;
    };
    NEARBindingsBuilder.prototype.generateDecodeFunction = function (type) {
        var _this = this;
        if (type instanceof assemblyscript_1.TypeNode && !isReference(type)) {
            return;
        }
        var typeName = this.typeName(type);
        var encodedTypeName = this.encodeType(typeName);
        if (this.generatedDecodeFunctions.has(encodedTypeName) ||
            typeName in this.typeMapping) {
            return;
        }
        this.generatedDecodeFunctions.add(encodedTypeName);
        // var methodName = `__near_decode_${encodedTypeName}`;
        // if (this.tryUsingImport(type, methodName)) {
        //   return;
        // }
        this.generateHandler(type);
        if (this.isArrayType(type)) {
            assert(type instanceof assemblyscript_1.NamedTypeNode);
            var arrayElementType = type.typeArguments[0];
            // Array
            if (this.isArrayType(arrayElementType) || !isReference(type)) {
                this.generateDecodeFunction(arrayElementType);
            }
        }
        else {
            // Object
            this.getFields(type).forEach(function (field) {
                _this.generateDecodeFunction(field.type);
            });
        }
        this.sb.push("@global\n      export function __near_decode_" + encodedTypeName + "(\n          buffer: Uint8Array, state: DecoderState | null, value: " + typeName + " | null = null):" + typeName + " {\n        if (value == null) {\n          value = new " + typeName + "();\n        }\n        let handler = new __near_JSONHandler_" + encodedTypeName + "(value!);\n        handler.buffer = buffer;\n        handler.decoder = new JSONDecoder<__near_JSONHandler_" + encodedTypeName + ">(handler);\n        handler.decoder.deserialize(buffer, state);\n        return value!;\n      }\n");
    };
    NEARBindingsBuilder.prototype.generateFieldEncoder = function (fieldType, fieldExpr, sourceExpr) {
        var fieldTypeName = this.typeName(fieldType);
        var setterType = this.typeMapping[fieldTypeName];
        if (!setterType) {
            // Object / array
            var pushType = this.isArrayType(fieldType) ? "Array" : "Object";
            if (this.isArrayType(fieldType)) {
                this.sb.push("if (" + sourceExpr + " != null) {\n              encoder.push" + pushType + "(" + fieldExpr + ");\n              __near_encode_" + this.encodeType(fieldType) + "(" + sourceExpr + ", encoder);\n              encoder.pop" + pushType + "();\n            } else {\n              encoder.setNull(" + fieldExpr + ");\n            }");
            }
            else {
                this.sb.push("if (" + sourceExpr + " != null) {\n              " + sourceExpr + ".encode(encoder, " + fieldExpr + ");\n            } else {\n              encoder.setNull(" + fieldExpr + ");\n            }");
            }
        }
        else {
            // Basic types
            if (this.nonNullableTypes.indexOf(fieldTypeName) != -1) {
                if (["i64", "u64"].indexOf(fieldTypeName) != -1) {
                    this.sb.push("encoder.set" + setterType + "(" + fieldExpr + ", " + sourceExpr + ".toString());");
                }
                else {
                    this.sb.push("encoder.set" + setterType + "(" + fieldExpr + ", " + sourceExpr + ");");
                }
            }
            else if (fieldTypeName == "Uint8Array") {
                this.sb.push("if (" + sourceExpr + " != null) {\n              encoder.setString(" + fieldExpr + ", base64.encode(" + sourceExpr + "));\n            } else {\n              encoder.setNull(" + fieldExpr + ");\n            };");
            }
            else if (fieldTypeName == "u128") {
                this.sb.push("if (<" + fieldTypeName + ">null != " + sourceExpr + ") {\n              encoder.setString(" + fieldExpr + ", " + sourceExpr + ".toString());\n            } else {\n              encoder.setNull(" + fieldExpr + ");\n            };");
            }
            else {
                this.sb.push("if (" + sourceExpr + " != null) {\n              encoder.set" + setterType + "(" + fieldExpr + ", " + sourceExpr + ");\n            } else {\n              encoder.setNull(" + fieldExpr + ");\n            }");
            }
        }
    };
    NEARBindingsBuilder.prototype.isArrayType = function (type) {
        return !!(type instanceof assemblyscript_1.NamedTypeNode &&
            toString(type).startsWith("Array") &&
            type.typeArguments &&
            type.typeArguments.length > 0);
    };
    NEARBindingsBuilder.prototype.getFields = function (type) {
        var _class = type instanceof assemblyscript_1.ClassDeclaration
            ? type
            : this.exportedClasses.get(toString(type));
        if (_class == null) {
            return [];
        }
        return _class.members
            .filter(function (member) { return member instanceof assemblyscript_1.FieldDeclaration; })
            .map(function (param) {
            return { name: toString(param.name), type: param.type };
        });
    };
    NEARBindingsBuilder.prototype.build = function (sources) {
        var _this = this;
        var classDeclarations = new Map();
        var funcDeclarations = new Map();
        sources.forEach(function (source) {
            classDeclarations.set(source, []);
            funcDeclarations.set(source, []);
            source.statements.forEach(function (stmt) {
                if (stmt instanceof assemblyscript_1.ClassDeclaration)
                    classDeclarations.get(source).push(stmt);
                if (stmt instanceof assemblyscript_1.FunctionDeclaration &&
                    (stmt.is(assemblyscript_1.CommonFlags.EXPORT) || stmt.is(assemblyscript_1.CommonFlags.MODULE_EXPORT)) &&
                    !isEntry(source)) {
                    funcDeclarations.get(source).push(stmt);
                }
            });
        });
        var funcsToWrap = [];
        var funcRename = function (node) {
            if (!(node instanceof assemblyscript_1.FunctionDeclaration))
                return node;
            if (!(node.is(assemblyscript_1.CommonFlags.MODULE_EXPORT) || node.is(assemblyscript_1.CommonFlags.EXPORT)) ||
                isEntry(node.range.source))
                return node;
            node.flags = node.is(assemblyscript_1.CommonFlags.MODULE_EXPORT)
                ? node.flags ^ assemblyscript_1.CommonFlags.MODULE_EXPORT
                : node.flags ^ assemblyscript_1.CommonFlags.EXPORT;
            node.name.symbol = "wrapped_" + node.name.symbol;
            node.name.text = "wrapped_" + node.name.text;
            return node;
        };
        var newSource = function (source) {
            _this.sb = [
                "import { storage, near, base64, return_value } from \"near-runtime-ts\";\nimport { JSONEncoder } from \"assemblyscript-json\";\nimport { JSONDecoder, ThrowingJSONHandler, DecoderState } from \"assemblyscript-json\";"
            ];
            funcDeclarations.get(source).forEach(function (func) {
                _this.generateArgsParser(func);
                _this.generateWrapperFunction(func);
            });
            classDeclarations.get(source).forEach(function (_class) {
                _this.generateDecodeFunction(_class);
                _this.generateEncodeFunction(_class);
            });
            var sourceText = source.statements.map(function (stmt) {
                var str = sourceBuilder_1.ASTBuilder.build(stmt, funcRename);
                if (stmt instanceof assemblyscript_1.ClassDeclaration) {
                    str = str.slice(0, str.lastIndexOf("}"));
                    var className = toString(stmt.name);
                    str += "\n  static decode(json: Uint8Array, state: DecoderState | null = null): " + className + " {\n    let value = new " + className + "();\n    value.decode(json, state);\n    return value;\n  }\n\n  decode(json: Uint8Array, state: DecoderState | null): " + className + " {\n    __near_decode_" + className + "(json, state, this);\n    return this;\n  }\n\n  private _encoder(encoder: JSONEncoder, name: string | null): JSONEncoder {\n    encoder.pushObject(name);\n    __near_encode_" + className + "(this, encoder);\n    encoder.popObject();\n    return encoder;\n  }\n\n  encode(_encoder: JSONEncoder | null = null, name: string | null = \"\"): JSONEncoder {\n    let encoder = _encoder != null ? _encoder : new JSONEncoder();\n    return this._encoder(encoder!, name);\n  }\n\n  serialize(): Uint8Array {\n    return this.encode().serialize();\n  }\n\n  toString(): string {\n    return this._encoder().toString();\n  }\n}";
                }
                return str;
            });
            return _this.sb.concat(sourceText).join("\n");
        };
        sources.forEach(function (source) {
            _this.parser.donelog.delete(source.internalPath);
            _this.parser.seenlog.delete(source.internalPath);
            _this.parser.program.sources = _this.parser.program.sources.filter(function (_source) { return _source !== source; });
            var sourceText = newSource(source);
            _this.parser.parseFile(sourceText, (isEntry(source) ? "" : "./") + source.normalizedPath, isEntry(source));
        });
    };
    NEARBindingsBuilder.prototype.copyImports = function (mainSource) {
        var _this = this;
        this.getImports(mainSource).forEach(function (statement) {
            if (statement.declarations) {
                var declarationsStr = statement
                    .declarations.map(function (declaration) {
                    return declaration.foreignName.text + " as " + declaration.name.text;
                })
                    .join(",");
                _this.sb.push("import {" + declarationsStr + "} from \"" + statement.path.value + "\";");
            }
        });
    };
    NEARBindingsBuilder.prototype.getImports = function (source) {
        return (source.statements.filter(function (statement) { return statement.kind == assemblyscript_1.NodeKind.IMPORT; }));
    };
    NEARBindingsBuilder.prototype.getExports = function (source) {
        var declarations = (source.statements.filter(function (statement) {
            return statement.kind == assemblyscript_1.NodeKind.FUNCTIONDECLARATION ||
                statement.kind == assemblyscript_1.NodeKind.CLASSDECLARATION;
        }));
        return declarations.filter(function (d) { return d.is(assemblyscript_1.CommonFlags.EXPORT); });
    };
    return NEARBindingsBuilder;
}(transformer_1.Transformer));
function afterParse(parser) {
    var files = NEARBindingsBuilder.nearFiles(parser);
    NEARBindingsBuilder.build(parser, files);
}
exports.afterParse = afterParse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDJEQUEyRDs7Ozs7Ozs7Ozs7Ozs7O0FBRTNELGlEQThCd0I7QUFDeEIsNkNBQTRDO0FBRTVDLGlEQUE2QztBQU83QyxTQUFTLFNBQVMsQ0FBQyxJQUFlO0lBQ2hDLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSx5QkFBUSxDQUFDLE9BQU8sQ0FBQztBQUN2QyxDQUFDO0FBRUQsU0FBUyxnQkFBZ0IsQ0FBQyxJQUFZO0lBQ3BDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDN0MsQ0FBQztBQUVELFNBQVMsUUFBUSxDQUFDLElBQVU7SUFDMUIsT0FBTywwQkFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNoQyxDQUFDO0FBRUQsU0FBUyxPQUFPLENBQUMsTUFBYztJQUM3QixPQUFPLE1BQU0sQ0FBQyxVQUFVLElBQUksMkJBQVUsQ0FBQyxVQUFVLENBQUM7QUFDcEQsQ0FBQztBQUVELFNBQVMsV0FBVyxDQUFDLElBQWM7SUFDakMsSUFBSSxXQUFXLEdBQUc7UUFDaEIsS0FBSztRQUNMLEtBQUs7UUFDTCxRQUFRO1FBQ1IsTUFBTTtRQUNOLEtBQUs7UUFDTCxLQUFLO1FBQ0wsWUFBWTtRQUNaLE1BQU07UUFDTixTQUFTO0tBQ1YsQ0FBQztJQUNGLE9BQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQy9DLENBQUM7QUFFRCxpRUFBaUU7QUFDakU7SUFBa0MsdUNBQVc7SUEyQjNDLDZCQUFZLE1BQWM7UUFBMUIsWUFDRSxrQkFBTSxNQUFNLENBQUMsU0FDZDtRQTVCTyxpQkFBVyxHQUE4QjtZQUMvQyxHQUFHLEVBQUUsU0FBUztZQUNkLEdBQUcsRUFBRSxTQUFTO1lBQ2QsR0FBRyxFQUFFLFFB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RCxDQUFDO2FBQ0g7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyx3Q0FBVSxHQUFsQixVQUFtQixNQUFjO1FBQy9CLE9BQTBCLENBQ3hCLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQUEsU0FBUyxJQUFJLE9BQUEsU0FBUyxDQUFDLElBQUksSUFBSSx5QkFBUSxDQUFDLE1BQU0sRUFBakMsQ0FBaUMsQ0FBQyxDQUN6RSxDQUFDO0lBQ0osQ0FBQztJQUVPLHdDQUFVLEdBQWxCLFVBQW1CLE1BQWM7UUFDL0IsSUFBSSxZQUFZLEdBQTJCLENBQ3pDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUN0QixVQUFBLFNBQVM7WUFDUCxPQUFBLFNBQVMsQ0FBQyxJQUFJLElBQUkseUJBQVEsQ0FBQyxtQkFBbUI7Z0JBQzlDLFNBQVMsQ0FBQyxJQUFJLElBQUkseUJBQVEsQ0FBQyxnQkFBZ0I7UUFEM0MsQ0FDMkMsQ0FDOUMsQ0FDRixDQUFDO1FBQ0YsT0FBTyxZQUFZLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyw0QkFBVyxDQUFDLE1BQU0sQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQTF0QkQsQ0FBa0MseUJBQVcsR0EwdEI1QztBQUVELFNBQWdCLFVBQVUsQ0FBQyxNQUFjO0lBQ3ZDLElBQUksS0FBSyxHQUFHLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsRCxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFIRCxnQ0FHQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOiBuby12b2lkLWV4cHJlc3Npb24gYXMtdHlwZXMgYXMtdmFyaWFibGVzXG5cbmltcG9ydCB7XG4gIFNvdXJjZSxcbiAgRXhwb3J0c1dhbGtlcixcbiAgQ2xhc3MsXG4gIFJhbmdlLFxuICBQcm9ncmFtLFxuICBHbG9iYWwsXG4gIEVudW0sXG4gIENvbW1vbkZsYWdzLFxuICBJbnRlcmZhY2UsXG4gIEZpZWxkLFxuICBFbGVtZW50LFxuICBUeXBlLFxuICBJbXBvcnRTdGF0ZW1lbnQsXG4gIE5vZGVLaW5kLFxuICBEZWNsYXJhdGlvblN0YXRlbWVudCxcbiAgRnVuY3Rpb24sXG4gIFR5cGVLaW5kLFxuICBQYXJzZXIsXG4gIENvbW1lbnROb2RlLFxuICBDb21tZW50S2luZCxcbiAgRmlsZSxcbiAgQ2xhc3NEZWNsYXJhdGlvbixcbiAgRnVuY3Rpb25EZWNsYXJhdGlvbixcbiAgVHlwZU5vZGUsXG4gIEZpZWxkRGVjbGFyYXRpb24sXG4gIFN0YXRlbWVudCxcbiAgTm9kZSxcbiAgTmFtZWRUeXBlTm9kZSxcbiAgU291cmNlS2luZFxufSBmcm9tIFwiYXNzZW1ibHlzY3JpcHRcIjtcbmltcG9ydCB7IFRyYW5zZm9ybWVyIH0gZnJvbSBcIi4vdHJhbnNmb3JtZXJcIjtcblxuaW1wb3J0IHsgQVNUQnVpbGRlciB9IGZyb20gXCIuL3NvdXJjZUJ1aWxkZXJcIjtcblxuaW50ZXJmYWNlIFNpbXBsZUZpZWxkIHtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlOiBUeXBlTm9kZTtcbn1cblxuZnVuY3Rpb24gaXNDb21tZW50KHN0bXQ6IFN0YXRlbWVudCk6IGJvb2xlYW4ge1xuICByZXR1cm4gc3RtdC5raW5kID09IE5vZGVLaW5kLkNPTU1FTlQ7XG59XG5cbmZ1bmN0aW9uIGhhc05lYXJEZWNvcmF0b3Ioc3RtdDogU291cmNlKTogYm9vbGVhbiB7XG4gIHJldHVybiBzdG10LnRleHQuc3RhcnRzV2l0aChcIi8vQG5lYXJmaWxlXCIpO1xufVxuXG5mdW5jdGlvbiB0b1N0cmluZyhub2RlOiBOb2RlKTogc3RyaW5nIHtcbiAgcmV0dXJuIEFTVEJ1aWxkZXIuYnVpbGQobm9kZSk7XG59XG5cbmZ1bmN0aW9uIGlzRW50cnkoc291cmNlOiBTb3VyY2UpOiBib29sZWFuIHtcbiAgcmV0dXJuIHNvdXJjZS5zb3VyY2VLaW5kID09IFNvdXJjZUtpbmQuVVNFUl9FTlRSWTtcbn1cblxuZnVuY3Rpb24gaXNSZWZlcmVuY2UodHlwZTogVHlwZU5vZGUpOiBib29sZWFuIHtcbiAgbGV0IHNpbXBsZVR5cGVzID0gW1xuICAgIFwiaTMyXCIsXG4gICAgXCJ1MzJcIixcbiAgICBcInN0cmluZ1wiLFxuICAgIFwiYm9vbFwiLFxuICAgIFwiaTY0XCIsXG4gICAgXCJ1NjRcIixcbiAgICBcIlVpbnQ4QXJyYXlcIixcbiAgICBcInUxMjhcIixcbiAgICBcImJvb2xlYW5cIlxuICBdO1xuICByZXR1cm4gIXNpbXBsZVR5cGVzLmluY2x1ZGVzKHRvU3RyaW5nKHR5cGUpKTtcbn1cblxuLy8gVE9ETzogRXh0cmFjdCB0aGlzIGludG8gc2VwYXJhdGUgbW9kdWxlLCBwcmVmZXJyYWJsZSBwbHVnZ2FibGVcbmNsYXNzIE5FQVJCaW5kaW5nc0J1aWxkZXIgZXh0ZW5kcyBUcmFuc2Zvcm1lciB7XG4gIHByaXZhdGUgdHlwZU1hcHBpbmc6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XG4gICAgaTMyOiBcIkludGVnZXJcIixcbiAgICB1MzI6IFwiSW50ZWdlclwiLFxuICAgIGk2NDogXCJTdHJpbmdcIixcbiAgICB1NjQ6IFwiU3RyaW5nXCIsXG4gICAgc3RyaW5nOiBcIlN0cmluZ1wiLFxuICAgIGJvb2w6IFwiQm9vbGVhblwiLFxuICAgIFVpbnQ4QXJyYXk6IFwiU3RyaW5nXCIsXG4gICAgdTEyODogXCJTdHJpbmdcIlxuICB9O1xuXG4gIHByaXZhdGUgbm9uTnVsbGFibGVUeXBlcyA9IFtcImkzMlwiLCBcInUzMlwiLCBcImk2NFwiLCBcInU2NFwiLCBcImJvb2xcIl07XG5cbiAgcHJpdmF0ZSBzYjogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBnZW5lcmF0ZWRFbmNvZGVGdW5jdGlvbnMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgcHJpdmF0ZSBnZW5lcmF0ZWREZWNvZGVGdW5jdGlvbnMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgcHJpdmF0ZSBleHBvcnRlZENsYXNzZXM6IE1hcDxzdHJpbmcsIENsYXNzRGVjbGFyYXRpb24+ID0gbmV3IE1hcCgpO1xuICBwcml2YXRlIGV4cG9ydGVkRnVuY3Rpb25zOiBGdW5jdGlvbltdID0gW107XG4gIGNsYXNzSW5qZWN0aW9ucyA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG4gIGNsYXNzUmFuZ2VzID0gbmV3IE1hcDxzdHJpbmcsIFJhbmdlPigpO1xuICBnZW5lcmF0ZWRBcmdQYXJzZXJGdW5jdGlvbnM6IFNldDxzdHJpbmc+ID0gbmV3IFNldCgpO1xuXG4gIHN0YXRpYyBidWlsZChwYXJzZXI6IFBhcnNlciwgc291cmNlOiBTb3VyY2VbXSk6IHZvaWQge1xuICAgIG5ldyBORUFSQmluZGluZ3NCdWlsZGVyKHBhcnNlcikuYnVpbGQoc291cmNlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHBhcnNlcjogUGFyc2VyKSB7XG4gICAgc3VwZXIocGFyc2VyKTtcbiAgfVxuXG4gIHN0YXRpYyBuZWFyRmlsZXMocGFyc2VyOiBQYXJzZXIpOiBTb3VyY2VbXSB7XG4gICAgcmV0dXJuIHBhcnNlci5wcm9ncmFtLnNvdXJjZXMuZmlsdGVyKGhhc05lYXJEZWNvcmF0b3IpO1xuICB9XG5cbiAgd2FsaygpOiB2b2lkIHt9XG5cbiAgdmlzaXRDbGFzc0RlY2xhcmF0aW9uKG5vZGU6IENsYXNzRGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5leHBvcnRlZENsYXNzZXMuaGFzKHRvU3RyaW5nKG5vZGUubmFtZSkpKSByZXR1cm47XG4gICAgdGhpcy5jbGFzc1Jhbmdlcy5zZXQodG9TdHJpbmcobm9kZS5uYW1lKSwgbm9kZS5yYW5nZSk7XG4gICAgLy8gaWYgKCFub2RlLmlzKENvbW1vbkZsYWdzLk1PRFVMRV9FWFBPUlQpKXtcbiAgICAvLyAgIHJldHVybjtcbiAgICAvLyB9XG4gICAgdGhpcy5leHBvcnRlZENsYXNzZXMuc2V0KHRvU3RyaW5nKG5vZGUubmFtZSksIG5vZGUpO1xuICB9XG5cbiAgLy8gdmlzaXRGdW5jdGlvbkRlY2xhcmF0aW9uKG5vZGU6IEZ1bmN0aW9uRGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgLy8gICBpZiAoIW5vZGUuaXMoQ29tbW9uRmxhZ3MuTU9EVUxFX0VYUE9SVCkpIHtcbiAgLy8gICAgIHJldHVybjtcbiAgLy8gICB9XG4gIC8vICAgdGhpcy5nZW5lcmF0ZUFyZ3NQYXJzZXIobm9kZSk7XG4gIC8vICAgdGhpcy5nZW5lcmF0ZVdyYXBwZXJGdW5jdGlvbihub2RlKTtcbiAgLy8gICB0aGlzLmV4cG9ydGVkRnVuY3Rpb25zLnB1c2gobm9kZSk7XG5cbiAgLy8gfVxuXG4gIC8vIHZpc2l0Q2xhc3MobmFtZTogc3RyaW5nLCBlbGVtZW50OiBDbGFzcyk6IHZvaWQge1xuICAvLyAgIHRoaXMuY2xhc3NSYW5nZXMuc2V0KGVsZW1lbnQubmFtZSwgZWxlbWVudC5kZWNsYXJhdGlvbi5yYW5nZSk7XG4gIC8vICAgaWYgKCFlbGVtZW50LmlzKENvbW1vbkZsYWdzLk1PRFVMRV9FWFBPUlQpKSB7XG4gIC8vICAgICByZXR1cm47XG4gIC8vICAgfVxuICAvLyAgIHRoaXMuZXhwb3J0ZWRDbGFzc2VzLnB1c2goZWxlbWVudCk7XG4gIC8vIH1cblxuICAvLyB2aXNpdEZ1bmN0aW9uKG5hbWU6IHN0cmluZywgZWxlbWVudDogRnVuY3Rpb24pOiB2b2lkIHtcbiAgLy8gICBpZiAoIWVsZW1lbnQuaXMoQ29tbW9uRmxhZ3MuTU9EVUxFX0VYUE9SVCkpIHtcbiAgLy8gICAgIHJldHVybjtcbiAgLy8gICB9XG4gIC8vICAgdGhpcy5nZW5lcmF0ZUFyZ3NQYXJzZXIoZWxlbWVudCk7XG4gIC8vICAgdGhpcy5nZW5lcmF0ZVdyYXBwZXJGdW5jdGlvbihlbGVtZW50KTtcbiAgLy8gICB0aGlzLmV4cG9ydGVkRnVuY3Rpb25zLnB1c2goZWxlbWVudCk7XG4gIC8vIH1cblxuICBwcml2YXRlIGdlbmVyYXRlQXJnc1BhcnNlcihlbGVtZW50OiBGdW5jdGlvbkRlY2xhcmF0aW9uKTogdm9pZCB7XG4gICAgdmFyIHNpZ25hdHVyZSA9IGVsZW1lbnQuc2lnbmF0dXJlO1xuICAgIGxldCBuYW1lID0gdG9TdHJpbmcoZWxlbWVudC5uYW1lKTtcbiAgICB2YXIgYXJnczogU2ltcGxlRmllbGRbXSA9IHNpZ25hdHVyZS5wYXJhbWV0ZXJzLm1hcChwYXJhbSA9PiB7XG4gICAgICByZXR1cm4geyBuYW1lOiB0b1N0cmluZyhwYXJhbS5uYW1lKSwgdHlwZTogcGFyYW0udHlwZSB9O1xuICAgIH0pO1xuICAgIGFyZ3NcbiAgICAgIC5maWx0ZXIoYXJnID0+IHRoaXMuaXNBcnJheVR5cGUoYXJnLnR5cGUpKVxuICAgICAgLmZvckVhY2goZmllbGQgPT4gdGhpcy5nZW5lcmF0ZURlY29kZUZ1bmN0aW9uKGZpZWxkLnR5cGUpKTtcbiAgICB0aGlzLnNiLnB1c2goYFxuICAgICAgZXhwb3J0IGNsYXNzIF9fbmVhcl9BcmdzUGFyc2VyXyR7bmFtZX0gZXh0ZW5kcyBUaHJvd2luZ0pTT05IYW5kbGVyIHtcbiAgICAgICAgICBidWZmZXI6IFVpbnQ4QXJyYXk7XG4gICAgICAgICAgZGVjb2RlcjogSlNPTkRlY29kZXI8X19uZWFyX0FyZ3NQYXJzZXJfJHtuYW1lfT47XG4gICAgICAgICAgaGFuZGxlZFJvb3Q6IGJvb2xlYW4gPSBmYWxzZTtgKTtcbiAgICBpZiAoYXJncy5sZW5ndGggPiAwKSB7XG4gICAgICBhcmdzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICB0aGlzLnNiLnB1c2goXG4gICAgICAgICAgYF9fbmVhcl9wYXJhbV8ke2ZpZWxkLm5hbWV9OiAke3RoaXMudHlwZU5hbWUoZmllbGQudHlwZSl9O2BcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5nZW5lcmF0ZUhhbmRsZXJNZXRob2RzKFwidGhpcy5fX25lYXJfcGFyYW1fXCIsIGFyZ3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdlbmVyYXRlSGFuZGxlck1ldGhvZHMoXCJ0aGlzLl9fbmVhcl9wYXJhbV9cIiwgW10pO1xuICAgIH1cbiAgICB0aGlzLnNiLnB1c2goYH1gKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVXcmFwcGVyRnVuY3Rpb24oZWxlbWVudDogRnVuY3Rpb25EZWNsYXJhdGlvbikge1xuICAgIGxldCBzaWduYXR1cmUgPSBlbGVtZW50LnNpZ25hdHVyZTtcbiAgICBsZXQgcGFyYW1zID0gc2lnbmF0dXJlLnBhcmFtZXRlcnM7XG4gICAgbGV0IHJldHVyblR5cGUgPSBzaWduYXR1cmUucmV0dXJuVHlwZTtcbiAgICBpZiAodGhpcy5pc0FycmF5VHlwZShyZXR1cm5UeXBlKSkge1xuICAgICAgdGhpcy5nZW5lcmF0ZUVuY29kZUZ1bmN0aW9uKHJldHVyblR5cGUpO1xuICAgIH1cbiAgICBsZXQgbmFtZSA9IGVsZW1lbnQubmFtZS5zeW1ib2w7XG4gICAgdGhpcy5zYi5wdXNoKGBleHBvcnQgZnVuY3Rpb24gJHtuYW1lfSgpOiB2b2lkIHtcbiAgICAgICAgLy8gUmVhZGluZyBpbnB1dCBieXRlcy5cbiAgICAgICAgbGV0IGpzb24gPSBzdG9yYWdlLl9pbnRlcm5hbFJlYWRCeXRlcyg0LCAwLCAwKSE7XG4gICAgICAgIGxldCBoYW5kbGVyID0gbmV3IF9fbmVhcl9BcmdzUGFyc2VyXyR7bmFtZX0oKTtcbiAgICAgICAgaGFuZGxlci5idWZmZXIgPSBqc29uO1xuICAgICAgICBoYW5kbGVyLmRlY29kZXIgPSBuZXcgSlNPTkRlY29kZXI8X19uZWFyX0FyZ3NQYXJzZXJfJHtuYW1lfT4oaGFuZGxlcik7XG4gICAgICAgIGhhbmRsZXIuZGVjb2Rlci5kZXNlcmlhbGl6ZShqc29uKTtgKTtcbiAgICBpZiAodG9TdHJpbmcocmV0dXJuVHlwZSkgIT09IFwidm9pZFwiKSB7XG4gICAgICB0aGlzLnNiLnB1c2goYGxldCByZXN1bHQ6ICR7dG9TdHJpbmcocmV0dXJuVHlwZSl9ID0gd3JhcHBlZF8ke25hbWV9KGApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNiLnB1c2goYHdyYXBwZWRfJHtuYW1lfShgKTtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNiLnB1c2goXG4gICAgICAgIHBhcmFtc1xuICAgICAgICAgIC5tYXAocGFyYW1OYW1lID0+IGBoYW5kbGVyLl9fbmVhcl9wYXJhbV8ke3BhcmFtTmFtZS5uYW1lLnN5bWJvbH1gKVxuICAgICAgICAgIC5qb2luKFwiLFwiKVxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5zYi5wdXNoKFwiKTtcIik7XG4gICAgaWYgKHRvU3RyaW5nKHJldHVyblR5cGUpICE9PSBcInZvaWRcIikge1xuICAgICAgdGhpcy5zYi5wdXNoKGBcbiAgICAgICAgICBsZXQgZW5jb2RlciA9IG5ldyBKU09ORW5jb2RlcigpO1xuICAgICAgICBgKTtcbiAgICAgIHRoaXMuZ2VuZXJhdGVGaWVsZEVuY29kZXIocmV0dXJuVHlwZSwgXCJudWxsXCIsIFwicmVzdWx0XCIpO1xuICAgICAgdGhpcy5zYi5wdXNoKGBcbiAgICAgICAgICBsZXQgdmFsID0gZW5jb2Rlci5zZXJpYWxpemUoKTtcbiAgICAgICAgICByZXR1cm5fdmFsdWUodmFsLmJ5dGVMZW5ndGgsIDx1c2l6ZT52YWwuYnVmZmVyKTtcbiAgICAgICAgYCk7XG4gICAgfVxuICAgIHRoaXMuc2IucHVzaChgfWApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZUhhbmRsZXJNZXRob2RzKFxuICAgIHZhbHVlUHJlZml4OiBzdHJpbmcsXG4gICAgZmllbGRzOiBTaW1wbGVGaWVsZFtdXG4gICk6IHZvaWQge1xuICAgIHZhciBmaWVsZHNXaXRoVHlwZXMgPSAodHlwZXM6IHN0cmluZ1tdKTogU2ltcGxlRmllbGRbXSA9PlxuICAgICAgZmllbGRzLmZpbHRlcihmaWVsZCA9PiB0eXBlcy5pbmRleE9mKHRoaXMudHlwZU5hbWUoZmllbGQudHlwZSkpICE9IC0xKTtcblxuICAgIHRoaXMuZ2VuZXJhdGVCYXNpY1NldHRlckhhbmRsZXJzKFxuICAgICAgdmFsdWVQcmVmaXgsXG4gICAgICBcIkludGVnZXJcIixcbiAgICAgIFwiaTY0XCIsXG4gICAgICBmaWVsZHNXaXRoVHlwZXMoW1wiaTMyXCIsIFwidTMyXCJdKVxuICAgICk7XG4gICAgdGhpcy5nZW5lcmF0ZUJhc2ljU2V0dGVySGFuZGxlcnMoXG4gICAgICB2YWx1ZVByZWZpeCxcbiAgICAgIFwiU3RyaW5nXCIsXG4gICAgICBcInN0cmluZ1wiLFxuICAgICAgZmllbGRzV2l0aFR5cGVzKFtcInN0cmluZ1wiLCBcImk2NFwiLCBcInU2NFwiLCBcIlVpbnQ4QXJyYXlcIiwgXCJ1MTI4XCJdKVxuICAgICk7XG4gICAgdGhpcy5nZW5lcmF0ZUJhc2ljU2V0dGVySGFuZGxlcnMoXG4gICAgICB2YWx1ZVByZWZpeCxcbiAgICAgIFwiQm9vbGVhblwiLFxuICAgICAgXCJib29sXCIsXG4gICAgICBmaWVsZHNXaXRoVHlwZXMoW1wiYm9vbFwiXSlcbiAgICApO1xuXG4gICAgdmFyIG5vbkJhc2ljRmllbGRzID0gZmllbGRzLmZpbHRlcihmaWVsZCA9PiBpc1JlZmVyZW5jZShmaWVsZC50eXBlKSk7XG5cbiAgICB0aGlzLnNiLnB1c2goXCJzZXROdWxsKG5hbWU6IHN0cmluZyk6IHZvaWQge1wiKTtcbiAgICBub25CYXNpY0ZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgIHRoaXMuc2IucHVzaChgaWYgKG5hbWUgPT0gXCIke2ZpZWxkLm5hbWV9XCIpIHtcbiAgICAgICAgICAke3ZhbHVlUHJlZml4fSR7ZmllbGQubmFtZX0gPSA8JHt0aGlzLnR5cGVOYW1lKGZpZWxkLnR5cGUpfT5udWxsO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfWApO1xuICAgIH0pO1xuICAgIHRoaXMuc2IucHVzaChgXG4gICAgICAgIHN1cGVyLnNldE51bGwobmFtZSk7XG4gICAgICB9YCk7XG5cbiAgICB0aGlzLnNiLnB1c2goYFxuICAgICAgICBwdXNoT2JqZWN0KG5hbWU6IHN0cmluZyk6IGJvb2wge2ApO1xuICAgIHRoaXMuc2IucHVzaChgaWYgKCF0aGlzLmhhbmRsZWRSb290KSB7XG4gICAgICAgIGFzc2VydChuYW1lID09IG51bGwgfHwgbmFtZS5sZW5ndGggPT0gMCk7XG4gICAgICAgIHRoaXMuaGFuZGxlZFJvb3QgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFzc2VydChuYW1lICE9IG51bGwgfHwgbmFtZS5sZW5ndGggIT0gMCk7XG4gICAgICB9YCk7XG4gICAgdGhpcy5nZW5lcmF0ZVB1c2hIYW5kbGVyKFxuICAgICAgdmFsdWVQcmVmaXgsXG4gICAgICBub25CYXNpY0ZpZWxkcy5maWx0ZXIoZmllbGQgPT4gIXRoaXMuaXNBcnJheVR5cGUoZmllbGQudHlwZSkpXG4gICAgKTtcbiAgICB0aGlzLnNiLnB1c2goYFxuICAgICAgICAgIHJldHVybiBzdXBlci5wdXNoT2JqZWN0KG5hbWUpO1xuICAgICAgICB9YCk7XG4gICAgdGhpcy5zYi5wdXNoKGBcbiAgICAgICAgcHVzaEFycmF5KG5hbWU6IHN0cmluZyk6IGJvb2wge2ApO1xuICAgIHRoaXMuZ2VuZXJhdGVQdXNoSGFuZGxlcihcbiAgICAgIHZhbHVlUHJlZml4LFxuICAgICAgbm9uQmFzaWNGaWVsZHMuZmlsdGVyKGZpZWxkID0+IHRoaXMuaXNBcnJheVR5cGUoZmllbGQudHlwZSkpXG4gICAgKTtcbiAgICB0aGlzLnNiLnB1c2goYFxuICAgICAgICAgIHJldHVybiBzdXBlci5wdXNoQXJyYXkobmFtZSk7XG4gICAgICAgIH1gKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVCYXNpY1NldHRlckhhbmRsZXJzKFxuICAgIHZhbHVlUHJlZml4OiBzdHJpbmcsXG4gICAgc2V0dGVyVHlwZTogc3RyaW5nLFxuICAgIHNldHRlclZhbHVlVHlwZTogc3RyaW5nLFxuICAgIG1hdGNoaW5nRmllbGRzOiBTaW1wbGVGaWVsZFtdXG4gICkge1xuICAgIGlmIChtYXRjaGluZ0ZpZWxkcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNiLnB1c2goXG4gICAgICAgIGBzZXQke3NldHRlclR5cGV9KG5hbWU6IHN0cmluZywgdmFsdWU6ICR7c2V0dGVyVmFsdWVUeXBlfSk6IHZvaWQge2BcbiAgICAgICk7XG4gICAgICBtYXRjaGluZ0ZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBhcy12YXJpYWJsZXNcbiAgICAgICAgbGV0IGZpZWxkVHlwZU5hbWUgPSB0aGlzLnR5cGVOYW1lKGZpZWxkLnR5cGUpO1xuICAgICAgICBpZiAoc2V0dGVyVHlwZSA9PSBcInN0cmluZ1wiICYmIGZpZWxkVHlwZU5hbWUgIT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIGlmIChmaWVsZFR5cGVOYW1lID09IFwiVWludDhBcnJheVwiKSB7XG4gICAgICAgICAgICB0aGlzLnNiLnB1c2goYGlmIChuYW1lID09IFwiJHtmaWVsZC5uYW1lfVwiKSB7XG4gICAgICAgICAgICAgICAgJHt2YWx1ZVByZWZpeH0ke2ZpZWxkLm5hbWV9ID0gYmFzZTY0LmRlY29kZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9YCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChmaWVsZFR5cGVOYW1lID09IFwidTEyOFwiKSB7XG4gICAgICAgICAgICB0aGlzLnNiLnB1c2goYGlmIChuYW1lID09IFwiJHtmaWVsZC5uYW1lfVwiKSB7XG4gICAgICAgICAgICAgICAgJHt2YWx1ZVByZWZpeH0ke2ZpZWxkLm5hbWV9ID0gdTEyOC5mcm9tU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1gKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMudHlwZU5hbWUoZmllbGQudHlwZSkgPT09IFwidTY0XCIgPyBcIlU2NFwiIDogXCJJNjRcIjtcbiAgICAgICAgICAgIHRoaXMuc2IucHVzaChgaWYgKG5hbWUgPT0gXCIke2ZpZWxkLm5hbWV9XCIpIHtcbiAgICAgICAgICAgICAgICAke3ZhbHVlUHJlZml4fSR7ZmllbGQubmFtZX0gPSAke2NsYXNzTmFtZX0ucGFyc2VJbnQodmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfWApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNiLnB1c2goYGlmIChuYW1lID09IFwiJHtmaWVsZC5uYW1lfVwiKSB7XG4gICAgICAgICAgICAgICR7dmFsdWVQcmVmaXh9JHtmaWVsZC5uYW1lfSA9IDwke2ZpZWxkVHlwZU5hbWV9PnZhbHVlO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9YCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5zYi5wdXNoKGBcbiAgICAgICAgICBzdXBlci5zZXQke3NldHRlclR5cGV9KG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfWApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVQdXNoSGFuZGxlcih2YWx1ZVByZWZpeDogc3RyaW5nLCBmaWVsZHM6IFNpbXBsZUZpZWxkW10pIHtcbiAgICBmaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICBpZiAoISh0aGlzLnR5cGVOYW1lKGZpZWxkLnR5cGUpIGluIHRoaXMudHlwZU1hcHBpbmcpKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQXJyYXlUeXBlKGZpZWxkLnR5cGUpKSB7XG4gICAgICAgICAgdGhpcy5zYi5wdXNoKGBpZiAobmFtZSA9PSBcIiR7ZmllbGQubmFtZX1cIikge1xuICAgICAgICAgICAgICAke3ZhbHVlUHJlZml4fSR7ZmllbGQubmFtZX0gPSBfX25lYXJfZGVjb2RlXyR7dGhpcy5lbmNvZGVUeXBlKFxuICAgICAgICAgICAgZmllbGQudHlwZVxuICAgICAgICAgICl9KHRoaXMuYnVmZmVyLCB0aGlzLmRlY29kZXIuc3RhdGUpO1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zYi5wdXNoKGBpZiAobmFtZSA9PSBcIiR7ZmllbGQubmFtZX1cIikge1xuICAgICAgICAgICAgICAke3ZhbHVlUHJlZml4fSR7ZmllbGQubmFtZX0gPSAke3RoaXMuZW5jb2RlVHlwZShcbiAgICAgICAgICAgIGZpZWxkLnR5cGVcbiAgICAgICAgICApfS5kZWNvZGUodGhpcy5idWZmZXIsIHRoaXMuZGVjb2Rlci5zdGF0ZSk7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZUFycmF5SGFuZGxlck1ldGhvZHMoXG4gICAgdmFsdWVQcmVmaXg6IHN0cmluZyxcbiAgICBmaWVsZFR5cGU6IFR5cGVOb2RlXG4gICk6IHZvaWQge1xuICAgIHZhciBmaWVsZFR5cGVOYW1lID0gdGhpcy50eXBlTmFtZShmaWVsZFR5cGUpO1xuICAgIHZhciBzZXR0ZXJUeXBlTmFtZSA9IHRoaXMudHlwZU1hcHBpbmdbZmllbGRUeXBlTmFtZV07XG4gICAgaWYgKHNldHRlclR5cGVOYW1lKSB7XG4gICAgICBpZiAoZmllbGRUeXBlTmFtZSA9PSBcInU2NFwiIHx8IGZpZWxkVHlwZU5hbWUgPT0gXCJpNjRcIikge1xuICAgICAgICBsZXQgY2xhc3NOYW1lID0gZmllbGRUeXBlTmFtZSA9PSBcInU2NFwiID8gXCJVNjRcIiA6IFwiSTY0XCI7XG4gICAgICAgIHRoaXMuc2IucHVzaChgc2V0U3RyaW5nKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICAgICAgJHt2YWx1ZVByZWZpeH0ucHVzaCgke2NsYXNzTmFtZX0ucGFyc2VJbnQodmFsdWUpKTtcbiAgICAgICAgICB9YCk7XG4gICAgICB9IGVsc2UgaWYgKGZpZWxkVHlwZU5hbWUgPT0gXCJVaW50OEFycmF5XCIpIHtcbiAgICAgICAgdGhpcy5zYi5wdXNoKGBzZXRTdHJpbmcobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgICAgICAke3ZhbHVlUHJlZml4fS5wdXNoKGJhc2U2NC5kZWNvZGUodmFsdWUpKTtcbiAgICAgICAgICB9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgdmFsdWVUeXBlID0gZmllbGRUeXBlTmFtZTtcbiAgICAgICAgaWYgKHZhbHVlVHlwZSA9PSBcInUzMlwiIHx8IHZhbHVlVHlwZSA9PSBcImkzMlwiKSB7XG4gICAgICAgICAgdmFsdWVUeXBlID0gXCJpNjRcIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNiXG4gICAgICAgICAgLnB1c2goYHNldCR7c2V0dGVyVHlwZU5hbWV9KG5hbWU6IHN0cmluZywgdmFsdWU6ICR7dmFsdWVUeXBlfSk6IHZvaWQge1xuICAgICAgICAgICAgJHt2YWx1ZVByZWZpeH0ucHVzaCg8JHtmaWVsZFR5cGVOYW1lfT52YWx1ZSk7XG4gICAgICAgICAgfWApO1xuICAgICAgfVxuICAgICAgdGhpcy5zYi5wdXNoKGBzZXROdWxsKG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICAgICR7dmFsdWVQcmVmaXh9LnB1c2goPCR7ZmllbGRUeXBlTmFtZX0+bnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcHVzaEFycmF5KG5hbWU6IHN0cmluZyk6IGJvb2wge1xuICAgICAgICAgIGFzc2VydCgobmFtZSA9PSBudWxsIHx8IG5hbWUubGVuZ3RoID09IDApICYmICF0aGlzLmhhbmRsZWRSb290KTtcbiAgICAgICAgICB0aGlzLmhhbmRsZWRSb290ID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNiLnB1c2goYHB1c2hPYmplY3QobmFtZTogc3RyaW5nKTogYm9vbCB7XG4gICAgICAgICAgJHt2YWx1ZVByZWZpeH0ucHVzaChfX25lYXJfZGVjb2RlXyR7dGhpcy5lbmNvZGVUeXBlKFxuICAgICAgICBmaWVsZFR5cGVcbiAgICAgICl9KHRoaXMuYnVmZmVyLCB0aGlzLmRlY29kZXIuc3RhdGUpKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcHVzaEFycmF5KG5hbWU6IHN0cmluZyk6IGJvb2wge1xuICAgICAgICAgIGFzc2VydChuYW1lID09IG51bGwgfHwgbmFtZS5sZW5ndGggPT0gMCk7XG4gICAgICAgICAgaWYgKCF0aGlzLmhhbmRsZWRSb290KSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZWRSb290ID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAke3ZhbHVlUHJlZml4fS5wdXNoKF9fbmVhcl9kZWNvZGVfJHt0aGlzLmVuY29kZVR5cGUoXG4gICAgICAgIGZpZWxkVHlwZVxuICAgICAgKX0odGhpcy5idWZmZXIsIHRoaXMuZGVjb2Rlci5zdGF0ZSkpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfWApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVFbmNvZGVGdW5jdGlvbih0eXBlOiBUeXBlTm9kZSB8IENsYXNzRGVjbGFyYXRpb24pIHtcbiAgICBpZiAodHlwZSBpbnN0YW5jZW9mIFR5cGVOb2RlICYmICFpc1JlZmVyZW5jZSh0eXBlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgdHlwZU5hbWUgPSB0aGlzLnR5cGVOYW1lKHR5cGUpO1xuICAgIGxldCBlbmNvZGVkVHlwZU5hbWUgPSB0aGlzLmVuY29kZVR5cGUodHlwZU5hbWUpO1xuICAgIGlmIChcbiAgICAgIHRoaXMuZ2VuZXJhdGVkRW5jb2RlRnVuY3Rpb25zLmhhcyhlbmNvZGVkVHlwZU5hbWUpIHx8XG4gICAgICB0eXBlTmFtZSBpbiB0aGlzLnR5cGVNYXBwaW5nXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZ2VuZXJhdGVkRW5jb2RlRnVuY3Rpb25zLmFkZChlbmNvZGVkVHlwZU5hbWUpO1xuXG4gICAgLy8gbGV0IG1ldGhvZE5hbWUgPSBgX19uZWFyX2VuY29kZV8ke2VuY29kZWRUeXBlTmFtZX1gO1xuICAgIC8vIGlmICh0aGlzLnRyeVVzaW5nSW1wb3J0KHR5cGUsIG1ldGhvZE5hbWUpKSB7XG4gICAgLy8gICByZXR1cm47XG4gICAgLy8gfVxuXG4gICAgaWYgKHRoaXMuaXNBcnJheVR5cGUodHlwZSkpIHtcbiAgICAgIGxldCBhcnJheVR5cGUgPSA8TmFtZWRUeXBlTm9kZT50eXBlO1xuICAgICAgbGV0IHR5cGVBcmcgPSBhcnJheVR5cGUudHlwZUFyZ3VtZW50cyFbMF07XG4gICAgICAvLyBBcnJheVxuICAgICAgaWYgKHRoaXMuaXNBcnJheVR5cGUodHlwZUFyZykpIHtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUVuY29kZUZ1bmN0aW9uKHR5cGVBcmcpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNiLnB1c2goYEBnbG9iYWxcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIF9fbmVhcl9lbmNvZGVfJHtlbmNvZGVkVHlwZU5hbWV9KFxuICAgICAgICAgICAgdmFsdWU6ICR7dHlwZU5hbWV9LFxuICAgICAgICAgICAgZW5jb2RlcjogSlNPTkVuY29kZXIpOiB2b2lkIHtgKTtcbiAgICAgIHRoaXMuc2IucHVzaChgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge2ApO1xuICAgICAgdGhpcy5nZW5lcmF0ZUZpZWxkRW5jb2RlcihcbiAgICAgICAgYXJyYXlUeXBlLnR5cGVBcmd1bWVudHMhWzBdLFxuICAgICAgICBcIm51bGxcIixcbiAgICAgICAgXCJ2YWx1ZVtpXVwiXG4gICAgICApO1xuICAgICAgdGhpcy5zYi5wdXNoKFwifVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT2JqZWN0XG4gICAgICB0aGlzLmdldEZpZWxkcyh0eXBlKS5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUVuY29kZUZ1bmN0aW9uKGZpZWxkLnR5cGUpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuc2IucHVzaChgQGdsb2JhbFxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gX19uZWFyX2VuY29kZV8ke2VuY29kZWRUeXBlTmFtZX0oXG4gICAgICAgICAgICB2YWx1ZTogJHt0eXBlTmFtZX0sXG4gICAgICAgICAgICBlbmNvZGVyOiBKU09ORW5jb2Rlcik6IHZvaWQge2ApO1xuICAgICAgdGhpcy5nZXRGaWVsZHModHlwZSkuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgIGxldCBmaWVsZFR5cGUgPSBmaWVsZC50eXBlO1xuICAgICAgICBsZXQgZmllbGROYW1lID0gZmllbGQubmFtZTtcbiAgICAgICAgbGV0IHNvdXJjZUV4cHIgPSBgdmFsdWUuJHtmaWVsZE5hbWV9YDtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUZpZWxkRW5jb2RlcihmaWVsZFR5cGUsIGBcIiR7ZmllbGROYW1lfVwiYCwgc291cmNlRXhwcik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnNiLnB1c2goXCJ9XCIpO1xuICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnR5cGVOYW1lKHR5cGUpO1xuICAgIC8vIHRoaXMuY2xhc3NJbmplY3Rpb25zLnNldCh0eXBlLmNsYXNzUmVmZXJlbmNlLm5hbWUsIGluamVjdGlvbnMpO1xuICB9XG5cbiAgLy8gcHJpdmF0ZSB0cnlVc2luZ0ltcG9ydCh0eXBlOiBUeXBlLCBtZXRob2ROYW1lOiBzdHJpbmcpOiBib29sIHtcbiAgLy8gICBsZXQgc291cmNlc1dpdGhFeHBvcnQgPSB0aGlzLnByb2dyYW0uc291cmNlcy5maWx0ZXIoc291cmNlID0+XG4gIC8vICAgICB0aGlzLmdldEV4cG9ydHMoc291cmNlKS5maWx0ZXIoZCA9PiBkLm5hbWUudGV4dCA9PSBtZXRob2ROYW1lKS5sZW5ndGggPiAwKTtcblxuICAvLyAgIGlmIChzb3VyY2VzV2l0aEV4cG9ydC5sZW5ndGggPT0gMCkge1xuICAvLyAgICAgcmV0dXJuIGZhbHNlO1xuICAvLyAgIH1cblxuICAvLyAgIGlmIChzb3VyY2VzV2l0aEV4cG9ydC5sZW5ndGggPiAxKSB7XG4gIC8vICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uXG4gIC8vICAgICBjb25zb2xlLmxvZyhgV0FSTjogbW9yZSB0aGFuIG9uZSBmaWxlIGV4cG9ydGluZyAke21ldGhvZE5hbWV9OiAke3NvdXJjZXNXaXRoRXhwb3J0Lm1hcChzID0+IHMubm9ybWFsaXplZFBhdGgpfWApO1xuICAvLyAgIH1cbiAgLy8gICBsZXQgaW1wb3J0UGF0aCA9IHNvdXJjZXNXaXRoRXhwb3J0WzBdLm5vcm1hbGl6ZWRQYXRoLnJlcGxhY2UoXCIudHNcIiwgXCJcIik7XG4gIC8vICAgdGhpcy5zYi5wdXNoKGBpbXBvcnQgeyAke21ldGhvZE5hbWV9IH0gZnJvbSBcIi4vJHtpbXBvcnRQYXRofVwiO2ApO1xuICAvLyAgIHJldHVybiB0cnVlO1xuICAvLyB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZUhhbmRsZXIodHlwZTogVHlwZU5vZGUgfCBDbGFzc0RlY2xhcmF0aW9uKSB7XG4gICAgbGV0IHR5cGVOYW1lID0gdGhpcy5lbmNvZGVUeXBlKHR5cGUpO1xuICAgIHRoaXMuc2JcbiAgICAgIC5wdXNoKGBleHBvcnQgY2xhc3MgX19uZWFyX0pTT05IYW5kbGVyXyR7dHlwZU5hbWV9IGV4dGVuZHMgVGhyb3dpbmdKU09OSGFuZGxlciB7XG4gICAgICAgIGJ1ZmZlcjogVWludDhBcnJheTtcbiAgICAgICAgZGVjb2RlcjogSlNPTkRlY29kZXI8X19uZWFyX0pTT05IYW5kbGVyXyR7dHlwZU5hbWV9PjtcbiAgICAgICAgaGFuZGxlZFJvb3Q6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgdmFsdWU6ICR7dGhpcy50eXBlTmFtZSh0eXBlKX07XG5cbiAgICAgICAgY29uc3RydWN0b3IodmFsdWVfOiAke3RoaXMudHlwZU5hbWUodHlwZSl9KSB7XG4gICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWVfO1xuICAgICAgICB9XG4gICAgICBgKTtcbiAgICBpZiAodGhpcy5pc0FycmF5VHlwZSh0eXBlKSkge1xuICAgICAgdGhpcy5nZW5lcmF0ZUFycmF5SGFuZGxlck1ldGhvZHMoXG4gICAgICAgIFwidGhpcy52YWx1ZVwiLFxuICAgICAgICAoPE5hbWVkVHlwZU5vZGU+dHlwZSkudHlwZUFyZ3VtZW50cyFbMF1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ2VuZXJhdGVIYW5kbGVyTWV0aG9kcyhcInRoaXMudmFsdWUuXCIsIHRoaXMuZ2V0RmllbGRzKHR5cGUpKTtcbiAgICB9XG4gICAgdGhpcy5zYi5wdXNoKFwifVxcblwiKTtcbiAgfVxuXG4gIHByaXZhdGUgZW5jb2RlVHlwZSh0eXBlOiBUeXBlTm9kZSB8IENsYXNzRGVjbGFyYXRpb24gfCBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGxldCBzdHIgPSB0eXBlb2YgdHlwZSA9PT0gXCJzdHJpbmdcIiA/IHR5cGUgOiB0aGlzLnR5cGVOYW1lKHR5cGUpO1xuICAgIHJldHVybiAoXG4gICAgICBzdHJcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIC5yZXBsYWNlKC9fL2csIFwiX19cIilcbiAgICAgICAgLnJlcGxhY2UoLz4vZywgXCJcIilcbiAgICAgICAgLnJlcGxhY2UoLzwvZywgXCJfXCIpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgdHlwZU5hbWUodHlwZTogVHlwZU5vZGUgfCBDbGFzc0RlY2xhcmF0aW9uKTogc3RyaW5nIHtcbiAgICBpZiAodHlwZSBpbnN0YW5jZW9mIFR5cGVOb2RlKSB7XG4gICAgICByZXR1cm4gQVNUQnVpbGRlci5idWlsZCh0eXBlKTtcbiAgICB9XG4gICAgbGV0IGNsYXNzTmFtZSA9IHRvU3RyaW5nKHR5cGUubmFtZSk7XG4gICAgaWYgKHR5cGUuaXNHZW5lcmljKSB7XG4gICAgICBjbGFzc05hbWUgKz0gXCI8XCIgKyB0eXBlLnR5cGVQYXJhbWV0ZXJzIS5tYXAodG9TdHJpbmcpLmpvaW4oXCIsIFwiKSArIFwiPlwiO1xuICAgIH1cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZURlY29kZUZ1bmN0aW9uKHR5cGU6IFR5cGVOb2RlIHwgQ2xhc3NEZWNsYXJhdGlvbikge1xuICAgIGlmICh0eXBlIGluc3RhbmNlb2YgVHlwZU5vZGUgJiYgIWlzUmVmZXJlbmNlKHR5cGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHR5cGVOYW1lID0gdGhpcy50eXBlTmFtZSh0eXBlKTtcbiAgICB2YXIgZW5jb2RlZFR5cGVOYW1lID0gdGhpcy5lbmNvZGVUeXBlKHR5cGVOYW1lKTtcbiAgICBpZiAoXG4gICAgICB0aGlzLmdlbmVyYXRlZERlY29kZUZ1bmN0aW9ucy5oYXMoZW5jb2RlZFR5cGVOYW1lKSB8fFxuICAgICAgdHlwZU5hbWUgaW4gdGhpcy50eXBlTWFwcGluZ1xuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmdlbmVyYXRlZERlY29kZUZ1bmN0aW9ucy5hZGQoZW5jb2RlZFR5cGVOYW1lKTtcblxuICAgIC8vIHZhciBtZXRob2ROYW1lID0gYF9fbmVhcl9kZWNvZGVfJHtlbmNvZGVkVHlwZU5hbWV9YDtcbiAgICAvLyBpZiAodGhpcy50cnlVc2luZ0ltcG9ydCh0eXBlLCBtZXRob2ROYW1lKSkge1xuICAgIC8vICAgcmV0dXJuO1xuICAgIC8vIH1cbiAgICB0aGlzLmdlbmVyYXRlSGFuZGxlcih0eXBlKTtcbiAgICBpZiAodGhpcy5pc0FycmF5VHlwZSh0eXBlKSkge1xuICAgICAgYXNzZXJ0KHR5cGUgaW5zdGFuY2VvZiBOYW1lZFR5cGVOb2RlKTtcbiAgICAgIGxldCBhcnJheUVsZW1lbnRUeXBlID0gKDxOYW1lZFR5cGVOb2RlPnR5cGUpLnR5cGVBcmd1bWVudHMhWzBdO1xuICAgICAgLy8gQXJyYXlcbiAgICAgIGlmICh0aGlzLmlzQXJyYXlUeXBlKGFycmF5RWxlbWVudFR5cGUpIHx8ICFpc1JlZmVyZW5jZSg8VHlwZU5vZGU+dHlwZSkpIHtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZURlY29kZUZ1bmN0aW9uKGFycmF5RWxlbWVudFR5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPYmplY3RcbiAgICAgIHRoaXMuZ2V0RmllbGRzKHR5cGUpLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICB0aGlzLmdlbmVyYXRlRGVjb2RlRnVuY3Rpb24oZmllbGQudHlwZSEpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5zYi5wdXNoKGBAZ2xvYmFsXG4gICAgICBleHBvcnQgZnVuY3Rpb24gX19uZWFyX2RlY29kZV8ke2VuY29kZWRUeXBlTmFtZX0oXG4gICAgICAgICAgYnVmZmVyOiBVaW50OEFycmF5LCBzdGF0ZTogRGVjb2RlclN0YXRlIHwgbnVsbCwgdmFsdWU6ICR7dHlwZU5hbWV9IHwgbnVsbCA9IG51bGwpOiR7dHlwZU5hbWV9IHtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICB2YWx1ZSA9IG5ldyAke3R5cGVOYW1lfSgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBoYW5kbGVyID0gbmV3IF9fbmVhcl9KU09OSGFuZGxlcl8ke2VuY29kZWRUeXBlTmFtZX0odmFsdWUhKTtcbiAgICAgICAgaGFuZGxlci5idWZmZXIgPSBidWZmZXI7XG4gICAgICAgIGhhbmRsZXIuZGVjb2RlciA9IG5ldyBKU09ORGVjb2RlcjxfX25lYXJfSlNPTkhhbmRsZXJfJHtlbmNvZGVkVHlwZU5hbWV9PihoYW5kbGVyKTtcbiAgICAgICAgaGFuZGxlci5kZWNvZGVyLmRlc2VyaWFsaXplKGJ1ZmZlciwgc3RhdGUpO1xuICAgICAgICByZXR1cm4gdmFsdWUhO1xuICAgICAgfVxcbmApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZUZpZWxkRW5jb2RlcihcbiAgICBmaWVsZFR5cGU6IFR5cGVOb2RlLFxuICAgIGZpZWxkRXhwcjogc3RyaW5nLFxuICAgIHNvdXJjZUV4cHI6IHN0cmluZ1xuICApIHtcbiAgICB2YXIgZmllbGRUeXBlTmFtZSA9IHRoaXMudHlwZU5hbWUoZmllbGRUeXBlKTtcbiAgICB2YXIgc2V0dGVyVHlwZSA9IHRoaXMudHlwZU1hcHBpbmdbZmllbGRUeXBlTmFtZV07XG4gICAgaWYgKCFzZXR0ZXJUeXBlKSB7XG4gICAgICAvLyBPYmplY3QgLyBhcnJheVxuICAgICAgbGV0IHB1c2hUeXBlID0gdGhpcy5pc0FycmF5VHlwZShmaWVsZFR5cGUpID8gXCJBcnJheVwiIDogXCJPYmplY3RcIjtcbiAgICAgIGlmICh0aGlzLmlzQXJyYXlUeXBlKGZpZWxkVHlwZSkpIHtcbiAgICAgICAgdGhpcy5zYi5wdXNoKGBpZiAoJHtzb3VyY2VFeHByfSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIGVuY29kZXIucHVzaCR7cHVzaFR5cGV9KCR7ZmllbGRFeHByfSk7XG4gICAgICAgICAgICAgIF9fbmVhcl9lbmNvZGVfJHt0aGlzLmVuY29kZVR5cGUoXG4gICAgICAgICAgICAgICAgZmllbGRUeXBlXG4gICAgICAgICAgICAgICl9KCR7c291cmNlRXhwcn0sIGVuY29kZXIpO1xuICAgICAgICAgICAgICBlbmNvZGVyLnBvcCR7cHVzaFR5cGV9KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlbmNvZGVyLnNldE51bGwoJHtmaWVsZEV4cHJ9KTtcbiAgICAgICAgICAgIH1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2IucHVzaChgaWYgKCR7c291cmNlRXhwcn0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAke3NvdXJjZUV4cHJ9LmVuY29kZShlbmNvZGVyLCAke2ZpZWxkRXhwcn0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZW5jb2Rlci5zZXROdWxsKCR7ZmllbGRFeHByfSk7XG4gICAgICAgICAgICB9YCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEJhc2ljIHR5cGVzXG4gICAgICBpZiAodGhpcy5ub25OdWxsYWJsZVR5cGVzLmluZGV4T2YoZmllbGRUeXBlTmFtZSkgIT0gLTEpIHtcbiAgICAgICAgaWYgKFtcImk2NFwiLCBcInU2NFwiXS5pbmRleE9mKGZpZWxkVHlwZU5hbWUpICE9IC0xKSB7XG4gICAgICAgICAgdGhpcy5zYi5wdXNoKFxuICAgICAgICAgICAgYGVuY29kZXIuc2V0JHtzZXR0ZXJUeXBlfSgke2ZpZWxkRXhwcn0sICR7c291cmNlRXhwcn0udG9TdHJpbmcoKSk7YFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zYi5wdXNoKFxuICAgICAgICAgICAgYGVuY29kZXIuc2V0JHtzZXR0ZXJUeXBlfSgke2ZpZWxkRXhwcn0sICR7c291cmNlRXhwcn0pO2BcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGZpZWxkVHlwZU5hbWUgPT0gXCJVaW50OEFycmF5XCIpIHtcbiAgICAgICAgdGhpcy5zYi5wdXNoKGBpZiAoJHtzb3VyY2VFeHByfSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIGVuY29kZXIuc2V0U3RyaW5nKCR7ZmllbGRFeHByfSwgYmFzZTY0LmVuY29kZSgke3NvdXJjZUV4cHJ9KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlbmNvZGVyLnNldE51bGwoJHtmaWVsZEV4cHJ9KTtcbiAgICAgICAgICAgIH07YCk7XG4gICAgICB9IGVsc2UgaWYgKGZpZWxkVHlwZU5hbWUgPT0gXCJ1MTI4XCIpIHtcbiAgICAgICAgdGhpcy5zYi5wdXNoKGBpZiAoPCR7ZmllbGRUeXBlTmFtZX0+bnVsbCAhPSAke3NvdXJjZUV4cHJ9KSB7XG4gICAgICAgICAgICAgIGVuY29kZXIuc2V0U3RyaW5nKCR7ZmllbGRFeHByfSwgJHtzb3VyY2VFeHByfS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVuY29kZXIuc2V0TnVsbCgke2ZpZWxkRXhwcn0pO1xuICAgICAgICAgICAgfTtgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2IucHVzaChgaWYgKCR7c291cmNlRXhwcn0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICBlbmNvZGVyLnNldCR7c2V0dGVyVHlwZX0oJHtmaWVsZEV4cHJ9LCAke3NvdXJjZUV4cHJ9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVuY29kZXIuc2V0TnVsbCgke2ZpZWxkRXhwcn0pO1xuICAgICAgICAgICAgfWApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaXNBcnJheVR5cGUodHlwZTogVHlwZU5vZGUgfCBDbGFzc0RlY2xhcmF0aW9uKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhKFxuICAgICAgdHlwZSBpbnN0YW5jZW9mIE5hbWVkVHlwZU5vZGUgJiZcbiAgICAgIHRvU3RyaW5nKHR5cGUpLnN0YXJ0c1dpdGgoXCJBcnJheVwiKSAmJlxuICAgICAgdHlwZS50eXBlQXJndW1lbnRzICYmXG4gICAgICB0eXBlLnR5cGVBcmd1bWVudHMubGVuZ3RoID4gMFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldEZpZWxkcyh0eXBlOiBUeXBlTm9kZSB8IENsYXNzRGVjbGFyYXRpb24pOiBTaW1wbGVGaWVsZFtdIHtcbiAgICBsZXQgX2NsYXNzID1cbiAgICAgIHR5cGUgaW5zdGFuY2VvZiBDbGFzc0RlY2xhcmF0aW9uXG4gICAgICAgID8gdHlwZVxuICAgICAgICA6IHRoaXMuZXhwb3J0ZWRDbGFzc2VzLmdldCh0b1N0cmluZyh0eXBlKSk7XG4gICAgaWYgKF9jbGFzcyA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIF9jbGFzcy5tZW1iZXJzXG4gICAgICAuZmlsdGVyKG1lbWJlciA9PiBtZW1iZXIgaW5zdGFuY2VvZiBGaWVsZERlY2xhcmF0aW9uKVxuICAgICAgLm1hcChcbiAgICAgICAgKHBhcmFtOiBGaWVsZERlY2xhcmF0aW9uKTogU2ltcGxlRmllbGQgPT4ge1xuICAgICAgICAgIHJldHVybiB7IG5hbWU6IHRvU3RyaW5nKHBhcmFtLm5hbWUpLCB0eXBlOiBwYXJhbS50eXBlISB9O1xuICAgICAgICB9XG4gICAgICApO1xuICB9XG5cbiAgYnVpbGQoc291cmNlczogU291cmNlW10pOiB2b2lkIHtcbiAgICBsZXQgY2xhc3NEZWNsYXJhdGlvbnM6IE1hcDxTb3VyY2UsIENsYXNzRGVjbGFyYXRpb25bXT4gPSBuZXcgTWFwKCk7XG4gICAgbGV0IGZ1bmNEZWNsYXJhdGlvbnM6IE1hcDxTb3VyY2UsIEZ1bmN0aW9uRGVjbGFyYXRpb25bXT4gPSBuZXcgTWFwKCk7XG4gICAgc291cmNlcy5mb3JFYWNoKHNvdXJjZSA9PiB7XG4gICAgICBjbGFzc0RlY2xhcmF0aW9ucy5zZXQoc291cmNlLCBbXSk7XG4gICAgICBmdW5jRGVjbGFyYXRpb25zLnNldChzb3VyY2UsIFtdKTtcbiAgICAgIHNvdXJjZS5zdGF0ZW1lbnRzLmZvckVhY2goc3RtdCA9PiB7XG4gICAgICAgIGlmIChzdG10IGluc3RhbmNlb2YgQ2xhc3NEZWNsYXJhdGlvbilcbiAgICAgICAgICBjbGFzc0RlY2xhcmF0aW9ucy5nZXQoc291cmNlKSEucHVzaChzdG10KTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHN0bXQgaW5zdGFuY2VvZiBGdW5jdGlvbkRlY2xhcmF0aW9uICYmXG4gICAgICAgICAgKHN0bXQuaXMoQ29tbW9uRmxhZ3MuRVhQT1JUKSB8fCBzdG10LmlzKENvbW1vbkZsYWdzLk1PRFVMRV9FWFBPUlQpKSAmJlxuICAgICAgICAgICFpc0VudHJ5KHNvdXJjZSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgZnVuY0RlY2xhcmF0aW9ucy5nZXQoc291cmNlKSEucHVzaChzdG10KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBsZXQgZnVuY3NUb1dyYXA6IEZ1bmN0aW9uRGVjbGFyYXRpb25bXSA9IFtdO1xuXG4gICAgbGV0IGZ1bmNSZW5hbWUgPSAobm9kZTogTm9kZSk6IE5vZGUgPT4ge1xuICAgICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIEZ1bmN0aW9uRGVjbGFyYXRpb24pKSByZXR1cm4gbm9kZTtcbiAgICAgIGlmIChcbiAgICAgICAgIShub2RlLmlzKENvbW1vbkZsYWdzLk1PRFVMRV9FWFBPUlQpIHx8IG5vZGUuaXMoQ29tbW9uRmxhZ3MuRVhQT1JUKSkgfHxcbiAgICAgICAgaXNFbnRyeShub2RlLnJhbmdlLnNvdXJjZSlcbiAgICAgIClcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICBub2RlLmZsYWdzID0gbm9kZS5pcyhDb21tb25GbGFncy5NT0RVTEVfRVhQT1JUKVxuICAgICAgICA/IG5vZGUuZmxhZ3MgXiBDb21tb25GbGFncy5NT0RVTEVfRVhQT1JUXG4gICAgICAgIDogbm9kZS5mbGFncyBeIENvbW1vbkZsYWdzLkVYUE9SVDtcbiAgICAgIG5vZGUubmFtZS5zeW1ib2wgPSBcIndyYXBwZWRfXCIgKyBub2RlLm5hbWUuc3ltYm9sO1xuICAgICAgbm9kZS5uYW1lLnRleHQgPSBcIndyYXBwZWRfXCIgKyBub2RlLm5hbWUudGV4dDtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG5cbiAgICBsZXQgbmV3U291cmNlID0gKHNvdXJjZTogU291cmNlKTogc3RyaW5nID0+IHtcbiAgICAgIHRoaXMuc2IgPSBbXG4gICAgICAgIGBpbXBvcnQgeyBzdG9yYWdlLCBuZWFyLCBiYXNlNjQsIHJldHVybl92YWx1ZSB9IGZyb20gXCJuZWFyLXJ1bnRpbWUtdHNcIjtcbmltcG9ydCB7IEpTT05FbmNvZGVyIH0gZnJvbSBcImFzc2VtYmx5c2NyaXB0LWpzb25cIjtcbmltcG9ydCB7IEpTT05EZWNvZGVyLCBUaHJvd2luZ0pTT05IYW5kbGVyLCBEZWNvZGVyU3RhdGUgfSBmcm9tIFwiYXNzZW1ibHlzY3JpcHQtanNvblwiO2BcbiAgICAgIF07XG4gICAgICBmdW5jRGVjbGFyYXRpb25zLmdldChzb3VyY2UpIS5mb3JFYWNoKGZ1bmMgPT4ge1xuICAgICAgICB0aGlzLmdlbmVyYXRlQXJnc1BhcnNlcihmdW5jKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZVdyYXBwZXJGdW5jdGlvbihmdW5jKTtcbiAgICAgIH0pO1xuICAgICAgY2xhc3NEZWNsYXJhdGlvbnMuZ2V0KHNvdXJjZSkhLmZvckVhY2goX2NsYXNzID0+IHtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZURlY29kZUZ1bmN0aW9uKF9jbGFzcyk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVFbmNvZGVGdW5jdGlvbihfY2xhc3MpO1xuICAgICAgfSk7XG4gICAgICBsZXQgc291cmNlVGV4dCA9IHNvdXJjZS5zdGF0ZW1lbnRzLm1hcChzdG10ID0+IHtcbiAgICAgICAgbGV0IHN0ciA9IEFTVEJ1aWxkZXIuYnVpbGQoc3RtdCwgZnVuY1JlbmFtZSk7XG4gICAgICAgIGlmIChzdG10IGluc3RhbmNlb2YgQ2xhc3NEZWNsYXJhdGlvbikge1xuICAgICAgICAgIHN0ciA9IHN0ci5zbGljZSgwLCBzdHIubGFzdEluZGV4T2YoXCJ9XCIpKTtcbiAgICAgICAgICBsZXQgY2xhc3NOYW1lID0gdG9TdHJpbmcoc3RtdC5uYW1lKTtcbiAgICAgICAgICBzdHIgKz0gYFxuICBzdGF0aWMgZGVjb2RlKGpzb246IFVpbnQ4QXJyYXksIHN0YXRlOiBEZWNvZGVyU3RhdGUgfCBudWxsID0gbnVsbCk6ICR7Y2xhc3NOYW1lfSB7XG4gICAgbGV0IHZhbHVlID0gbmV3ICR7Y2xhc3NOYW1lfSgpO1xuICAgIHZhbHVlLmRlY29kZShqc29uLCBzdGF0ZSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgZGVjb2RlKGpzb246IFVpbnQ4QXJyYXksIHN0YXRlOiBEZWNvZGVyU3RhdGUgfCBudWxsKTogJHtjbGFzc05hbWV9IHtcbiAgICBfX25lYXJfZGVjb2RlXyR7Y2xhc3NOYW1lfShqc29uLCBzdGF0ZSwgdGhpcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIF9lbmNvZGVyKGVuY29kZXI6IEpTT05FbmNvZGVyLCBuYW1lOiBzdHJpbmcgfCBudWxsKTogSlNPTkVuY29kZXIge1xuICAgIGVuY29kZXIucHVzaE9iamVjdChuYW1lKTtcbiAgICBfX25lYXJfZW5jb2RlXyR7Y2xhc3NOYW1lfSh0aGlzLCBlbmNvZGVyKTtcbiAgICBlbmNvZGVyLnBvcE9iamVjdCgpO1xuICAgIHJldHVybiBlbmNvZGVyO1xuICB9XG5cbiAgZW5jb2RlKF9lbmNvZGVyOiBKU09ORW5jb2RlciB8IG51bGwgPSBudWxsLCBuYW1lOiBzdHJpbmcgfCBudWxsID0gXCJcIik6IEpTT05FbmNvZGVyIHtcbiAgICBsZXQgZW5jb2RlciA9IF9lbmNvZGVyICE9IG51bGwgPyBfZW5jb2RlciA6IG5ldyBKU09ORW5jb2RlcigpO1xuICAgIHJldHVybiB0aGlzLl9lbmNvZGVyKGVuY29kZXIhLCBuYW1lKTtcbiAgfVxuXG4gIHNlcmlhbGl6ZSgpOiBVaW50OEFycmF5IHtcbiAgICByZXR1cm4gdGhpcy5lbmNvZGUoKS5zZXJpYWxpemUoKTtcbiAgfVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2VuY29kZXIoKS50b1N0cmluZygpO1xuICB9XG59YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB0aGlzLnNiLmNvbmNhdChzb3VyY2VUZXh0KS5qb2luKFwiXFxuXCIpO1xuICAgIH07XG4gICAgc291cmNlcy5mb3JFYWNoKHNvdXJjZSA9PiB7XG4gICAgICB0aGlzLnBhcnNlci5kb25lbG9nLmRlbGV0ZShzb3VyY2UuaW50ZXJuYWxQYXRoKTtcbiAgICAgIHRoaXMucGFyc2VyLnNlZW5sb2cuZGVsZXRlKHNvdXJjZS5pbnRlcm5hbFBhdGgpO1xuICAgICAgdGhpcy5wYXJzZXIucHJvZ3JhbS5zb3VyY2VzID0gdGhpcy5wYXJzZXIucHJvZ3JhbS5zb3VyY2VzLmZpbHRlcihcbiAgICAgICAgX3NvdXJjZSA9PiBfc291cmNlICE9PSBzb3VyY2VcbiAgICAgICk7XG4gICAgICBsZXQgc291cmNlVGV4dCA9IG5ld1NvdXJjZShzb3VyY2UpO1xuICAgICAgdGhpcy5wYXJzZXIucGFyc2VGaWxlKFxuICAgICAgICBzb3VyY2VUZXh0LFxuICAgICAgICAoaXNFbnRyeShzb3VyY2UpID8gXCJcIiA6IFwiLi9cIikgKyBzb3VyY2Uubm9ybWFsaXplZFBhdGgsXG4gICAgICAgIGlzRW50cnkoc291cmNlKVxuICAgICAgKTtcbiAgICB9KTtcblxuICB9XG5cbiAgcHJpdmF0ZSBjb3B5SW1wb3J0cyhtYWluU291cmNlOiBTb3VyY2UpOiB2b2lkIHtcbiAgICB0aGlzLmdldEltcG9ydHMobWFpblNvdXJjZSkuZm9yRWFjaChzdGF0ZW1lbnQgPT4ge1xuICAgICAgaWYgKHN0YXRlbWVudC5kZWNsYXJhdGlvbnMpIHtcbiAgICAgICAgbGV0IGRlY2xhcmF0aW9uc1N0ciA9IHN0YXRlbWVudFxuICAgICAgICAgIC5kZWNsYXJhdGlvbnMhLm1hcChcbiAgICAgICAgICAgIGRlY2xhcmF0aW9uID0+XG4gICAgICAgICAgICAgIGAke2RlY2xhcmF0aW9uLmZvcmVpZ25OYW1lLnRleHR9IGFzICR7ZGVjbGFyYXRpb24ubmFtZS50ZXh0fWBcbiAgICAgICAgICApXG4gICAgICAgICAgLmpvaW4oXCIsXCIpO1xuICAgICAgICB0aGlzLnNiLnB1c2goXG4gICAgICAgICAgYGltcG9ydCB7JHtkZWNsYXJhdGlvbnNTdHJ9fSBmcm9tIFwiJHtzdGF0ZW1lbnQucGF0aC52YWx1ZX1cIjtgXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldEltcG9ydHMoc291cmNlOiBTb3VyY2UpOiBJbXBvcnRTdGF0ZW1lbnRbXSB7XG4gICAgcmV0dXJuIDxJbXBvcnRTdGF0ZW1lbnRbXT4oXG4gICAgICBzb3VyY2Uuc3RhdGVtZW50cy5maWx0ZXIoc3RhdGVtZW50ID0+IHN0YXRlbWVudC5raW5kID09IE5vZGVLaW5kLklNUE9SVClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRFeHBvcnRzKHNvdXJjZTogU291cmNlKTogRGVjbGFyYXRpb25TdGF0ZW1lbnRbXSB7XG4gICAgbGV0IGRlY2xhcmF0aW9ucyA9IDxEZWNsYXJhdGlvblN0YXRlbWVudFtdPihcbiAgICAgIHNvdXJjZS5zdGF0ZW1lbnRzLmZpbHRlcihcbiAgICAgICAgc3RhdGVtZW50ID0+XG4gICAgICAgICAgc3RhdGVtZW50LmtpbmQgPT0gTm9kZUtpbmQuRlVOQ1RJT05ERUNMQVJBVElPTiB8fFxuICAgICAgICAgIHN0YXRlbWVudC5raW5kID09IE5vZGVLaW5kLkNMQVNTREVDTEFSQVRJT05cbiAgICAgIClcbiAgICApO1xuICAgIHJldHVybiBkZWNsYXJhdGlvbnMuZmlsdGVyKGQgPT4gZC5pcyhDb21tb25GbGFncy5FWFBPUlQpKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWZ0ZXJQYXJzZShwYXJzZXI6IFBhcnNlcik6IHZvaWQge1xuICBsZXQgZmlsZXMgPSBORUFSQmluZGluZ3NCdWlsZGVyLm5lYXJGaWxlcyhwYXJzZXIpO1xuICBORUFSQmluZGluZ3NCdWlsZGVyLmJ1aWxkKHBhcnNlciwgZmlsZXMpO1xufVxuIl19