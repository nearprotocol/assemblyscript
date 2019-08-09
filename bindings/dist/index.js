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
var __1 = require("../..");
var transformer_1 = require("./transformer");
var sourceBuilder_1 = require("./sourceBuilder");
function isComment(stmt) {
    return stmt.kind == __1.NodeKind.COMMENT;
}
function hasNearDecorator(stmt) {
    return stmt.text.startsWith("//@nearfile");
}
function toString(node) {
    return sourceBuilder_1.ASTBuilder.build(node);
}
function isEntry(source) {
    return source.sourceKind == __1.SourceKind.USER_ENTRY;
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
        if (type instanceof __1.TypeNode && !isReference(type)) {
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
        if (type instanceof __1.TypeNode) {
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
        if (type instanceof __1.TypeNode && !isReference(type)) {
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
            assert(type instanceof __1.NamedTypeNode);
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
        this.sb.push("@global\n      export function __near_decode_" + encodedTypeName + "(\n          buffer: Uint8Array, state: DecoderState | null, value: " + typeName + " | null = null):" + typeName + " {\n        if (value == null) {\n          value =  instantiate<" + typeName + ">(); // Allocate without constructor\n        }\n        let handler = new __near_JSONHandler_" + encodedTypeName + "(value!);\n        handler.buffer = buffer;\n        handler.decoder = new JSONDecoder<__near_JSONHandler_" + encodedTypeName + ">(handler);\n        handler.decoder.deserialize(buffer, state);\n        return value!;\n      }\n");
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
        return !!(type instanceof __1.NamedTypeNode &&
            toString(type).startsWith("Array") &&
            type.typeArguments &&
            type.typeArguments.length > 0);
    };
    NEARBindingsBuilder.prototype.getFields = function (type) {
        var _class = type instanceof __1.ClassDeclaration
            ? type
            : this.exportedClasses.get(toString(type));
        if (_class == null) {
            return [];
        }
        return _class.members
            .filter(function (member) { return member instanceof __1.FieldDeclaration; })
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
                if (stmt instanceof __1.ClassDeclaration)
                    classDeclarations.get(source).push(stmt);
                if (stmt instanceof __1.FunctionDeclaration &&
                    (stmt.is(__1.CommonFlags.EXPORT) || stmt.is(__1.CommonFlags.MODULE_EXPORT)) &&
                    !isEntry(source)) {
                    funcDeclarations.get(source).push(stmt);
                }
            });
        });
        var funcsToWrap = [];
        var funcRename = function (node) {
            if (!(node instanceof __1.FunctionDeclaration))
                return node;
            if (!(node.is(__1.CommonFlags.MODULE_EXPORT) || node.is(__1.CommonFlags.EXPORT)) ||
                isEntry(node.range.source))
                return node;
            node.flags = node.is(__1.CommonFlags.MODULE_EXPORT)
                ? node.flags ^ __1.CommonFlags.MODULE_EXPORT
                : node.flags ^ __1.CommonFlags.EXPORT;
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
                if (stmt instanceof __1.ClassDeclaration) {
                    str = str.slice(0, str.lastIndexOf("}"));
                    var className = toString(stmt.name);
                    str += "\n  static decode(json: Uint8Array, state: DecoderState | null = null): " + className + " {\n    let value = instantiate<" + className + ">(); // Allocate without constructor\n    value.decode(json, state);\n    return value;\n  }\n\n  decode(json: Uint8Array, state: DecoderState | null): " + className + " {\n    __near_decode_" + className + "(json, state, this);\n    return this;\n  }\n\n  private _encoder(encoder: JSONEncoder, name: string | null): JSONEncoder {\n    encoder.pushObject(name);\n    __near_encode_" + className + "(this, encoder);\n    encoder.popObject();\n    return encoder;\n  }\n\n  encode(_encoder: JSONEncoder | null = null, name: string | null = \"\"): JSONEncoder {\n    let encoder = _encoder != null ? _encoder : new JSONEncoder();\n    return this._encoder(encoder!, name);\n  }\n\n  serialize(): Uint8Array {\n    return this.encode().serialize();\n  }\n\n  toString(): string {\n    return this._encoder().toString();\n  }\n}";
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
        return (source.statements.filter(function (statement) { return statement.kind == __1.NodeKind.IMPORT; }));
    };
    NEARBindingsBuilder.prototype.getExports = function (source) {
        var declarations = (source.statements.filter(function (statement) {
            return statement.kind == __1.NodeKind.FUNCTIONDECLARATION ||
                statement.kind == __1.NodeKind.CLASSDECLARATION;
        }));
        return declarations.filter(function (d) { return d.is(__1.CommonFlags.EXPORT); });
    };
    return NEARBindingsBuilder;
}(transformer_1.Transformer));
function afterParse(parser) {
    var files = NEARBindingsBuilder.nearFiles(parser);
    NEARBindingsBuilder.build(parser, files);
}
exports.afterParse = afterParse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDJEQUEyRDs7Ozs7Ozs7Ozs7Ozs7O0FBRTNELDJCQThCZTtBQUNmLDZDQUE0QztBQUU1QyxpREFBNkM7QUFPN0MsU0FBUyxTQUFTLENBQUMsSUFBZTtJQUNoQyxPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksWUFBUSxDQUFDLE9BQU8sQ0FBQztBQUN2QyxDQUFDO0FBRUQsU0FBUyxnQkFBZ0IsQ0FBQyxJQUFZO0lBQ3BDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDN0MsQ0FBQztBQUVELFNBQVMsUUFBUSxDQUFDLElBQVU7SUFDMUIsT0FBTywwQkFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNoQyxDQUFDO0FBRUQsU0FBUyxPQUFPLENBQUMsTUFBYztJQUM3QixPQUFPLE1BQU0sQ0FBQyxVQUFVLElBQUksY0FBVSxDQUFDLFVBQVUsQ0FBQztBQUNwRCxDQUFDO0FBRUQsU0FBUyxXQUFXLENBQUMsSUFBYztJQUNqQyxJQUFJLFdBQVcsR0FBRztRQUNoQixLQUFLO1FBQ0wsS0FBSztRQUNMLFFBQVE7UUFDUixNQUFNO1FBQ04sS0FBSztRQUNMLEtBQUs7UUFDTCxZQUFZO1FBQ1osTUFBTTtRQUNOLFNBQVM7S0FDVixDQUFDO0lBQ0YsT0FBTyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUVELGlFQUFpRTtBQUNqRTtJQUFrQyx1Q0FBVztJQTJCM0MsNkJBQVksTUFBYztRQUExQixZQUNFLGtCQUFNLE1BQU0sQ0FBQyxTQUNkO1FBNUJPLGlCQUFXLEdBQThCO1lBQy9DLEdBQUcsRUFBRSxTQUFTO1lBQ2QsR0FBRyxFQUFFLFNBQVM7WUFDZCxHQUFHLEVBQUUsUUFBUTtZ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Q0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sd0NBQVUsR0FBbEIsVUFBbUIsTUFBYztRQUMvQixPQUEwQixDQUN4QixNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFBLFNBQVMsSUFBSSxPQUFBLFNBQVMsQ0FBQyxJQUFJLElBQUksWUFBUSxDQUFDLE1BQU0sRUFBakMsQ0FBaUMsQ0FBQyxDQUN6RSxDQUFDO0lBQ0osQ0FBQztJQUVPLHdDQUFVLEdBQWxCLFVBQW1CLE1BQWM7UUFDL0IsSUFBSSxZQUFZLEdBQTJCLENBQ3pDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUN0QixVQUFBLFNBQVM7WUFDUCxPQUFBLFNBQVMsQ0FBQyxJQUFJLElBQUksWUFBUSxDQUFDLG1CQUFtQjtnQkFDOUMsU0FBUyxDQUFDLElBQUksSUFBSSxZQUFRLENBQUMsZ0JBQWdCO1FBRDNDLENBQzJDLENBQzlDLENBQ0YsQ0FBQztRQUNGLE9BQU8sWUFBWSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxFQUFFLENBQUMsZUFBVyxDQUFDLE1BQU0sQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQTF0QkQsQ0FBa0MseUJBQVcsR0EwdEI1QztBQUVELFNBQWdCLFVBQVUsQ0FBQyxNQUFjO0lBQ3ZDLElBQUksS0FBSyxHQUFHLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsRCxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFIRCxnQ0FHQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOiBuby12b2lkLWV4cHJlc3Npb24gYXMtdHlwZXMgYXMtdmFyaWFibGVzXG5cbmltcG9ydCB7XG4gIFNvdXJjZSxcbiAgRXhwb3J0c1dhbGtlcixcbiAgQ2xhc3MsXG4gIFJhbmdlLFxuICBQcm9ncmFtLFxuICBHbG9iYWwsXG4gIEVudW0sXG4gIENvbW1vbkZsYWdzLFxuICBJbnRlcmZhY2UsXG4gIEZpZWxkLFxuICBFbGVtZW50LFxuICBUeXBlLFxuICBJbXBvcnRTdGF0ZW1lbnQsXG4gIE5vZGVLaW5kLFxuICBEZWNsYXJhdGlvblN0YXRlbWVudCxcbiAgRnVuY3Rpb24sXG4gIFR5cGVLaW5kLFxuICBQYXJzZXIsXG4gIENvbW1lbnROb2RlLFxuICBDb21tZW50S2luZCxcbiAgRmlsZSxcbiAgQ2xhc3NEZWNsYXJhdGlvbixcbiAgRnVuY3Rpb25EZWNsYXJhdGlvbixcbiAgVHlwZU5vZGUsXG4gIEZpZWxkRGVjbGFyYXRpb24sXG4gIFN0YXRlbWVudCxcbiAgTm9kZSxcbiAgTmFtZWRUeXBlTm9kZSxcbiAgU291cmNlS2luZFxufSBmcm9tIFwiLi4vLi5cIjtcbmltcG9ydCB7IFRyYW5zZm9ybWVyIH0gZnJvbSBcIi4vdHJhbnNmb3JtZXJcIjtcblxuaW1wb3J0IHsgQVNUQnVpbGRlciB9IGZyb20gXCIuL3NvdXJjZUJ1aWxkZXJcIjtcblxuaW50ZXJmYWNlIFNpbXBsZUZpZWxkIHtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlOiBUeXBlTm9kZTtcbn1cblxuZnVuY3Rpb24gaXNDb21tZW50KHN0bXQ6IFN0YXRlbWVudCk6IGJvb2xlYW4ge1xuICByZXR1cm4gc3RtdC5raW5kID09IE5vZGVLaW5kLkNPTU1FTlQ7XG59XG5cbmZ1bmN0aW9uIGhhc05lYXJEZWNvcmF0b3Ioc3RtdDogU291cmNlKTogYm9vbGVhbiB7XG4gIHJldHVybiBzdG10LnRleHQuc3RhcnRzV2l0aChcIi8vQG5lYXJmaWxlXCIpO1xufVxuXG5mdW5jdGlvbiB0b1N0cmluZyhub2RlOiBOb2RlKTogc3RyaW5nIHtcbiAgcmV0dXJuIEFTVEJ1aWxkZXIuYnVpbGQobm9kZSk7XG59XG5cbmZ1bmN0aW9uIGlzRW50cnkoc291cmNlOiBTb3VyY2UpOiBib29sZWFuIHtcbiAgcmV0dXJuIHNvdXJjZS5zb3VyY2VLaW5kID09IFNvdXJjZUtpbmQuVVNFUl9FTlRSWTtcbn1cblxuZnVuY3Rpb24gaXNSZWZlcmVuY2UodHlwZTogVHlwZU5vZGUpOiBib29sZWFuIHtcbiAgbGV0IHNpbXBsZVR5cGVzID0gW1xuICAgIFwiaTMyXCIsXG4gICAgXCJ1MzJcIixcbiAgICBcInN0cmluZ1wiLFxuICAgIFwiYm9vbFwiLFxuICAgIFwiaTY0XCIsXG4gICAgXCJ1NjRcIixcbiAgICBcIlVpbnQ4QXJyYXlcIixcbiAgICBcInUxMjhcIixcbiAgICBcImJvb2xlYW5cIlxuICBdO1xuICByZXR1cm4gIXNpbXBsZVR5cGVzLmluY2x1ZGVzKHRvU3RyaW5nKHR5cGUpKTtcbn1cblxuLy8gVE9ETzogRXh0cmFjdCB0aGlzIGludG8gc2VwYXJhdGUgbW9kdWxlLCBwcmVmZXJyYWJsZSBwbHVnZ2FibGVcbmNsYXNzIE5FQVJCaW5kaW5nc0J1aWxkZXIgZXh0ZW5kcyBUcmFuc2Zvcm1lciB7XG4gIHByaXZhdGUgdHlwZU1hcHBpbmc6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XG4gICAgaTMyOiBcIkludGVnZXJcIixcbiAgICB1MzI6IFwiSW50ZWdlclwiLFxuICAgIGk2NDogXCJTdHJpbmdcIixcbiAgICB1NjQ6IFwiU3RyaW5nXCIsXG4gICAgc3RyaW5nOiBcIlN0cmluZ1wiLFxuICAgIGJvb2w6IFwiQm9vbGVhblwiLFxuICAgIFVpbnQ4QXJyYXk6IFwiU3RyaW5nXCIsXG4gICAgdTEyODogXCJTdHJpbmdcIlxuICB9O1xuXG4gIHByaXZhdGUgbm9uTnVsbGFibGVUeXBlcyA9IFtcImkzMlwiLCBcInUzMlwiLCBcImk2NFwiLCBcInU2NFwiLCBcImJvb2xcIl07XG5cbiAgcHJpdmF0ZSBzYjogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBnZW5lcmF0ZWRFbmNvZGVGdW5jdGlvbnMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgcHJpdmF0ZSBnZW5lcmF0ZWREZWNvZGVGdW5jdGlvbnMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgcHJpdmF0ZSBleHBvcnRlZENsYXNzZXM6IE1hcDxzdHJpbmcsIENsYXNzRGVjbGFyYXRpb24+ID0gbmV3IE1hcCgpO1xuICBwcml2YXRlIGV4cG9ydGVkRnVuY3Rpb25zOiBGdW5jdGlvbltdID0gW107XG4gIGNsYXNzSW5qZWN0aW9ucyA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG4gIGNsYXNzUmFuZ2VzID0gbmV3IE1hcDxzdHJpbmcsIFJhbmdlPigpO1xuICBnZW5lcmF0ZWRBcmdQYXJzZXJGdW5jdGlvbnM6IFNldDxzdHJpbmc+ID0gbmV3IFNldCgpO1xuXG4gIHN0YXRpYyBidWlsZChwYXJzZXI6IFBhcnNlciwgc291cmNlOiBTb3VyY2VbXSk6IHZvaWQge1xuICAgIG5ldyBORUFSQmluZGluZ3NCdWlsZGVyKHBhcnNlcikuYnVpbGQoc291cmNlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHBhcnNlcjogUGFyc2VyKSB7XG4gICAgc3VwZXIocGFyc2VyKTtcbiAgfVxuXG4gIHN0YXRpYyBuZWFyRmlsZXMocGFyc2VyOiBQYXJzZXIpOiBTb3VyY2VbXSB7XG4gICAgcmV0dXJuIHBhcnNlci5wcm9ncmFtLnNvdXJjZXMuZmlsdGVyKGhhc05lYXJEZWNvcmF0b3IpO1xuICB9XG5cbiAgd2FsaygpOiB2b2lkIHt9XG5cbiAgdmlzaXRDbGFzc0RlY2xhcmF0aW9uKG5vZGU6IENsYXNzRGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5leHBvcnRlZENsYXNzZXMuaGFzKHRvU3RyaW5nKG5vZGUubmFtZSkpKSByZXR1cm47XG4gICAgdGhpcy5jbGFzc1Jhbmdlcy5zZXQodG9TdHJpbmcobm9kZS5uYW1lKSwgbm9kZS5yYW5nZSk7XG4gICAgLy8gaWYgKCFub2RlLmlzKENvbW1vbkZsYWdzLk1PRFVMRV9FWFBPUlQpKXtcbiAgICAvLyAgIHJldHVybjtcbiAgICAvLyB9XG4gICAgdGhpcy5leHBvcnRlZENsYXNzZXMuc2V0KHRvU3RyaW5nKG5vZGUubmFtZSksIG5vZGUpO1xuICB9XG5cbiAgLy8gdmlzaXRGdW5jdGlvbkRlY2xhcmF0aW9uKG5vZGU6IEZ1bmN0aW9uRGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgLy8gICBpZiAoIW5vZGUuaXMoQ29tbW9uRmxhZ3MuTU9EVUxFX0VYUE9SVCkpIHtcbiAgLy8gICAgIHJldHVybjtcbiAgLy8gICB9XG4gIC8vICAgdGhpcy5nZW5lcmF0ZUFyZ3NQYXJzZXIobm9kZSk7XG4gIC8vICAgdGhpcy5nZW5lcmF0ZVdyYXBwZXJGdW5jdGlvbihub2RlKTtcbiAgLy8gICB0aGlzLmV4cG9ydGVkRnVuY3Rpb25zLnB1c2gobm9kZSk7XG5cbiAgLy8gfVxuXG4gIC8vIHZpc2l0Q2xhc3MobmFtZTogc3RyaW5nLCBlbGVtZW50OiBDbGFzcyk6IHZvaWQge1xuICAvLyAgIHRoaXMuY2xhc3NSYW5nZXMuc2V0KGVsZW1lbnQubmFtZSwgZWxlbWVudC5kZWNsYXJhdGlvbi5yYW5nZSk7XG4gIC8vICAgaWYgKCFlbGVtZW50LmlzKENvbW1vbkZsYWdzLk1PRFVMRV9FWFBPUlQpKSB7XG4gIC8vICAgICByZXR1cm47XG4gIC8vICAgfVxuICAvLyAgIHRoaXMuZXhwb3J0ZWRDbGFzc2VzLnB1c2goZWxlbWVudCk7XG4gIC8vIH1cblxuICAvLyB2aXNpdEZ1bmN0aW9uKG5hbWU6IHN0cmluZywgZWxlbWVudDogRnVuY3Rpb24pOiB2b2lkIHtcbiAgLy8gICBpZiAoIWVsZW1lbnQuaXMoQ29tbW9uRmxhZ3MuTU9EVUxFX0VYUE9SVCkpIHtcbiAgLy8gICAgIHJldHVybjtcbiAgLy8gICB9XG4gIC8vICAgdGhpcy5nZW5lcmF0ZUFyZ3NQYXJzZXIoZWxlbWVudCk7XG4gIC8vICAgdGhpcy5nZW5lcmF0ZVdyYXBwZXJGdW5jdGlvbihlbGVtZW50KTtcbiAgLy8gICB0aGlzLmV4cG9ydGVkRnVuY3Rpb25zLnB1c2goZWxlbWVudCk7XG4gIC8vIH1cblxuICBwcml2YXRlIGdlbmVyYXRlQXJnc1BhcnNlcihlbGVtZW50OiBGdW5jdGlvbkRlY2xhcmF0aW9uKTogdm9pZCB7XG4gICAgdmFyIHNpZ25hdHVyZSA9IGVsZW1lbnQuc2lnbmF0dXJlO1xuICAgIGxldCBuYW1lID0gdG9TdHJpbmcoZWxlbWVudC5uYW1lKTtcbiAgICB2YXIgYXJnczogU2ltcGxlRmllbGRbXSA9IHNpZ25hdHVyZS5wYXJhbWV0ZXJzLm1hcChwYXJhbSA9PiB7XG4gICAgICByZXR1cm4geyBuYW1lOiB0b1N0cmluZyhwYXJhbS5uYW1lKSwgdHlwZTogcGFyYW0udHlwZSB9O1xuICAgIH0pO1xuICAgIGFyZ3NcbiAgICAgIC5maWx0ZXIoYXJnID0+IHRoaXMuaXNBcnJheVR5cGUoYXJnLnR5cGUpKVxuICAgICAgLmZvckVhY2goZmllbGQgPT4gdGhpcy5nZW5lcmF0ZURlY29kZUZ1bmN0aW9uKGZpZWxkLnR5cGUpKTtcbiAgICB0aGlzLnNiLnB1c2goYFxuICAgICAgZXhwb3J0IGNsYXNzIF9fbmVhcl9BcmdzUGFyc2VyXyR7bmFtZX0gZXh0ZW5kcyBUaHJvd2luZ0pTT05IYW5kbGVyIHtcbiAgICAgICAgICBidWZmZXI6IFVpbnQ4QXJyYXk7XG4gICAgICAgICAgZGVjb2RlcjogSlNPTkRlY29kZXI8X19uZWFyX0FyZ3NQYXJzZXJfJHtuYW1lfT47XG4gICAgICAgICAgaGFuZGxlZFJvb3Q6IGJvb2xlYW4gPSBmYWxzZTtgKTtcbiAgICBpZiAoYXJncy5sZW5ndGggPiAwKSB7XG4gICAgICBhcmdzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICB0aGlzLnNiLnB1c2goXG4gICAgICAgICAgYF9fbmVhcl9wYXJhbV8ke2ZpZWxkLm5hbWV9OiAke3RoaXMudHlwZU5hbWUoZmllbGQudHlwZSl9O2BcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5nZW5lcmF0ZUhhbmRsZXJNZXRob2RzKFwidGhpcy5fX25lYXJfcGFyYW1fXCIsIGFyZ3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdlbmVyYXRlSGFuZGxlck1ldGhvZHMoXCJ0aGlzLl9fbmVhcl9wYXJhbV9cIiwgW10pO1xuICAgIH1cbiAgICB0aGlzLnNiLnB1c2goYH1gKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVXcmFwcGVyRnVuY3Rpb24oZWxlbWVudDogRnVuY3Rpb25EZWNsYXJhdGlvbikge1xuICAgIGxldCBzaWduYXR1cmUgPSBlbGVtZW50LnNpZ25hdHVyZTtcbiAgICBsZXQgcGFyYW1zID0gc2lnbmF0dXJlLnBhcmFtZXRlcnM7XG4gICAgbGV0IHJldHVyblR5cGUgPSBzaWduYXR1cmUucmV0dXJuVHlwZTtcbiAgICBpZiAodGhpcy5pc0FycmF5VHlwZShyZXR1cm5UeXBlKSkge1xuICAgICAgdGhpcy5nZW5lcmF0ZUVuY29kZUZ1bmN0aW9uKHJldHVyblR5cGUpO1xuICAgIH1cbiAgICBsZXQgbmFtZSA9IGVsZW1lbnQubmFtZS5zeW1ib2w7XG4gICAgdGhpcy5zYi5wdXNoKGBleHBvcnQgZnVuY3Rpb24gJHtuYW1lfSgpOiB2b2lkIHtcbiAgICAgICAgLy8gUmVhZGluZyBpbnB1dCBieXRlcy5cbiAgICAgICAgbGV0IGpzb24gPSBzdG9yYWdlLl9pbnRlcm5hbFJlYWRCeXRlcyg0LCAwLCAwKSE7XG4gICAgICAgIGxldCBoYW5kbGVyID0gbmV3IF9fbmVhcl9BcmdzUGFyc2VyXyR7bmFtZX0oKTtcbiAgICAgICAgaGFuZGxlci5idWZmZXIgPSBqc29uO1xuICAgICAgICBoYW5kbGVyLmRlY29kZXIgPSBuZXcgSlNPTkRlY29kZXI8X19uZWFyX0FyZ3NQYXJzZXJfJHtuYW1lfT4oaGFuZGxlcik7XG4gICAgICAgIGhhbmRsZXIuZGVjb2Rlci5kZXNlcmlhbGl6ZShqc29uKTtgKTtcbiAgICBpZiAodG9TdHJpbmcocmV0dXJuVHlwZSkgIT09IFwidm9pZFwiKSB7XG4gICAgICB0aGlzLnNiLnB1c2goYGxldCByZXN1bHQ6ICR7dG9TdHJpbmcocmV0dXJuVHlwZSl9ID0gd3JhcHBlZF8ke25hbWV9KGApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNiLnB1c2goYHdyYXBwZWRfJHtuYW1lfShgKTtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNiLnB1c2goXG4gICAgICAgIHBhcmFtc1xuICAgICAgICAgIC5tYXAocGFyYW1OYW1lID0+IGBoYW5kbGVyLl9fbmVhcl9wYXJhbV8ke3BhcmFtTmFtZS5uYW1lLnN5bWJvbH1gKVxuICAgICAgICAgIC5qb2luKFwiLFwiKVxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5zYi5wdXNoKFwiKTtcIik7XG4gICAgaWYgKHRvU3RyaW5nKHJldHVyblR5cGUpICE9PSBcInZvaWRcIikge1xuICAgICAgdGhpcy5zYi5wdXNoKGBcbiAgICAgICAgICBsZXQgZW5jb2RlciA9IG5ldyBKU09ORW5jb2RlcigpO1xuICAgICAgICBgKTtcbiAgICAgIHRoaXMuZ2VuZXJhdGVGaWVsZEVuY29kZXIocmV0dXJuVHlwZSwgXCJudWxsXCIsIFwicmVzdWx0XCIpO1xuICAgICAgdGhpcy5zYi5wdXNoKGBcbiAgICAgICAgICBsZXQgdmFsID0gZW5jb2Rlci5zZXJpYWxpemUoKTtcbiAgICAgICAgICByZXR1cm5fdmFsdWUodmFsLmJ5dGVMZW5ndGgsIDx1c2l6ZT52YWwuYnVmZmVyKTtcbiAgICAgICAgYCk7XG4gICAgfVxuICAgIHRoaXMuc2IucHVzaChgfWApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZUhhbmRsZXJNZXRob2RzKFxuICAgIHZhbHVlUHJlZml4OiBzdHJpbmcsXG4gICAgZmllbGRzOiBTaW1wbGVGaWVsZFtdXG4gICk6IHZvaWQge1xuICAgIHZhciBmaWVsZHNXaXRoVHlwZXMgPSAodHlwZXM6IHN0cmluZ1tdKTogU2ltcGxlRmllbGRbXSA9PlxuICAgICAgZmllbGRzLmZpbHRlcihmaWVsZCA9PiB0eXBlcy5pbmRleE9mKHRoaXMudHlwZU5hbWUoZmllbGQudHlwZSkpICE9IC0xKTtcblxuICAgIHRoaXMuZ2VuZXJhdGVCYXNpY1NldHRlckhhbmRsZXJzKFxuICAgICAgdmFsdWVQcmVmaXgsXG4gICAgICBcIkludGVnZXJcIixcbiAgICAgIFwiaTY0XCIsXG4gICAgICBmaWVsZHNXaXRoVHlwZXMoW1wiaTMyXCIsIFwidTMyXCJdKVxuICAgICk7XG4gICAgdGhpcy5nZW5lcmF0ZUJhc2ljU2V0dGVySGFuZGxlcnMoXG4gICAgICB2YWx1ZVByZWZpeCxcbiAgICAgIFwiU3RyaW5nXCIsXG4gICAgICBcInN0cmluZ1wiLFxuICAgICAgZmllbGRzV2l0aFR5cGVzKFtcInN0cmluZ1wiLCBcImk2NFwiLCBcInU2NFwiLCBcIlVpbnQ4QXJyYXlcIiwgXCJ1MTI4XCJdKVxuICAgICk7XG4gICAgdGhpcy5nZW5lcmF0ZUJhc2ljU2V0dGVySGFuZGxlcnMoXG4gICAgICB2YWx1ZVByZWZpeCxcbiAgICAgIFwiQm9vbGVhblwiLFxuICAgICAgXCJib29sXCIsXG4gICAgICBmaWVsZHNXaXRoVHlwZXMoW1wiYm9vbFwiXSlcbiAgICApO1xuXG4gICAgdmFyIG5vbkJhc2ljRmllbGRzID0gZmllbGRzLmZpbHRlcihmaWVsZCA9PiBpc1JlZmVyZW5jZShmaWVsZC50eXBlKSk7XG5cbiAgICB0aGlzLnNiLnB1c2goXCJzZXROdWxsKG5hbWU6IHN0cmluZyk6IHZvaWQge1wiKTtcbiAgICBub25CYXNpY0ZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgIHRoaXMuc2IucHVzaChgaWYgKG5hbWUgPT0gXCIke2ZpZWxkLm5hbWV9XCIpIHtcbiAgICAgICAgICAke3ZhbHVlUHJlZml4fSR7ZmllbGQubmFtZX0gPSA8JHt0aGlzLnR5cGVOYW1lKGZpZWxkLnR5cGUpfT5udWxsO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfWApO1xuICAgIH0pO1xuICAgIHRoaXMuc2IucHVzaChgXG4gICAgICAgIHN1cGVyLnNldE51bGwobmFtZSk7XG4gICAgICB9YCk7XG5cbiAgICB0aGlzLnNiLnB1c2goYFxuICAgICAgICBwdXNoT2JqZWN0KG5hbWU6IHN0cmluZyk6IGJvb2wge2ApO1xuICAgIHRoaXMuc2IucHVzaChgaWYgKCF0aGlzLmhhbmRsZWRSb290KSB7XG4gICAgICAgIGFzc2VydChuYW1lID09IG51bGwgfHwgbmFtZS5sZW5ndGggPT0gMCk7XG4gICAgICAgIHRoaXMuaGFuZGxlZFJvb3QgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFzc2VydChuYW1lICE9IG51bGwgfHwgbmFtZS5sZW5ndGggIT0gMCk7XG4gICAgICB9YCk7XG4gICAgdGhpcy5nZW5lcmF0ZVB1c2hIYW5kbGVyKFxuICAgICAgdmFsdWVQcmVmaXgsXG4gICAgICBub25CYXNpY0ZpZWxkcy5maWx0ZXIoZmllbGQgPT4gIXRoaXMuaXNBcnJheVR5cGUoZmllbGQudHlwZSkpXG4gICAgKTtcbiAgICB0aGlzLnNiLnB1c2goYFxuICAgICAgICAgIHJldHVybiBzdXBlci5wdXNoT2JqZWN0KG5hbWUpO1xuICAgICAgICB9YCk7XG4gICAgdGhpcy5zYi5wdXNoKGBcbiAgICAgICAgcHVzaEFycmF5KG5hbWU6IHN0cmluZyk6IGJvb2wge2ApO1xuICAgIHRoaXMuZ2VuZXJhdGVQdXNoSGFuZGxlcihcbiAgICAgIHZhbHVlUHJlZml4LFxuICAgICAgbm9uQmFzaWNGaWVsZHMuZmlsdGVyKGZpZWxkID0+IHRoaXMuaXNBcnJheVR5cGUoZmllbGQudHlwZSkpXG4gICAgKTtcbiAgICB0aGlzLnNiLnB1c2goYFxuICAgICAgICAgIHJldHVybiBzdXBlci5wdXNoQXJyYXkobmFtZSk7XG4gICAgICAgIH1gKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVCYXNpY1NldHRlckhhbmRsZXJzKFxuICAgIHZhbHVlUHJlZml4OiBzdHJpbmcsXG4gICAgc2V0dGVyVHlwZTogc3RyaW5nLFxuICAgIHNldHRlclZhbHVlVHlwZTogc3RyaW5nLFxuICAgIG1hdGNoaW5nRmllbGRzOiBTaW1wbGVGaWVsZFtdXG4gICkge1xuICAgIGlmIChtYXRjaGluZ0ZpZWxkcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNiLnB1c2goXG4gICAgICAgIGBzZXQke3NldHRlclR5cGV9KG5hbWU6IHN0cmluZywgdmFsdWU6ICR7c2V0dGVyVmFsdWVUeXBlfSk6IHZvaWQge2BcbiAgICAgICk7XG4gICAgICBtYXRjaGluZ0ZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBhcy12YXJpYWJsZXNcbiAgICAgICAgbGV0IGZpZWxkVHlwZU5hbWUgPSB0aGlzLnR5cGVOYW1lKGZpZWxkLnR5cGUpO1xuICAgICAgICBpZiAoc2V0dGVyVHlwZSA9PSBcInN0cmluZ1wiICYmIGZpZWxkVHlwZU5hbWUgIT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIGlmIChmaWVsZFR5cGVOYW1lID09IFwiVWludDhBcnJheVwiKSB7XG4gICAgICAgICAgICB0aGlzLnNiLnB1c2goYGlmIChuYW1lID09IFwiJHtmaWVsZC5uYW1lfVwiKSB7XG4gICAgICAgICAgICAgICAgJHt2YWx1ZVByZWZpeH0ke2ZpZWxkLm5hbWV9ID0gYmFzZTY0LmRlY29kZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9YCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChmaWVsZFR5cGVOYW1lID09IFwidTEyOFwiKSB7XG4gICAgICAgICAgICB0aGlzLnNiLnB1c2goYGlmIChuYW1lID09IFwiJHtmaWVsZC5uYW1lfVwiKSB7XG4gICAgICAgICAgICAgICAgJHt2YWx1ZVByZWZpeH0ke2ZpZWxkLm5hbWV9ID0gdTEyOC5mcm9tU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1gKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMudHlwZU5hbWUoZmllbGQudHlwZSkgPT09IFwidTY0XCIgPyBcIlU2NFwiIDogXCJJNjRcIjtcbiAgICAgICAgICAgIHRoaXMuc2IucHVzaChgaWYgKG5hbWUgPT0gXCIke2ZpZWxkLm5hbWV9XCIpIHtcbiAgICAgICAgICAgICAgICAke3ZhbHVlUHJlZml4fSR7ZmllbGQubmFtZX0gPSAke2NsYXNzTmFtZX0ucGFyc2VJbnQodmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfWApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNiLnB1c2goYGlmIChuYW1lID09IFwiJHtmaWVsZC5uYW1lfVwiKSB7XG4gICAgICAgICAgICAgICR7dmFsdWVQcmVmaXh9JHtmaWVsZC5uYW1lfSA9IDwke2ZpZWxkVHlwZU5hbWV9PnZhbHVlO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9YCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5zYi5wdXNoKGBcbiAgICAgICAgICBzdXBlci5zZXQke3NldHRlclR5cGV9KG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfWApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVQdXNoSGFuZGxlcih2YWx1ZVByZWZpeDogc3RyaW5nLCBmaWVsZHM6IFNpbXBsZUZpZWxkW10pIHtcbiAgICBmaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICBpZiAoISh0aGlzLnR5cGVOYW1lKGZpZWxkLnR5cGUpIGluIHRoaXMudHlwZU1hcHBpbmcpKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQXJyYXlUeXBlKGZpZWxkLnR5cGUpKSB7XG4gICAgICAgICAgdGhpcy5zYi5wdXNoKGBpZiAobmFtZSA9PSBcIiR7ZmllbGQubmFtZX1cIikge1xuICAgICAgICAgICAgICAke3ZhbHVlUHJlZml4fSR7ZmllbGQubmFtZX0gPSBfX25lYXJfZGVjb2RlXyR7dGhpcy5lbmNvZGVUeXBlKFxuICAgICAgICAgICAgZmllbGQudHlwZVxuICAgICAgICAgICl9KHRoaXMuYnVmZmVyLCB0aGlzLmRlY29kZXIuc3RhdGUpO1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zYi5wdXNoKGBpZiAobmFtZSA9PSBcIiR7ZmllbGQubmFtZX1cIikge1xuICAgICAgICAgICAgICAke3ZhbHVlUHJlZml4fSR7ZmllbGQubmFtZX0gPSAke3RoaXMuZW5jb2RlVHlwZShcbiAgICAgICAgICAgIGZpZWxkLnR5cGVcbiAgICAgICAgICApfS5kZWNvZGUodGhpcy5idWZmZXIsIHRoaXMuZGVjb2Rlci5zdGF0ZSk7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZUFycmF5SGFuZGxlck1ldGhvZHMoXG4gICAgdmFsdWVQcmVmaXg6IHN0cmluZyxcbiAgICBmaWVsZFR5cGU6IFR5cGVOb2RlXG4gICk6IHZvaWQge1xuICAgIHZhciBmaWVsZFR5cGVOYW1lID0gdGhpcy50eXBlTmFtZShmaWVsZFR5cGUpO1xuICAgIHZhciBzZXR0ZXJUeXBlTmFtZSA9IHRoaXMudHlwZU1hcHBpbmdbZmllbGRUeXBlTmFtZV07XG4gICAgaWYgKHNldHRlclR5cGVOYW1lKSB7XG4gICAgICBpZiAoZmllbGRUeXBlTmFtZSA9PSBcInU2NFwiIHx8IGZpZWxkVHlwZU5hbWUgPT0gXCJpNjRcIikge1xuICAgICAgICBsZXQgY2xhc3NOYW1lID0gZmllbGRUeXBlTmFtZSA9PSBcInU2NFwiID8gXCJVNjRcIiA6IFwiSTY0XCI7XG4gICAgICAgIHRoaXMuc2IucHVzaChgc2V0U3RyaW5nKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICAgICAgJHt2YWx1ZVByZWZpeH0ucHVzaCgke2NsYXNzTmFtZX0ucGFyc2VJbnQodmFsdWUpKTtcbiAgICAgICAgICB9YCk7XG4gICAgICB9IGVsc2UgaWYgKGZpZWxkVHlwZU5hbWUgPT0gXCJVaW50OEFycmF5XCIpIHtcbiAgICAgICAgdGhpcy5zYi5wdXNoKGBzZXRTdHJpbmcobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgICAgICAke3ZhbHVlUHJlZml4fS5wdXNoKGJhc2U2NC5kZWNvZGUodmFsdWUpKTtcbiAgICAgICAgICB9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgdmFsdWVUeXBlID0gZmllbGRUeXBlTmFtZTtcbiAgICAgICAgaWYgKHZhbHVlVHlwZSA9PSBcInUzMlwiIHx8IHZhbHVlVHlwZSA9PSBcImkzMlwiKSB7XG4gICAgICAgICAgdmFsdWVUeXBlID0gXCJpNjRcIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNiXG4gICAgICAgICAgLnB1c2goYHNldCR7c2V0dGVyVHlwZU5hbWV9KG5hbWU6IHN0cmluZywgdmFsdWU6ICR7dmFsdWVUeXBlfSk6IHZvaWQge1xuICAgICAgICAgICAgJHt2YWx1ZVByZWZpeH0ucHVzaCg8JHtmaWVsZFR5cGVOYW1lfT52YWx1ZSk7XG4gICAgICAgICAgfWApO1xuICAgICAgfVxuICAgICAgdGhpcy5zYi5wdXNoKGBzZXROdWxsKG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICAgICR7dmFsdWVQcmVmaXh9LnB1c2goPCR7ZmllbGRUeXBlTmFtZX0+bnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcHVzaEFycmF5KG5hbWU6IHN0cmluZyk6IGJvb2wge1xuICAgICAgICAgIGFzc2VydCgobmFtZSA9PSBudWxsIHx8IG5hbWUubGVuZ3RoID09IDApICYmICF0aGlzLmhhbmRsZWRSb290KTtcbiAgICAgICAgICB0aGlzLmhhbmRsZWRSb290ID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNiLnB1c2goYHB1c2hPYmplY3QobmFtZTogc3RyaW5nKTogYm9vbCB7XG4gICAgICAgICAgJHt2YWx1ZVByZWZpeH0ucHVzaChfX25lYXJfZGVjb2RlXyR7dGhpcy5lbmNvZGVUeXBlKFxuICAgICAgICBmaWVsZFR5cGVcbiAgICAgICl9KHRoaXMuYnVmZmVyLCB0aGlzLmRlY29kZXIuc3RhdGUpKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcHVzaEFycmF5KG5hbWU6IHN0cmluZyk6IGJvb2wge1xuICAgICAgICAgIGFzc2VydChuYW1lID09IG51bGwgfHwgbmFtZS5sZW5ndGggPT0gMCk7XG4gICAgICAgICAgaWYgKCF0aGlzLmhhbmRsZWRSb290KSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZWRSb290ID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAke3ZhbHVlUHJlZml4fS5wdXNoKF9fbmVhcl9kZWNvZGVfJHt0aGlzLmVuY29kZVR5cGUoXG4gICAgICAgIGZpZWxkVHlwZVxuICAgICAgKX0odGhpcy5idWZmZXIsIHRoaXMuZGVjb2Rlci5zdGF0ZSkpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfWApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVFbmNvZGVGdW5jdGlvbih0eXBlOiBUeXBlTm9kZSB8IENsYXNzRGVjbGFyYXRpb24pIHtcbiAgICBpZiAodHlwZSBpbnN0YW5jZW9mIFR5cGVOb2RlICYmICFpc1JlZmVyZW5jZSh0eXBlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgdHlwZU5hbWUgPSB0aGlzLnR5cGVOYW1lKHR5cGUpO1xuICAgIGxldCBlbmNvZGVkVHlwZU5hbWUgPSB0aGlzLmVuY29kZVR5cGUodHlwZU5hbWUpO1xuICAgIGlmIChcbiAgICAgIHRoaXMuZ2VuZXJhdGVkRW5jb2RlRnVuY3Rpb25zLmhhcyhlbmNvZGVkVHlwZU5hbWUpIHx8XG4gICAgICB0eXBlTmFtZSBpbiB0aGlzLnR5cGVNYXBwaW5nXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZ2VuZXJhdGVkRW5jb2RlRnVuY3Rpb25zLmFkZChlbmNvZGVkVHlwZU5hbWUpO1xuXG4gICAgLy8gbGV0IG1ldGhvZE5hbWUgPSBgX19uZWFyX2VuY29kZV8ke2VuY29kZWRUeXBlTmFtZX1gO1xuICAgIC8vIGlmICh0aGlzLnRyeVVzaW5nSW1wb3J0KHR5cGUsIG1ldGhvZE5hbWUpKSB7XG4gICAgLy8gICByZXR1cm47XG4gICAgLy8gfVxuXG4gICAgaWYgKHRoaXMuaXNBcnJheVR5cGUodHlwZSkpIHtcbiAgICAgIGxldCBhcnJheVR5cGUgPSA8TmFtZWRUeXBlTm9kZT50eXBlO1xuICAgICAgbGV0IHR5cGVBcmcgPSBhcnJheVR5cGUudHlwZUFyZ3VtZW50cyFbMF07XG4gICAgICAvLyBBcnJheVxuICAgICAgaWYgKHRoaXMuaXNBcnJheVR5cGUodHlwZUFyZykpIHtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUVuY29kZUZ1bmN0aW9uKHR5cGVBcmcpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNiLnB1c2goYEBnbG9iYWxcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIF9fbmVhcl9lbmNvZGVfJHtlbmNvZGVkVHlwZU5hbWV9KFxuICAgICAgICAgICAgdmFsdWU6ICR7dHlwZU5hbWV9LFxuICAgICAgICAgICAgZW5jb2RlcjogSlNPTkVuY29kZXIpOiB2b2lkIHtgKTtcbiAgICAgIHRoaXMuc2IucHVzaChgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge2ApO1xuICAgICAgdGhpcy5nZW5lcmF0ZUZpZWxkRW5jb2RlcihcbiAgICAgICAgYXJyYXlUeXBlLnR5cGVBcmd1bWVudHMhWzBdLFxuICAgICAgICBcIm51bGxcIixcbiAgICAgICAgXCJ2YWx1ZVtpXVwiXG4gICAgICApO1xuICAgICAgdGhpcy5zYi5wdXNoKFwifVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT2JqZWN0XG4gICAgICB0aGlzLmdldEZpZWxkcyh0eXBlKS5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUVuY29kZUZ1bmN0aW9uKGZpZWxkLnR5cGUpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuc2IucHVzaChgQGdsb2JhbFxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gX19uZWFyX2VuY29kZV8ke2VuY29kZWRUeXBlTmFtZX0oXG4gICAgICAgICAgICB2YWx1ZTogJHt0eXBlTmFtZX0sXG4gICAgICAgICAgICBlbmNvZGVyOiBKU09ORW5jb2Rlcik6IHZvaWQge2ApO1xuICAgICAgdGhpcy5nZXRGaWVsZHModHlwZSkuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgIGxldCBmaWVsZFR5cGUgPSBmaWVsZC50eXBlO1xuICAgICAgICBsZXQgZmllbGROYW1lID0gZmllbGQubmFtZTtcbiAgICAgICAgbGV0IHNvdXJjZUV4cHIgPSBgdmFsdWUuJHtmaWVsZE5hbWV9YDtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUZpZWxkRW5jb2RlcihmaWVsZFR5cGUsIGBcIiR7ZmllbGROYW1lfVwiYCwgc291cmNlRXhwcik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnNiLnB1c2goXCJ9XCIpO1xuICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnR5cGVOYW1lKHR5cGUpO1xuICAgIC8vIHRoaXMuY2xhc3NJbmplY3Rpb25zLnNldCh0eXBlLmNsYXNzUmVmZXJlbmNlLm5hbWUsIGluamVjdGlvbnMpO1xuICB9XG5cbiAgLy8gcHJpdmF0ZSB0cnlVc2luZ0ltcG9ydCh0eXBlOiBUeXBlLCBtZXRob2ROYW1lOiBzdHJpbmcpOiBib29sIHtcbiAgLy8gICBsZXQgc291cmNlc1dpdGhFeHBvcnQgPSB0aGlzLnByb2dyYW0uc291cmNlcy5maWx0ZXIoc291cmNlID0+XG4gIC8vICAgICB0aGlzLmdldEV4cG9ydHMoc291cmNlKS5maWx0ZXIoZCA9PiBkLm5hbWUudGV4dCA9PSBtZXRob2ROYW1lKS5sZW5ndGggPiAwKTtcblxuICAvLyAgIGlmIChzb3VyY2VzV2l0aEV4cG9ydC5sZW5ndGggPT0gMCkge1xuICAvLyAgICAgcmV0dXJuIGZhbHNlO1xuICAvLyAgIH1cblxuICAvLyAgIGlmIChzb3VyY2VzV2l0aEV4cG9ydC5sZW5ndGggPiAxKSB7XG4gIC8vICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uXG4gIC8vICAgICBjb25zb2xlLmxvZyhgV0FSTjogbW9yZSB0aGFuIG9uZSBmaWxlIGV4cG9ydGluZyAke21ldGhvZE5hbWV9OiAke3NvdXJjZXNXaXRoRXhwb3J0Lm1hcChzID0+IHMubm9ybWFsaXplZFBhdGgpfWApO1xuICAvLyAgIH1cbiAgLy8gICBsZXQgaW1wb3J0UGF0aCA9IHNvdXJjZXNXaXRoRXhwb3J0WzBdLm5vcm1hbGl6ZWRQYXRoLnJlcGxhY2UoXCIudHNcIiwgXCJcIik7XG4gIC8vICAgdGhpcy5zYi5wdXNoKGBpbXBvcnQgeyAke21ldGhvZE5hbWV9IH0gZnJvbSBcIi4vJHtpbXBvcnRQYXRofVwiO2ApO1xuICAvLyAgIHJldHVybiB0cnVlO1xuICAvLyB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZUhhbmRsZXIodHlwZTogVHlwZU5vZGUgfCBDbGFzc0RlY2xhcmF0aW9uKSB7XG4gICAgbGV0IHR5cGVOYW1lID0gdGhpcy5lbmNvZGVUeXBlKHR5cGUpO1xuICAgIHRoaXMuc2JcbiAgICAgIC5wdXNoKGBleHBvcnQgY2xhc3MgX19uZWFyX0pTT05IYW5kbGVyXyR7dHlwZU5hbWV9IGV4dGVuZHMgVGhyb3dpbmdKU09OSGFuZGxlciB7XG4gICAgICAgIGJ1ZmZlcjogVWludDhBcnJheTtcbiAgICAgICAgZGVjb2RlcjogSlNPTkRlY29kZXI8X19uZWFyX0pTT05IYW5kbGVyXyR7dHlwZU5hbWV9PjtcbiAgICAgICAgaGFuZGxlZFJvb3Q6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgdmFsdWU6ICR7dGhpcy50eXBlTmFtZSh0eXBlKX07XG5cbiAgICAgICAgY29uc3RydWN0b3IodmFsdWVfOiAke3RoaXMudHlwZU5hbWUodHlwZSl9KSB7XG4gICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWVfO1xuICAgICAgICB9XG4gICAgICBgKTtcbiAgICBpZiAodGhpcy5pc0FycmF5VHlwZSh0eXBlKSkge1xuICAgICAgdGhpcy5nZW5lcmF0ZUFycmF5SGFuZGxlck1ldGhvZHMoXG4gICAgICAgIFwidGhpcy52YWx1ZVwiLFxuICAgICAgICAoPE5hbWVkVHlwZU5vZGU+dHlwZSkudHlwZUFyZ3VtZW50cyFbMF1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ2VuZXJhdGVIYW5kbGVyTWV0aG9kcyhcInRoaXMudmFsdWUuXCIsIHRoaXMuZ2V0RmllbGRzKHR5cGUpKTtcbiAgICB9XG4gICAgdGhpcy5zYi5wdXNoKFwifVxcblwiKTtcbiAgfVxuXG4gIHByaXZhdGUgZW5jb2RlVHlwZSh0eXBlOiBUeXBlTm9kZSB8IENsYXNzRGVjbGFyYXRpb24gfCBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGxldCBzdHIgPSB0eXBlb2YgdHlwZSA9PT0gXCJzdHJpbmdcIiA/IHR5cGUgOiB0aGlzLnR5cGVOYW1lKHR5cGUpO1xuICAgIHJldHVybiAoXG4gICAgICBzdHJcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIC5yZXBsYWNlKC9fL2csIFwiX19cIilcbiAgICAgICAgLnJlcGxhY2UoLz4vZywgXCJcIilcbiAgICAgICAgLnJlcGxhY2UoLzwvZywgXCJfXCIpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgdHlwZU5hbWUodHlwZTogVHlwZU5vZGUgfCBDbGFzc0RlY2xhcmF0aW9uKTogc3RyaW5nIHtcbiAgICBpZiAodHlwZSBpbnN0YW5jZW9mIFR5cGVOb2RlKSB7XG4gICAgICByZXR1cm4gQVNUQnVpbGRlci5idWlsZCh0eXBlKTtcbiAgICB9XG4gICAgbGV0IGNsYXNzTmFtZSA9IHRvU3RyaW5nKHR5cGUubmFtZSk7XG4gICAgaWYgKHR5cGUuaXNHZW5lcmljKSB7XG4gICAgICBjbGFzc05hbWUgKz0gXCI8XCIgKyB0eXBlLnR5cGVQYXJhbWV0ZXJzIS5tYXAodG9TdHJpbmcpLmpvaW4oXCIsIFwiKSArIFwiPlwiO1xuICAgIH1cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZURlY29kZUZ1bmN0aW9uKHR5cGU6IFR5cGVOb2RlIHwgQ2xhc3NEZWNsYXJhdGlvbikge1xuICAgIGlmICh0eXBlIGluc3RhbmNlb2YgVHlwZU5vZGUgJiYgIWlzUmVmZXJlbmNlKHR5cGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHR5cGVOYW1lID0gdGhpcy50eXBlTmFtZSh0eXBlKTtcbiAgICB2YXIgZW5jb2RlZFR5cGVOYW1lID0gdGhpcy5lbmNvZGVUeXBlKHR5cGVOYW1lKTtcbiAgICBpZiAoXG4gICAgICB0aGlzLmdlbmVyYXRlZERlY29kZUZ1bmN0aW9ucy5oYXMoZW5jb2RlZFR5cGVOYW1lKSB8fFxuICAgICAgdHlwZU5hbWUgaW4gdGhpcy50eXBlTWFwcGluZ1xuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmdlbmVyYXRlZERlY29kZUZ1bmN0aW9ucy5hZGQoZW5jb2RlZFR5cGVOYW1lKTtcblxuICAgIC8vIHZhciBtZXRob2ROYW1lID0gYF9fbmVhcl9kZWNvZGVfJHtlbmNvZGVkVHlwZU5hbWV9YDtcbiAgICAvLyBpZiAodGhpcy50cnlVc2luZ0ltcG9ydCh0eXBlLCBtZXRob2ROYW1lKSkge1xuICAgIC8vICAgcmV0dXJuO1xuICAgIC8vIH1cbiAgICB0aGlzLmdlbmVyYXRlSGFuZGxlcih0eXBlKTtcbiAgICBpZiAodGhpcy5pc0FycmF5VHlwZSh0eXBlKSkge1xuICAgICAgYXNzZXJ0KHR5cGUgaW5zdGFuY2VvZiBOYW1lZFR5cGVOb2RlKTtcbiAgICAgIGxldCBhcnJheUVsZW1lbnRUeXBlID0gKDxOYW1lZFR5cGVOb2RlPnR5cGUpLnR5cGVBcmd1bWVudHMhWzBdO1xuICAgICAgLy8gQXJyYXlcbiAgICAgIGlmICh0aGlzLmlzQXJyYXlUeXBlKGFycmF5RWxlbWVudFR5cGUpIHx8ICFpc1JlZmVyZW5jZSg8VHlwZU5vZGU+dHlwZSkpIHtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZURlY29kZUZ1bmN0aW9uKGFycmF5RWxlbWVudFR5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPYmplY3RcbiAgICAgIHRoaXMuZ2V0RmllbGRzKHR5cGUpLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICB0aGlzLmdlbmVyYXRlRGVjb2RlRnVuY3Rpb24oZmllbGQudHlwZSEpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5zYi5wdXNoKGBAZ2xvYmFsXG4gICAgICBleHBvcnQgZnVuY3Rpb24gX19uZWFyX2RlY29kZV8ke2VuY29kZWRUeXBlTmFtZX0oXG4gICAgICAgICAgYnVmZmVyOiBVaW50OEFycmF5LCBzdGF0ZTogRGVjb2RlclN0YXRlIHwgbnVsbCwgdmFsdWU6ICR7dHlwZU5hbWV9IHwgbnVsbCA9IG51bGwpOiR7dHlwZU5hbWV9IHtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICB2YWx1ZSA9ICBpbnN0YW50aWF0ZTwke3R5cGVOYW1lfT4oKTsgLy8gQWxsb2NhdGUgd2l0aG91dCBjb25zdHJ1Y3RvclxuICAgICAgICB9XG4gICAgICAgIGxldCBoYW5kbGVyID0gbmV3IF9fbmVhcl9KU09OSGFuZGxlcl8ke2VuY29kZWRUeXBlTmFtZX0odmFsdWUhKTtcbiAgICAgICAgaGFuZGxlci5idWZmZXIgPSBidWZmZXI7XG4gICAgICAgIGhhbmRsZXIuZGVjb2RlciA9IG5ldyBKU09ORGVjb2RlcjxfX25lYXJfSlNPTkhhbmRsZXJfJHtlbmNvZGVkVHlwZU5hbWV9PihoYW5kbGVyKTtcbiAgICAgICAgaGFuZGxlci5kZWNvZGVyLmRlc2VyaWFsaXplKGJ1ZmZlciwgc3RhdGUpO1xuICAgICAgICByZXR1cm4gdmFsdWUhO1xuICAgICAgfVxcbmApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZUZpZWxkRW5jb2RlcihcbiAgICBmaWVsZFR5cGU6IFR5cGVOb2RlLFxuICAgIGZpZWxkRXhwcjogc3RyaW5nLFxuICAgIHNvdXJjZUV4cHI6IHN0cmluZ1xuICApIHtcbiAgICB2YXIgZmllbGRUeXBlTmFtZSA9IHRoaXMudHlwZU5hbWUoZmllbGRUeXBlKTtcbiAgICB2YXIgc2V0dGVyVHlwZSA9IHRoaXMudHlwZU1hcHBpbmdbZmllbGRUeXBlTmFtZV07XG4gICAgaWYgKCFzZXR0ZXJUeXBlKSB7XG4gICAgICAvLyBPYmplY3QgLyBhcnJheVxuICAgICAgbGV0IHB1c2hUeXBlID0gdGhpcy5pc0FycmF5VHlwZShmaWVsZFR5cGUpID8gXCJBcnJheVwiIDogXCJPYmplY3RcIjtcbiAgICAgIGlmICh0aGlzLmlzQXJyYXlUeXBlKGZpZWxkVHlwZSkpIHtcbiAgICAgICAgdGhpcy5zYi5wdXNoKGBpZiAoJHtzb3VyY2VFeHByfSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIGVuY29kZXIucHVzaCR7cHVzaFR5cGV9KCR7ZmllbGRFeHByfSk7XG4gICAgICAgICAgICAgIF9fbmVhcl9lbmNvZGVfJHt0aGlzLmVuY29kZVR5cGUoXG4gICAgICAgICAgICAgICAgZmllbGRUeXBlXG4gICAgICAgICAgICAgICl9KCR7c291cmNlRXhwcn0sIGVuY29kZXIpO1xuICAgICAgICAgICAgICBlbmNvZGVyLnBvcCR7cHVzaFR5cGV9KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlbmNvZGVyLnNldE51bGwoJHtmaWVsZEV4cHJ9KTtcbiAgICAgICAgICAgIH1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2IucHVzaChgaWYgKCR7c291cmNlRXhwcn0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAke3NvdXJjZUV4cHJ9LmVuY29kZShlbmNvZGVyLCAke2ZpZWxkRXhwcn0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZW5jb2Rlci5zZXROdWxsKCR7ZmllbGRFeHByfSk7XG4gICAgICAgICAgICB9YCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEJhc2ljIHR5cGVzXG4gICAgICBpZiAodGhpcy5ub25OdWxsYWJsZVR5cGVzLmluZGV4T2YoZmllbGRUeXBlTmFtZSkgIT0gLTEpIHtcbiAgICAgICAgaWYgKFtcImk2NFwiLCBcInU2NFwiXS5pbmRleE9mKGZpZWxkVHlwZU5hbWUpICE9IC0xKSB7XG4gICAgICAgICAgdGhpcy5zYi5wdXNoKFxuICAgICAgICAgICAgYGVuY29kZXIuc2V0JHtzZXR0ZXJUeXBlfSgke2ZpZWxkRXhwcn0sICR7c291cmNlRXhwcn0udG9TdHJpbmcoKSk7YFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zYi5wdXNoKFxuICAgICAgICAgICAgYGVuY29kZXIuc2V0JHtzZXR0ZXJUeXBlfSgke2ZpZWxkRXhwcn0sICR7c291cmNlRXhwcn0pO2BcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGZpZWxkVHlwZU5hbWUgPT0gXCJVaW50OEFycmF5XCIpIHtcbiAgICAgICAgdGhpcy5zYi5wdXNoKGBpZiAoJHtzb3VyY2VFeHByfSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIGVuY29kZXIuc2V0U3RyaW5nKCR7ZmllbGRFeHByfSwgYmFzZTY0LmVuY29kZSgke3NvdXJjZUV4cHJ9KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlbmNvZGVyLnNldE51bGwoJHtmaWVsZEV4cHJ9KTtcbiAgICAgICAgICAgIH07YCk7XG4gICAgICB9IGVsc2UgaWYgKGZpZWxkVHlwZU5hbWUgPT0gXCJ1MTI4XCIpIHtcbiAgICAgICAgdGhpcy5zYi5wdXNoKGBpZiAoPCR7ZmllbGRUeXBlTmFtZX0+bnVsbCAhPSAke3NvdXJjZUV4cHJ9KSB7XG4gICAgICAgICAgICAgIGVuY29kZXIuc2V0U3RyaW5nKCR7ZmllbGRFeHByfSwgJHtzb3VyY2VFeHByfS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVuY29kZXIuc2V0TnVsbCgke2ZpZWxkRXhwcn0pO1xuICAgICAgICAgICAgfTtgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2IucHVzaChgaWYgKCR7c291cmNlRXhwcn0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICBlbmNvZGVyLnNldCR7c2V0dGVyVHlwZX0oJHtmaWVsZEV4cHJ9LCAke3NvdXJjZUV4cHJ9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVuY29kZXIuc2V0TnVsbCgke2ZpZWxkRXhwcn0pO1xuICAgICAgICAgICAgfWApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaXNBcnJheVR5cGUodHlwZTogVHlwZU5vZGUgfCBDbGFzc0RlY2xhcmF0aW9uKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhKFxuICAgICAgdHlwZSBpbnN0YW5jZW9mIE5hbWVkVHlwZU5vZGUgJiZcbiAgICAgIHRvU3RyaW5nKHR5cGUpLnN0YXJ0c1dpdGgoXCJBcnJheVwiKSAmJlxuICAgICAgdHlwZS50eXBlQXJndW1lbnRzICYmXG4gICAgICB0eXBlLnR5cGVBcmd1bWVudHMubGVuZ3RoID4gMFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldEZpZWxkcyh0eXBlOiBUeXBlTm9kZSB8IENsYXNzRGVjbGFyYXRpb24pOiBTaW1wbGVGaWVsZFtdIHtcbiAgICBsZXQgX2NsYXNzID1cbiAgICAgIHR5cGUgaW5zdGFuY2VvZiBDbGFzc0RlY2xhcmF0aW9uXG4gICAgICAgID8gdHlwZVxuICAgICAgICA6IHRoaXMuZXhwb3J0ZWRDbGFzc2VzLmdldCh0b1N0cmluZyh0eXBlKSk7XG4gICAgaWYgKF9jbGFzcyA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIF9jbGFzcy5tZW1iZXJzXG4gICAgICAuZmlsdGVyKG1lbWJlciA9PiBtZW1iZXIgaW5zdGFuY2VvZiBGaWVsZERlY2xhcmF0aW9uKVxuICAgICAgLm1hcChcbiAgICAgICAgKHBhcmFtOiBGaWVsZERlY2xhcmF0aW9uKTogU2ltcGxlRmllbGQgPT4ge1xuICAgICAgICAgIHJldHVybiB7IG5hbWU6IHRvU3RyaW5nKHBhcmFtLm5hbWUpLCB0eXBlOiBwYXJhbS50eXBlISB9O1xuICAgICAgICB9XG4gICAgICApO1xuICB9XG5cbiAgYnVpbGQoc291cmNlczogU291cmNlW10pOiB2b2lkIHtcbiAgICBsZXQgY2xhc3NEZWNsYXJhdGlvbnM6IE1hcDxTb3VyY2UsIENsYXNzRGVjbGFyYXRpb25bXT4gPSBuZXcgTWFwKCk7XG4gICAgbGV0IGZ1bmNEZWNsYXJhdGlvbnM6IE1hcDxTb3VyY2UsIEZ1bmN0aW9uRGVjbGFyYXRpb25bXT4gPSBuZXcgTWFwKCk7XG4gICAgc291cmNlcy5mb3JFYWNoKHNvdXJjZSA9PiB7XG4gICAgICBjbGFzc0RlY2xhcmF0aW9ucy5zZXQoc291cmNlLCBbXSk7XG4gICAgICBmdW5jRGVjbGFyYXRpb25zLnNldChzb3VyY2UsIFtdKTtcbiAgICAgIHNvdXJjZS5zdGF0ZW1lbnRzLmZvckVhY2goc3RtdCA9PiB7XG4gICAgICAgIGlmIChzdG10IGluc3RhbmNlb2YgQ2xhc3NEZWNsYXJhdGlvbilcbiAgICAgICAgICBjbGFzc0RlY2xhcmF0aW9ucy5nZXQoc291cmNlKSEucHVzaChzdG10KTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHN0bXQgaW5zdGFuY2VvZiBGdW5jdGlvbkRlY2xhcmF0aW9uICYmXG4gICAgICAgICAgKHN0bXQuaXMoQ29tbW9uRmxhZ3MuRVhQT1JUKSB8fCBzdG10LmlzKENvbW1vbkZsYWdzLk1PRFVMRV9FWFBPUlQpKSAmJlxuICAgICAgICAgICFpc0VudHJ5KHNvdXJjZSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgZnVuY0RlY2xhcmF0aW9ucy5nZXQoc291cmNlKSEucHVzaChzdG10KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBsZXQgZnVuY3NUb1dyYXA6IEZ1bmN0aW9uRGVjbGFyYXRpb25bXSA9IFtdO1xuXG4gICAgbGV0IGZ1bmNSZW5hbWUgPSAobm9kZTogTm9kZSk6IE5vZGUgPT4ge1xuICAgICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIEZ1bmN0aW9uRGVjbGFyYXRpb24pKSByZXR1cm4gbm9kZTtcbiAgICAgIGlmIChcbiAgICAgICAgIShub2RlLmlzKENvbW1vbkZsYWdzLk1PRFVMRV9FWFBPUlQpIHx8IG5vZGUuaXMoQ29tbW9uRmxhZ3MuRVhQT1JUKSkgfHxcbiAgICAgICAgaXNFbnRyeShub2RlLnJhbmdlLnNvdXJjZSlcbiAgICAgIClcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICBub2RlLmZsYWdzID0gbm9kZS5pcyhDb21tb25GbGFncy5NT0RVTEVfRVhQT1JUKVxuICAgICAgICA/IG5vZGUuZmxhZ3MgXiBDb21tb25GbGFncy5NT0RVTEVfRVhQT1JUXG4gICAgICAgIDogbm9kZS5mbGFncyBeIENvbW1vbkZsYWdzLkVYUE9SVDtcbiAgICAgIG5vZGUubmFtZS5zeW1ib2wgPSBcIndyYXBwZWRfXCIgKyBub2RlLm5hbWUuc3ltYm9sO1xuICAgICAgbm9kZS5uYW1lLnRleHQgPSBcIndyYXBwZWRfXCIgKyBub2RlLm5hbWUudGV4dDtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG5cbiAgICBsZXQgbmV3U291cmNlID0gKHNvdXJjZTogU291cmNlKTogc3RyaW5nID0+IHtcbiAgICAgIHRoaXMuc2IgPSBbXG4gICAgICAgIGBpbXBvcnQgeyBzdG9yYWdlLCBuZWFyLCBiYXNlNjQsIHJldHVybl92YWx1ZSB9IGZyb20gXCJuZWFyLXJ1bnRpbWUtdHNcIjtcbmltcG9ydCB7IEpTT05FbmNvZGVyIH0gZnJvbSBcImFzc2VtYmx5c2NyaXB0LWpzb25cIjtcbmltcG9ydCB7IEpTT05EZWNvZGVyLCBUaHJvd2luZ0pTT05IYW5kbGVyLCBEZWNvZGVyU3RhdGUgfSBmcm9tIFwiYXNzZW1ibHlzY3JpcHQtanNvblwiO2BcbiAgICAgIF07XG4gICAgICBmdW5jRGVjbGFyYXRpb25zLmdldChzb3VyY2UpIS5mb3JFYWNoKGZ1bmMgPT4ge1xuICAgICAgICB0aGlzLmdlbmVyYXRlQXJnc1BhcnNlcihmdW5jKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZVdyYXBwZXJGdW5jdGlvbihmdW5jKTtcbiAgICAgIH0pO1xuICAgICAgY2xhc3NEZWNsYXJhdGlvbnMuZ2V0KHNvdXJjZSkhLmZvckVhY2goX2NsYXNzID0+IHtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZURlY29kZUZ1bmN0aW9uKF9jbGFzcyk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVFbmNvZGVGdW5jdGlvbihfY2xhc3MpO1xuICAgICAgfSk7XG4gICAgICBsZXQgc291cmNlVGV4dCA9IHNvdXJjZS5zdGF0ZW1lbnRzLm1hcChzdG10ID0+IHtcbiAgICAgICAgbGV0IHN0ciA9IEFTVEJ1aWxkZXIuYnVpbGQoc3RtdCwgZnVuY1JlbmFtZSk7XG4gICAgICAgIGlmIChzdG10IGluc3RhbmNlb2YgQ2xhc3NEZWNsYXJhdGlvbikge1xuICAgICAgICAgIHN0ciA9IHN0ci5zbGljZSgwLCBzdHIubGFzdEluZGV4T2YoXCJ9XCIpKTtcbiAgICAgICAgICBsZXQgY2xhc3NOYW1lID0gdG9TdHJpbmcoc3RtdC5uYW1lKTtcbiAgICAgICAgICBzdHIgKz0gYFxuICBzdGF0aWMgZGVjb2RlKGpzb246IFVpbnQ4QXJyYXksIHN0YXRlOiBEZWNvZGVyU3RhdGUgfCBudWxsID0gbnVsbCk6ICR7Y2xhc3NOYW1lfSB7XG4gICAgbGV0IHZhbHVlID0gaW5zdGFudGlhdGU8JHtjbGFzc05hbWV9PigpOyAvLyBBbGxvY2F0ZSB3aXRob3V0IGNvbnN0cnVjdG9yXG4gICAgdmFsdWUuZGVjb2RlKGpzb24sIHN0YXRlKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBkZWNvZGUoanNvbjogVWludDhBcnJheSwgc3RhdGU6IERlY29kZXJTdGF0ZSB8IG51bGwpOiAke2NsYXNzTmFtZX0ge1xuICAgIF9fbmVhcl9kZWNvZGVfJHtjbGFzc05hbWV9KGpzb24sIHN0YXRlLCB0aGlzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgX2VuY29kZXIoZW5jb2RlcjogSlNPTkVuY29kZXIsIG5hbWU6IHN0cmluZyB8IG51bGwpOiBKU09ORW5jb2RlciB7XG4gICAgZW5jb2Rlci5wdXNoT2JqZWN0KG5hbWUpO1xuICAgIF9fbmVhcl9lbmNvZGVfJHtjbGFzc05hbWV9KHRoaXMsIGVuY29kZXIpO1xuICAgIGVuY29kZXIucG9wT2JqZWN0KCk7XG4gICAgcmV0dXJuIGVuY29kZXI7XG4gIH1cblxuICBlbmNvZGUoX2VuY29kZXI6IEpTT05FbmNvZGVyIHwgbnVsbCA9IG51bGwsIG5hbWU6IHN0cmluZyB8IG51bGwgPSBcIlwiKTogSlNPTkVuY29kZXIge1xuICAgIGxldCBlbmNvZGVyID0gX2VuY29kZXIgIT0gbnVsbCA/IF9lbmNvZGVyIDogbmV3IEpTT05FbmNvZGVyKCk7XG4gICAgcmV0dXJuIHRoaXMuX2VuY29kZXIoZW5jb2RlciEsIG5hbWUpO1xuICB9XG5cbiAgc2VyaWFsaXplKCk6IFVpbnQ4QXJyYXkge1xuICAgIHJldHVybiB0aGlzLmVuY29kZSgpLnNlcmlhbGl6ZSgpO1xuICB9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZW5jb2RlcigpLnRvU3RyaW5nKCk7XG4gIH1cbn1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHRoaXMuc2IuY29uY2F0KHNvdXJjZVRleHQpLmpvaW4oXCJcXG5cIik7XG4gICAgfTtcbiAgICBzb3VyY2VzLmZvckVhY2goc291cmNlID0+IHtcbiAgICAgIHRoaXMucGFyc2VyLmRvbmVsb2cuZGVsZXRlKHNvdXJjZS5pbnRlcm5hbFBhdGgpO1xuICAgICAgdGhpcy5wYXJzZXIuc2VlbmxvZy5kZWxldGUoc291cmNlLmludGVybmFsUGF0aCk7XG4gICAgICB0aGlzLnBhcnNlci5wcm9ncmFtLnNvdXJjZXMgPSB0aGlzLnBhcnNlci5wcm9ncmFtLnNvdXJjZXMuZmlsdGVyKFxuICAgICAgICBfc291cmNlID0+IF9zb3VyY2UgIT09IHNvdXJjZVxuICAgICAgKTtcbiAgICAgIGxldCBzb3VyY2VUZXh0ID0gbmV3U291cmNlKHNvdXJjZSk7XG4gICAgICB0aGlzLnBhcnNlci5wYXJzZUZpbGUoXG4gICAgICAgIHNvdXJjZVRleHQsXG4gICAgICAgIChpc0VudHJ5KHNvdXJjZSkgPyBcIlwiIDogXCIuL1wiKSArIHNvdXJjZS5ub3JtYWxpemVkUGF0aCxcbiAgICAgICAgaXNFbnRyeShzb3VyY2UpXG4gICAgICApO1xuICAgIH0pO1xuXG4gIH1cblxuICBwcml2YXRlIGNvcHlJbXBvcnRzKG1haW5Tb3VyY2U6IFNvdXJjZSk6IHZvaWQge1xuICAgIHRoaXMuZ2V0SW1wb3J0cyhtYWluU291cmNlKS5mb3JFYWNoKHN0YXRlbWVudCA9PiB7XG4gICAgICBpZiAoc3RhdGVtZW50LmRlY2xhcmF0aW9ucykge1xuICAgICAgICBsZXQgZGVjbGFyYXRpb25zU3RyID0gc3RhdGVtZW50XG4gICAgICAgICAgLmRlY2xhcmF0aW9ucyEubWFwKFxuICAgICAgICAgICAgZGVjbGFyYXRpb24gPT5cbiAgICAgICAgICAgICAgYCR7ZGVjbGFyYXRpb24uZm9yZWlnbk5hbWUudGV4dH0gYXMgJHtkZWNsYXJhdGlvbi5uYW1lLnRleHR9YFxuICAgICAgICAgIClcbiAgICAgICAgICAuam9pbihcIixcIik7XG4gICAgICAgIHRoaXMuc2IucHVzaChcbiAgICAgICAgICBgaW1wb3J0IHske2RlY2xhcmF0aW9uc1N0cn19IGZyb20gXCIke3N0YXRlbWVudC5wYXRoLnZhbHVlfVwiO2BcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SW1wb3J0cyhzb3VyY2U6IFNvdXJjZSk6IEltcG9ydFN0YXRlbWVudFtdIHtcbiAgICByZXR1cm4gPEltcG9ydFN0YXRlbWVudFtdPihcbiAgICAgIHNvdXJjZS5zdGF0ZW1lbnRzLmZpbHRlcihzdGF0ZW1lbnQgPT4gc3RhdGVtZW50LmtpbmQgPT0gTm9kZUtpbmQuSU1QT1JUKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldEV4cG9ydHMoc291cmNlOiBTb3VyY2UpOiBEZWNsYXJhdGlvblN0YXRlbWVudFtdIHtcbiAgICBsZXQgZGVjbGFyYXRpb25zID0gPERlY2xhcmF0aW9uU3RhdGVtZW50W10+KFxuICAgICAgc291cmNlLnN0YXRlbWVudHMuZmlsdGVyKFxuICAgICAgICBzdGF0ZW1lbnQgPT5cbiAgICAgICAgICBzdGF0ZW1lbnQua2luZCA9PSBOb2RlS2luZC5GVU5DVElPTkRFQ0xBUkFUSU9OIHx8XG4gICAgICAgICAgc3RhdGVtZW50LmtpbmQgPT0gTm9kZUtpbmQuQ0xBU1NERUNMQVJBVElPTlxuICAgICAgKVxuICAgICk7XG4gICAgcmV0dXJuIGRlY2xhcmF0aW9ucy5maWx0ZXIoZCA9PiBkLmlzKENvbW1vbkZsYWdzLkVYUE9SVCkpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZnRlclBhcnNlKHBhcnNlcjogUGFyc2VyKTogdm9pZCB7XG4gIGxldCBmaWxlcyA9IE5FQVJCaW5kaW5nc0J1aWxkZXIubmVhckZpbGVzKHBhcnNlcik7XG4gIE5FQVJCaW5kaW5nc0J1aWxkZXIuYnVpbGQocGFyc2VyLCBmaWxlcyk7XG59XG4iXX0=