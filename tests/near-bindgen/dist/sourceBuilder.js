"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assemblyscript_1 = require("assemblyscript");
/** An AST builder. */
var ASTBuilder = /** @class */ (function () {
    function ASTBuilder(transformer) {
        this.transformer = transformer;
        this.sb = [];
        this.indentLevel = 0;
    }
    /** Rebuilds the textual source from the specified AST, as far as possible. */
    ASTBuilder.build = function (node, transformer) {
        if (transformer === void 0) { transformer = function (x) { return x; }; }
        var builder = new ASTBuilder(transformer);
        builder.visitNode(node);
        return builder.finish();
    };
    ASTBuilder.prototype.visitNode = function (_node) {
        var node = this.transformer(_node);
        switch (node.kind) {
            case assemblyscript_1.NodeKind.SOURCE: {
                this.visitSource(node);
                break;
            }
            // types
            case assemblyscript_1.NodeKind.NAMEDTYPE: {
                this.visitNamedTypeNode(node);
                break;
            }
            case assemblyscript_1.NodeKind.FUNCTIONTYPE: {
                this.visitFunctionTypeNode(node);
                break;
            }
            case assemblyscript_1.NodeKind.TYPEPARAMETER: {
                this.visitTypeParameter(node);
                break;
            }
            // expressions
            case assemblyscript_1.NodeKind.FALSE:
            case assemblyscript_1.NodeKind.NULL:
            case assemblyscript_1.NodeKind.SUPER:
            case assemblyscript_1.NodeKind.THIS:
            case assemblyscript_1.NodeKind.TRUE:
            case assemblyscript_1.NodeKind.CONSTRUCTOR:
            case assemblyscript_1.NodeKind.IDENTIFIER: {
                this.visitIdentifierExpression(node);
                break;
            }
            case assemblyscript_1.NodeKind.ASSERTION: {
                this.visitAssertionExpression(node);
                break;
            }
            case assemblyscript_1.NodeKind.BINARY: {
                this.visitBinaryExpression(node);
                break;
            }
            case assemblyscript_1.NodeKind.CALL: {
                this.visitCallExpression(node);
                break;
            }
            case assemblyscript_1.NodeKind.CLASS: {
                this.visitClassExpression(node);
                break;
            }
            case assemblyscript_1.NodeKind.COMMA: {
                this.visitCommaExpression(node);
                break;
            }
            case assemblyscript_1.NodeKind.ELEMENTACCESS: {
                this.visitElementAccessExpression(node);
                break;
            }
            case assemblyscript_1.NodeKind.FUNCTION: {
                this.visitFunctionExpression(node);
                break;
            }
            case assemblyscript_1.NodeKind.INSTANCEOF: {
                this.visitInstanceOfExpression(node);
                break;
            }
            case assemblyscript_1.NodeKind.LITERAL: {
                this.visitLiteralExpression(node);
                break;
            }
            case assemblyscript_1.NodeKind.NEW: {
                this.visitNewExpression(node);
                break;
            }
            case assemblyscript_1.NodeKind.PARENTHESIZED: {
                this.visitParenthesizedExpression(node);
                break;
            }
            case assemblyscript_1.NodeKind.PROPERTYACCESS: {
                this.visitPropertyAccessExpression(node);
                break;
            }
            case assemblyscript_1.NodeKind.TERNARY: {
                this.visitTernaryExpression(node);
                break;
            }
            case assemblyscript_1.NodeKind.UNARYPOSTFIX: {
                this.visitUnaryPostfixExpression(node);
                break;
            }
            case assemblyscript_1.NodeKind.UNARYPREFIX: {
                this.visitUnaryPrefixExpression(node);
                break;
            }
            // statements
            case assemblyscript_1.NodeKind.BLOCK: {
                this.visitBlockStatement(node);
                break;
            }
            case assemblyscript_1.NodeKind.BREAK: {
                this.visitBreakStatement(node);
                break;
            }
            case assemblyscript_1.NodeKind.CONTINUE: {
                this.visitContinueStatement(node);
                break;
            }
            case assemblyscript_1.NodeKind.DO: {
                this.visitDoStatement(node);
                break;
            }
            case assemblyscript_1.NodeKind.EMPTY: {
                this.visitEmptyStatement(node);
                break;
            }
            case assemblyscript_1.NodeKind.EXPORT: {
                this.visitExportStatement(node);
                break;
            }
            case assemblyscript_1.NodeKind.EXPORTDEFAULT: {
                this.visitExportDefaultStatement(node);
                break;
            }
            case assemblyscript_1.NodeKind.EXPORTIMPORT: {
                this.visitExportImportStatement(node);
                break;
            }
            case assemblyscript_1.NodeKind.EXPRESSION: {
                this.visitExpressionStatement(node);
                break;
            }
            case assemblyscript_1.NodeKind.FOR: {
                this.visitForStatement(node);
                break;
            }
            case assemblyscript_1.NodeKind.IF: {
                this.visitIfStatement(node);
                break;
            }
            case assemblyscript_1.NodeKind.IMPORT: {
                this.visitImportStatement(node);
                break;
            }
            case assemblyscript_1.NodeKind.RETURN: {
                this.visitReturnStatement(node);
                break;
            }
            case assemblyscript_1.NodeKind.SWITCH: {
                this.visitSwitchStatement(node);
                break;
            }
            case assemblyscript_1.NodeKind.THROW: {
                this.visitThrowStatement(node);
                break;
            }
            case assemblyscript_1.NodeKind.TRY: {
                this.visitTryStatement(node);
                break;
            }
            case assemblyscript_1.NodeKind.VARIABLE: {
                this.visitVariableStatement(node);
                break;
            }
            case assemblyscript_1.NodeKind.WHILE: {
                this.visitWhileStatement(node);
                break;
            }
            // declaration statements
            case assemblyscript_1.NodeKind.CLASSDECLARATION: {
                this.visitClassDeclaration(node);
                break;
            }
            case assemblyscript_1.NodeKind.ENUMDECLARATION: {
                this.visitEnumDeclaration(node);
                break;
            }
            case assemblyscript_1.NodeKind.ENUMVALUEDECLARATION: {
                this.visitEnumValueDeclaration(node);
                break;
            }
            case assemblyscript_1.NodeKind.FIELDDECLARATION: {
                this.visitFieldDeclaration(node);
                break;
            }
            case assemblyscript_1.NodeKind.FUNCTIONDECLARATION: {
                this.visitFunctionDeclaration(node);
                break;
            }
            case assemblyscript_1.NodeKind.IMPORTDECLARATION: {
                this.visitImportDeclaration(node);
                break;
            }
            case assemblyscript_1.NodeKind.INDEXSIGNATUREDECLARATION: {
                this.visitIndexSignatureDeclaration(node);
                break;
            }
            case assemblyscript_1.NodeKind.INTERFACEDECLARATION: {
                this.visitInterfaceDeclaration(node);
                break;
            }
            case assemblyscript_1.NodeKind.METHODDECLARATION: {
                this.visitMethodDeclaration(node);
                break;
            }
            case assemblyscript_1.NodeKind.NAMESPACEDECLARATION: {
                this.visitNamespaceDeclaration(node);
                break;
            }
            case assemblyscript_1.NodeKind.TYPEDECLARATION: {
                this.visitTypeDeclaration(node);
                break;
            }
            case assemblyscript_1.NodeKind.VARIABLEDECLARATION: {
                this.visitVariableDeclaration(node);
                break;
            }
            // other
            case assemblyscript_1.NodeKind.DECORATOR: {
                this.serializeDecorator(node);
                break;
            }
            case assemblyscript_1.NodeKind.EXPORTMEMBER: {
                this.visitExportMember(node);
                break;
            }
            case assemblyscript_1.NodeKind.PARAMETER: {
                this.serializeParameter(node);
                break;
            }
            case assemblyscript_1.NodeKind.SWITCHCASE: {
                this.visitSwitchCase(node);
                break;
            }
            default: assert(false);
        }
    };
    ASTBuilder.prototype.visitSource = function (source) {
        var statements = source.statements;
        for (var i = 0, k = statements.length; i < k; ++i) {
            this.visitNodeAndTerminate(statements[i]);
        }
    };
    // types
    ASTBuilder.prototype.visitTypeNode = function (node) {
        switch (node.kind) {
            case assemblyscript_1.NodeKind.NAMEDTYPE: {
                this.visitNamedTypeNode(node);
                break;
            }
            case assemblyscript_1.NodeKind.FUNCTIONTYPE: {
                this.visitFunctionTypeNode(node);
                break;
            }
            default: assert(false);
        }
    };
    ASTBuilder.prototype.visitTypeName = function (node) {
        this.visitIdentifierExpression(node.identifier);
        var sb = this.sb;
        var current = node.next;
        while (current) {
            sb.push(".");
            this.visitIdentifierExpression(current.identifier);
            current = current.next;
        }
    };
    ASTBuilder.prototype.visitNamedTypeNode = function (node) {
        this.visitTypeName(node.name);
        var typeArguments = node.typeArguments;
        if (typeArguments) {
            var numTypeArguments = typeArguments.length;
            var sb = this.sb;
            if (numTypeArguments) {
                sb.push("<");
                this.visitTypeNode(typeArguments[0]);
                for (var i = 1; i < numTypeArguments; ++i) {
                    sb.push(", ");
                    this.visitTypeNode(typeArguments[i]);
                }
                sb.push(">");
            }
            if (node.isNullable)
                sb.push(" | null");
        }
    };
    ASTBuilder.prototype.visitFunctionTypeNode = function (node) {
        var isNullable = node.isNullable;
        var sb = this.sb;
        sb.push(isNullable ? "((" : "(");
        var explicitThisType = node.explicitThisType;
        if (explicitThisType) {
            sb.push("this: ");
            this.visitTypeNode(explicitThisType);
        }
        var parameters = node.parameters;
        var numParameters = parameters.length;
        if (numParameters) {
            if (explicitThisType)
                sb.push(", ");
            this.serializeParameter(parameters[0]);
            for (var i = 1; i < numParameters; ++i) {
                sb.push(", ");
                this.serializeParameter(parameters[i]);
            }
        }
        var returnType = node.returnType;
        if (returnType) {
            sb.push(") => ");
            this.visitTypeNode(returnType);
        }
        else {
            sb.push(") => void");
        }
        if (isNullable)
            sb.push(") | null");
    };
    ASTBuilder.prototype.visitTypeParameter = function (node) {
        this.visitIdentifierExpression(node.name);
        var extendsType = node.extendsType;
        if (extendsType) {
            this.sb.push(" extends ");
            this.visitTypeNode(extendsType);
        }
        var defaultType = node.defaultType;
        if (defaultType) {
            this.sb.push("=");
            this.visitTypeNode(defaultType);
        }
    };
    // expressions
    ASTBuilder.prototype.visitIdentifierExpression = function (node) {
        if (node.isQuoted)
            this.visitStringLiteral(node.text);
        else
            this.sb.push(node.text);
    };
    ASTBuilder.prototype.visitArrayLiteralExpression = function (node) {
        var sb = this.sb;
        sb.push("[");
        var elements = node.elementExpressions;
        var numElements = elements.length;
        if (numElements) {
            if (elements[0])
                this.visitNode(elements[0]);
            for (var i = 1; i < numElements; ++i) {
                sb.push(", ");
                if (elements[i])
                    this.visitNode(elements[i]);
            }
        }
        sb.push("]");
    };
    ASTBuilder.prototype.visitObjectLiteralExpression = function (node) {
        var sb = this.sb;
        var names = node.names;
        var values = node.values;
        var numElements = names.length;
        assert(numElements == values.length);
        if (numElements) {
            sb.push("{\n");
            assemblyscript_1.indent(sb, ++this.indentLevel);
            this.visitNode(names[0]);
            sb.push(": ");
            this.visitNode(values[0]);
            for (var i = 1; i < numElements; ++i) {
                sb.push(",\n");
                assemblyscript_1.indent(sb, this.indentLevel);
                var name = names[i];
                var value = values[i];
                if (name === value) {
                    this.visitNode(name);
                }
                else {
                    this.visitNode(name);
                    sb.push(": ");
                    this.visitNode(value);
                }
            }
            sb.push("\n");
            assemblyscript_1.indent(sb, --this.indentLevel);
            sb.push("}");
        }
        else {
            sb.push("{}");
        }
    };
    ASTBuilder.prototype.visitAssertionExpression = function (node) {
        var sb = this.sb;
        switch (node.assertionKind) {
            case assemblyscript_1.AssertionKind.PREFIX: {
                sb.push("<");
                this.visitTypeNode(assert(node.toType));
                sb.push(">");
                this.visitNode(node.expression);
                break;
            }
            case assemblyscript_1.AssertionKind.AS: {
                this.visitNode(node.expression);
                sb.push(" as ");
                this.visitTypeNode(assert(node.toType));
                break;
            }
            case assemblyscript_1.AssertionKind.NONNULL: {
                this.visitNode(node.expression);
                sb.push("!");
                break;
            }
            default: assert(false);
        }
    };
    ASTBuilder.prototype.visitBinaryExpression = function (node) {
        var sb = this.sb;
        this.visitNode(node.left);
        sb.push(" ");
        sb.push(assemblyscript_1.operatorTokenToString(node.operator));
        sb.push(" ");
        this.visitNode(node.right);
    };
    ASTBuilder.prototype.visitCallExpression = function (node) {
        var sb = this.sb;
        this.visitNode(node.expression);
        var typeArguments = node.typeArguments;
        if (typeArguments) {
            var numTypeArguments = typeArguments.length;
            if (numTypeArguments) {
                sb.push("<");
                this.visitTypeNode(typeArguments[0]);
                for (var i = 1; i < numTypeArguments; ++i) {
                    sb.push(", ");
                    this.visitTypeNode(typeArguments[i]);
                }
                sb.push(">(");
            }
        }
        else {
            sb.push("(");
        }
        var args = node.arguments;
        var numArgs = args.length;
        if (numArgs) {
            this.visitNode(args[0]);
            for (var i = 1; i < numArgs; ++i) {
                sb.push(", ");
                this.visitNode(args[i]);
            }
        }
        sb.push(")");
    };
    ASTBuilder.prototype.visitClassExpression = function (node) {
        var declaration = node.declaration;
        this.visitClassDeclaration(declaration);
    };
    ASTBuilder.prototype.visitCommaExpression = function (node) {
        var expressions = node.expressions;
        var numExpressions = assert(expressions.length);
        this.visitNode(expressions[0]);
        var sb = this.sb;
        for (var i = 1; i < numExpressions; ++i) {
            sb.push(",");
            this.visitNode(expressions[i]);
        }
    };
    ASTBuilder.prototype.visitElementAccessExpression = function (node) {
        var sb = this.sb;
        this.visitNode(node.expression);
        sb.push("[");
        this.visitNode(node.elementExpression);
        sb.push("]");
    };
    ASTBuilder.prototype.visitFunctionExpression = function (node) {
        var declaration = node.declaration;
        if (!declaration.arrowKind) {
            if (declaration.name.text.length) {
                this.sb.push("function ");
            }
            else {
                this.sb.push("function");
            }
        }
        else {
            assert(declaration.name.text.length == 0);
        }
        this.visitFunctionCommon(declaration);
    };
    ASTBuilder.prototype.visitLiteralExpression = function (node) {
        switch (node.literalKind) {
            case assemblyscript_1.LiteralKind.FLOAT: {
                this.visitFloatLiteralExpression(node);
                break;
            }
            case assemblyscript_1.LiteralKind.INTEGER: {
                this.visitIntegerLiteralExpression(node);
                break;
            }
            case assemblyscript_1.LiteralKind.STRING: {
                this.visitStringLiteralExpression(node);
                break;
            }
            case assemblyscript_1.LiteralKind.REGEXP: {
                this.visitRegexpLiteralExpression(node);
                break;
            }
            case assemblyscript_1.LiteralKind.ARRAY: {
                this.visitArrayLiteralExpression(node);
                break;
            }
            case assemblyscript_1.LiteralKind.OBJECT: {
                this.visitObjectLiteralExpression(node);
                break;
            }
            default: {
                assert(false);
                break;
            }
        }
    };
    ASTBuilder.prototype.visitFloatLiteralExpression = function (node) {
        this.sb.push(node.value.toString(10));
    };
    ASTBuilder.prototype.visitInstanceOfExpression = function (node) {
        this.visitNode(node.expression);
        this.sb.push(" instanceof ");
        this.visitTypeNode(node.isType);
    };
    ASTBuilder.prototype.visitIntegerLiteralExpression = function (node) {
        this.sb.push(i64_to_string(node.value));
    };
    ASTBuilder.prototype.visitStringLiteral = function (str, singleQuoted) {
        if (singleQuoted === void 0) { singleQuoted = false; }
        var sb = this.sb;
        var off = 0;
        var quote = singleQuoted ? "'" : "\"";
        sb.push(quote);
        var i = 0;
        for (var k = str.length; i < k;) {
            switch (str.charCodeAt(i)) {
                case 0 /* NULL */: {
                    if (i > off)
                        sb.push(str.substring(off, off = i + 1));
                    sb.push("\\0");
                    off = ++i;
                    break;
                }
                case 8 /* BACKSPACE */: {
                    if (i > off)
                        sb.push(str.substring(off, i));
                    off = ++i;
                    sb.push("\\b");
                    break;
                }
                case 9 /* TAB */: {
                    if (i > off)
                        sb.push(str.substring(off, i));
                    off = ++i;
                    sb.push("\\t");
                    break;
                }
                case 10 /* LINEFEED */: {
                    if (i > off)
                        sb.push(str.substring(off, i));
                    off = ++i;
                    sb.push("\\n");
                    break;
                }
                case 11 /* VERTICALTAB */: {
                    if (i > off)
                        sb.push(str.substring(off, i));
                    off = ++i;
                    sb.push("\\v");
                    break;
                }
                case 12 /* FORMFEED */: {
                    if (i > off)
                        sb.push(str.substring(off, i));
                    off = ++i;
                    sb.push("\\f");
                    break;
                }
                case 13 /* CARRIAGERETURN */: {
                    if (i > off)
                        sb.push(str.substring(off, i));
                    sb.push("\\r");
                    off = ++i;
                    break;
                }
                case 34 /* DOUBLEQUOTE */: {
                    if (!singleQuoted) {
                        if (i > off)
                            sb.push(str.substring(off, i));
                        sb.push("\\\"");
                        off = ++i;
                    }
                    else {
                        ++i;
                    }
                    break;
                }
                case 39 /* SINGLEQUOTE */: {
                    if (singleQuoted) {
                        if (i > off)
                            sb.push(str.substring(off, i));
                        sb.push("\\'");
                        off = ++i;
                    }
                    else {
                        ++i;
                    }
                    break;
                }
                case 92 /* BACKSLASH */: {
                    if (i > off)
                        sb.push(str.substring(off, i));
                    sb.push("\\\\");
                    off = ++i;
                    break;
                }
                default: {
                    ++i;
                    break;
                }
            }
        }
        if (i > off)
            sb.push(str.substring(off, i));
        sb.push(quote);
    };
    ASTBuilder.prototype.visitStringLiteralExpression = function (node) {
        this.visitStringLiteral(node.value);
    };
    ASTBuilder.prototype.visitRegexpLiteralExpression = function (node) {
        var sb = this.sb;
        sb.push("/");
        sb.push(node.pattern);
        sb.push("/");
        sb.push(node.patternFlags);
    };
    ASTBuilder.prototype.visitNewExpression = function (node) {
        this.sb.push("new ");
        this.visitCallExpression(node);
    };
    ASTBuilder.prototype.visitParenthesizedExpression = function (node) {
        var sb = this.sb;
        sb.push("(");
        this.visitNode(node.expression);
        sb.push(")");
    };
    ASTBuilder.prototype.visitPropertyAccessExpression = function (node) {
        this.visitNode(node.expression);
        this.sb.push(".");
        this.visitIdentifierExpression(node.property);
    };
    ASTBuilder.prototype.visitTernaryExpression = function (node) {
        var sb = this.sb;
        this.visitNode(node.condition);
        sb.push(" ? ");
        this.visitNode(node.ifThen);
        sb.push(" : ");
        this.visitNode(node.ifElse);
    };
    ASTBuilder.prototype.visitUnaryExpression = function (node) {
        switch (node.kind) {
            case assemblyscript_1.NodeKind.UNARYPOSTFIX: {
                this.visitUnaryPostfixExpression(node);
                break;
            }
            case assemblyscript_1.NodeKind.UNARYPREFIX: {
                this.visitUnaryPrefixExpression(node);
                break;
            }
            default: assert(false);
        }
    };
    ASTBuilder.prototype.visitUnaryPostfixExpression = function (node) {
        this.visitNode(node.operand);
        this.sb.push(assemblyscript_1.operatorTokenToString(node.operator));
    };
    ASTBuilder.prototype.visitUnaryPrefixExpression = function (node) {
        this.sb.push(assemblyscript_1.operatorTokenToString(node.operator));
        this.visitNode(node.operand);
    };
    // statements
    ASTBuilder.prototype.visitNodeAndTerminate = function (statement) {
        this.visitNode(statement);
        var sb = this.sb;
        if (!sb.length || // leading EmptyStatement
            statement.kind == assemblyscript_1.NodeKind.VARIABLE || // potentially assigns a FunctionExpression
            statement.kind == assemblyscript_1.NodeKind.EXPRESSION // potentially assigns a FunctionExpression
        ) {
            sb.push(";\n");
        }
        else {
            var last = sb[sb.length - 1];
            var lastCharPos = last.length - 1;
            if (lastCharPos >= 0 && (last.charCodeAt(lastCharPos) == 125 /* CLOSEBRACE */ ||
                last.charCodeAt(lastCharPos) == 59 /* SEMICOLON */)) {
                sb.push("\n");
            }
            else {
                sb.push(";\n");
            }
        }
    };
    ASTBuilder.prototype.visitBlockStatement = function (node) {
        var sb = this.sb;
        var statements = node.statements;
        var numStatements = statements.length;
        if (numStatements) {
            sb.push("{\n");
            var indentLevel = ++this.indentLevel;
            for (var i = 0; i < numStatements; ++i) {
                assemblyscript_1.indent(sb, indentLevel);
                this.visitNodeAndTerminate(statements[i]);
            }
            assemblyscript_1.indent(sb, --this.indentLevel);
            sb.push("}");
        }
        else {
            sb.push("{}");
        }
    };
    ASTBuilder.prototype.visitBreakStatement = function (node) {
        var label = node.label;
        if (label) {
            this.sb.push("break ");
            this.visitIdentifierExpression(label);
        }
        else {
            this.sb.push("break");
        }
    };
    ASTBuilder.prototype.visitContinueStatement = function (node) {
        var label = node.label;
        if (label) {
            this.sb.push("continue ");
            this.visitIdentifierExpression(label);
        }
        else {
            this.sb.push("continue");
        }
    };
    ASTBuilder.prototype.visitClassDeclaration = function (node, isDefault) {
        if (isDefault === void 0) { isDefault = false; }
        var decorators = node.decorators;
        if (decorators) {
            for (var i = 0, k = decorators.length; i < k; ++i) {
                this.serializeDecorator(decorators[i]);
            }
        }
        var sb = this.sb;
        if (isDefault) {
            sb.push("export default ");
        }
        else {
            this.serializeExternalModifiers(node);
        }
        if (node.is(assemblyscript_1.CommonFlags.ABSTRACT))
            sb.push("abstract ");
        if (node.name.text.length) {
            sb.push("class ");
            this.visitIdentifierExpression(node.name);
        }
        else {
            sb.push("class");
        }
        var typeParameters = node.typeParameters;
        if (typeParameters && typeParameters.length) {
            sb.push("<");
            this.visitTypeParameter(typeParameters[0]);
            for (var i = 1, k = typeParameters.length; i < k; ++i) {
                sb.push(", ");
                this.visitTypeParameter(typeParameters[i]);
            }
            sb.push(">");
        }
        var extendsType = node.extendsType;
        if (extendsType) {
            sb.push(" extends ");
            this.visitTypeNode(extendsType);
        }
        var implementsTypes = node.implementsTypes;
        if (implementsTypes) {
            var numImplementsTypes = implementsTypes.length;
            if (numImplementsTypes) {
                sb.push(" implements ");
                this.visitTypeNode(implementsTypes[0]);
                for (var i = 1; i < numImplementsTypes; ++i) {
                    sb.push(", ");
                    this.visitTypeNode(implementsTypes[i]);
                }
            }
        }
        var members = node.members;
        var numMembers = members.length;
        if (numMembers) {
            sb.push(" {\n");
            var indentLevel = ++this.indentLevel;
            for (var i = 0, k = members.length; i < k; ++i) {
                var member = members[i];
                if (member.kind != assemblyscript_1.NodeKind.FIELDDECLARATION || member.parameterIndex < 0) {
                    assemblyscript_1.indent(sb, indentLevel);
                    this.visitNodeAndTerminate(member);
                }
            }
            assemblyscript_1.indent(sb, --this.indentLevel);
            sb.push("}");
        }
        else {
            sb.push(" {}");
        }
    };
    ASTBuilder.prototype.visitDoStatement = function (node) {
        var sb = this.sb;
        sb.push("do ");
        this.visitNode(node.statement);
        if (node.statement.kind == assemblyscript_1.NodeKind.BLOCK) {
            sb.push(" while (");
        }
        else {
            sb.push(";\n");
            assemblyscript_1.indent(sb, this.indentLevel);
            sb.push("while (");
        }
        this.visitNode(node.condition);
        sb.push(")");
    };
    ASTBuilder.prototype.visitEmptyStatement = function (node) {
    };
    ASTBuilder.prototype.visitEnumDeclaration = function (node, isDefault) {
        if (isDefault === void 0) { isDefault = false; }
        var sb = this.sb;
        if (isDefault) {
            sb.push("export default ");
        }
        else {
            this.serializeExternalModifiers(node);
        }
        if (node.is(assemblyscript_1.CommonFlags.CONST))
            sb.push("const ");
        sb.push("enum ");
        this.visitIdentifierExpression(node.name);
        var values = node.values;
        var numValues = values.length;
        if (numValues) {
            sb.push(" {\n");
            var indentLevel = ++this.indentLevel;
            assemblyscript_1.indent(sb, indentLevel);
            this.visitEnumValueDeclaration(node.values[0]);
            for (var i = 1; i < numValues; ++i) {
                sb.push(",\n");
                assemblyscript_1.indent(sb, indentLevel);
                this.visitEnumValueDeclaration(node.values[i]);
            }
            sb.push("\n");
            assemblyscript_1.indent(sb, --this.indentLevel);
            sb.push("}");
        }
        else {
            sb.push(" {}");
        }
    };
    ASTBuilder.prototype.visitEnumValueDeclaration = function (node) {
        this.visitIdentifierExpression(node.name);
        if (node.value) {
            this.sb.push(" = ");
            this.visitNode(node.value);
        }
    };
    ASTBuilder.prototype.visitExportImportStatement = function (node) {
        var sb = this.sb;
        sb.push("export import ");
        this.visitIdentifierExpression(node.externalName);
        sb.push(" = ");
        this.visitIdentifierExpression(node.name);
    };
    ASTBuilder.prototype.visitExportMember = function (node) {
        this.visitIdentifierExpression(node.localName);
        if (node.exportedName.text != node.localName.text) {
            this.sb.push(" as ");
            this.visitIdentifierExpression(node.exportedName);
        }
    };
    ASTBuilder.prototype.visitExportStatement = function (node) {
        var sb = this.sb;
        if (node.isDeclare) {
            sb.push("declare ");
        }
        var members = node.members;
        if (members && members.length) {
            var numMembers = members.length;
            sb.push("export {\n");
            var indentLevel = ++this.indentLevel;
            assemblyscript_1.indent(sb, indentLevel);
            this.visitExportMember(members[0]);
            for (var i = 1; i < numMembers; ++i) {
                sb.push(",\n");
                assemblyscript_1.indent(sb, indentLevel);
                this.visitExportMember(members[i]);
            }
            --this.indentLevel;
            sb.push("\n}");
        }
        else {
            sb.push("export {}");
        }
        var path = node.path;
        if (path) {
            sb.push(" from ");
            this.visitStringLiteralExpression(path);
        }
        sb.push(";");
    };
    ASTBuilder.prototype.visitExportDefaultStatement = function (node) {
        var declaration = node.declaration;
        switch (declaration.kind) {
            case assemblyscript_1.NodeKind.ENUMDECLARATION: {
                this.visitEnumDeclaration(declaration, true);
                break;
            }
            case assemblyscript_1.NodeKind.FUNCTIONDECLARATION: {
                this.visitFunctionDeclaration(declaration, true);
                break;
            }
            case assemblyscript_1.NodeKind.CLASSDECLARATION: {
                this.visitClassDeclaration(declaration, true);
                break;
            }
            case assemblyscript_1.NodeKind.INTERFACEDECLARATION: {
                this.visitInterfaceDeclaration(declaration, true);
                break;
            }
            case assemblyscript_1.NodeKind.NAMESPACEDECLARATION: {
                this.visitNamespaceDeclaration(declaration, true);
                break;
            }
            default: assert(false);
        }
    };
    ASTBuilder.prototype.visitExpressionStatement = function (node) {
        this.visitNode(node.expression);
    };
    ASTBuilder.prototype.visitFieldDeclaration = function (node) {
        var decorators = node.decorators;
        if (decorators) {
            for (var i = 0, k = decorators.length; i < k; ++i) {
                this.serializeDecorator(decorators[i]);
            }
        }
        this.serializeAccessModifiers(node);
        this.visitIdentifierExpression(node.name);
        var sb = this.sb;
        if (node.flags & assemblyscript_1.CommonFlags.DEFINITE_ASSIGNMENT) {
            sb.push("!");
        }
        var type = node.type;
        if (type) {
            sb.push(": ");
            this.visitTypeNode(type);
        }
        var initializer = node.initializer;
        if (initializer) {
            sb.push(" = ");
            this.visitNode(initializer);
        }
    };
    ASTBuilder.prototype.visitForStatement = function (node) {
        var sb = this.sb;
        sb.push("for (");
        var initializer = node.initializer;
        if (initializer) {
            this.visitNode(initializer);
        }
        var condition = node.condition;
        if (condition) {
            sb.push("; ");
            this.visitNode(condition);
        }
        else {
            sb.push(";");
        }
        var incrementor = node.incrementor;
        if (incrementor) {
            sb.push("; ");
            this.visitNode(incrementor);
        }
        else {
            sb.push(";");
        }
        sb.push(") ");
        this.visitNode(node.statement);
    };
    ASTBuilder.prototype.visitFunctionDeclaration = function (node, isDefault) {
        if (isDefault === void 0) { isDefault = false; }
        var sb = this.sb;
        var decorators = node.decorators;
        if (decorators) {
            for (var i = 0, k = decorators.length; i < k; ++i) {
                this.serializeDecorator(decorators[i]);
            }
        }
        if (isDefault) {
            sb.push("export default ");
        }
        else {
            this.serializeExternalModifiers(node);
            this.serializeAccessModifiers(node);
        }
        if (node.name.text.length) {
            sb.push("function ");
        }
        else {
            sb.push("function");
        }
        this.visitFunctionCommon(node);
    };
    ASTBuilder.prototype.visitFunctionCommon = function (node) {
        var sb = this.sb;
        this.visitIdentifierExpression(node.name);
        var signature = node.signature;
        var typeParameters = node.typeParameters;
        if (typeParameters) {
            var numTypeParameters = typeParameters.length;
            if (numTypeParameters) {
                sb.push("<");
                this.visitTypeParameter(typeParameters[0]);
                for (var i = 1; i < numTypeParameters; ++i) {
                    sb.push(", ");
                    this.visitTypeParameter(typeParameters[i]);
                }
                sb.push(">");
            }
        }
        if (node.arrowKind == 2 /* ARROW_SINGLE */) {
            var parameters = signature.parameters;
            assert(parameters.length == 1);
            assert(!signature.explicitThisType);
            this.serializeParameter(parameters[0]);
        }
        else {
            sb.push("(");
            var parameters = signature.parameters;
            var numParameters = parameters.length;
            var explicitThisType = signature.explicitThisType;
            if (explicitThisType) {
                sb.push("this: ");
                this.visitTypeNode(explicitThisType);
            }
            if (numParameters) {
                if (explicitThisType)
                    sb.push(", ");
                this.serializeParameter(parameters[0]);
                for (var i = 1; i < numParameters; ++i) {
                    sb.push(", ");
                    this.serializeParameter(parameters[i]);
                }
            }
        }
        var body = node.body;
        var returnType = signature.returnType;
        if (node.arrowKind) {
            if (body) {
                if (node.arrowKind == 2 /* ARROW_SINGLE */) {
                    assert(assemblyscript_1.isTypeOmitted(returnType));
                }
                else {
                    if (assemblyscript_1.isTypeOmitted(returnType)) {
                        sb.push(")");
                    }
                    else {
                        sb.push("): ");
                        this.visitTypeNode(returnType);
                    }
                }
                sb.push(" => ");
                this.visitNode(body);
            }
            else {
                assert(!assemblyscript_1.isTypeOmitted(returnType));
                sb.push(" => ");
                this.visitTypeNode(returnType);
            }
        }
        else {
            if (!assemblyscript_1.isTypeOmitted(returnType) &&
                !node.isAny(assemblyscript_1.CommonFlags.CONSTRUCTOR | assemblyscript_1.CommonFlags.SET)) {
                sb.push("): ");
                this.visitTypeNode(returnType);
            }
            else {
                sb.push(")");
            }
            if (body) {
                sb.push(" ");
                this.visitNode(body);
            }
        }
    };
    ASTBuilder.prototype.visitIfStatement = function (node) {
        var sb = this.sb;
        sb.push("if (");
        this.visitNode(node.condition);
        sb.push(") ");
        var ifTrue = node.ifTrue;
        this.visitNode(ifTrue);
        if (ifTrue.kind != assemblyscript_1.NodeKind.BLOCK) {
            sb.push(";\n");
        }
        var ifFalse = node.ifFalse;
        if (ifFalse) {
            if (ifTrue.kind == assemblyscript_1.NodeKind.BLOCK) {
                sb.push(" else ");
            }
            else {
                sb.push("else ");
            }
            this.visitNode(ifFalse);
        }
    };
    ASTBuilder.prototype.visitImportDeclaration = function (node) {
        var externalName = node.foreignName;
        var name = node.name;
        this.visitIdentifierExpression(externalName);
        if (externalName.text != name.text) {
            this.sb.push(" as ");
            this.visitIdentifierExpression(name);
        }
    };
    ASTBuilder.prototype.visitImportStatement = function (node) {
        var sb = this.sb;
        sb.push("import ");
        var declarations = node.declarations;
        var namespaceName = node.namespaceName;
        if (declarations) {
            var numDeclarations = declarations.length;
            if (numDeclarations) {
                sb.push("{\n");
                var indentLevel = ++this.indentLevel;
                assemblyscript_1.indent(sb, indentLevel);
                this.visitImportDeclaration(declarations[0]);
                for (var i = 1; i < numDeclarations; ++i) {
                    sb.push(",\n");
                    assemblyscript_1.indent(sb, indentLevel);
                    this.visitImportDeclaration(declarations[i]);
                }
                --this.indentLevel;
                sb.push("\n} from ");
            }
            else {
                sb.push("{} from ");
            }
        }
        else if (namespaceName) {
            sb.push("* as ");
            this.visitIdentifierExpression(namespaceName);
            sb.push(" from ");
        }
        this.visitStringLiteralExpression(node.path);
    };
    ASTBuilder.prototype.visitIndexSignatureDeclaration = function (node) {
        var sb = this.sb;
        sb.push("[key: ");
        this.visitTypeNode(node.keyType);
        sb.push("]: ");
        this.visitTypeNode(node.valueType);
    };
    ASTBuilder.prototype.visitInterfaceDeclaration = function (node, isDefault) {
        if (isDefault === void 0) { isDefault = false; }
        var decorators = node.decorators;
        if (decorators) {
            for (var i = 0, k = decorators.length; i < k; ++i) {
                this.serializeDecorator(decorators[i]);
            }
        }
        var sb = this.sb;
        if (isDefault) {
            sb.push("export default ");
        }
        else {
            this.serializeExternalModifiers(node);
        }
        sb.push("interface ");
        this.visitIdentifierExpression(node.name);
        var typeParameters = node.typeParameters;
        if (typeParameters && typeParameters.length) {
            sb.push("<");
            this.visitTypeParameter(typeParameters[0]);
            for (var i = 1, k = typeParameters.length; i < k; ++i) {
                sb.push(", ");
                this.visitTypeParameter(typeParameters[i]);
            }
            sb.push(">");
        }
        var extendsType = node.extendsType;
        if (extendsType) {
            sb.push(" extends ");
            this.visitTypeNode(extendsType);
        }
        // must not have implementsTypes
        sb.push(" {\n");
        var indentLevel = ++this.indentLevel;
        var members = node.members;
        for (var i = 0, k = members.length; i < k; ++i) {
            assemblyscript_1.indent(sb, indentLevel);
            this.visitNodeAndTerminate(members[i]);
        }
        --this.indentLevel;
        sb.push("}");
    };
    ASTBuilder.prototype.visitMethodDeclaration = function (node) {
        var decorators = node.decorators;
        if (decorators) {
            for (var i = 0, k = decorators.length; i < k; ++i) {
                this.serializeDecorator(decorators[i]);
            }
        }
        this.serializeAccessModifiers(node);
        if (node.is(assemblyscript_1.CommonFlags.GET)) {
            this.sb.push("get ");
        }
        else if (node.is(assemblyscript_1.CommonFlags.SET)) {
            this.sb.push("set ");
        }
        this.visitFunctionCommon(node);
    };
    ASTBuilder.prototype.visitNamespaceDeclaration = function (node, isDefault) {
        if (isDefault === void 0) { isDefault = false; }
        var decorators = node.decorators;
        if (decorators) {
            for (var i = 0, k = decorators.length; i < k; ++i) {
                this.serializeDecorator(decorators[i]);
            }
        }
        var sb = this.sb;
        if (isDefault) {
            sb.push("export default ");
        }
        else {
            this.serializeExternalModifiers(node);
        }
        sb.push("namespace ");
        this.visitIdentifierExpression(node.name);
        var members = node.members;
        var numMembers = members.length;
        if (numMembers) {
            sb.push(" {\n");
            var indentLevel = ++this.indentLevel;
            for (var i = 0, k = members.length; i < k; ++i) {
                assemblyscript_1.indent(sb, indentLevel);
                this.visitNodeAndTerminate(members[i]);
            }
            assemblyscript_1.indent(sb, --this.indentLevel);
            sb.push("}");
        }
        else {
            sb.push(" {}");
        }
    };
    ASTBuilder.prototype.visitReturnStatement = function (node) {
        var value = node.value;
        if (value) {
            this.sb.push("return ");
            this.visitNode(value);
        }
        else {
            this.sb.push("return");
        }
    };
    ASTBuilder.prototype.visitSwitchCase = function (node) {
        var sb = this.sb;
        var label = node.label;
        if (label) {
            sb.push("case ");
            this.visitNode(label);
            sb.push(":\n");
        }
        else {
            sb.push("default:\n");
        }
        var statements = node.statements;
        var numStatements = statements.length;
        if (numStatements) {
            var indentLevel = ++this.indentLevel;
            assemblyscript_1.indent(sb, indentLevel);
            this.visitNodeAndTerminate(statements[0]);
            for (var i = 1; i < numStatements; ++i) {
                assemblyscript_1.indent(sb, indentLevel);
                this.visitNodeAndTerminate(statements[i]);
            }
            --this.indentLevel;
        }
    };
    ASTBuilder.prototype.visitSwitchStatement = function (node) {
        var sb = this.sb;
        sb.push("switch (");
        this.visitNode(node.condition);
        sb.push(") {\n");
        var indentLevel = ++this.indentLevel;
        var cases = node.cases;
        for (var i = 0, k = cases.length; i < k; ++i) {
            assemblyscript_1.indent(sb, indentLevel);
            this.visitSwitchCase(cases[i]);
            sb.push("\n");
        }
        --this.indentLevel;
        sb.push("}");
    };
    ASTBuilder.prototype.visitThrowStatement = function (node) {
        this.sb.push("throw ");
        this.visitNode(node.value);
    };
    ASTBuilder.prototype.visitTryStatement = function (node) {
        var sb = this.sb;
        sb.push("try {\n");
        var indentLevel = ++this.indentLevel;
        var statements = node.statements;
        for (var i = 0, k = statements.length; i < k; ++i) {
            assemblyscript_1.indent(sb, indentLevel);
            this.visitNodeAndTerminate(statements[i]);
        }
        var catchVariable = node.catchVariable;
        if (catchVariable) {
            assemblyscript_1.indent(sb, indentLevel - 1);
            sb.push("} catch (");
            this.visitIdentifierExpression(catchVariable);
            sb.push(") {\n");
            var catchStatements = node.catchStatements;
            if (catchStatements) {
                for (var i = 0, k = catchStatements.length; i < k; ++i) {
                    assemblyscript_1.indent(sb, indentLevel);
                    this.visitNodeAndTerminate(catchStatements[i]);
                }
            }
        }
        var finallyStatements = node.finallyStatements;
        if (finallyStatements) {
            assemblyscript_1.indent(sb, indentLevel - 1);
            sb.push("} finally {\n");
            for (var i = 0, k = finallyStatements.length; i < k; ++i) {
                assemblyscript_1.indent(sb, indentLevel);
                this.visitNodeAndTerminate(finallyStatements[i]);
            }
        }
        assemblyscript_1.indent(sb, indentLevel - 1);
        sb.push("}");
    };
    ASTBuilder.prototype.visitTypeDeclaration = function (node) {
        var decorators = node.decorators;
        if (decorators) {
            for (var i = 0, k = decorators.length; i < k; ++i) {
                this.serializeDecorator(decorators[i]);
            }
        }
        var sb = this.sb;
        this.serializeExternalModifiers(node);
        sb.push("type ");
        this.visitIdentifierExpression(node.name);
        var typeParameters = node.typeParameters;
        if (typeParameters) {
            var numTypeParameters = typeParameters.length;
            if (numTypeParameters) {
                sb.push("<");
                for (var i = 0; i < numTypeParameters; ++i) {
                    this.visitTypeParameter(typeParameters[i]);
                }
                sb.push(">");
            }
        }
        sb.push(" = ");
        this.visitTypeNode(node.type);
    };
    ASTBuilder.prototype.visitVariableDeclaration = function (node) {
        this.visitIdentifierExpression(node.name);
        var type = node.type;
        var sb = this.sb;
        if (node.flags & assemblyscript_1.CommonFlags.DEFINITE_ASSIGNMENT) {
            sb.push("!");
        }
        if (type) {
            sb.push(": ");
            this.visitTypeNode(type);
        }
        var initializer = node.initializer;
        if (initializer) {
            sb.push(" = ");
            this.visitNode(initializer);
        }
    };
    ASTBuilder.prototype.visitVariableStatement = function (node) {
        var decorators = node.decorators;
        if (decorators) {
            for (var i = 0, k = decorators.length; i < k; ++i) {
                this.serializeDecorator(decorators[i]);
            }
        }
        var sb = this.sb;
        var declarations = node.declarations;
        var numDeclarations = assert(declarations.length);
        var firstDeclaration = declarations[0];
        this.serializeExternalModifiers(firstDeclaration);
        sb.push(firstDeclaration.is(assemblyscript_1.CommonFlags.CONST) ? "const " : firstDeclaration.is(assemblyscript_1.CommonFlags.LET) ? "let " : "var ");
        this.visitVariableDeclaration(node.declarations[0]);
        for (var i = 1; i < numDeclarations; ++i) {
            sb.push(", ");
            this.visitVariableDeclaration(node.declarations[i]);
        }
    };
    ASTBuilder.prototype.visitWhileStatement = function (node) {
        var sb = this.sb;
        sb.push("while (");
        this.visitNode(node.condition);
        var statement = node.statement;
        if (statement.kind == assemblyscript_1.NodeKind.EMPTY) {
            sb.push(")");
        }
        else {
            sb.push(") ");
            this.visitNode(node.statement);
        }
    };
    // other
    ASTBuilder.prototype.serializeDecorator = function (node) {
        var sb = this.sb;
        sb.push("@");
        this.visitNode(node.name);
        var args = node.arguments;
        if (args) {
            sb.push("(");
            var numArgs = args.length;
            if (numArgs) {
                this.visitNode(args[0]);
                for (var i = 1; i < numArgs; ++i) {
                    sb.push(", ");
                    this.visitNode(args[i]);
                }
            }
            sb.push(")\n");
        }
        else {
            sb.push("\n");
        }
        assemblyscript_1.indent(sb, this.indentLevel);
    };
    ASTBuilder.prototype.serializeParameter = function (node) {
        var sb = this.sb;
        var kind = node.parameterKind;
        var implicitFieldDeclaration = node.implicitFieldDeclaration;
        if (implicitFieldDeclaration) {
            this.serializeAccessModifiers(implicitFieldDeclaration);
        }
        if (kind == assemblyscript_1.ParameterKind.REST) {
            sb.push("...");
        }
        this.visitIdentifierExpression(node.name);
        var type = node.type;
        var initializer = node.initializer;
        if (type) {
            if (kind == assemblyscript_1.ParameterKind.OPTIONAL)
                sb.push("?");
            if (!assemblyscript_1.isTypeOmitted(type)) {
                sb.push(": ");
                this.visitTypeNode(type);
            }
        }
        if (initializer) {
            sb.push(" = ");
            this.visitNode(initializer);
        }
    };
    ASTBuilder.prototype.serializeExternalModifiers = function (node) {
        var sb = this.sb;
        if (node.is(assemblyscript_1.CommonFlags.EXPORT)) {
            sb.push("export ");
        }
        else if (node.is(assemblyscript_1.CommonFlags.IMPORT)) {
            sb.push("import ");
        }
        else if (node.is(assemblyscript_1.CommonFlags.DECLARE)) {
            sb.push("declare ");
        }
    };
    ASTBuilder.prototype.serializeAccessModifiers = function (node) {
        var sb = this.sb;
        if (node.is(assemblyscript_1.CommonFlags.PUBLIC)) {
            sb.push("public ");
        }
        else if (node.is(assemblyscript_1.CommonFlags.PRIVATE)) {
            sb.push("private ");
        }
        else if (node.is(assemblyscript_1.CommonFlags.PROTECTED)) {
            sb.push("protected ");
        }
        if (node.is(assemblyscript_1.CommonFlags.STATIC)) {
            sb.push("static ");
        }
        else if (node.is(assemblyscript_1.CommonFlags.ABSTRACT)) {
            sb.push("abstract ");
        }
        if (node.is(assemblyscript_1.CommonFlags.READONLY)) {
            sb.push("readonly ");
        }
    };
    ASTBuilder.prototype.finish = function () {
        var ret = this.sb.join("");
        this.sb = [];
        return ret;
    };
    return ASTBuilder;
}());
exports.ASTBuilder = ASTBuilder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlQnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9zb3VyY2VCdWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQXMzQztBQUV0M0Msc0JBQXNCO0FBQ3RCO0lBU0Usb0JBQW9CLFdBQWlDO1FBQWpDLGdCQUFXLEdBQVgsV0FBVyxDQUFzQjtRQUU3QyxPQUFFLEdBQWEsRUFBRSxDQUFDO1FBQ2xCLGdCQUFXLEdBQVEsQ0FBQyxDQUFDO0lBSDJCLENBQUM7SUFQekQsOEVBQThFO0lBQ3ZFLGdCQUFLLEdBQVosVUFBYSxJQUFVLEVBQUUsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSx3QkFBcUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxFQUFELENBQUM7UUFDbkUsSUFBSSxPQUFPLEdBQUcsSUFBSSxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixPQUFPLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBT0QsOEJBQVMsR0FBVCxVQUFVLEtBQVc7UUFDbkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQyxRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDakIsS0FBSyx5QkFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwQixJQUFJLENBQUMsV0FBVyxDQUFTLElBQUksQ0FBQyxDQUFDO2dCQUMvQixNQUFNO2FBQ1A7WUFFRCxRQUFRO1lBRVIsS0FBSyx5QkFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN2QixJQUFJLENBQUMsa0JBQWtCLENBQWdCLElBQUksQ0FBQyxDQUFDO2dCQUM3QyxNQUFNO2FBQ1A7WUFDRCxLQUFLLHlCQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxxQkFBcUIsQ0FBbUIsSUFBSSxDQUFDLENB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QUUsQ0FBQyw0QkFBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3hDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDdEI7UUFDRCxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsNEJBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNqQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztJQUVELDJCQUFNLEdBQU47UUFDRSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQTEvQ0QsSUEwL0NDO0FBMS9DWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlY2xhcmF0aW9uU3RhdGVtZW50LCBOb2RlLCBOb2RlS2luZCwgU291cmNlLCBOYW1lZFR5cGVOb2RlLCBGdW5jdGlvblR5cGVOb2RlLCBUeXBlUGFyYW1ldGVyTm9kZSwgSWRlbnRpZmllckV4cHJlc3Npb24sIEFzc2VydGlvbkV4cHJlc3Npb24sIEJpbmFyeUV4cHJlc3Npb24sIENhbGxFeHByZXNzaW9uLCBDbGFzc0V4cHJlc3Npb24sIENvbW1hRXhwcmVzc2lvbiwgRWxlbWVudEFjY2Vzc0V4cHJlc3Npb24sIEZ1bmN0aW9uRXhwcmVzc2lvbiwgSW5zdGFuY2VPZkV4cHJlc3Npb24sIExpdGVyYWxFeHByZXNzaW9uLCBOZXdFeHByZXNzaW9uLCBQYXJlbnRoZXNpemVkRXhwcmVzc2lvbiwgUHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uLCBUZXJuYXJ5RXhwcmVzc2lvbiwgVW5hcnlQb3N0Zml4RXhwcmVzc2lvbiwgVW5hcnlQcmVmaXhFeHByZXNzaW9uLCBCbG9ja1N0YXRlbWVudCwgQnJlYWtTdGF0ZW1lbnQsIENvbnRpbnVlU3RhdGVtZW50LCBEb1N0YXRlbWVudCwgRW1wdHlTdGF0ZW1lbnQsIEV4cG9ydFN0YXRlbWVudCwgRXhwb3J0RGVmYXVsdFN0YXRlbWVudCwgRXhwb3J0SW1wb3J0U3RhdGVtZW50LCBFeHByZXNzaW9uU3RhdGVtZW50LCBGb3JTdGF0ZW1lbnQsIElmU3RhdGVtZW50LCBJbXBvcnRTdGF0ZW1lbnQsIFJldHVyblN0YXRlbWVudCwgU3dpdGNoU3RhdGVtZW50LCBUaHJvd1N0YXRlbWVudCwgVHJ5U3RhdGVtZW50LCBWYXJpYWJsZVN0YXRlbWVudCwgV2hpbGVTdGF0ZW1lbnQsIENsYXNzRGVjbGFyYXRpb24sIEVudW1EZWNsYXJhdGlvbiwgRW51bVZhbHVlRGVjbGFyYXRpb24sIEZpZWxkRGVjbGFyYXRpb24sIEZ1bmN0aW9uRGVjbGFyYXRpb24sIEltcG9ydERlY2xhcmF0aW9uLCBJbmRleFNpZ25hdHVyZURlY2xhcmF0aW9uLCBJbnRlcmZhY2VEZWNsYXJhdGlvbiwgTWV0aG9kRGVjbGFyYXRpb24sIE5hbWVzcGFjZURlY2xhcmF0aW9uLCBUeXBlRGVjbGFyYXRpb24sIFZhcmlhYmxlRGVjbGFyYXRpb24sIERlY29yYXRvck5vZGUsIEV4cG9ydE1lbWJlciwgUGFyYW1ldGVyTm9kZSwgU3dpdGNoQ2FzZSwgVHlwZU5vZGUsIFR5cGVOYW1lLCBBcnJheUxpdGVyYWxFeHByZXNzaW9uLCBFeHByZXNzaW9uLCBPYmplY3RMaXRlcmFsRXhwcmVzc2lvbiwgaW5kZW50LCBBc3NlcnRpb25LaW5kLCBvcGVyYXRvclRva2VuVG9TdHJpbmcsIExpdGVyYWxLaW5kLCBGbG9hdExpdGVyYWxFeHByZXNzaW9uLCBJbnRlZ2VyTGl0ZXJhbEV4cHJlc3Npb24sIFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uLCBSZWdleHBMaXRlcmFsRXhwcmVzc2lvbiwgQ2hhckNvZGUsIFVuYXJ5RXhwcmVzc2lvbiwgU3RhdGVtZW50LCBDb21tb25GbGFncywgQXJyb3dLaW5kLCBpc1R5cGVPbWl0dGVkLCBQYXJhbWV0ZXJLaW5kIH0gZnJvbSBcImFzc2VtYmx5c2NyaXB0XCI7XG5cbi8qKiBBbiBBU1QgYnVpbGRlci4gKi9cbmV4cG9ydCBjbGFzcyBBU1RCdWlsZGVyIHtcblxuICAvKiogUmVidWlsZHMgdGhlIHRleHR1YWwgc291cmNlIGZyb20gdGhlIHNwZWNpZmllZCBBU1QsIGFzIGZhciBhcyBwb3NzaWJsZS4gKi9cbiAgc3RhdGljIGJ1aWxkKG5vZGU6IE5vZGUsIHRyYW5zZm9ybWVyOiAobm9kZTogTm9kZSkgPT4gTm9kZSA9ICh4KSA9PiB4KTogc3RyaW5nIHtcbiAgICB2YXIgYnVpbGRlciA9IG5ldyBBU1RCdWlsZGVyKHRyYW5zZm9ybWVyKTtcbiAgICBidWlsZGVyLnZpc2l0Tm9kZShub2RlKTtcbiAgICByZXR1cm4gYnVpbGRlci5maW5pc2goKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNmb3JtZXI6IChub2RlOiBOb2RlKSA9PiBOb2RlKSB7fVxuXG4gIHByaXZhdGUgc2I6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgaW5kZW50TGV2ZWw6IGkzMiA9IDA7XG5cbiAgdmlzaXROb2RlKF9ub2RlOiBOb2RlKTogdm9pZCB7XG4gICAgdmFyIG5vZGUgPSB0aGlzLnRyYW5zZm9ybWVyKF9ub2RlKTtcbiAgICBzd2l0Y2ggKG5vZGUua2luZCkge1xuICAgICAgY2FzZSBOb2RlS2luZC5TT1VSQ0U6IHtcbiAgICAgICAgdGhpcy52aXNpdFNvdXJjZSg8U291cmNlPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gdHlwZXNcblxuICAgICAgY2FzZSBOb2RlS2luZC5OQU1FRFRZUEU6IHtcbiAgICAgICAgdGhpcy52aXNpdE5hbWVkVHlwZU5vZGUoPE5hbWVkVHlwZU5vZGU+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5GVU5DVElPTlRZUEU6IHtcbiAgICAgICAgdGhpcy52aXNpdEZ1bmN0aW9uVHlwZU5vZGUoPEZ1bmN0aW9uVHlwZU5vZGU+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5UWVBFUEFSQU1FVEVSOiB7XG4gICAgICAgIHRoaXMudmlzaXRUeXBlUGFyYW1ldGVyKDxUeXBlUGFyYW1ldGVyTm9kZT5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIGV4cHJlc3Npb25zXG5cbiAgICAgIGNhc2UgTm9kZUtpbmQuRkFMU0U6XG4gICAgICBjYXNlIE5vZGVLaW5kLk5VTEw6XG4gICAgICBjYXNlIE5vZGVLaW5kLlNVUEVSOlxuICAgICAgY2FzZSBOb2RlS2luZC5USElTOlxuICAgICAgY2FzZSBOb2RlS2luZC5UUlVFOlxuICAgICAgY2FzZSBOb2RlS2luZC5DT05TVFJVQ1RPUjpcbiAgICAgIGNhc2UgTm9kZUtpbmQuSURFTlRJRklFUjoge1xuICAgICAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24oPElkZW50aWZpZXJFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuQVNTRVJUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRBc3NlcnRpb25FeHByZXNzaW9uKDxBc3NlcnRpb25FeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuQklOQVJZOiB7XG4gICAgICAgIHRoaXMudmlzaXRCaW5hcnlFeHByZXNzaW9uKDxCaW5hcnlFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuQ0FMTDoge1xuICAgICAgICB0aGlzLnZpc2l0Q2FsbEV4cHJlc3Npb24oPENhbGxFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuQ0xBU1M6IHtcbiAgICAgICAgdGhpcy52aXNpdENsYXNzRXhwcmVzc2lvbig8Q2xhc3NFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuQ09NTUE6IHtcbiAgICAgICAgdGhpcy52aXNpdENvbW1hRXhwcmVzc2lvbig8Q29tbWFFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRUxFTUVOVEFDQ0VTUzoge1xuICAgICAgICB0aGlzLnZpc2l0RWxlbWVudEFjY2Vzc0V4cHJlc3Npb24oPEVsZW1lbnRBY2Nlc3NFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRlVOQ1RJT046IHtcbiAgICAgICAgdGhpcy52aXNpdEZ1bmN0aW9uRXhwcmVzc2lvbig8RnVuY3Rpb25FeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuSU5TVEFOQ0VPRjoge1xuICAgICAgICB0aGlzLnZpc2l0SW5zdGFuY2VPZkV4cHJlc3Npb24oPEluc3RhbmNlT2ZFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuTElURVJBTDoge1xuICAgICAgICB0aGlzLnZpc2l0TGl0ZXJhbEV4cHJlc3Npb24oPExpdGVyYWxFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuTkVXOiB7XG4gICAgICAgIHRoaXMudmlzaXROZXdFeHByZXNzaW9uKDxOZXdFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuUEFSRU5USEVTSVpFRDoge1xuICAgICAgICB0aGlzLnZpc2l0UGFyZW50aGVzaXplZEV4cHJlc3Npb24oPFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuUFJPUEVSVFlBQ0NFU1M6IHtcbiAgICAgICAgdGhpcy52aXNpdFByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbig8UHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVEVSTkFSWToge1xuICAgICAgICB0aGlzLnZpc2l0VGVybmFyeUV4cHJlc3Npb24oPFRlcm5hcnlFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVU5BUllQT1NURklYOiB7XG4gICAgICAgIHRoaXMudmlzaXRVbmFyeVBvc3RmaXhFeHByZXNzaW9uKDxVbmFyeVBvc3RmaXhFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVU5BUllQUkVGSVg6IHtcbiAgICAgICAgdGhpcy52aXNpdFVuYXJ5UHJlZml4RXhwcmVzc2lvbig8VW5hcnlQcmVmaXhFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gc3RhdGVtZW50c1xuXG4gICAgICBjYXNlIE5vZGVLaW5kLkJMT0NLOiB7XG4gICAgICAgIHRoaXMudmlzaXRCbG9ja1N0YXRlbWVudCg8QmxvY2tTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5CUkVBSzoge1xuICAgICAgICB0aGlzLnZpc2l0QnJlYWtTdGF0ZW1lbnQoPEJyZWFrU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuQ09OVElOVUU6IHtcbiAgICAgICAgdGhpcy52aXNpdENvbnRpbnVlU3RhdGVtZW50KDxDb250aW51ZVN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkRPOiB7XG4gICAgICAgIHRoaXMudmlzaXREb1N0YXRlbWVudCg8RG9TdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FTVBUWToge1xuICAgICAgICB0aGlzLnZpc2l0RW1wdHlTdGF0ZW1lbnQoPEVtcHR5U3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRVhQT1JUOiB7XG4gICAgICAgIHRoaXMudmlzaXRFeHBvcnRTdGF0ZW1lbnQoPEV4cG9ydFN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkVYUE9SVERFRkFVTFQ6IHtcbiAgICAgICAgdGhpcy52aXNpdEV4cG9ydERlZmF1bHRTdGF0ZW1lbnQoPEV4cG9ydERlZmF1bHRTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FWFBPUlRJTVBPUlQ6IHtcbiAgICAgICAgdGhpcy52aXNpdEV4cG9ydEltcG9ydFN0YXRlbWVudCg8RXhwb3J0SW1wb3J0U3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRVhQUkVTU0lPTjoge1xuICAgICAgICB0aGlzLnZpc2l0RXhwcmVzc2lvblN0YXRlbWVudCg8RXhwcmVzc2lvblN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkZPUjoge1xuICAgICAgICB0aGlzLnZpc2l0Rm9yU3RhdGVtZW50KDxGb3JTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5JRjoge1xuICAgICAgICB0aGlzLnZpc2l0SWZTdGF0ZW1lbnQoPElmU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuSU1QT1JUOiB7XG4gICAgICAgIHRoaXMudmlzaXRJbXBvcnRTdGF0ZW1lbnQoPEltcG9ydFN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlJFVFVSTjoge1xuICAgICAgICB0aGlzLnZpc2l0UmV0dXJuU3RhdGVtZW50KDxSZXR1cm5TdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5TV0lUQ0g6IHtcbiAgICAgICAgdGhpcy52aXNpdFN3aXRjaFN0YXRlbWVudCg8U3dpdGNoU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVEhST1c6IHtcbiAgICAgICAgdGhpcy52aXNpdFRocm93U3RhdGVtZW50KDxUaHJvd1N0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlRSWToge1xuICAgICAgICB0aGlzLnZpc2l0VHJ5U3RhdGVtZW50KDxUcnlTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5WQVJJQUJMRToge1xuICAgICAgICB0aGlzLnZpc2l0VmFyaWFibGVTdGF0ZW1lbnQoPFZhcmlhYmxlU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuV0hJTEU6IHtcbiAgICAgICAgdGhpcy52aXNpdFdoaWxlU3RhdGVtZW50KDxXaGlsZVN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIGRlY2xhcmF0aW9uIHN0YXRlbWVudHNcblxuICAgICAgY2FzZSBOb2RlS2luZC5DTEFTU0RFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRDbGFzc0RlY2xhcmF0aW9uKDxDbGFzc0RlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRU5VTURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRFbnVtRGVjbGFyYXRpb24oPEVudW1EZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkVOVU1WQUxVRURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRFbnVtVmFsdWVEZWNsYXJhdGlvbig8RW51bVZhbHVlRGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5GSUVMRERFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRGaWVsZERlY2xhcmF0aW9uKDxGaWVsZERlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRlVOQ1RJT05ERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0RnVuY3Rpb25EZWNsYXJhdGlvbig8RnVuY3Rpb25EZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLklNUE9SVERFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRJbXBvcnREZWNsYXJhdGlvbig8SW1wb3J0RGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5JTkRFWFNJR05BVFVSRURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRJbmRleFNpZ25hdHVyZURlY2xhcmF0aW9uKDxJbmRleFNpZ25hdHVyZURlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuSU5URVJGQUNFREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdEludGVyZmFjZURlY2xhcmF0aW9uKDxJbnRlcmZhY2VEZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLk1FVEhPRERFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRNZXRob2REZWNsYXJhdGlvbig8TWV0aG9kRGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5OQU1FU1BBQ0VERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0TmFtZXNwYWNlRGVjbGFyYXRpb24oPE5hbWVzcGFjZURlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVFlQRURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRUeXBlRGVjbGFyYXRpb24oPFR5cGVEZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlZBUklBQkxFREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdFZhcmlhYmxlRGVjbGFyYXRpb24oPFZhcmlhYmxlRGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvLyBvdGhlclxuXG4gICAgICBjYXNlIE5vZGVLaW5kLkRFQ09SQVRPUjoge1xuICAgICAgICB0aGlzLnNlcmlhbGl6ZURlY29yYXRvcig8RGVjb3JhdG9yTm9kZT5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkVYUE9SVE1FTUJFUjoge1xuICAgICAgICB0aGlzLnZpc2l0RXhwb3J0TWVtYmVyKDxFeHBvcnRNZW1iZXI+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5QQVJBTUVURVI6IHtcbiAgICAgICAgdGhpcy5zZXJpYWxpemVQYXJhbWV0ZXIoPFBhcmFtZXRlck5vZGU+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5TV0lUQ0hDQVNFOiB7XG4gICAgICAgIHRoaXMudmlzaXRTd2l0Y2hDYXNlKDxTd2l0Y2hDYXNlPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IGFzc2VydChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRTb3VyY2Uoc291cmNlOiBTb3VyY2UpOiB2b2lkIHtcbiAgICB2YXIgc3RhdGVtZW50cyA9IHNvdXJjZS5zdGF0ZW1lbnRzO1xuICAgIGZvciAobGV0IGkgPSAwLCBrID0gc3RhdGVtZW50cy5sZW5ndGg7IGkgPCBrOyArK2kpIHtcbiAgICAgIHRoaXMudmlzaXROb2RlQW5kVGVybWluYXRlKHN0YXRlbWVudHNbaV0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIHR5cGVzXG5cbiAgdmlzaXRUeXBlTm9kZShub2RlOiBUeXBlTm9kZSk6IHZvaWQge1xuICAgIHN3aXRjaCAobm9kZS5raW5kKSB7XG4gICAgICBjYXNlIE5vZGVLaW5kLk5BTUVEVFlQRToge1xuICAgICAgICB0aGlzLnZpc2l0TmFtZWRUeXBlTm9kZSg8TmFtZWRUeXBlTm9kZT5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkZVTkNUSU9OVFlQRToge1xuICAgICAgICB0aGlzLnZpc2l0RnVuY3Rpb25UeXBlTm9kZSg8RnVuY3Rpb25UeXBlTm9kZT5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiBhc3NlcnQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0VHlwZU5hbWUobm9kZTogVHlwZU5hbWUpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obm9kZS5pZGVudGlmaWVyKTtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHZhciBjdXJyZW50ID0gbm9kZS5uZXh0O1xuICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICBzYi5wdXNoKFwiLlwiKTtcbiAgICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihjdXJyZW50LmlkZW50aWZpZXIpO1xuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICB9XG4gIH1cblxuICB2aXNpdE5hbWVkVHlwZU5vZGUobm9kZTogTmFtZWRUeXBlTm9kZSk6IHZvaWQge1xuICAgIHRoaXMudmlzaXRUeXBlTmFtZShub2RlLm5hbWUpO1xuICAgIHZhciB0eXBlQXJndW1lbnRzID0gbm9kZS50eXBlQXJndW1lbnRzO1xuICAgIGlmICh0eXBlQXJndW1lbnRzKSB7XG4gICAgICBsZXQgbnVtVHlwZUFyZ3VtZW50cyA9IHR5cGVBcmd1bWVudHMubGVuZ3RoO1xuICAgICAgbGV0IHNiID0gdGhpcy5zYjtcbiAgICAgIGlmIChudW1UeXBlQXJndW1lbnRzKSB7XG4gICAgICAgIHNiLnB1c2goXCI8XCIpO1xuICAgICAgICB0aGlzLnZpc2l0VHlwZU5vZGUodHlwZUFyZ3VtZW50c1swXSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbnVtVHlwZUFyZ3VtZW50czsgKytpKSB7XG4gICAgICAgICAgc2IucHVzaChcIiwgXCIpO1xuICAgICAgICAgIHRoaXMudmlzaXRUeXBlTm9kZSh0eXBlQXJndW1lbnRzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBzYi5wdXNoKFwiPlwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChub2RlLmlzTnVsbGFibGUpIHNiLnB1c2goXCIgfCBudWxsXCIpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0RnVuY3Rpb25UeXBlTm9kZShub2RlOiBGdW5jdGlvblR5cGVOb2RlKTogdm9pZCB7XG4gICAgdmFyIGlzTnVsbGFibGUgPSBub2RlLmlzTnVsbGFibGU7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICBzYi5wdXNoKGlzTnVsbGFibGUgPyBcIigoXCIgOiBcIihcIik7XG4gICAgdmFyIGV4cGxpY2l0VGhpc1R5cGUgPSBub2RlLmV4cGxpY2l0VGhpc1R5cGU7XG4gICAgaWYgKGV4cGxpY2l0VGhpc1R5cGUpIHtcbiAgICAgIHNiLnB1c2goXCJ0aGlzOiBcIik7XG4gICAgICB0aGlzLnZpc2l0VHlwZU5vZGUoZXhwbGljaXRUaGlzVHlwZSk7XG4gICAgfVxuICAgIHZhciBwYXJhbWV0ZXJzID0gbm9kZS5wYXJhbWV0ZXJzO1xuICAgIHZhciBudW1QYXJhbWV0ZXJzID0gcGFyYW1ldGVycy5sZW5ndGg7XG4gICAgaWYgKG51bVBhcmFtZXRlcnMpIHtcbiAgICAgIGlmIChleHBsaWNpdFRoaXNUeXBlKSBzYi5wdXNoKFwiLCBcIik7XG4gICAgICB0aGlzLnNlcmlhbGl6ZVBhcmFtZXRlcihwYXJhbWV0ZXJzWzBdKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbnVtUGFyYW1ldGVyczsgKytpKSB7XG4gICAgICAgIHNiLnB1c2goXCIsIFwiKTtcbiAgICAgICAgdGhpcy5zZXJpYWxpemVQYXJhbWV0ZXIocGFyYW1ldGVyc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciByZXR1cm5UeXBlID0gbm9kZS5yZXR1cm5UeXBlO1xuICAgIGlmIChyZXR1cm5UeXBlKSB7XG4gICAgICBzYi5wdXNoKFwiKSA9PiBcIik7XG4gICAgICB0aGlzLnZpc2l0VHlwZU5vZGUocmV0dXJuVHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNiLnB1c2goXCIpID0+IHZvaWRcIik7XG4gICAgfVxuICAgIGlmIChpc051bGxhYmxlKSBzYi5wdXNoKFwiKSB8IG51bGxcIik7XG4gIH1cblxuICB2aXNpdFR5cGVQYXJhbWV0ZXIobm9kZTogVHlwZVBhcmFtZXRlck5vZGUpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obm9kZS5uYW1lKTtcbiAgICB2YXIgZXh0ZW5kc1R5cGUgPSBub2RlLmV4dGVuZHNUeXBlO1xuICAgIGlmIChleHRlbmRzVHlwZSkge1xuICAgICAgdGhpcy5zYi5wdXNoKFwiIGV4dGVuZHMgXCIpO1xuICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKGV4dGVuZHNUeXBlKTtcbiAgICB9XG4gICAgdmFyIGRlZmF1bHRUeXBlID0gbm9kZS5kZWZhdWx0VHlwZTtcbiAgICBpZiAoZGVmYXVsdFR5cGUpIHtcbiAgICAgIHRoaXMuc2IucHVzaChcIj1cIik7XG4gICAgICB0aGlzLnZpc2l0VHlwZU5vZGUoZGVmYXVsdFR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGV4cHJlc3Npb25zXG5cbiAgdmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlOiBJZGVudGlmaWVyRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIGlmIChub2RlLmlzUXVvdGVkKSB0aGlzLnZpc2l0U3RyaW5nTGl0ZXJhbChub2RlLnRleHQpO1xuICAgIGVsc2UgdGhpcy5zYi5wdXNoKG5vZGUudGV4dCk7XG4gIH1cblxuICB2aXNpdEFycmF5TGl0ZXJhbEV4cHJlc3Npb24obm9kZTogQXJyYXlMaXRlcmFsRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgc2IucHVzaChcIltcIik7XG4gICAgdmFyIGVsZW1lbnRzID0gbm9kZS5lbGVtZW50RXhwcmVzc2lvbnM7XG4gICAgdmFyIG51bUVsZW1lbnRzID0gZWxlbWVudHMubGVuZ3RoO1xuICAgIGlmIChudW1FbGVtZW50cykge1xuICAgICAgaWYgKGVsZW1lbnRzWzBdKSB0aGlzLnZpc2l0Tm9kZSg8RXhwcmVzc2lvbj5lbGVtZW50c1swXSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG51bUVsZW1lbnRzOyArK2kpIHtcbiAgICAgICAgc2IucHVzaChcIiwgXCIpO1xuICAgICAgICBpZiAoZWxlbWVudHNbaV0pIHRoaXMudmlzaXROb2RlKDxFeHByZXNzaW9uPmVsZW1lbnRzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc2IucHVzaChcIl1cIik7XG4gIH1cblxuICB2aXNpdE9iamVjdExpdGVyYWxFeHByZXNzaW9uKG5vZGU6IE9iamVjdExpdGVyYWxFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICB2YXIgbmFtZXMgPSBub2RlLm5hbWVzO1xuICAgIHZhciB2YWx1ZXMgPSBub2RlLnZhbHVlcztcbiAgICB2YXIgbnVtRWxlbWVudHMgPSBuYW1lcy5sZW5ndGg7XG4gICAgYXNzZXJ0KG51bUVsZW1lbnRzID09IHZhbHVlcy5sZW5ndGgpO1xuICAgIGlmIChudW1FbGVtZW50cykge1xuICAgICAgc2IucHVzaChcIntcXG5cIik7XG4gICAgICBpbmRlbnQoc2IsICsrdGhpcy5pbmRlbnRMZXZlbCk7XG4gICAgICB0aGlzLnZpc2l0Tm9kZShuYW1lc1swXSk7XG4gICAgICBzYi5wdXNoKFwiOiBcIik7XG4gICAgICB0aGlzLnZpc2l0Tm9kZSh2YWx1ZXNbMF0pO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1FbGVtZW50czsgKytpKSB7XG4gICAgICAgIHNiLnB1c2goXCIsXFxuXCIpO1xuICAgICAgICBpbmRlbnQoc2IsIHRoaXMuaW5kZW50TGV2ZWwpO1xuICAgICAgICBsZXQgbmFtZSA9IG5hbWVzW2ldO1xuICAgICAgICBsZXQgdmFsdWUgPSB2YWx1ZXNbaV07XG4gICAgICAgIGlmIChuYW1lID09PSB2YWx1ZSkge1xuICAgICAgICAgIHRoaXMudmlzaXROb2RlKG5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudmlzaXROb2RlKG5hbWUpO1xuICAgICAgICAgIHNiLnB1c2goXCI6IFwiKTtcbiAgICAgICAgICB0aGlzLnZpc2l0Tm9kZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNiLnB1c2goXCJcXG5cIik7XG4gICAgICBpbmRlbnQoc2IsIC0tdGhpcy5pbmRlbnRMZXZlbCk7XG4gICAgICBzYi5wdXNoKFwifVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2IucHVzaChcInt9XCIpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0QXNzZXJ0aW9uRXhwcmVzc2lvbihub2RlOiBBc3NlcnRpb25FeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICBzd2l0Y2ggKG5vZGUuYXNzZXJ0aW9uS2luZCkge1xuICAgICAgY2FzZSBBc3NlcnRpb25LaW5kLlBSRUZJWDoge1xuICAgICAgICBzYi5wdXNoKFwiPFwiKTtcbiAgICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKGFzc2VydChub2RlLnRvVHlwZSkpO1xuICAgICAgICBzYi5wdXNoKFwiPlwiKTtcbiAgICAgICAgdGhpcy52aXNpdE5vZGUobm9kZS5leHByZXNzaW9uKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIEFzc2VydGlvbktpbmQuQVM6IHtcbiAgICAgICAgdGhpcy52aXNpdE5vZGUobm9kZS5leHByZXNzaW9uKTtcbiAgICAgICAgc2IucHVzaChcIiBhcyBcIik7XG4gICAgICAgIHRoaXMudmlzaXRUeXBlTm9kZShhc3NlcnQobm9kZS50b1R5cGUpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIEFzc2VydGlvbktpbmQuTk9OTlVMTDoge1xuICAgICAgICB0aGlzLnZpc2l0Tm9kZShub2RlLmV4cHJlc3Npb24pO1xuICAgICAgICBzYi5wdXNoKFwiIVwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiBhc3NlcnQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0QmluYXJ5RXhwcmVzc2lvbihub2RlOiBCaW5hcnlFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLmxlZnQpO1xuICAgIHNiLnB1c2goXCIgXCIpO1xuICAgIHNiLnB1c2gob3BlcmF0b3JUb2tlblRvU3RyaW5nKG5vZGUub3BlcmF0b3IpKTtcbiAgICBzYi5wdXNoKFwiIFwiKTtcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLnJpZ2h0KTtcbiAgfVxuXG4gIHZpc2l0Q2FsbEV4cHJlc3Npb24obm9kZTogQ2FsbEV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHRoaXMudmlzaXROb2RlKG5vZGUuZXhwcmVzc2lvbik7XG4gICAgdmFyIHR5cGVBcmd1bWVudHMgPSBub2RlLnR5cGVBcmd1bWVudHM7XG4gICAgaWYgKHR5cGVBcmd1bWVudHMpIHtcbiAgICAgIGxldCBudW1UeXBlQXJndW1lbnRzID0gdHlwZUFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICBpZiAobnVtVHlwZUFyZ3VtZW50cykge1xuICAgICAgICBzYi5wdXNoKFwiPFwiKTtcbiAgICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKHR5cGVBcmd1bWVudHNbMF0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG51bVR5cGVBcmd1bWVudHM7ICsraSkge1xuICAgICAgICAgIHNiLnB1c2goXCIsIFwiKTtcbiAgICAgICAgICB0aGlzLnZpc2l0VHlwZU5vZGUodHlwZUFyZ3VtZW50c1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgc2IucHVzaChcIj4oXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzYi5wdXNoKFwiKFwiKTtcbiAgICB9XG4gICAgdmFyIGFyZ3MgPSBub2RlLmFyZ3VtZW50cztcbiAgICB2YXIgbnVtQXJncyA9IGFyZ3MubGVuZ3RoO1xuICAgIGlmIChudW1BcmdzKSB7XG4gICAgICB0aGlzLnZpc2l0Tm9kZShhcmdzWzBdKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbnVtQXJnczsgKytpKSB7XG4gICAgICAgIHNiLnB1c2goXCIsIFwiKTtcbiAgICAgICAgdGhpcy52aXNpdE5vZGUoYXJnc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHNiLnB1c2goXCIpXCIpO1xuICB9XG5cbiAgdmlzaXRDbGFzc0V4cHJlc3Npb24obm9kZTogQ2xhc3NFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdmFyIGRlY2xhcmF0aW9uID0gbm9kZS5kZWNsYXJhdGlvbjtcbiAgICB0aGlzLnZpc2l0Q2xhc3NEZWNsYXJhdGlvbihkZWNsYXJhdGlvbik7XG4gIH1cblxuICB2aXNpdENvbW1hRXhwcmVzc2lvbihub2RlOiBDb21tYUV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB2YXIgZXhwcmVzc2lvbnMgPSBub2RlLmV4cHJlc3Npb25zO1xuICAgIHZhciBudW1FeHByZXNzaW9ucyA9IGFzc2VydChleHByZXNzaW9ucy5sZW5ndGgpO1xuICAgIHRoaXMudmlzaXROb2RlKGV4cHJlc3Npb25zWzBdKTtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbnVtRXhwcmVzc2lvbnM7ICsraSkge1xuICAgICAgc2IucHVzaChcIixcIik7XG4gICAgICB0aGlzLnZpc2l0Tm9kZShleHByZXNzaW9uc1tpXSk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRFbGVtZW50QWNjZXNzRXhwcmVzc2lvbihub2RlOiBFbGVtZW50QWNjZXNzRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5leHByZXNzaW9uKTtcbiAgICBzYi5wdXNoKFwiW1wiKTtcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLmVsZW1lbnRFeHByZXNzaW9uKTtcbiAgICBzYi5wdXNoKFwiXVwiKTtcbiAgfVxuXG4gIHZpc2l0RnVuY3Rpb25FeHByZXNzaW9uKG5vZGU6IEZ1bmN0aW9uRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHZhciBkZWNsYXJhdGlvbiA9IG5vZGUuZGVjbGFyYXRpb247XG4gICAgaWYgKCFkZWNsYXJhdGlvbi5hcnJvd0tpbmQpIHtcbiAgICAgIGlmIChkZWNsYXJhdGlvbi5uYW1lLnRleHQubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc2IucHVzaChcImZ1bmN0aW9uIFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2IucHVzaChcImZ1bmN0aW9uXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhc3NlcnQoZGVjbGFyYXRpb24ubmFtZS50ZXh0Lmxlbmd0aCA9PSAwKTtcbiAgICB9XG4gICAgdGhpcy52aXNpdEZ1bmN0aW9uQ29tbW9uKGRlY2xhcmF0aW9uKTtcbiAgfVxuXG4gIHZpc2l0TGl0ZXJhbEV4cHJlc3Npb24obm9kZTogTGl0ZXJhbEV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICBzd2l0Y2ggKG5vZGUubGl0ZXJhbEtpbmQpIHtcbiAgICAgIGNhc2UgTGl0ZXJhbEtpbmQuRkxPQVQ6IHtcbiAgICAgICAgdGhpcy52aXNpdEZsb2F0TGl0ZXJhbEV4cHJlc3Npb24oPEZsb2F0TGl0ZXJhbEV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBMaXRlcmFsS2luZC5JTlRFR0VSOiB7XG4gICAgICAgIHRoaXMudmlzaXRJbnRlZ2VyTGl0ZXJhbEV4cHJlc3Npb24oPEludGVnZXJMaXRlcmFsRXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIExpdGVyYWxLaW5kLlNUUklORzoge1xuICAgICAgICB0aGlzLnZpc2l0U3RyaW5nTGl0ZXJhbEV4cHJlc3Npb24oPFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTGl0ZXJhbEtpbmQuUkVHRVhQOiB7XG4gICAgICAgIHRoaXMudmlzaXRSZWdleHBMaXRlcmFsRXhwcmVzc2lvbig8UmVnZXhwTGl0ZXJhbEV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBMaXRlcmFsS2luZC5BUlJBWToge1xuICAgICAgICB0aGlzLnZpc2l0QXJyYXlMaXRlcmFsRXhwcmVzc2lvbig8QXJyYXlMaXRlcmFsRXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIExpdGVyYWxLaW5kLk9CSkVDVDoge1xuICAgICAgICB0aGlzLnZpc2l0T2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24oPE9iamVjdExpdGVyYWxFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgYXNzZXJ0KGZhbHNlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmlzaXRGbG9hdExpdGVyYWxFeHByZXNzaW9uKG5vZGU6IEZsb2F0TGl0ZXJhbEV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnNiLnB1c2gobm9kZS52YWx1ZS50b1N0cmluZygxMCkpO1xuICB9XG5cbiAgdmlzaXRJbnN0YW5jZU9mRXhwcmVzc2lvbihub2RlOiBJbnN0YW5jZU9mRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXROb2RlKG5vZGUuZXhwcmVzc2lvbik7XG4gICAgdGhpcy5zYi5wdXNoKFwiIGluc3RhbmNlb2YgXCIpO1xuICAgIHRoaXMudmlzaXRUeXBlTm9kZShub2RlLmlzVHlwZSk7XG4gIH1cblxuICB2aXNpdEludGVnZXJMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBJbnRlZ2VyTGl0ZXJhbEV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnNiLnB1c2goaTY0X3RvX3N0cmluZyhub2RlLnZhbHVlKSk7XG4gIH1cblxuICB2aXNpdFN0cmluZ0xpdGVyYWwoc3RyOiBzdHJpbmcsIHNpbmdsZVF1b3RlZDogYm9vbCA9IGZhbHNlKTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICB2YXIgb2ZmID0gMDtcbiAgICB2YXIgcXVvdGUgPSBzaW5nbGVRdW90ZWQgPyBcIidcIiA6IFwiXFxcIlwiO1xuICAgIHNiLnB1c2gocXVvdGUpO1xuICAgIHZhciBpID0gMDtcbiAgICBmb3IgKGxldCBrID0gc3RyLmxlbmd0aDsgaSA8IGs7KSB7XG4gICAgICBzd2l0Y2ggKHN0ci5jaGFyQ29kZUF0KGkpKSB7XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuTlVMTDoge1xuICAgICAgICAgIGlmIChpID4gb2ZmKSBzYi5wdXNoKHN0ci5zdWJzdHJpbmcob2ZmLCBvZmYgPSBpICsgMSkpO1xuICAgICAgICAgIHNiLnB1c2goXCJcXFxcMFwiKTtcbiAgICAgICAgICBvZmYgPSArK2k7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyQ29kZS5CQUNLU1BBQ0U6IHtcbiAgICAgICAgICBpZiAoaSA+IG9mZikgc2IucHVzaChzdHIuc3Vic3RyaW5nKG9mZiwgaSkpO1xuICAgICAgICAgIG9mZiA9ICsraTtcbiAgICAgICAgICBzYi5wdXNoKFwiXFxcXGJcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyQ29kZS5UQUI6IHtcbiAgICAgICAgICBpZiAoaSA+IG9mZikgc2IucHVzaChzdHIuc3Vic3RyaW5nKG9mZiwgaSkpO1xuICAgICAgICAgIG9mZiA9ICsraTtcbiAgICAgICAgICBzYi5wdXNoKFwiXFxcXHRcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyQ29kZS5MSU5FRkVFRDoge1xuICAgICAgICAgIGlmIChpID4gb2ZmKSBzYi5wdXNoKHN0ci5zdWJzdHJpbmcob2ZmLCBpKSk7XG4gICAgICAgICAgb2ZmID0gKytpO1xuICAgICAgICAgIHNiLnB1c2goXCJcXFxcblwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIENoYXJDb2RlLlZFUlRJQ0FMVEFCOiB7XG4gICAgICAgICAgaWYgKGkgPiBvZmYpIHNiLnB1c2goc3RyLnN1YnN0cmluZyhvZmYsIGkpKTtcbiAgICAgICAgICBvZmYgPSArK2k7XG4gICAgICAgICAgc2IucHVzaChcIlxcXFx2XCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuRk9STUZFRUQ6IHtcbiAgICAgICAgICBpZiAoaSA+IG9mZikgc2IucHVzaChzdHIuc3Vic3RyaW5nKG9mZiwgaSkpO1xuICAgICAgICAgIG9mZiA9ICsraTtcbiAgICAgICAgICBzYi5wdXNoKFwiXFxcXGZcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyQ29kZS5DQVJSSUFHRVJFVFVSTjoge1xuICAgICAgICAgIGlmIChpID4gb2ZmKSBzYi5wdXNoKHN0ci5zdWJzdHJpbmcob2ZmLCBpKSk7XG4gICAgICAgICAgc2IucHVzaChcIlxcXFxyXCIpO1xuICAgICAgICAgIG9mZiA9ICsraTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIENoYXJDb2RlLkRPVUJMRVFVT1RFOiB7XG4gICAgICAgICAgaWYgKCFzaW5nbGVRdW90ZWQpIHtcbiAgICAgICAgICAgIGlmIChpID4gb2ZmKSBzYi5wdXNoKHN0ci5zdWJzdHJpbmcob2ZmLCBpKSk7XG4gICAgICAgICAgICBzYi5wdXNoKFwiXFxcXFxcXCJcIik7XG4gICAgICAgICAgICBvZmYgPSArK2k7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICsraTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyQ29kZS5TSU5HTEVRVU9URToge1xuICAgICAgICAgIGlmIChzaW5nbGVRdW90ZWQpIHtcbiAgICAgICAgICAgIGlmIChpID4gb2ZmKSBzYi5wdXNoKHN0ci5zdWJzdHJpbmcob2ZmLCBpKSk7XG4gICAgICAgICAgICBzYi5wdXNoKFwiXFxcXCdcIik7XG4gICAgICAgICAgICBvZmYgPSArK2k7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICsraTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyQ29kZS5CQUNLU0xBU0g6IHtcbiAgICAgICAgICBpZiAoaSA+IG9mZikgc2IucHVzaChzdHIuc3Vic3RyaW5nKG9mZiwgaSkpO1xuICAgICAgICAgIHNiLnB1c2goXCJcXFxcXFxcXFwiKTtcbiAgICAgICAgICBvZmYgPSArK2k7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICsraTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaSA+IG9mZikgc2IucHVzaChzdHIuc3Vic3RyaW5nKG9mZiwgaSkpO1xuICAgIHNiLnB1c2gocXVvdGUpO1xuICB9XG5cbiAgdmlzaXRTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXRTdHJpbmdMaXRlcmFsKG5vZGUudmFsdWUpO1xuICB9XG5cbiAgdmlzaXRSZWdleHBMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBSZWdleHBMaXRlcmFsRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgc2IucHVzaChcIi9cIik7XG4gICAgc2IucHVzaChub2RlLnBhdHRlcm4pO1xuICAgIHNiLnB1c2goXCIvXCIpO1xuICAgIHNiLnB1c2gobm9kZS5wYXR0ZXJuRmxhZ3MpO1xuICB9XG5cbiAgdmlzaXROZXdFeHByZXNzaW9uKG5vZGU6IE5ld0V4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnNiLnB1c2goXCJuZXcgXCIpO1xuICAgIHRoaXMudmlzaXRDYWxsRXhwcmVzc2lvbihub2RlKTtcbiAgfVxuXG4gIHZpc2l0UGFyZW50aGVzaXplZEV4cHJlc3Npb24obm9kZTogUGFyZW50aGVzaXplZEV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHNiLnB1c2goXCIoXCIpO1xuICAgIHRoaXMudmlzaXROb2RlKG5vZGUuZXhwcmVzc2lvbik7XG4gICAgc2IucHVzaChcIilcIik7XG4gIH1cblxuICB2aXNpdFByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbihub2RlOiBQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLmV4cHJlc3Npb24pO1xuICAgIHRoaXMuc2IucHVzaChcIi5cIik7XG4gICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5vZGUucHJvcGVydHkpO1xuICB9XG5cbiAgdmlzaXRUZXJuYXJ5RXhwcmVzc2lvbihub2RlOiBUZXJuYXJ5RXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5jb25kaXRpb24pO1xuICAgIHNiLnB1c2goXCIgPyBcIik7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5pZlRoZW4pO1xuICAgIHNiLnB1c2goXCIgOiBcIik7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5pZkVsc2UpO1xuICB9XG5cbiAgdmlzaXRVbmFyeUV4cHJlc3Npb24obm9kZTogVW5hcnlFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgc3dpdGNoIChub2RlLmtpbmQpIHtcbiAgICAgIGNhc2UgTm9kZUtpbmQuVU5BUllQT1NURklYOiB7XG4gICAgICAgIHRoaXMudmlzaXRVbmFyeVBvc3RmaXhFeHByZXNzaW9uKDxVbmFyeVBvc3RmaXhFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVU5BUllQUkVGSVg6IHtcbiAgICAgICAgdGhpcy52aXNpdFVuYXJ5UHJlZml4RXhwcmVzc2lvbig8VW5hcnlQcmVmaXhFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IGFzc2VydChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRVbmFyeVBvc3RmaXhFeHByZXNzaW9uKG5vZGU6IFVuYXJ5UG9zdGZpeEV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLm9wZXJhbmQpO1xuICAgIHRoaXMuc2IucHVzaChvcGVyYXRvclRva2VuVG9TdHJpbmcobm9kZS5vcGVyYXRvcikpO1xuICB9XG5cbiAgdmlzaXRVbmFyeVByZWZpeEV4cHJlc3Npb24obm9kZTogVW5hcnlQcmVmaXhFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy5zYi5wdXNoKG9wZXJhdG9yVG9rZW5Ub1N0cmluZyhub2RlLm9wZXJhdG9yKSk7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5vcGVyYW5kKTtcbiAgfVxuXG4gIC8vIHN0YXRlbWVudHNcblxuICB2aXNpdE5vZGVBbmRUZXJtaW5hdGUoc3RhdGVtZW50OiBTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0Tm9kZShzdGF0ZW1lbnQpO1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgaWYgKFxuICAgICAgIXNiLmxlbmd0aCB8fCAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGVhZGluZyBFbXB0eVN0YXRlbWVudFxuICAgICAgc3RhdGVtZW50LmtpbmQgPT0gTm9kZUtpbmQuVkFSSUFCTEUgfHwgLy8gcG90ZW50aWFsbHkgYXNzaWducyBhIEZ1bmN0aW9uRXhwcmVzc2lvblxuICAgICAgc3RhdGVtZW50LmtpbmQgPT0gTm9kZUtpbmQuRVhQUkVTU0lPTiAgLy8gcG90ZW50aWFsbHkgYXNzaWducyBhIEZ1bmN0aW9uRXhwcmVzc2lvblxuICAgICkge1xuICAgICAgc2IucHVzaChcIjtcXG5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBsYXN0ID0gc2Jbc2IubGVuZ3RoIC0gMV07XG4gICAgICBsZXQgbGFzdENoYXJQb3MgPSBsYXN0Lmxlbmd0aCAtIDE7XG4gICAgICBpZiAobGFzdENoYXJQb3MgPj0gMCAmJiAoXG4gICAgICAgIGxhc3QuY2hhckNvZGVBdChsYXN0Q2hhclBvcykgPT0gQ2hhckNvZGUuQ0xPU0VCUkFDRSB8fFxuICAgICAgICBsYXN0LmNoYXJDb2RlQXQobGFzdENoYXJQb3MpID09IENoYXJDb2RlLlNFTUlDT0xPTilcbiAgICAgICkge1xuICAgICAgICBzYi5wdXNoKFwiXFxuXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2IucHVzaChcIjtcXG5cIik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmlzaXRCbG9ja1N0YXRlbWVudChub2RlOiBCbG9ja1N0YXRlbWVudCk6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgdmFyIHN0YXRlbWVudHMgPSBub2RlLnN0YXRlbWVudHM7XG4gICAgdmFyIG51bVN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzLmxlbmd0aDtcbiAgICBpZiAobnVtU3RhdGVtZW50cykge1xuICAgICAgc2IucHVzaChcIntcXG5cIik7XG4gICAgICBsZXQgaW5kZW50TGV2ZWwgPSArK3RoaXMuaW5kZW50TGV2ZWw7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVN0YXRlbWVudHM7ICsraSkge1xuICAgICAgICBpbmRlbnQoc2IsIGluZGVudExldmVsKTtcbiAgICAgICAgdGhpcy52aXNpdE5vZGVBbmRUZXJtaW5hdGUoc3RhdGVtZW50c1tpXSk7XG4gICAgICB9XG4gICAgICBpbmRlbnQoc2IsIC0tdGhpcy5pbmRlbnRMZXZlbCk7XG4gICAgICBzYi5wdXNoKFwifVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2IucHVzaChcInt9XCIpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0QnJlYWtTdGF0ZW1lbnQobm9kZTogQnJlYWtTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB2YXIgbGFiZWwgPSBub2RlLmxhYmVsO1xuICAgIGlmIChsYWJlbCkge1xuICAgICAgdGhpcy5zYi5wdXNoKFwiYnJlYWsgXCIpO1xuICAgICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKGxhYmVsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zYi5wdXNoKFwiYnJlYWtcIik7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRDb250aW51ZVN0YXRlbWVudChub2RlOiBDb250aW51ZVN0YXRlbWVudCk6IHZvaWQge1xuICAgIHZhciBsYWJlbCA9IG5vZGUubGFiZWw7XG4gICAgaWYgKGxhYmVsKSB7XG4gICAgICB0aGlzLnNiLnB1c2goXCJjb250aW51ZSBcIik7XG4gICAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obGFiZWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNiLnB1c2goXCJjb250aW51ZVwiKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdENsYXNzRGVjbGFyYXRpb24obm9kZTogQ2xhc3NEZWNsYXJhdGlvbiwgaXNEZWZhdWx0OiBib29sID0gZmFsc2UpOiB2b2lkIHtcbiAgICB2YXIgZGVjb3JhdG9ycyA9IG5vZGUuZGVjb3JhdG9ycztcbiAgICBpZiAoZGVjb3JhdG9ycykge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGsgPSBkZWNvcmF0b3JzLmxlbmd0aDsgaSA8IGs7ICsraSkge1xuICAgICAgICB0aGlzLnNlcmlhbGl6ZURlY29yYXRvcihkZWNvcmF0b3JzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICBpZiAoaXNEZWZhdWx0KSB7XG4gICAgICBzYi5wdXNoKFwiZXhwb3J0IGRlZmF1bHQgXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlcmlhbGl6ZUV4dGVybmFsTW9kaWZpZXJzKG5vZGUpO1xuICAgIH1cbiAgICBpZiAobm9kZS5pcyhDb21tb25GbGFncy5BQlNUUkFDVCkpIHNiLnB1c2goXCJhYnN0cmFjdCBcIik7XG4gICAgaWYgKG5vZGUubmFtZS50ZXh0Lmxlbmd0aCkge1xuICAgICAgc2IucHVzaChcImNsYXNzIFwiKTtcbiAgICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlLm5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzYi5wdXNoKFwiY2xhc3NcIik7XG4gICAgfVxuICAgIHZhciB0eXBlUGFyYW1ldGVycyA9IG5vZGUudHlwZVBhcmFtZXRlcnM7XG4gICAgaWYgKHR5cGVQYXJhbWV0ZXJzICYmIHR5cGVQYXJhbWV0ZXJzLmxlbmd0aCkge1xuICAgICAgc2IucHVzaChcIjxcIik7XG4gICAgICB0aGlzLnZpc2l0VHlwZVBhcmFtZXRlcih0eXBlUGFyYW1ldGVyc1swXSk7XG4gICAgICBmb3IgKGxldCBpID0gMSwgayA9IHR5cGVQYXJhbWV0ZXJzLmxlbmd0aDsgaSA8IGs7ICsraSkge1xuICAgICAgICBzYi5wdXNoKFwiLCBcIik7XG4gICAgICAgIHRoaXMudmlzaXRUeXBlUGFyYW1ldGVyKHR5cGVQYXJhbWV0ZXJzW2ldKTtcbiAgICAgIH1cbiAgICAgIHNiLnB1c2goXCI+XCIpO1xuICAgIH1cbiAgICB2YXIgZXh0ZW5kc1R5cGUgPSBub2RlLmV4dGVuZHNUeXBlO1xuICAgIGlmIChleHRlbmRzVHlwZSkge1xuICAgICAgc2IucHVzaChcIiBleHRlbmRzIFwiKTtcbiAgICAgIHRoaXMudmlzaXRUeXBlTm9kZShleHRlbmRzVHlwZSk7XG4gICAgfVxuICAgIHZhciBpbXBsZW1lbnRzVHlwZXMgPSBub2RlLmltcGxlbWVudHNUeXBlcztcbiAgICBpZiAoaW1wbGVtZW50c1R5cGVzKSB7XG4gICAgICBsZXQgbnVtSW1wbGVtZW50c1R5cGVzID0gaW1wbGVtZW50c1R5cGVzLmxlbmd0aDtcbiAgICAgIGlmIChudW1JbXBsZW1lbnRzVHlwZXMpIHtcbiAgICAgICAgc2IucHVzaChcIiBpbXBsZW1lbnRzIFwiKTtcbiAgICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKGltcGxlbWVudHNUeXBlc1swXSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbnVtSW1wbGVtZW50c1R5cGVzOyArK2kpIHtcbiAgICAgICAgICBzYi5wdXNoKFwiLCBcIik7XG4gICAgICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKGltcGxlbWVudHNUeXBlc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIG1lbWJlcnMgPSBub2RlLm1lbWJlcnM7XG4gICAgdmFyIG51bU1lbWJlcnMgPSBtZW1iZXJzLmxlbmd0aDtcbiAgICBpZiAobnVtTWVtYmVycykge1xuICAgICAgc2IucHVzaChcIiB7XFxuXCIpO1xuICAgICAgbGV0IGluZGVudExldmVsID0gKyt0aGlzLmluZGVudExldmVsO1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGsgPSBtZW1iZXJzLmxlbmd0aDsgaSA8IGs7ICsraSkge1xuICAgICAgICBsZXQgbWVtYmVyID0gbWVtYmVyc1tpXTtcbiAgICAgICAgaWYgKG1lbWJlci5raW5kICE9IE5vZGVLaW5kLkZJRUxEREVDTEFSQVRJT04gfHwgKDxGaWVsZERlY2xhcmF0aW9uPm1lbWJlcikucGFyYW1ldGVySW5kZXggPCAwKSB7XG4gICAgICAgICAgaW5kZW50KHNiLCBpbmRlbnRMZXZlbCk7XG4gICAgICAgICAgdGhpcy52aXNpdE5vZGVBbmRUZXJtaW5hdGUobWVtYmVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaW5kZW50KHNiLCAtLXRoaXMuaW5kZW50TGV2ZWwpO1xuICAgICAgc2IucHVzaChcIn1cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNiLnB1c2goXCIge31cIik7XG4gICAgfVxuICB9XG5cbiAgdmlzaXREb1N0YXRlbWVudChub2RlOiBEb1N0YXRlbWVudCk6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgc2IucHVzaChcImRvIFwiKTtcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLnN0YXRlbWVudCk7XG4gICAgaWYgKG5vZGUuc3RhdGVtZW50LmtpbmQgPT0gTm9kZUtpbmQuQkxPQ0spIHtcbiAgICAgIHNiLnB1c2goXCIgd2hpbGUgKFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2IucHVzaChcIjtcXG5cIik7XG4gICAgICBpbmRlbnQoc2IsIHRoaXMuaW5kZW50TGV2ZWwpO1xuICAgICAgc2IucHVzaChcIndoaWxlIChcIik7XG4gICAgfVxuICAgIHRoaXMudmlzaXROb2RlKG5vZGUuY29uZGl0aW9uKTtcbiAgICBzYi5wdXNoKFwiKVwiKTtcbiAgfVxuXG4gIHZpc2l0RW1wdHlTdGF0ZW1lbnQobm9kZTogRW1wdHlTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgfVxuXG4gIHZpc2l0RW51bURlY2xhcmF0aW9uKG5vZGU6IEVudW1EZWNsYXJhdGlvbiwgaXNEZWZhdWx0OiBib29sID0gZmFsc2UpOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIGlmIChpc0RlZmF1bHQpIHtcbiAgICAgIHNiLnB1c2goXCJleHBvcnQgZGVmYXVsdCBcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VyaWFsaXplRXh0ZXJuYWxNb2RpZmllcnMobm9kZSk7XG4gICAgfVxuICAgIGlmIChub2RlLmlzKENvbW1vbkZsYWdzLkNPTlNUKSkgc2IucHVzaChcImNvbnN0IFwiKTtcbiAgICBzYi5wdXNoKFwiZW51bSBcIik7XG4gICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5vZGUubmFtZSk7XG4gICAgdmFyIHZhbHVlcyA9IG5vZGUudmFsdWVzO1xuICAgIHZhciBudW1WYWx1ZXMgPSB2YWx1ZXMubGVuZ3RoO1xuICAgIGlmIChudW1WYWx1ZXMpIHtcbiAgICAgIHNiLnB1c2goXCIge1xcblwiKTtcbiAgICAgIGxldCBpbmRlbnRMZXZlbCA9ICsrdGhpcy5pbmRlbnRMZXZlbDtcbiAgICAgIGluZGVudChzYiwgaW5kZW50TGV2ZWwpO1xuICAgICAgdGhpcy52aXNpdEVudW1WYWx1ZURlY2xhcmF0aW9uKG5vZGUudmFsdWVzWzBdKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbnVtVmFsdWVzOyArK2kpIHtcbiAgICAgICAgc2IucHVzaChcIixcXG5cIik7XG4gICAgICAgIGluZGVudChzYiwgaW5kZW50TGV2ZWwpO1xuICAgICAgICB0aGlzLnZpc2l0RW51bVZhbHVlRGVjbGFyYXRpb24obm9kZS52YWx1ZXNbaV0pO1xuICAgICAgfVxuICAgICAgc2IucHVzaChcIlxcblwiKTtcbiAgICAgIGluZGVudChzYiwgLS10aGlzLmluZGVudExldmVsKTtcbiAgICAgIHNiLnB1c2goXCJ9XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzYi5wdXNoKFwiIHt9XCIpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0RW51bVZhbHVlRGVjbGFyYXRpb24obm9kZTogRW51bVZhbHVlRGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obm9kZS5uYW1lKTtcbiAgICBpZiAobm9kZS52YWx1ZSkge1xuICAgICAgdGhpcy5zYi5wdXNoKFwiID0gXCIpO1xuICAgICAgdGhpcy52aXNpdE5vZGUobm9kZS52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRFeHBvcnRJbXBvcnRTdGF0ZW1lbnQobm9kZTogRXhwb3J0SW1wb3J0U3RhdGVtZW50KTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICBzYi5wdXNoKFwiZXhwb3J0IGltcG9ydCBcIik7XG4gICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5vZGUuZXh0ZXJuYWxOYW1lKTtcbiAgICBzYi5wdXNoKFwiID0gXCIpO1xuICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlLm5hbWUpO1xuICB9XG5cbiAgdmlzaXRFeHBvcnRNZW1iZXIobm9kZTogRXhwb3J0TWVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5vZGUubG9jYWxOYW1lKTtcbiAgICBpZiAobm9kZS5leHBvcnRlZE5hbWUudGV4dCAhPSBub2RlLmxvY2FsTmFtZS50ZXh0KSB7XG4gICAgICB0aGlzLnNiLnB1c2goXCIgYXMgXCIpO1xuICAgICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5vZGUuZXhwb3J0ZWROYW1lKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdEV4cG9ydFN0YXRlbWVudChub2RlOiBFeHBvcnRTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIGlmIChub2RlLmlzRGVjbGFyZSkge1xuICAgICAgc2IucHVzaChcImRlY2xhcmUgXCIpO1xuICAgIH1cbiAgICB2YXIgbWVtYmVycyA9IG5vZGUubWVtYmVycztcbiAgICBpZiAobWVtYmVycyAmJiBtZW1iZXJzLmxlbmd0aCkge1xuICAgICAgbGV0IG51bU1lbWJlcnMgPSBtZW1iZXJzLmxlbmd0aDtcbiAgICAgIHNiLnB1c2goXCJleHBvcnQge1xcblwiKTtcbiAgICAgIGxldCBpbmRlbnRMZXZlbCA9ICsrdGhpcy5pbmRlbnRMZXZlbDtcbiAgICAgIGluZGVudChzYiwgaW5kZW50TGV2ZWwpO1xuICAgICAgdGhpcy52aXNpdEV4cG9ydE1lbWJlcihtZW1iZXJzWzBdKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbnVtTWVtYmVyczsgKytpKSB7XG4gICAgICAgIHNiLnB1c2goXCIsXFxuXCIpO1xuICAgICAgICBpbmRlbnQoc2IsIGluZGVudExldmVsKTtcbiAgICAgICAgdGhpcy52aXNpdEV4cG9ydE1lbWJlcihtZW1iZXJzW2ldKTtcbiAgICAgIH1cbiAgICAgIC0tdGhpcy5pbmRlbnRMZXZlbDtcbiAgICAgIHNiLnB1c2goXCJcXG59XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzYi5wdXNoKFwiZXhwb3J0IHt9XCIpO1xuICAgIH1cbiAgICB2YXIgcGF0aCA9IG5vZGUucGF0aDtcbiAgICBpZiAocGF0aCkge1xuICAgICAgc2IucHVzaChcIiBmcm9tIFwiKTtcbiAgICAgIHRoaXMudmlzaXRTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbihwYXRoKTtcbiAgICB9XG4gICAgc2IucHVzaChcIjtcIik7XG4gIH1cblxuICB2aXNpdEV4cG9ydERlZmF1bHRTdGF0ZW1lbnQobm9kZTogRXhwb3J0RGVmYXVsdFN0YXRlbWVudCk6IHZvaWQge1xuICAgIHZhciBkZWNsYXJhdGlvbiA9IG5vZGUuZGVjbGFyYXRpb247XG4gICAgc3dpdGNoIChkZWNsYXJhdGlvbi5raW5kKSB7XG4gICAgICBjYXNlIE5vZGVLaW5kLkVOVU1ERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0RW51bURlY2xhcmF0aW9uKDxFbnVtRGVjbGFyYXRpb24+ZGVjbGFyYXRpb24sIHRydWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRlVOQ1RJT05ERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0RnVuY3Rpb25EZWNsYXJhdGlvbig8RnVuY3Rpb25EZWNsYXJhdGlvbj5kZWNsYXJhdGlvbiwgdHJ1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5DTEFTU0RFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRDbGFzc0RlY2xhcmF0aW9uKDxDbGFzc0RlY2xhcmF0aW9uPmRlY2xhcmF0aW9uLCB0cnVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLklOVEVSRkFDRURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRJbnRlcmZhY2VEZWNsYXJhdGlvbig8SW50ZXJmYWNlRGVjbGFyYXRpb24+ZGVjbGFyYXRpb24sIHRydWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuTkFNRVNQQUNFREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdE5hbWVzcGFjZURlY2xhcmF0aW9uKDxOYW1lc3BhY2VEZWNsYXJhdGlvbj5kZWNsYXJhdGlvbiwgdHJ1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDogYXNzZXJ0KGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdEV4cHJlc3Npb25TdGF0ZW1lbnQobm9kZTogRXhwcmVzc2lvblN0YXRlbWVudCk6IHZvaWQge1xuICAgIHRoaXMudmlzaXROb2RlKG5vZGUuZXhwcmVzc2lvbik7XG4gIH1cblxuICB2aXNpdEZpZWxkRGVjbGFyYXRpb24obm9kZTogRmllbGREZWNsYXJhdGlvbik6IHZvaWQge1xuICAgIHZhciBkZWNvcmF0b3JzID0gbm9kZS5kZWNvcmF0b3JzO1xuICAgIGlmIChkZWNvcmF0b3JzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgayA9IGRlY29yYXRvcnMubGVuZ3RoOyBpIDwgazsgKytpKSB7XG4gICAgICAgIHRoaXMuc2VyaWFsaXplRGVjb3JhdG9yKGRlY29yYXRvcnNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNlcmlhbGl6ZUFjY2Vzc01vZGlmaWVycyhub2RlKTtcbiAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obm9kZS5uYW1lKTtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIGlmIChub2RlLmZsYWdzICYgQ29tbW9uRmxhZ3MuREVGSU5JVEVfQVNTSUdOTUVOVCkge1xuICAgICAgc2IucHVzaChcIiFcIik7XG4gICAgfVxuICAgIHZhciB0eXBlID0gbm9kZS50eXBlO1xuICAgIGlmICh0eXBlKSB7XG4gICAgICBzYi5wdXNoKFwiOiBcIik7XG4gICAgICB0aGlzLnZpc2l0VHlwZU5vZGUodHlwZSk7XG4gICAgfVxuICAgIHZhciBpbml0aWFsaXplciA9IG5vZGUuaW5pdGlhbGl6ZXI7XG4gICAgaWYgKGluaXRpYWxpemVyKSB7XG4gICAgICBzYi5wdXNoKFwiID0gXCIpO1xuICAgICAgdGhpcy52aXNpdE5vZGUoaW5pdGlhbGl6ZXIpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0Rm9yU3RhdGVtZW50KG5vZGU6IEZvclN0YXRlbWVudCk6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgc2IucHVzaChcImZvciAoXCIpO1xuICAgIHZhciBpbml0aWFsaXplciA9IG5vZGUuaW5pdGlhbGl6ZXI7XG4gICAgaWYgKGluaXRpYWxpemVyKSB7XG4gICAgICB0aGlzLnZpc2l0Tm9kZShpbml0aWFsaXplcik7XG4gICAgfVxuICAgIHZhciBjb25kaXRpb24gPSBub2RlLmNvbmRpdGlvbjtcbiAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICBzYi5wdXNoKFwiOyBcIik7XG4gICAgICB0aGlzLnZpc2l0Tm9kZShjb25kaXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzYi5wdXNoKFwiO1wiKTtcbiAgICB9XG4gICAgdmFyIGluY3JlbWVudG9yID0gbm9kZS5pbmNyZW1lbnRvcjtcbiAgICBpZiAoaW5jcmVtZW50b3IpIHtcbiAgICAgIHNiLnB1c2goXCI7IFwiKTtcbiAgICAgIHRoaXMudmlzaXROb2RlKGluY3JlbWVudG9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2IucHVzaChcIjtcIik7XG4gICAgfVxuICAgIHNiLnB1c2goXCIpIFwiKTtcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLnN0YXRlbWVudCk7XG4gIH1cblxuICB2aXNpdEZ1bmN0aW9uRGVjbGFyYXRpb24obm9kZTogRnVuY3Rpb25EZWNsYXJhdGlvbiwgaXNEZWZhdWx0OiBib29sID0gZmFsc2UpOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHZhciBkZWNvcmF0b3JzID0gbm9kZS5kZWNvcmF0b3JzO1xuICAgIGlmIChkZWNvcmF0b3JzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgayA9IGRlY29yYXRvcnMubGVuZ3RoOyBpIDwgazsgKytpKSB7XG4gICAgICAgIHRoaXMuc2VyaWFsaXplRGVjb3JhdG9yKGRlY29yYXRvcnNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNEZWZhdWx0KSB7XG4gICAgICBzYi5wdXNoKFwiZXhwb3J0IGRlZmF1bHQgXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlcmlhbGl6ZUV4dGVybmFsTW9kaWZpZXJzKG5vZGUpO1xuICAgICAgdGhpcy5zZXJpYWxpemVBY2Nlc3NNb2RpZmllcnMobm9kZSk7XG4gICAgfVxuICAgIGlmIChub2RlLm5hbWUudGV4dC5sZW5ndGgpIHtcbiAgICAgIHNiLnB1c2goXCJmdW5jdGlvbiBcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNiLnB1c2goXCJmdW5jdGlvblwiKTtcbiAgICB9XG4gICAgdGhpcy52aXNpdEZ1bmN0aW9uQ29tbW9uKG5vZGUpO1xuICB9XG5cbiAgdmlzaXRGdW5jdGlvbkNvbW1vbihub2RlOiBGdW5jdGlvbkRlY2xhcmF0aW9uKTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obm9kZS5uYW1lKTtcbiAgICB2YXIgc2lnbmF0dXJlID0gbm9kZS5zaWduYXR1cmU7XG4gICAgdmFyIHR5cGVQYXJhbWV0ZXJzID0gbm9kZS50eXBlUGFyYW1ldGVycztcbiAgICBpZiAodHlwZVBhcmFtZXRlcnMpIHtcbiAgICAgIGxldCBudW1UeXBlUGFyYW1ldGVycyA9IHR5cGVQYXJhbWV0ZXJzLmxlbmd0aDtcbiAgICAgIGlmIChudW1UeXBlUGFyYW1ldGVycykge1xuICAgICAgICBzYi5wdXNoKFwiPFwiKTtcbiAgICAgICAgdGhpcy52aXNpdFR5cGVQYXJhbWV0ZXIodHlwZVBhcmFtZXRlcnNbMF0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG51bVR5cGVQYXJhbWV0ZXJzOyArK2kpIHtcbiAgICAgICAgICBzYi5wdXNoKFwiLCBcIik7XG4gICAgICAgICAgdGhpcy52aXNpdFR5cGVQYXJhbWV0ZXIodHlwZVBhcmFtZXRlcnNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHNiLnB1c2goXCI+XCIpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobm9kZS5hcnJvd0tpbmQgPT0gQXJyb3dLaW5kLkFSUk9XX1NJTkdMRSkge1xuICAgICAgbGV0IHBhcmFtZXRlcnMgPSBzaWduYXR1cmUucGFyYW1ldGVycztcbiAgICAgIGFzc2VydChwYXJhbWV0ZXJzLmxlbmd0aCA9PSAxKTtcbiAgICAgIGFzc2VydCghc2lnbmF0dXJlLmV4cGxpY2l0VGhpc1R5cGUpO1xuICAgICAgdGhpcy5zZXJpYWxpemVQYXJhbWV0ZXIocGFyYW1ldGVyc1swXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNiLnB1c2goXCIoXCIpO1xuICAgICAgbGV0IHBhcmFtZXRlcnMgPSBzaWduYXR1cmUucGFyYW1ldGVycztcbiAgICAgIGxldCBudW1QYXJhbWV0ZXJzID0gcGFyYW1ldGVycy5sZW5ndGg7XG4gICAgICBsZXQgZXhwbGljaXRUaGlzVHlwZSA9IHNpZ25hdHVyZS5leHBsaWNpdFRoaXNUeXBlO1xuICAgICAgaWYgKGV4cGxpY2l0VGhpc1R5cGUpIHtcbiAgICAgICAgc2IucHVzaChcInRoaXM6IFwiKTtcbiAgICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKGV4cGxpY2l0VGhpc1R5cGUpO1xuICAgICAgfVxuICAgICAgaWYgKG51bVBhcmFtZXRlcnMpIHtcbiAgICAgICAgaWYgKGV4cGxpY2l0VGhpc1R5cGUpIHNiLnB1c2goXCIsIFwiKTtcbiAgICAgICAgdGhpcy5zZXJpYWxpemVQYXJhbWV0ZXIocGFyYW1ldGVyc1swXSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbnVtUGFyYW1ldGVyczsgKytpKSB7XG4gICAgICAgICAgc2IucHVzaChcIiwgXCIpO1xuICAgICAgICAgIHRoaXMuc2VyaWFsaXplUGFyYW1ldGVyKHBhcmFtZXRlcnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBib2R5ID0gbm9kZS5ib2R5O1xuICAgIHZhciByZXR1cm5UeXBlID0gc2lnbmF0dXJlLnJldHVyblR5cGU7XG4gICAgaWYgKG5vZGUuYXJyb3dLaW5kKSB7XG4gICAgICBpZiAoYm9keSkge1xuICAgICAgICBpZiAobm9kZS5hcnJvd0tpbmQgPT0gQXJyb3dLaW5kLkFSUk9XX1NJTkdMRSkge1xuICAgICAgICAgIGFzc2VydChpc1R5cGVPbWl0dGVkKHJldHVyblR5cGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoaXNUeXBlT21pdHRlZChyZXR1cm5UeXBlKSkge1xuICAgICAgICAgICAgc2IucHVzaChcIilcIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNiLnB1c2goXCIpOiBcIik7XG4gICAgICAgICAgICB0aGlzLnZpc2l0VHlwZU5vZGUocmV0dXJuVHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNiLnB1c2goXCIgPT4gXCIpO1xuICAgICAgICB0aGlzLnZpc2l0Tm9kZShib2R5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFzc2VydCghaXNUeXBlT21pdHRlZChyZXR1cm5UeXBlKSk7XG4gICAgICAgIHNiLnB1c2goXCIgPT4gXCIpO1xuICAgICAgICB0aGlzLnZpc2l0VHlwZU5vZGUocmV0dXJuVHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChcbiAgICAgICAgIWlzVHlwZU9taXR0ZWQocmV0dXJuVHlwZSkgJiZcbiAgICAgICAgIW5vZGUuaXNBbnkoQ29tbW9uRmxhZ3MuQ09OU1RSVUNUT1IgfCBDb21tb25GbGFncy5TRVQpXG4gICAgICApIHtcbiAgICAgICAgc2IucHVzaChcIik6IFwiKTtcbiAgICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKHJldHVyblR5cGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2IucHVzaChcIilcIik7XG4gICAgICB9XG4gICAgICBpZiAoYm9keSkge1xuICAgICAgICBzYi5wdXNoKFwiIFwiKTtcbiAgICAgICAgdGhpcy52aXNpdE5vZGUoYm9keSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmlzaXRJZlN0YXRlbWVudChub2RlOiBJZlN0YXRlbWVudCk6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgc2IucHVzaChcImlmIChcIik7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5jb25kaXRpb24pO1xuICAgIHNiLnB1c2goXCIpIFwiKTtcbiAgICB2YXIgaWZUcnVlID0gbm9kZS5pZlRydWU7XG4gICAgdGhpcy52aXNpdE5vZGUoaWZUcnVlKTtcbiAgICBpZiAoaWZUcnVlLmtpbmQgIT0gTm9kZUtpbmQuQkxPQ0spIHtcbiAgICAgIHNiLnB1c2goXCI7XFxuXCIpO1xuICAgIH1cbiAgICB2YXIgaWZGYWxzZSA9IG5vZGUuaWZGYWxzZTtcbiAgICBpZiAoaWZGYWxzZSkge1xuICAgICAgaWYgKGlmVHJ1ZS5raW5kID09IE5vZGVLaW5kLkJMT0NLKSB7XG4gICAgICAgIHNiLnB1c2goXCIgZWxzZSBcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzYi5wdXNoKFwiZWxzZSBcIik7XG4gICAgICB9XG4gICAgICB0aGlzLnZpc2l0Tm9kZShpZkZhbHNlKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdEltcG9ydERlY2xhcmF0aW9uKG5vZGU6IEltcG9ydERlY2xhcmF0aW9uKTogdm9pZCB7XG4gICAgdmFyIGV4dGVybmFsTmFtZSA9IG5vZGUuZm9yZWlnbk5hbWU7XG4gICAgdmFyIG5hbWUgPSBub2RlLm5hbWU7XG4gICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKGV4dGVybmFsTmFtZSk7XG4gICAgaWYgKGV4dGVybmFsTmFtZS50ZXh0ICE9IG5hbWUudGV4dCkge1xuICAgICAgdGhpcy5zYi5wdXNoKFwiIGFzIFwiKTtcbiAgICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihuYW1lKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdEltcG9ydFN0YXRlbWVudChub2RlOiBJbXBvcnRTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHNiLnB1c2goXCJpbXBvcnQgXCIpO1xuICAgIHZhciBkZWNsYXJhdGlvbnMgPSBub2RlLmRlY2xhcmF0aW9ucztcbiAgICB2YXIgbmFtZXNwYWNlTmFtZSA9IG5vZGUubmFtZXNwYWNlTmFtZTtcbiAgICBpZiAoZGVjbGFyYXRpb25zKSB7XG4gICAgICBsZXQgbnVtRGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zLmxlbmd0aDtcbiAgICAgIGlmIChudW1EZWNsYXJhdGlvbnMpIHtcbiAgICAgICAgc2IucHVzaChcIntcXG5cIik7XG4gICAgICAgIGxldCBpbmRlbnRMZXZlbCA9ICsrdGhpcy5pbmRlbnRMZXZlbDtcbiAgICAgICAgaW5kZW50KHNiLCBpbmRlbnRMZXZlbCk7XG4gICAgICAgIHRoaXMudmlzaXRJbXBvcnREZWNsYXJhdGlvbihkZWNsYXJhdGlvbnNbMF0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG51bURlY2xhcmF0aW9uczsgKytpKSB7XG4gICAgICAgICAgc2IucHVzaChcIixcXG5cIik7XG4gICAgICAgICAgaW5kZW50KHNiLCBpbmRlbnRMZXZlbCk7XG4gICAgICAgICAgdGhpcy52aXNpdEltcG9ydERlY2xhcmF0aW9uKGRlY2xhcmF0aW9uc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgLS10aGlzLmluZGVudExldmVsO1xuICAgICAgICBzYi5wdXNoKFwiXFxufSBmcm9tIFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNiLnB1c2goXCJ7fSBmcm9tIFwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5hbWVzcGFjZU5hbWUpIHtcbiAgICAgIHNiLnB1c2goXCIqIGFzIFwiKTtcbiAgICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihuYW1lc3BhY2VOYW1lKTtcbiAgICAgIHNiLnB1c2goXCIgZnJvbSBcIik7XG4gICAgfVxuICAgIHRoaXMudmlzaXRTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbihub2RlLnBhdGgpO1xuICB9XG5cbiAgdmlzaXRJbmRleFNpZ25hdHVyZURlY2xhcmF0aW9uKG5vZGU6IEluZGV4U2lnbmF0dXJlRGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHNiLnB1c2goXCJba2V5OiBcIik7XG4gICAgdGhpcy52aXNpdFR5cGVOb2RlKG5vZGUua2V5VHlwZSk7XG4gICAgc2IucHVzaChcIl06IFwiKTtcbiAgICB0aGlzLnZpc2l0VHlwZU5vZGUobm9kZS52YWx1ZVR5cGUpO1xuICB9XG5cbiAgdmlzaXRJbnRlcmZhY2VEZWNsYXJhdGlvbihub2RlOiBJbnRlcmZhY2VEZWNsYXJhdGlvbiwgaXNEZWZhdWx0OiBib29sID0gZmFsc2UpOiB2b2lkIHtcbiAgICB2YXIgZGVjb3JhdG9ycyA9IG5vZGUuZGVjb3JhdG9ycztcbiAgICBpZiAoZGVjb3JhdG9ycykge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGsgPSBkZWNvcmF0b3JzLmxlbmd0aDsgaSA8IGs7ICsraSkge1xuICAgICAgICB0aGlzLnNlcmlhbGl6ZURlY29yYXRvcihkZWNvcmF0b3JzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICBpZiAoaXNEZWZhdWx0KSB7XG4gICAgICBzYi5wdXNoKFwiZXhwb3J0IGRlZmF1bHQgXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlcmlhbGl6ZUV4dGVybmFsTW9kaWZpZXJzKG5vZGUpO1xuICAgIH1cbiAgICBzYi5wdXNoKFwiaW50ZXJmYWNlIFwiKTtcbiAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obm9kZS5uYW1lKTtcbiAgICB2YXIgdHlwZVBhcmFtZXRlcnMgPSBub2RlLnR5cGVQYXJhbWV0ZXJzO1xuICAgIGlmICh0eXBlUGFyYW1ldGVycyAmJiB0eXBlUGFyYW1ldGVycy5sZW5ndGgpIHtcbiAgICAgIHNiLnB1c2goXCI8XCIpO1xuICAgICAgdGhpcy52aXNpdFR5cGVQYXJhbWV0ZXIodHlwZVBhcmFtZXRlcnNbMF0pO1xuICAgICAgZm9yIChsZXQgaSA9IDEsIGsgPSB0eXBlUGFyYW1ldGVycy5sZW5ndGg7IGkgPCBrOyArK2kpIHtcbiAgICAgICAgc2IucHVzaChcIiwgXCIpO1xuICAgICAgICB0aGlzLnZpc2l0VHlwZVBhcmFtZXRlcih0eXBlUGFyYW1ldGVyc1tpXSk7XG4gICAgICB9XG4gICAgICBzYi5wdXNoKFwiPlwiKTtcbiAgICB9XG4gICAgdmFyIGV4dGVuZHNUeXBlID0gbm9kZS5leHRlbmRzVHlwZTtcbiAgICBpZiAoZXh0ZW5kc1R5cGUpIHtcbiAgICAgIHNiLnB1c2goXCIgZXh0ZW5kcyBcIik7XG4gICAgICB0aGlzLnZpc2l0VHlwZU5vZGUoZXh0ZW5kc1R5cGUpO1xuICAgIH1cbiAgICAvLyBtdXN0IG5vdCBoYXZlIGltcGxlbWVudHNUeXBlc1xuICAgIHNiLnB1c2goXCIge1xcblwiKTtcbiAgICB2YXIgaW5kZW50TGV2ZWwgPSArK3RoaXMuaW5kZW50TGV2ZWw7XG4gICAgdmFyIG1lbWJlcnMgPSBub2RlLm1lbWJlcnM7XG4gICAgZm9yIChsZXQgaSA9IDAsIGsgPSBtZW1iZXJzLmxlbmd0aDsgaSA8IGs7ICsraSkge1xuICAgICAgaW5kZW50KHNiLCBpbmRlbnRMZXZlbCk7XG4gICAgICB0aGlzLnZpc2l0Tm9kZUFuZFRlcm1pbmF0ZShtZW1iZXJzW2ldKTtcbiAgICB9XG4gICAgLS10aGlzLmluZGVudExldmVsO1xuICAgIHNiLnB1c2goXCJ9XCIpO1xuICB9XG5cbiAgdmlzaXRNZXRob2REZWNsYXJhdGlvbihub2RlOiBNZXRob2REZWNsYXJhdGlvbik6IHZvaWQge1xuICAgIHZhciBkZWNvcmF0b3JzID0gbm9kZS5kZWNvcmF0b3JzO1xuICAgIGlmIChkZWNvcmF0b3JzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgayA9IGRlY29yYXRvcnMubGVuZ3RoOyBpIDwgazsgKytpKSB7XG4gICAgICAgIHRoaXMuc2VyaWFsaXplRGVjb3JhdG9yKGRlY29yYXRvcnNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNlcmlhbGl6ZUFjY2Vzc01vZGlmaWVycyhub2RlKTtcbiAgICBpZiAobm9kZS5pcyhDb21tb25GbGFncy5HRVQpKSB7XG4gICAgICB0aGlzLnNiLnB1c2goXCJnZXQgXCIpO1xuICAgIH0gZWxzZSBpZiAobm9kZS5pcyhDb21tb25GbGFncy5TRVQpKSB7XG4gICAgICB0aGlzLnNiLnB1c2goXCJzZXQgXCIpO1xuICAgIH1cbiAgICB0aGlzLnZpc2l0RnVuY3Rpb25Db21tb24obm9kZSk7XG4gIH1cblxuICB2aXNpdE5hbWVzcGFjZURlY2xhcmF0aW9uKG5vZGU6IE5hbWVzcGFjZURlY2xhcmF0aW9uLCBpc0RlZmF1bHQ6IGJvb2wgPSBmYWxzZSk6IHZvaWQge1xuICAgIHZhciBkZWNvcmF0b3JzID0gbm9kZS5kZWNvcmF0b3JzO1xuICAgIGlmIChkZWNvcmF0b3JzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgayA9IGRlY29yYXRvcnMubGVuZ3RoOyBpIDwgazsgKytpKSB7XG4gICAgICAgIHRoaXMuc2VyaWFsaXplRGVjb3JhdG9yKGRlY29yYXRvcnNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIGlmIChpc0RlZmF1bHQpIHtcbiAgICAgIHNiLnB1c2goXCJleHBvcnQgZGVmYXVsdCBcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VyaWFsaXplRXh0ZXJuYWxNb2RpZmllcnMobm9kZSk7XG4gICAgfVxuICAgIHNiLnB1c2goXCJuYW1lc3BhY2UgXCIpO1xuICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlLm5hbWUpO1xuICAgIHZhciBtZW1iZXJzID0gbm9kZS5tZW1iZXJzO1xuICAgIHZhciBudW1NZW1iZXJzID0gbWVtYmVycy5sZW5ndGg7XG4gICAgaWYgKG51bU1lbWJlcnMpIHtcbiAgICAgIHNiLnB1c2goXCIge1xcblwiKTtcbiAgICAgIGxldCBpbmRlbnRMZXZlbCA9ICsrdGhpcy5pbmRlbnRMZXZlbDtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBrID0gbWVtYmVycy5sZW5ndGg7IGkgPCBrOyArK2kpIHtcbiAgICAgICAgaW5kZW50KHNiLCBpbmRlbnRMZXZlbCk7XG4gICAgICAgIHRoaXMudmlzaXROb2RlQW5kVGVybWluYXRlKG1lbWJlcnNbaV0pO1xuICAgICAgfVxuICAgICAgaW5kZW50KHNiLCAtLXRoaXMuaW5kZW50TGV2ZWwpO1xuICAgICAgc2IucHVzaChcIn1cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNiLnB1c2goXCIge31cIik7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRSZXR1cm5TdGF0ZW1lbnQobm9kZTogUmV0dXJuU3RhdGVtZW50KTogdm9pZCB7XG4gICAgdmFyIHZhbHVlID0gbm9kZS52YWx1ZTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuc2IucHVzaChcInJldHVybiBcIik7XG4gICAgICB0aGlzLnZpc2l0Tm9kZSh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2IucHVzaChcInJldHVyblwiKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdFN3aXRjaENhc2Uobm9kZTogU3dpdGNoQ2FzZSk6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgdmFyIGxhYmVsID0gbm9kZS5sYWJlbDtcbiAgICBpZiAobGFiZWwpIHtcbiAgICAgIHNiLnB1c2goXCJjYXNlIFwiKTtcbiAgICAgIHRoaXMudmlzaXROb2RlKGxhYmVsKTtcbiAgICAgIHNiLnB1c2goXCI6XFxuXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzYi5wdXNoKFwiZGVmYXVsdDpcXG5cIik7XG4gICAgfVxuICAgIHZhciBzdGF0ZW1lbnRzID0gbm9kZS5zdGF0ZW1lbnRzO1xuICAgIHZhciBudW1TdGF0ZW1lbnRzID0gc3RhdGVtZW50cy5sZW5ndGg7XG4gICAgaWYgKG51bVN0YXRlbWVudHMpIHtcbiAgICAgIGxldCBpbmRlbnRMZXZlbCA9ICsrdGhpcy5pbmRlbnRMZXZlbDtcbiAgICAgIGluZGVudChzYiwgaW5kZW50TGV2ZWwpO1xuICAgICAgdGhpcy52aXNpdE5vZGVBbmRUZXJtaW5hdGUoc3RhdGVtZW50c1swXSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG51bVN0YXRlbWVudHM7ICsraSkge1xuICAgICAgICBpbmRlbnQoc2IsIGluZGVudExldmVsKTtcbiAgICAgICAgdGhpcy52aXNpdE5vZGVBbmRUZXJtaW5hdGUoc3RhdGVtZW50c1tpXSk7XG4gICAgICB9XG4gICAgICAtLXRoaXMuaW5kZW50TGV2ZWw7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRTd2l0Y2hTdGF0ZW1lbnQobm9kZTogU3dpdGNoU3RhdGVtZW50KTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICBzYi5wdXNoKFwic3dpdGNoIChcIik7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5jb25kaXRpb24pO1xuICAgIHNiLnB1c2goXCIpIHtcXG5cIik7XG4gICAgdmFyIGluZGVudExldmVsID0gKyt0aGlzLmluZGVudExldmVsO1xuICAgIHZhciBjYXNlcyA9IG5vZGUuY2FzZXM7XG4gICAgZm9yIChsZXQgaSA9IDAsIGsgPSBjYXNlcy5sZW5ndGg7IGkgPCBrOyArK2kpIHtcbiAgICAgIGluZGVudChzYiwgaW5kZW50TGV2ZWwpO1xuICAgICAgdGhpcy52aXNpdFN3aXRjaENhc2UoY2FzZXNbaV0pO1xuICAgICAgc2IucHVzaChcIlxcblwiKTtcbiAgICB9XG4gICAgLS10aGlzLmluZGVudExldmVsO1xuICAgIHNiLnB1c2goXCJ9XCIpO1xuICB9XG5cbiAgdmlzaXRUaHJvd1N0YXRlbWVudChub2RlOiBUaHJvd1N0YXRlbWVudCk6IHZvaWQge1xuICAgIHRoaXMuc2IucHVzaChcInRocm93IFwiKTtcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLnZhbHVlKTtcbiAgfVxuXG4gIHZpc2l0VHJ5U3RhdGVtZW50KG5vZGU6IFRyeVN0YXRlbWVudCk6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgc2IucHVzaChcInRyeSB7XFxuXCIpO1xuICAgIHZhciBpbmRlbnRMZXZlbCA9ICsrdGhpcy5pbmRlbnRMZXZlbDtcbiAgICB2YXIgc3RhdGVtZW50cyA9IG5vZGUuc3RhdGVtZW50cztcbiAgICBmb3IgKGxldCBpID0gMCwgayA9IHN0YXRlbWVudHMubGVuZ3RoOyBpIDwgazsgKytpKSB7XG4gICAgICBpbmRlbnQoc2IsIGluZGVudExldmVsKTtcbiAgICAgIHRoaXMudmlzaXROb2RlQW5kVGVybWluYXRlKHN0YXRlbWVudHNbaV0pO1xuICAgIH1cbiAgICB2YXIgY2F0Y2hWYXJpYWJsZSA9IG5vZGUuY2F0Y2hWYXJpYWJsZTtcbiAgICBpZiAoY2F0Y2hWYXJpYWJsZSkge1xuICAgICAgaW5kZW50KHNiLCBpbmRlbnRMZXZlbCAtIDEpO1xuICAgICAgc2IucHVzaChcIn0gY2F0Y2ggKFwiKTtcbiAgICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihjYXRjaFZhcmlhYmxlKTtcbiAgICAgIHNiLnB1c2goXCIpIHtcXG5cIik7XG4gICAgICBsZXQgY2F0Y2hTdGF0ZW1lbnRzID0gbm9kZS5jYXRjaFN0YXRlbWVudHM7XG4gICAgICBpZiAoY2F0Y2hTdGF0ZW1lbnRzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBrID0gY2F0Y2hTdGF0ZW1lbnRzLmxlbmd0aDsgaSA8IGs7ICsraSkge1xuICAgICAgICAgIGluZGVudChzYiwgaW5kZW50TGV2ZWwpO1xuICAgICAgICAgIHRoaXMudmlzaXROb2RlQW5kVGVybWluYXRlKGNhdGNoU3RhdGVtZW50c1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGZpbmFsbHlTdGF0ZW1lbnRzID0gbm9kZS5maW5hbGx5U3RhdGVtZW50cztcbiAgICBpZiAoZmluYWxseVN0YXRlbWVudHMpIHtcbiAgICAgIGluZGVudChzYiwgaW5kZW50TGV2ZWwgLSAxKTtcbiAgICAgIHNiLnB1c2goXCJ9IGZpbmFsbHkge1xcblwiKTtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBrID0gZmluYWxseVN0YXRlbWVudHMubGVuZ3RoOyBpIDwgazsgKytpKSB7XG4gICAgICAgIGluZGVudChzYiwgaW5kZW50TGV2ZWwpO1xuICAgICAgICB0aGlzLnZpc2l0Tm9kZUFuZFRlcm1pbmF0ZShmaW5hbGx5U3RhdGVtZW50c1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGluZGVudChzYiwgaW5kZW50TGV2ZWwgLSAxKTtcbiAgICBzYi5wdXNoKFwifVwiKTtcbiAgfVxuXG4gIHZpc2l0VHlwZURlY2xhcmF0aW9uKG5vZGU6IFR5cGVEZWNsYXJhdGlvbik6IHZvaWQge1xuICAgIHZhciBkZWNvcmF0b3JzID0gbm9kZS5kZWNvcmF0b3JzO1xuICAgIGlmIChkZWNvcmF0b3JzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgayA9IGRlY29yYXRvcnMubGVuZ3RoOyBpIDwgazsgKytpKSB7XG4gICAgICAgIHRoaXMuc2VyaWFsaXplRGVjb3JhdG9yKGRlY29yYXRvcnNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHRoaXMuc2VyaWFsaXplRXh0ZXJuYWxNb2RpZmllcnMobm9kZSk7XG4gICAgc2IucHVzaChcInR5cGUgXCIpO1xuICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlLm5hbWUpO1xuICAgIHZhciB0eXBlUGFyYW1ldGVycyA9IG5vZGUudHlwZVBhcmFtZXRlcnM7XG4gICAgaWYgKHR5cGVQYXJhbWV0ZXJzKSB7XG4gICAgICBsZXQgbnVtVHlwZVBhcmFtZXRlcnMgPSB0eXBlUGFyYW1ldGVycy5sZW5ndGg7XG4gICAgICBpZiAobnVtVHlwZVBhcmFtZXRlcnMpIHtcbiAgICAgICAgc2IucHVzaChcIjxcIik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVHlwZVBhcmFtZXRlcnM7ICsraSkge1xuICAgICAgICAgIHRoaXMudmlzaXRUeXBlUGFyYW1ldGVyKHR5cGVQYXJhbWV0ZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBzYi5wdXNoKFwiPlwiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc2IucHVzaChcIiA9IFwiKTtcbiAgICB0aGlzLnZpc2l0VHlwZU5vZGUobm9kZS50eXBlKTtcbiAgfVxuXG4gIHZpc2l0VmFyaWFibGVEZWNsYXJhdGlvbihub2RlOiBWYXJpYWJsZURlY2xhcmF0aW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5vZGUubmFtZSk7XG4gICAgdmFyIHR5cGUgPSBub2RlLnR5cGU7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICBpZiAobm9kZS5mbGFncyAmIENvbW1vbkZsYWdzLkRFRklOSVRFX0FTU0lHTk1FTlQpIHtcbiAgICAgIHNiLnB1c2goXCIhXCIpO1xuICAgIH1cbiAgICBpZiAodHlwZSkge1xuICAgICAgc2IucHVzaChcIjogXCIpO1xuICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKHR5cGUpO1xuICAgIH1cbiAgICB2YXIgaW5pdGlhbGl6ZXIgPSBub2RlLmluaXRpYWxpemVyO1xuICAgIGlmIChpbml0aWFsaXplcikge1xuICAgICAgc2IucHVzaChcIiA9IFwiKTtcbiAgICAgIHRoaXMudmlzaXROb2RlKGluaXRpYWxpemVyKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdFZhcmlhYmxlU3RhdGVtZW50KG5vZGU6IFZhcmlhYmxlU3RhdGVtZW50KTogdm9pZCB7XG4gICAgdmFyIGRlY29yYXRvcnMgPSBub2RlLmRlY29yYXRvcnM7XG4gICAgaWYgKGRlY29yYXRvcnMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBrID0gZGVjb3JhdG9ycy5sZW5ndGg7IGkgPCBrOyArK2kpIHtcbiAgICAgICAgdGhpcy5zZXJpYWxpemVEZWNvcmF0b3IoZGVjb3JhdG9yc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgdmFyIGRlY2xhcmF0aW9ucyA9IG5vZGUuZGVjbGFyYXRpb25zO1xuICAgIHZhciBudW1EZWNsYXJhdGlvbnMgPSBhc3NlcnQoZGVjbGFyYXRpb25zLmxlbmd0aCk7XG4gICAgdmFyIGZpcnN0RGVjbGFyYXRpb24gPSBkZWNsYXJhdGlvbnNbMF07XG4gICAgdGhpcy5zZXJpYWxpemVFeHRlcm5hbE1vZGlmaWVycyhmaXJzdERlY2xhcmF0aW9uKTtcbiAgICBzYi5wdXNoKGZpcnN0RGVjbGFyYXRpb24uaXMoQ29tbW9uRmxhZ3MuQ09OU1QpID8gXCJjb25zdCBcIiA6IGZpcnN0RGVjbGFyYXRpb24uaXMoQ29tbW9uRmxhZ3MuTEVUKSA/IFwibGV0IFwiIDogXCJ2YXIgXCIpO1xuICAgIHRoaXMudmlzaXRWYXJpYWJsZURlY2xhcmF0aW9uKG5vZGUuZGVjbGFyYXRpb25zWzBdKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG51bURlY2xhcmF0aW9uczsgKytpKSB7XG4gICAgICBzYi5wdXNoKFwiLCBcIik7XG4gICAgICB0aGlzLnZpc2l0VmFyaWFibGVEZWNsYXJhdGlvbihub2RlLmRlY2xhcmF0aW9uc1tpXSk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRXaGlsZVN0YXRlbWVudChub2RlOiBXaGlsZVN0YXRlbWVudCk6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgc2IucHVzaChcIndoaWxlIChcIik7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5jb25kaXRpb24pO1xuICAgIHZhciBzdGF0ZW1lbnQgPSBub2RlLnN0YXRlbWVudDtcbiAgICBpZiAoc3RhdGVtZW50LmtpbmQgPT0gTm9kZUtpbmQuRU1QVFkpIHtcbiAgICAgIHNiLnB1c2goXCIpXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzYi5wdXNoKFwiKSBcIik7XG4gICAgICB0aGlzLnZpc2l0Tm9kZShub2RlLnN0YXRlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgLy8gb3RoZXJcblxuICBzZXJpYWxpemVEZWNvcmF0b3Iobm9kZTogRGVjb3JhdG9yTm9kZSk6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgc2IucHVzaChcIkBcIik7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5uYW1lKTtcbiAgICB2YXIgYXJncyA9IG5vZGUuYXJndW1lbnRzO1xuICAgIGlmIChhcmdzKSB7XG4gICAgICBzYi5wdXNoKFwiKFwiKTtcbiAgICAgIGxldCBudW1BcmdzID0gYXJncy5sZW5ndGg7XG4gICAgICBpZiAobnVtQXJncykge1xuICAgICAgICB0aGlzLnZpc2l0Tm9kZShhcmdzWzBdKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1BcmdzOyArK2kpIHtcbiAgICAgICAgICBzYi5wdXNoKFwiLCBcIik7XG4gICAgICAgICAgdGhpcy52aXNpdE5vZGUoYXJnc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNiLnB1c2goXCIpXFxuXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzYi5wdXNoKFwiXFxuXCIpO1xuICAgIH1cbiAgICBpbmRlbnQoc2IsIHRoaXMuaW5kZW50TGV2ZWwpO1xuICB9XG5cbiAgc2VyaWFsaXplUGFyYW1ldGVyKG5vZGU6IFBhcmFtZXRlck5vZGUpOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHZhciBraW5kID0gbm9kZS5wYXJhbWV0ZXJLaW5kO1xuICAgIHZhciBpbXBsaWNpdEZpZWxkRGVjbGFyYXRpb24gPSBub2RlLmltcGxpY2l0RmllbGREZWNsYXJhdGlvbjtcbiAgICBpZiAoaW1wbGljaXRGaWVsZERlY2xhcmF0aW9uKSB7XG4gICAgICB0aGlzLnNlcmlhbGl6ZUFjY2Vzc01vZGlmaWVycyhpbXBsaWNpdEZpZWxkRGVjbGFyYXRpb24pO1xuICAgIH1cbiAgICBpZiAoa2luZCA9PSBQYXJhbWV0ZXJLaW5kLlJFU1QpIHtcbiAgICAgIHNiLnB1c2goXCIuLi5cIik7XG4gICAgfVxuICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlLm5hbWUpO1xuICAgIHZhciB0eXBlID0gbm9kZS50eXBlO1xuICAgIHZhciBpbml0aWFsaXplciA9IG5vZGUuaW5pdGlhbGl6ZXI7XG4gICAgaWYgKHR5cGUpIHtcbiAgICAgIGlmIChraW5kID09IFBhcmFtZXRlcktpbmQuT1BUSU9OQUwpIHNiLnB1c2goXCI/XCIpO1xuICAgICAgaWYgKCFpc1R5cGVPbWl0dGVkKHR5cGUpKSB7XG4gICAgICAgIHNiLnB1c2goXCI6IFwiKTtcbiAgICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKHR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaW5pdGlhbGl6ZXIpIHtcbiAgICAgIHNiLnB1c2goXCIgPSBcIik7XG4gICAgICB0aGlzLnZpc2l0Tm9kZShpbml0aWFsaXplcik7XG4gICAgfVxuICB9XG5cbiAgc2VyaWFsaXplRXh0ZXJuYWxNb2RpZmllcnMobm9kZTogRGVjbGFyYXRpb25TdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIGlmIChub2RlLmlzKENvbW1vbkZsYWdzLkVYUE9SVCkpIHtcbiAgICAgIHNiLnB1c2goXCJleHBvcnQgXCIpO1xuICAgIH0gZWxzZSBpZiAobm9kZS5pcyhDb21tb25GbGFncy5JTVBPUlQpKSB7XG4gICAgICBzYi5wdXNoKFwiaW1wb3J0IFwiKTtcbiAgICB9IGVsc2UgaWYgKG5vZGUuaXMoQ29tbW9uRmxhZ3MuREVDTEFSRSkpIHtcbiAgICAgIHNiLnB1c2goXCJkZWNsYXJlIFwiKTtcbiAgICB9XG4gIH1cblxuICBzZXJpYWxpemVBY2Nlc3NNb2RpZmllcnMobm9kZTogRGVjbGFyYXRpb25TdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIGlmIChub2RlLmlzKENvbW1vbkZsYWdzLlBVQkxJQykpIHtcbiAgICAgIHNiLnB1c2goXCJwdWJsaWMgXCIpO1xuICAgIH0gZWxzZSBpZiAobm9kZS5pcyhDb21tb25GbGFncy5QUklWQVRFKSkge1xuICAgICAgc2IucHVzaChcInByaXZhdGUgXCIpO1xuICAgIH0gZWxzZSBpZiAobm9kZS5pcyhDb21tb25GbGFncy5QUk9URUNURUQpKSB7XG4gICAgICBzYi5wdXNoKFwicHJvdGVjdGVkIFwiKTtcbiAgICB9XG4gICAgaWYgKG5vZGUuaXMoQ29tbW9uRmxhZ3MuU1RBVElDKSkge1xuICAgICAgc2IucHVzaChcInN0YXRpYyBcIik7XG4gICAgfSBlbHNlIGlmIChub2RlLmlzKENvbW1vbkZsYWdzLkFCU1RSQUNUKSkge1xuICAgICAgc2IucHVzaChcImFic3RyYWN0IFwiKTtcbiAgICB9XG4gICAgaWYgKG5vZGUuaXMoQ29tbW9uRmxhZ3MuUkVBRE9OTFkpKSB7XG4gICAgICBzYi5wdXNoKFwicmVhZG9ubHkgXCIpO1xuICAgIH1cbiAgfVxuXG4gIGZpbmlzaCgpOiBzdHJpbmcge1xuICAgIHZhciByZXQgPSB0aGlzLnNiLmpvaW4oXCJcIik7XG4gICAgdGhpcy5zYiA9IFtdO1xuICAgIHJldHVybiByZXQ7XG4gIH1cbn1cbiJdfQ==