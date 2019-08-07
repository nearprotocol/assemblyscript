"use strict";
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assemblyscript_1 = require("assemblyscript");
var visitor_1 = require("./visitor");
var BaseVisitor = /** @class */ (function (_super) {
    __extends(BaseVisitor, _super);
    function BaseVisitor(parser, writer) {
        var _this = _super.call(this, writer) || this;
        _this.parser = parser;
        _this.writer = writer;
        _this.depth = 0;
        return _this;
    }
    BaseVisitor.prototype._visit = function (node) {
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
                this.visitDecoratorNode(node);
                break;
            }
            case assemblyscript_1.NodeKind.EXPORTMEMBER: {
                this.visitExportMember(node);
                break;
            }
            case assemblyscript_1.NodeKind.PARAMETER: {
                this.visitParameter(node);
                break;
            }
            case assemblyscript_1.NodeKind.SWITCHCASE: {
                this.visitSwitchCase(node);
                break;
            }
            default: assert(false);
        }
    };
    // /** Visits each node in an array if array exists. */
    // visitArray(array: Node[] | null): void {
    //   if (array) {
    //     array.map(node => {
    //       if (node) this.visit(node);
    //     });
    //   }
    // }
    BaseVisitor.prototype.start = function () {
        this.visit(this.parser.program.sources);
    };
    BaseVisitor.prototype.visitSource = function (node) {
        var e_1, _a;
        try {
            for (var _b = __values(node.statements), _c = _b.next(); !_c.done; _c = _b.next()) {
                var stmt = _c.value;
                this.depth++;
                this.visit(stmt);
                this.depth--;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    BaseVisitor.prototype.visitTypeNode = function (node) { };
    BaseVisitor.prototype.visitTypeName = function (node) {
        this.visit(node.identifier);
        if (node.next) {
            this.visit(node);
        }
    };
    BaseVisitor.prototype.visitNamedTypeNode = function (node) {
        this.visit(node.name);
        this.visit(node.typeArguments);
    };
    BaseVisitor.prototype.visitFunctionTypeNode = function (node) {
        var e_2, _a;
        try {
            for (var _b = __values(node.parameters), _c = _b.next(); !_c.done; _c = _b.next()) {
                var param = _c.value;
                this.visit(param);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.visit(node.returnType);
    };
    BaseVisitor.prototype.visitTypeParameter = function (node) {
        this.visit(node.name);
        if (node.extendsType)
            this.visit(node.extendsType);
        if (node.defaultType)
            this.visit(node.defaultType);
    };
    BaseVisitor.prototype.visitIdentifierExpression = function (node) { };
    BaseVisitor.prototype.visitArrayLiteralExpression = function (node) {
        var _this = this;
        node.elementExpressions.map(function (e) {
            if (e)
                _this.visit(e);
        });
    };
    BaseVisitor.prototype.visitObjectLiteralExpression = function (node) {
        if (node.values && node.names) {
            assert(node.values.length == node.names.length);
            for (var i = 0; i < node.values.length; i++) {
                this.visit(node.names[i]);
                this.visit(node.values[i]);
            }
        }
    };
    BaseVisitor.prototype.visitAssertionExpression = function (node) {
        if (node.toType)
            this.visit(node.toType);
        this.visit(node.expression);
    };
    BaseVisitor.prototype.visitBinaryExpression = function (node) {
        this.visit(node.left);
        this.visit(node.right);
    };
    BaseVisitor.prototype.visitCallExpression = function (node) {
        this.visit(node.expression);
        this.visit(node.typeArguments);
        this.visit(node.arguments);
    };
    BaseVisitor.prototype.visitClassExpression = function (node) {
        this.visit(node.declaration);
    };
    BaseVisitor.prototype.visitCommaExpression = function (node) {
        this.visit(node.expressions);
    };
    BaseVisitor.prototype.visitElementAccessExpression = function (node) {
        this.visit(node.elementExpression);
        this.visit(node.expression);
    };
    BaseVisitor.prototype.visitFunctionExpression = function (node) {
        this.visit(node.declaration);
    };
    BaseVisitor.prototype.visitLiteralExpression = function (node) {
        // node.
    };
    BaseVisitor.prototype.visitFloatLiteralExpression = function (node) { };
    BaseVisitor.prototype.visitInstanceOfExpression = function (node) {
        this.visit(node.expression);
        this.visit(node.isType);
    };
    BaseVisitor.prototype.visitIntegerLiteralExpression = function (node) { };
    BaseVisitor.prototype.visitStringLiteral = function (str, singleQuoted) { };
    BaseVisitor.prototype.visitStringLiteralExpression = function (node) { };
    BaseVisitor.prototype.visitRegexpLiteralExpression = function (node) { };
    BaseVisitor.prototype.visitNewExpression = function (node) {
        this.visit(node.expression);
        this.visit(node.typeArguments);
        this.visit(node.arguments);
    };
    BaseVisitor.prototype.visitParenthesizedExpression = function (node) {
        this.visit(node.expression);
    };
    BaseVisitor.prototype.visitPropertyAccessExpression = function (node) {
        this.visit(node.property);
        this.visit(node.expression);
    };
    BaseVisitor.prototype.visitTernaryExpression = function (node) {
        this.visit(node.condition);
        this.visit(node.ifThen);
        this.visit(node.ifElse);
    };
    BaseVisitor.prototype.visitUnaryExpression = function (node) {
        this.visit(node.operand);
    };
    BaseVisitor.prototype.visitUnaryPostfixExpression = function (node) {
        this.visit(node.operand);
    };
    BaseVisitor.prototype.visitUnaryPrefixExpression = function (node) {
        this.visit(node.operand);
    };
    BaseVisitor.prototype.visitSuperExpression = function (node) { };
    BaseVisitor.prototype.visitFalseExpression = function (node) { };
    BaseVisitor.prototype.visitTrueExpression = function (node) { };
    BaseVisitor.prototype.visitThisExpression = function (node) { };
    BaseVisitor.prototype.visitNullExperssion = function (node) { };
    BaseVisitor.prototype.visitConstructorExpression = function (node) { };
    BaseVisitor.prototype.visitNodeAndTerminate = function (statement) { };
    BaseVisitor.prototype.visitBlockStatement = function (node) {
        this.depth++;
        this.visit(node.statements);
        this.depth--;
    };
    BaseVisitor.prototype.visitBreakStatement = function (node) {
        if (node.label) {
            this.visit(node.label);
        }
    };
    BaseVisitor.prototype.visitContinueStatement = function (node) {
        if (node.label) {
            this.visit(node.label);
        }
    };
    BaseVisitor.prototype.visitClassDeclaration = function (node, isDefault) {
        this.visit(node.name);
        this.depth++;
        this.visit(node.decorators);
        assert(node.isGeneric ? node.typeParameters != null : node.typeParameters == null);
        if (node.isGeneric) {
            this.visit(node.typeParameters);
        }
        if (node.extendsType) {
            this.visit(node.extendsType);
        }
        this.visit(node.implementsTypes);
        this.visit(node.members);
        this.depth--;
    };
    BaseVisitor.prototype.visitDoStatement = function (node) {
        this.visit(node.condition);
        this.visit(node.statement);
    };
    BaseVisitor.prototype.visitEmptyStatement = function (node) { };
    BaseVisitor.prototype.visitEnumDeclaration = function (node, isDefault) {
        this.visit(node.name);
        this.visit(node.decorators);
        this.visit(node.values);
    };
    BaseVisitor.prototype.visitEnumValueDeclaration = function (node) {
        this.visit(node.name);
        if (node.initializer) {
            this.visit(node.initializer);
        }
    };
    BaseVisitor.prototype.visitExportImportStatement = function (node) {
        this.visit(node.name);
        this.visit(node.externalName);
    };
    BaseVisitor.prototype.visitExportMember = function (node) {
        this.visit(node.localName);
        this.visit(node.exportedName);
    };
    BaseVisitor.prototype.visitExportStatement = function (node) {
        if (node.path) {
            this.visit(node.path);
        }
        this.visit(node.members);
    };
    BaseVisitor.prototype.visitExportDefaultStatement = function (node) {
        this.visit(node.declaration);
    };
    BaseVisitor.prototype.visitExpressionStatement = function (node) {
        this.visit(node.expression);
    };
    BaseVisitor.prototype.visitFieldDeclaration = function (node) {
        this.visit(node.name);
        if (node.type) {
            this.visit(node.type);
        }
        if (node.initializer) {
            this.visit(node.initializer);
        }
        this.visit(node.decorators);
    };
    BaseVisitor.prototype.visitForStatement = function (node) {
        if (node.initializer)
            this.visit(node.initializer);
        if (node.condition)
            this.visit(node.condition);
        if (node.incrementor)
            this.visit(node.incrementor);
        this.visit(node.statement);
    };
    BaseVisitor.prototype.visitFunctionDeclaration = function (node, isDefault) {
        this.visit(node.name);
        this.visit(node.decorators);
        if (node.isGeneric) {
            this.visit(node.typeParameters);
        }
        this.visit(node.signature);
        this.depth++;
        if (node.body)
            this.visit(node.body);
        this.depth--;
    };
    BaseVisitor.prototype.visitFunctionCommon = function (node) {
        // this.visit(node.name)
    };
    BaseVisitor.prototype.visitIfStatement = function (node) {
        this.visit(node.condition);
        this.visit(node.ifTrue);
        if (node.ifFalse)
            this.visit(node.ifFalse);
    };
    BaseVisitor.prototype.visitImportDeclaration = function (node) {
        this.visit(node.foreignName);
        this.visit(node.name);
        this.visit(node.decorators);
    };
    BaseVisitor.prototype.visitImportStatement = function (node) {
        if (node.namespaceName)
            this.visit(node.namespaceName);
        this.visit(node.declarations);
    };
    BaseVisitor.prototype.visitIndexSignatureDeclaration = function (node) {
        // this.visit(node.name);
        // this.visit(node.keyType);
        // this.visit(node.valueType);
    };
    BaseVisitor.prototype.visitInterfaceDeclaration = function (node, isDefault) {
        this.visit(node.name);
        if (node.isGeneric) {
            this.visit(node.typeParameters);
        }
        this.visit(node.implementsTypes);
        if (node.extendsType)
            this.visit(node.extendsType);
        this.depth++;
        this.visit(node.members);
        this.depth--;
    };
    BaseVisitor.prototype.visitMethodDeclaration = function (node) {
        this.visit(node.name);
        if (node.isGeneric) {
            this.visit(node.typeParameters);
        }
        this.visit(node.signature);
        this.visit(node.decorators);
        this.depth++;
        if (node.body)
            this.visit(node.body);
        this.depth--;
    };
    BaseVisitor.prototype.visitNamespaceDeclaration = function (node, isDefault) {
        this.visit(node.name);
        this.visit(node.decorators);
        this.visit(node.members);
    };
    BaseVisitor.prototype.visitReturnStatement = function (node) {
        if (node.value)
            this.visit(node.value);
    };
    BaseVisitor.prototype.visitSwitchCase = function (node) {
        if (node.label)
            this.visit(node.label);
        this.visit(node.statements);
    };
    BaseVisitor.prototype.visitSwitchStatement = function (node) {
        this.visit(node.condition);
        this.depth++;
        this.visit(node.cases);
        this.depth--;
    };
    BaseVisitor.prototype.visitThrowStatement = function (node) {
        this.visit(node.value);
    };
    BaseVisitor.prototype.visitTryStatement = function (node) {
        this.visit(node.statements);
        if (node.catchVariable)
            this.visit(node.catchVariable);
        this.visit(node.catchStatements);
        this.visit(node.finallyStatements);
    };
    BaseVisitor.prototype.visitTypeDeclaration = function (node) {
        this.visit(node.name);
        this.visit(node.decorators);
        this.visit(node.type);
        this.visit(node.typeParameters);
    };
    BaseVisitor.prototype.visitVariableDeclaration = function (node) {
        this.visit(node.name);
        if (node.type)
            this.visit(node.type);
        if (node.initializer)
            this.visit(node.initializer);
    };
    BaseVisitor.prototype.visitVariableStatement = function (node) {
        this.visit(node.decorators);
        this.visit(node.declarations);
    };
    BaseVisitor.prototype.visitWhileStatement = function (node) {
        this.visit(node.condition);
        this.depth++;
        this.visit(node.statement);
        this.depth--;
    };
    BaseVisitor.prototype.visitVoidStatement = function (node) { };
    BaseVisitor.prototype.visitComment = function (node) { };
    BaseVisitor.prototype.visitDecoratorNode = function (node) {
        this.visit(node.name);
        this.visit(node.arguments);
    };
    BaseVisitor.prototype.visitParameter = function (node) {
        this.visit(node.name);
        if (node.implicitFieldDeclaration) {
            this.visit(node.implicitFieldDeclaration);
        }
        if (node.initializer)
            this.visit(node.initializer);
        this.visit(node.type);
    };
    return BaseVisitor;
}(visitor_1.AbstractVisitor));
exports.BaseVisitor = BaseVisitor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREE0RXdCO0FBRXhCLHFDQUFvRDtBQUVwRDtJQUFpQywrQkFBcUI7SUFHcEQscUJBQXNCLE1BQWMsRUFBWSxNQUFvQjtRQUFwRSxZQUNFLGtCQUFNLE1BQU0sQ0FBQyxTQUNkO1FBRnFCLFlBQU0sR0FBTixNQUFNLENBQVE7UUFBWSxZQUFNLEdBQU4sTUFBTSxDQUFjO1FBRnBFLFdBQUssR0FBVyxDQUFDLENBQUM7O0lBSWxCLENBQUM7SUFFRCw0QkFBTSxHQUFOLFVBQU8sSUFBVTtRQUNmLFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNqQixLQUFLLHlCQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxXQUFXLENBQVMsSUFBSSxDQUFDLENBQUM7Z0JBQy9CLE1BQU07YUFDUDtZQUVELFFBQVE7WUFFUixLQUFLLHlCQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxrQkFBa0IsQ0FBZ0IsSUFBSSxDQUFDLENBQUM7Z0JBQzdDLE1BQU07YUFDUDtZQUNELEtBQUsseUJBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLHFCQUFxQixDQUFtQixJQUFJLENBQUMsQ0FBQztnQkFDbkQsTUFBTTthQUNQO1lBQ0QsS0FBSyx5QkFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMzQixJQUFJLENBQUMsa0JBQWtCLENBQW9CLElBQUksQ0FBQyxDQUFDO2dCQUNqRCxNQUFNO2FBQ1A7WUFFRCxjQUFjO1lBRWQsS0FBSyx5QkFBUSxDQUFDLEtBQUssQ0FBQztZQUNwQixLQUFLLHlCQUFRLENBQUMsSUFBSSxDQUFDO1lBQ25CLEtBQUsseUJBQVEsQ0FBQyxLQUFLLENBQUM7WUFDcEIsS0FBSyx5QkFBUSxDQUFD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QUFFLENBQUM7SUFDZixDQUFDO0lBRUQsd0NBQWtCLEdBQWxCLFVBQW1CLElBQW1CLElBQVMsQ0FBQztJQUVoRCxrQ0FBWSxHQUFaLFVBQWEsSUFBaUIsSUFBUyxDQUFDO0lBRXhDLHdDQUFrQixHQUFsQixVQUFtQixJQUFtQjtRQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsb0NBQWMsR0FBZCxVQUFlLElBQW1CO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLHdCQUF3QixFQUFFO1lBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7U0FDM0M7UUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXO1lBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUdILGtCQUFDO0FBQUQsQ0FBQyxBQXZwQkQsQ0FBaUMseUJBQWUsR0F1cEIvQztBQXZwQlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBTb3VyY2UsXG4gIFR5cGVOb2RlLFxuICBUeXBlTmFtZSxcbiAgTmFtZWRUeXBlTm9kZSxcbiAgRnVuY3Rpb25UeXBlTm9kZSxcbiAgVHlwZVBhcmFtZXRlck5vZGUsXG4gIElkZW50aWZpZXJFeHByZXNzaW9uLFxuICBBcnJheUxpdGVyYWxFeHByZXNzaW9uLFxuICBPYmplY3RMaXRlcmFsRXhwcmVzc2lvbixcbiAgQXNzZXJ0aW9uRXhwcmVzc2lvbixcbiAgQmluYXJ5RXhwcmVzc2lvbixcbiAgQ2FsbEV4cHJlc3Npb24sXG4gIENsYXNzRXhwcmVzc2lvbixcbiAgQ29tbWFFeHByZXNzaW9uLFxuICBFbGVtZW50QWNjZXNzRXhwcmVzc2lvbixcbiAgRnVuY3Rpb25FeHByZXNzaW9uLFxuICBMaXRlcmFsRXhwcmVzc2lvbixcbiAgRmxvYXRMaXRlcmFsRXhwcmVzc2lvbixcbiAgSW5zdGFuY2VPZkV4cHJlc3Npb24sXG4gIEludGVnZXJMaXRlcmFsRXhwcmVzc2lvbixcbiAgU3RyaW5nTGl0ZXJhbEV4cHJlc3Npb24sXG4gIFJlZ2V4cExpdGVyYWxFeHByZXNzaW9uLFxuICBOZXdFeHByZXNzaW9uLFxuICBQYXJlbnRoZXNpemVkRXhwcmVzc2lvbixcbiAgUHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uLFxuICBUZXJuYXJ5RXhwcmVzc2lvbixcbiAgVW5hcnlFeHByZXNzaW9uLFxuICBVbmFyeVBvc3RmaXhFeHByZXNzaW9uLFxuICBVbmFyeVByZWZpeEV4cHJlc3Npb24sXG4gIFN1cGVyRXhwcmVzc2lvbixcbiAgRmFsc2VFeHByZXNzaW9uLFxuICBUcnVlRXhwcmVzc2lvbixcbiAgVGhpc0V4cHJlc3Npb24sXG4gIE51bGxFeHByZXNzaW9uLFxuICBDb25zdHJ1Y3RvckV4cHJlc3Npb24sXG4gIFN0YXRlbWVudCxcbiAgQmxvY2tTdGF0ZW1lbnQsXG4gIEJyZWFrU3RhdGVtZW50LFxuICBDb250aW51ZVN0YXRlbWVudCxcbiAgQ2xhc3NEZWNsYXJhdGlvbixcbiAgRG9TdGF0ZW1lbnQsXG4gIEVtcHR5U3RhdGVtZW50LFxuICBFbnVtRGVjbGFyYXRpb24sXG4gIEVudW1WYWx1ZURlY2xhcmF0aW9uLFxuICBFeHBvcnRJbXBvcnRTdGF0ZW1lbnQsXG4gIEV4cG9ydE1lbWJlcixcbiAgRXhwb3J0U3RhdGVtZW50LFxuICBFeHBvcnREZWZhdWx0U3RhdGVtZW50LFxuICBFeHByZXNzaW9uU3RhdGVtZW50LFxuICBGaWVsZERlY2xhcmF0aW9uLFxuICBGb3JTdGF0ZW1lbnQsXG4gIEZ1bmN0aW9uRGVjbGFyYXRpb24sXG4gIElmU3RhdGVtZW50LFxuICBJbXBvcnREZWNsYXJhdGlvbixcbiAgSW1wb3J0U3RhdGVtZW50LFxuICBJbmRleFNpZ25hdHVyZURlY2xhcmF0aW9uLFxuICBJbnRlcmZhY2VEZWNsYXJhdGlvbixcbiAgTWV0aG9kRGVjbGFyYXRpb24sXG4gIE5hbWVzcGFjZURlY2xhcmF0aW9uLFxuICBSZXR1cm5TdGF0ZW1lbnQsXG4gIFN3aXRjaENhc2UsXG4gIFN3aXRjaFN0YXRlbWVudCxcbiAgVGhyb3dTdGF0ZW1lbnQsXG4gIFRyeVN0YXRlbWVudCxcbiAgVHlwZURlY2xhcmF0aW9uLFxuICBWYXJpYWJsZURlY2xhcmF0aW9uLFxuICBWYXJpYWJsZVN0YXRlbWVudCxcbiAgV2hpbGVTdGF0ZW1lbnQsXG4gIFZvaWRTdGF0ZW1lbnQsXG4gIENvbW1lbnROb2RlLFxuICBEZWNvcmF0b3JOb2RlLFxuICBQYXJhbWV0ZXJOb2RlLFxuICBOb2RlLFxuICBQYXJzZXIsXG4gIE5vZGVLaW5kXG59IGZyb20gXCJhc3NlbWJseXNjcmlwdFwiO1xuXG5pbXBvcnQgeyBBYnN0cmFjdFZpc2l0b3IsIFdyaXRlciB9IGZyb20gXCIuL3Zpc2l0b3JcIjtcblxuZXhwb3J0IGNsYXNzIEJhc2VWaXNpdG9yIGV4dGVuZHMgQWJzdHJhY3RWaXNpdG9yPE5vZGU+IHtcbiAgZGVwdGg6IG51bWJlciA9IDA7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHBhcnNlcjogUGFyc2VyLCBwcm90ZWN0ZWQgd3JpdGVyOiBXcml0ZXI8Tm9kZT4pIHtcbiAgICBzdXBlcih3cml0ZXIpO1xuICB9XG5cbiAgX3Zpc2l0KG5vZGU6IE5vZGUpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKG5vZGUua2luZCkge1xuICAgICAgY2FzZSBOb2RlS2luZC5TT1VSQ0U6IHtcbiAgICAgICAgdGhpcy52aXNpdFNvdXJjZSg8U291cmNlPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gdHlwZXNcblxuICAgICAgY2FzZSBOb2RlS2luZC5OQU1FRFRZUEU6IHtcbiAgICAgICAgdGhpcy52aXNpdE5hbWVkVHlwZU5vZGUoPE5hbWVkVHlwZU5vZGU+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5GVU5DVElPTlRZUEU6IHtcbiAgICAgICAgdGhpcy52aXNpdEZ1bmN0aW9uVHlwZU5vZGUoPEZ1bmN0aW9uVHlwZU5vZGU+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5UWVBFUEFSQU1FVEVSOiB7XG4gICAgICAgIHRoaXMudmlzaXRUeXBlUGFyYW1ldGVyKDxUeXBlUGFyYW1ldGVyTm9kZT5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIGV4cHJlc3Npb25zXG5cbiAgICAgIGNhc2UgTm9kZUtpbmQuRkFMU0U6XG4gICAgICBjYXNlIE5vZGVLaW5kLk5VTEw6XG4gICAgICBjYXNlIE5vZGVLaW5kLlNVUEVSOlxuICAgICAgY2FzZSBOb2RlS2luZC5USElTOlxuICAgICAgY2FzZSBOb2RlS2luZC5UUlVFOlxuICAgICAgY2FzZSBOb2RlS2luZC5DT05TVFJVQ1RPUjpcbiAgICAgIGNhc2UgTm9kZUtpbmQuSURFTlRJRklFUjoge1xuICAgICAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24oPElkZW50aWZpZXJFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuQVNTRVJUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRBc3NlcnRpb25FeHByZXNzaW9uKDxBc3NlcnRpb25FeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuQklOQVJZOiB7XG4gICAgICAgIHRoaXMudmlzaXRCaW5hcnlFeHByZXNzaW9uKDxCaW5hcnlFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuQ0FMTDoge1xuICAgICAgICB0aGlzLnZpc2l0Q2FsbEV4cHJlc3Npb24oPENhbGxFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuQ0xBU1M6IHtcbiAgICAgICAgdGhpcy52aXNpdENsYXNzRXhwcmVzc2lvbig8Q2xhc3NFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuQ09NTUE6IHtcbiAgICAgICAgdGhpcy52aXNpdENvbW1hRXhwcmVzc2lvbig8Q29tbWFFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRUxFTUVOVEFDQ0VTUzoge1xuICAgICAgICB0aGlzLnZpc2l0RWxlbWVudEFjY2Vzc0V4cHJlc3Npb24oPEVsZW1lbnRBY2Nlc3NFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRlVOQ1RJT046IHtcbiAgICAgICAgdGhpcy52aXNpdEZ1bmN0aW9uRXhwcmVzc2lvbig8RnVuY3Rpb25FeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuSU5TVEFOQ0VPRjoge1xuICAgICAgICB0aGlzLnZpc2l0SW5zdGFuY2VPZkV4cHJlc3Npb24oPEluc3RhbmNlT2ZFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuTElURVJBTDoge1xuICAgICAgICB0aGlzLnZpc2l0TGl0ZXJhbEV4cHJlc3Npb24oPExpdGVyYWxFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuTkVXOiB7XG4gICAgICAgIHRoaXMudmlzaXROZXdFeHByZXNzaW9uKDxOZXdFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuUEFSRU5USEVTSVpFRDoge1xuICAgICAgICB0aGlzLnZpc2l0UGFyZW50aGVzaXplZEV4cHJlc3Npb24oPFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuUFJPUEVSVFlBQ0NFU1M6IHtcbiAgICAgICAgdGhpcy52aXNpdFByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbig8UHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVEVSTkFSWToge1xuICAgICAgICB0aGlzLnZpc2l0VGVybmFyeUV4cHJlc3Npb24oPFRlcm5hcnlFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVU5BUllQT1NURklYOiB7XG4gICAgICAgIHRoaXMudmlzaXRVbmFyeVBvc3RmaXhFeHByZXNzaW9uKDxVbmFyeVBvc3RmaXhFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVU5BUllQUkVGSVg6IHtcbiAgICAgICAgdGhpcy52aXNpdFVuYXJ5UHJlZml4RXhwcmVzc2lvbig8VW5hcnlQcmVmaXhFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gc3RhdGVtZW50c1xuXG4gICAgICBjYXNlIE5vZGVLaW5kLkJMT0NLOiB7XG4gICAgICAgIHRoaXMudmlzaXRCbG9ja1N0YXRlbWVudCg8QmxvY2tTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5CUkVBSzoge1xuICAgICAgICB0aGlzLnZpc2l0QnJlYWtTdGF0ZW1lbnQoPEJyZWFrU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuQ09OVElOVUU6IHtcbiAgICAgICAgdGhpcy52aXNpdENvbnRpbnVlU3RhdGVtZW50KDxDb250aW51ZVN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkRPOiB7XG4gICAgICAgIHRoaXMudmlzaXREb1N0YXRlbWVudCg8RG9TdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FTVBUWToge1xuICAgICAgICB0aGlzLnZpc2l0RW1wdHlTdGF0ZW1lbnQoPEVtcHR5U3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRVhQT1JUOiB7XG4gICAgICAgIHRoaXMudmlzaXRFeHBvcnRTdGF0ZW1lbnQoPEV4cG9ydFN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkVYUE9SVERFRkFVTFQ6IHtcbiAgICAgICAgdGhpcy52aXNpdEV4cG9ydERlZmF1bHRTdGF0ZW1lbnQoPEV4cG9ydERlZmF1bHRTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FWFBPUlRJTVBPUlQ6IHtcbiAgICAgICAgdGhpcy52aXNpdEV4cG9ydEltcG9ydFN0YXRlbWVudCg8RXhwb3J0SW1wb3J0U3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRVhQUkVTU0lPTjoge1xuICAgICAgICB0aGlzLnZpc2l0RXhwcmVzc2lvblN0YXRlbWVudCg8RXhwcmVzc2lvblN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkZPUjoge1xuICAgICAgICB0aGlzLnZpc2l0Rm9yU3RhdGVtZW50KDxGb3JTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5JRjoge1xuICAgICAgICB0aGlzLnZpc2l0SWZTdGF0ZW1lbnQoPElmU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuSU1QT1JUOiB7XG4gICAgICAgIHRoaXMudmlzaXRJbXBvcnRTdGF0ZW1lbnQoPEltcG9ydFN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlJFVFVSTjoge1xuICAgICAgICB0aGlzLnZpc2l0UmV0dXJuU3RhdGVtZW50KDxSZXR1cm5TdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5TV0lUQ0g6IHtcbiAgICAgICAgdGhpcy52aXNpdFN3aXRjaFN0YXRlbWVudCg8U3dpdGNoU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVEhST1c6IHtcbiAgICAgICAgdGhpcy52aXNpdFRocm93U3RhdGVtZW50KDxUaHJvd1N0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlRSWToge1xuICAgICAgICB0aGlzLnZpc2l0VHJ5U3RhdGVtZW50KDxUcnlTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5WQVJJQUJMRToge1xuICAgICAgICB0aGlzLnZpc2l0VmFyaWFibGVTdGF0ZW1lbnQoPFZhcmlhYmxlU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuV0hJTEU6IHtcbiAgICAgICAgdGhpcy52aXNpdFdoaWxlU3RhdGVtZW50KDxXaGlsZVN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIGRlY2xhcmF0aW9uIHN0YXRlbWVudHNcblxuICAgICAgY2FzZSBOb2RlS2luZC5DTEFTU0RFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRDbGFzc0RlY2xhcmF0aW9uKDxDbGFzc0RlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRU5VTURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRFbnVtRGVjbGFyYXRpb24oPEVudW1EZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkVOVU1WQUxVRURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRFbnVtVmFsdWVEZWNsYXJhdGlvbig8RW51bVZhbHVlRGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5GSUVMRERFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRGaWVsZERlY2xhcmF0aW9uKDxGaWVsZERlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRlVOQ1RJT05ERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0RnVuY3Rpb25EZWNsYXJhdGlvbig8RnVuY3Rpb25EZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLklNUE9SVERFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRJbXBvcnREZWNsYXJhdGlvbig8SW1wb3J0RGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5JTkRFWFNJR05BVFVSRURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRJbmRleFNpZ25hdHVyZURlY2xhcmF0aW9uKDxJbmRleFNpZ25hdHVyZURlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuSU5URVJGQUNFREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdEludGVyZmFjZURlY2xhcmF0aW9uKDxJbnRlcmZhY2VEZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLk1FVEhPRERFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRNZXRob2REZWNsYXJhdGlvbig8TWV0aG9kRGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5OQU1FU1BBQ0VERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0TmFtZXNwYWNlRGVjbGFyYXRpb24oPE5hbWVzcGFjZURlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVFlQRURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRUeXBlRGVjbGFyYXRpb24oPFR5cGVEZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlZBUklBQkxFREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdFZhcmlhYmxlRGVjbGFyYXRpb24oPFZhcmlhYmxlRGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvLyBvdGhlclxuXG4gICAgICBjYXNlIE5vZGVLaW5kLkRFQ09SQVRPUjoge1xuICAgICAgICB0aGlzLnZpc2l0RGVjb3JhdG9yTm9kZSg8RGVjb3JhdG9yTm9kZT5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkVYUE9SVE1FTUJFUjoge1xuICAgICAgICB0aGlzLnZpc2l0RXhwb3J0TWVtYmVyKDxFeHBvcnRNZW1iZXI+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5QQVJBTUVURVI6IHtcbiAgICAgICAgdGhpcy52aXNpdFBhcmFtZXRlcig8UGFyYW1ldGVyTm9kZT5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlNXSVRDSENBU0U6IHtcbiAgICAgICAgdGhpcy52aXNpdFN3aXRjaENhc2UoPFN3aXRjaENhc2U+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDogYXNzZXJ0KGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICAvLyAvKiogVmlzaXRzIGVhY2ggbm9kZSBpbiBhbiBhcnJheSBpZiBhcnJheSBleGlzdHMuICovXG4gIC8vIHZpc2l0QXJyYXkoYXJyYXk6IE5vZGVbXSB8IG51bGwpOiB2b2lkIHtcbiAgLy8gICBpZiAoYXJyYXkpIHtcbiAgLy8gICAgIGFycmF5Lm1hcChub2RlID0+IHtcbiAgLy8gICAgICAgaWYgKG5vZGUpIHRoaXMudmlzaXQobm9kZSk7XG4gIC8vICAgICB9KTtcbiAgLy8gICB9XG4gIC8vIH1cblxuICBzdGFydCgpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KHRoaXMucGFyc2VyLnByb2dyYW0uc291cmNlcyk7XG4gIH1cblxuICB2aXNpdFNvdXJjZShub2RlOiBTb3VyY2UpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHN0bXQgb2Ygbm9kZS5zdGF0ZW1lbnRzKSB7XG4gICAgICB0aGlzLmRlcHRoKys7XG4gICAgICB0aGlzLnZpc2l0KHN0bXQpO1xuICAgICAgdGhpcy5kZXB0aC0tO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0VHlwZU5vZGUobm9kZTogVHlwZU5vZGUpOiB2b2lkIHt9XG5cbiAgdmlzaXRUeXBlTmFtZShub2RlOiBUeXBlTmFtZSk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5pZGVudGlmaWVyKTtcbiAgICBpZiAobm9kZS5uZXh0KSB7XG4gICAgICB0aGlzLnZpc2l0KG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0TmFtZWRUeXBlTm9kZShub2RlOiBOYW1lZFR5cGVOb2RlKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xuICAgIHRoaXMudmlzaXQobm9kZS50eXBlQXJndW1lbnRzKTtcbiAgfVxuXG4gIHZpc2l0RnVuY3Rpb25UeXBlTm9kZShub2RlOiBGdW5jdGlvblR5cGVOb2RlKTogdm9pZCB7XG4gICAgZm9yIChsZXQgcGFyYW0gb2Ygbm9kZS5wYXJhbWV0ZXJzKSB7XG4gICAgICB0aGlzLnZpc2l0KHBhcmFtKTtcbiAgICB9XG4gICAgdGhpcy52aXNpdChub2RlLnJldHVyblR5cGUpO1xuICB9XG5cbiAgdmlzaXRUeXBlUGFyYW1ldGVyKG5vZGU6IFR5cGVQYXJhbWV0ZXJOb2RlKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xuICAgIGlmIChub2RlLmV4dGVuZHNUeXBlKSB0aGlzLnZpc2l0KG5vZGUuZXh0ZW5kc1R5cGUpO1xuICAgIGlmIChub2RlLmRlZmF1bHRUeXBlKSB0aGlzLnZpc2l0KG5vZGUuZGVmYXVsdFR5cGUpO1xuICB9XG5cbiAgdmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlOiBJZGVudGlmaWVyRXhwcmVzc2lvbik6IHZvaWQge31cblxuICB2aXNpdEFycmF5TGl0ZXJhbEV4cHJlc3Npb24obm9kZTogQXJyYXlMaXRlcmFsRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIG5vZGUuZWxlbWVudEV4cHJlc3Npb25zLm1hcChlID0+IHtcbiAgICAgIGlmIChlKSB0aGlzLnZpc2l0KGUpO1xuICAgIH0pO1xuICB9XG5cbiAgdmlzaXRPYmplY3RMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBPYmplY3RMaXRlcmFsRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIGlmIChub2RlLnZhbHVlcyAmJiBub2RlLm5hbWVzKSB7XG4gICAgICBhc3NlcnQobm9kZS52YWx1ZXMubGVuZ3RoID09IG5vZGUubmFtZXMubGVuZ3RoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS52YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy52aXNpdChub2RlLm5hbWVzW2ldKTtcbiAgICAgICAgdGhpcy52aXNpdChub2RlLnZhbHVlc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmlzaXRBc3NlcnRpb25FeHByZXNzaW9uKG5vZGU6IEFzc2VydGlvbkV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICBpZiAobm9kZS50b1R5cGUpIHRoaXMudmlzaXQobm9kZS50b1R5cGUpO1xuICAgIHRoaXMudmlzaXQobm9kZS5leHByZXNzaW9uKTtcbiAgfVxuXG4gIHZpc2l0QmluYXJ5RXhwcmVzc2lvbihub2RlOiBCaW5hcnlFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmxlZnQpO1xuICAgIHRoaXMudmlzaXQobm9kZS5yaWdodCk7XG4gIH1cblxuICB2aXNpdENhbGxFeHByZXNzaW9uKG5vZGU6IENhbGxFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmV4cHJlc3Npb24pO1xuICAgIHRoaXMudmlzaXQobm9kZS50eXBlQXJndW1lbnRzKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuYXJndW1lbnRzKTtcbiAgfVxuXG4gIHZpc2l0Q2xhc3NFeHByZXNzaW9uKG5vZGU6IENsYXNzRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5kZWNsYXJhdGlvbik7XG4gIH1cblxuICB2aXNpdENvbW1hRXhwcmVzc2lvbihub2RlOiBDb21tYUV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZXhwcmVzc2lvbnMpO1xuICB9XG5cbiAgdmlzaXRFbGVtZW50QWNjZXNzRXhwcmVzc2lvbihub2RlOiBFbGVtZW50QWNjZXNzRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5lbGVtZW50RXhwcmVzc2lvbik7XG4gICAgdGhpcy52aXNpdChub2RlLmV4cHJlc3Npb24pO1xuICB9XG5cbiAgdmlzaXRGdW5jdGlvbkV4cHJlc3Npb24obm9kZTogRnVuY3Rpb25FeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmRlY2xhcmF0aW9uKTtcbiAgfVxuXG4gIHZpc2l0TGl0ZXJhbEV4cHJlc3Npb24obm9kZTogTGl0ZXJhbEV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICAvLyBub2RlLlxuICB9XG5cbiAgdmlzaXRGbG9hdExpdGVyYWxFeHByZXNzaW9uKG5vZGU6IEZsb2F0TGl0ZXJhbEV4cHJlc3Npb24pOiB2b2lkIHt9XG5cbiAgdmlzaXRJbnN0YW5jZU9mRXhwcmVzc2lvbihub2RlOiBJbnN0YW5jZU9mRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5leHByZXNzaW9uKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuaXNUeXBlKTtcbiAgfVxuXG4gIHZpc2l0SW50ZWdlckxpdGVyYWxFeHByZXNzaW9uKG5vZGU6IEludGVnZXJMaXRlcmFsRXhwcmVzc2lvbik6IHZvaWQge31cblxuICB2aXNpdFN0cmluZ0xpdGVyYWwoc3RyOiBzdHJpbmcsIHNpbmdsZVF1b3RlZD86IGJvb2xlYW4pOiB2b2lkIHt9XG5cbiAgdmlzaXRTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbik6IHZvaWQge31cblxuICB2aXNpdFJlZ2V4cExpdGVyYWxFeHByZXNzaW9uKG5vZGU6IFJlZ2V4cExpdGVyYWxFeHByZXNzaW9uKTogdm9pZCB7fVxuXG4gIHZpc2l0TmV3RXhwcmVzc2lvbihub2RlOiBOZXdFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmV4cHJlc3Npb24pO1xuICAgIHRoaXMudmlzaXQobm9kZS50eXBlQXJndW1lbnRzKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuYXJndW1lbnRzKTtcbiAgfVxuXG4gIHZpc2l0UGFyZW50aGVzaXplZEV4cHJlc3Npb24obm9kZTogUGFyZW50aGVzaXplZEV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZXhwcmVzc2lvbik7XG4gIH1cblxuICB2aXNpdFByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbihub2RlOiBQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUucHJvcGVydHkpO1xuICAgIHRoaXMudmlzaXQobm9kZS5leHByZXNzaW9uKTtcbiAgfVxuXG4gIHZpc2l0VGVybmFyeUV4cHJlc3Npb24obm9kZTogVGVybmFyeUV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUuY29uZGl0aW9uKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuaWZUaGVuKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuaWZFbHNlKTtcbiAgfVxuXG4gIHZpc2l0VW5hcnlFeHByZXNzaW9uKG5vZGU6IFVuYXJ5RXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5vcGVyYW5kKTtcbiAgfVxuXG4gIHZpc2l0VW5hcnlQb3N0Zml4RXhwcmVzc2lvbihub2RlOiBVbmFyeVBvc3RmaXhFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm9wZXJhbmQpO1xuICB9XG5cbiAgdmlzaXRVbmFyeVByZWZpeEV4cHJlc3Npb24obm9kZTogVW5hcnlQcmVmaXhFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm9wZXJhbmQpO1xuICB9XG5cbiAgdmlzaXRTdXBlckV4cHJlc3Npb24obm9kZTogU3VwZXJFeHByZXNzaW9uKTogdm9pZCB7fVxuXG4gIHZpc2l0RmFsc2VFeHByZXNzaW9uKG5vZGU6IEZhbHNlRXhwcmVzc2lvbik6IHZvaWQge31cblxuICB2aXNpdFRydWVFeHByZXNzaW9uKG5vZGU6IFRydWVFeHByZXNzaW9uKTogdm9pZCB7fVxuXG4gIHZpc2l0VGhpc0V4cHJlc3Npb24obm9kZTogVGhpc0V4cHJlc3Npb24pOiB2b2lkIHt9XG5cbiAgdmlzaXROdWxsRXhwZXJzc2lvbihub2RlOiBOdWxsRXhwcmVzc2lvbik6IHZvaWQge31cblxuICB2aXNpdENvbnN0cnVjdG9yRXhwcmVzc2lvbihub2RlOiBDb25zdHJ1Y3RvckV4cHJlc3Npb24pOiB2b2lkIHt9XG5cbiAgdmlzaXROb2RlQW5kVGVybWluYXRlKHN0YXRlbWVudDogU3RhdGVtZW50KTogdm9pZCB7fVxuXG4gIHZpc2l0QmxvY2tTdGF0ZW1lbnQobm9kZTogQmxvY2tTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmRlcHRoKys7XG4gICAgdGhpcy52aXNpdChub2RlLnN0YXRlbWVudHMpO1xuICAgIHRoaXMuZGVwdGgtLTtcbiAgfVxuXG4gIHZpc2l0QnJlYWtTdGF0ZW1lbnQobm9kZTogQnJlYWtTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAobm9kZS5sYWJlbCkge1xuICAgICAgdGhpcy52aXNpdChub2RlLmxhYmVsKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdENvbnRpbnVlU3RhdGVtZW50KG5vZGU6IENvbnRpbnVlU3RhdGVtZW50KTogdm9pZCB7XG4gICAgaWYgKG5vZGUubGFiZWwpIHtcbiAgICAgIHRoaXMudmlzaXQobm9kZS5sYWJlbCk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRDbGFzc0RlY2xhcmF0aW9uKG5vZGU6IENsYXNzRGVjbGFyYXRpb24sIGlzRGVmYXVsdD86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XG4gICAgdGhpcy5kZXB0aCsrO1xuICAgIHRoaXMudmlzaXQobm9kZS5kZWNvcmF0b3JzKTtcbiAgICBhc3NlcnQoXG4gICAgICBub2RlLmlzR2VuZXJpYyA/IG5vZGUudHlwZVBhcmFtZXRlcnMgIT0gbnVsbCA6IG5vZGUudHlwZVBhcmFtZXRlcnMgPT0gbnVsbFxuICAgICk7XG4gICAgaWYgKG5vZGUuaXNHZW5lcmljKSB7XG4gICAgICB0aGlzLnZpc2l0KG5vZGUudHlwZVBhcmFtZXRlcnMpO1xuICAgIH1cbiAgICBpZiAobm9kZS5leHRlbmRzVHlwZSkge1xuICAgICAgdGhpcy52aXNpdChub2RlLmV4dGVuZHNUeXBlKTtcbiAgICB9XG4gICAgdGhpcy52aXNpdChub2RlLmltcGxlbWVudHNUeXBlcyk7XG4gICAgdGhpcy52aXNpdChub2RlLm1lbWJlcnMpO1xuICAgIHRoaXMuZGVwdGgtLTtcbiAgfVxuXG4gIHZpc2l0RG9TdGF0ZW1lbnQobm9kZTogRG9TdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUuY29uZGl0aW9uKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuc3RhdGVtZW50KTtcbiAgfVxuXG4gIHZpc2l0RW1wdHlTdGF0ZW1lbnQobm9kZTogRW1wdHlTdGF0ZW1lbnQpOiB2b2lkIHt9XG5cbiAgdmlzaXRFbnVtRGVjbGFyYXRpb24obm9kZTogRW51bURlY2xhcmF0aW9uLCBpc0RlZmF1bHQ/OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xuICAgIHRoaXMudmlzaXQobm9kZS5kZWNvcmF0b3JzKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUudmFsdWVzKTtcbiAgfVxuXG4gIHZpc2l0RW51bVZhbHVlRGVjbGFyYXRpb24obm9kZTogRW51bVZhbHVlRGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XG4gICAgaWYgKG5vZGUuaW5pdGlhbGl6ZXIpIHtcbiAgICAgIHRoaXMudmlzaXQobm9kZS5pbml0aWFsaXplcik7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRFeHBvcnRJbXBvcnRTdGF0ZW1lbnQobm9kZTogRXhwb3J0SW1wb3J0U3RhdGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xuICAgIHRoaXMudmlzaXQobm9kZS5leHRlcm5hbE5hbWUpO1xuICB9XG5cbiAgdmlzaXRFeHBvcnRNZW1iZXIobm9kZTogRXhwb3J0TWVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmxvY2FsTmFtZSk7XG4gICAgdGhpcy52aXNpdChub2RlLmV4cG9ydGVkTmFtZSk7XG4gIH1cblxuICB2aXNpdEV4cG9ydFN0YXRlbWVudChub2RlOiBFeHBvcnRTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAobm9kZS5wYXRoKSB7XG4gICAgICB0aGlzLnZpc2l0KG5vZGUucGF0aCk7XG4gICAgfVxuICAgIHRoaXMudmlzaXQobm9kZS5tZW1iZXJzKTtcbiAgfVxuXG4gIHZpc2l0RXhwb3J0RGVmYXVsdFN0YXRlbWVudChub2RlOiBFeHBvcnREZWZhdWx0U3RhdGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmRlY2xhcmF0aW9uKTtcbiAgfVxuXG4gIHZpc2l0RXhwcmVzc2lvblN0YXRlbWVudChub2RlOiBFeHByZXNzaW9uU3RhdGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmV4cHJlc3Npb24pO1xuICB9XG5cbiAgdmlzaXRGaWVsZERlY2xhcmF0aW9uKG5vZGU6IEZpZWxkRGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XG4gICAgaWYgKG5vZGUudHlwZSkge1xuICAgICAgdGhpcy52aXNpdChub2RlLnR5cGUpO1xuICAgIH1cbiAgICBpZiAobm9kZS5pbml0aWFsaXplcikge1xuICAgICAgdGhpcy52aXNpdChub2RlLmluaXRpYWxpemVyKTtcbiAgICB9XG4gICAgdGhpcy52aXNpdChub2RlLmRlY29yYXRvcnMpO1xuICB9XG5cbiAgdmlzaXRGb3JTdGF0ZW1lbnQobm9kZTogRm9yU3RhdGVtZW50KTogdm9pZCB7XG4gICAgaWYgKG5vZGUuaW5pdGlhbGl6ZXIpIHRoaXMudmlzaXQobm9kZS5pbml0aWFsaXplcik7XG4gICAgaWYgKG5vZGUuY29uZGl0aW9uKSB0aGlzLnZpc2l0KG5vZGUuY29uZGl0aW9uKTtcbiAgICBpZiAobm9kZS5pbmNyZW1lbnRvcikgdGhpcy52aXNpdChub2RlLmluY3JlbWVudG9yKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuc3RhdGVtZW50KTtcbiAgfVxuXG4gIHZpc2l0RnVuY3Rpb25EZWNsYXJhdGlvbihcbiAgICBub2RlOiBGdW5jdGlvbkRlY2xhcmF0aW9uLFxuICAgIGlzRGVmYXVsdD86IGJvb2xlYW5cbiAgKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xuICAgIHRoaXMudmlzaXQobm9kZS5kZWNvcmF0b3JzKTtcbiAgICBpZiAobm9kZS5pc0dlbmVyaWMpIHtcbiAgICAgIHRoaXMudmlzaXQobm9kZS50eXBlUGFyYW1ldGVycyk7XG4gICAgfVxuICAgIHRoaXMudmlzaXQobm9kZS5zaWduYXR1cmUpO1xuICAgIHRoaXMuZGVwdGgrKztcbiAgICBpZiAobm9kZS5ib2R5KSB0aGlzLnZpc2l0KG5vZGUuYm9keSk7XG4gICAgdGhpcy5kZXB0aC0tO1xuICB9XG5cbiAgdmlzaXRGdW5jdGlvbkNvbW1vbihub2RlOiBGdW5jdGlvbkRlY2xhcmF0aW9uKTogdm9pZCB7XG4gICAgLy8gdGhpcy52aXNpdChub2RlLm5hbWUpXG4gIH1cblxuICB2aXNpdElmU3RhdGVtZW50KG5vZGU6IElmU3RhdGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmNvbmRpdGlvbik7XG4gICAgdGhpcy52aXNpdChub2RlLmlmVHJ1ZSk7XG4gICAgaWYgKG5vZGUuaWZGYWxzZSkgdGhpcy52aXNpdChub2RlLmlmRmFsc2UpO1xuICB9XG5cbiAgdmlzaXRJbXBvcnREZWNsYXJhdGlvbihub2RlOiBJbXBvcnREZWNsYXJhdGlvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5mb3JlaWduTmFtZSk7XG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xuICAgIHRoaXMudmlzaXQobm9kZS5kZWNvcmF0b3JzKTtcbiAgfVxuXG4gIHZpc2l0SW1wb3J0U3RhdGVtZW50KG5vZGU6IEltcG9ydFN0YXRlbWVudCk6IHZvaWQge1xuICAgIGlmIChub2RlLm5hbWVzcGFjZU5hbWUpIHRoaXMudmlzaXQobm9kZS5uYW1lc3BhY2VOYW1lKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjbGFyYXRpb25zKTtcbiAgfVxuXG4gIHZpc2l0SW5kZXhTaWduYXR1cmVEZWNsYXJhdGlvbihub2RlOiBJbmRleFNpZ25hdHVyZURlY2xhcmF0aW9uKTogdm9pZCB7XG4gICAgLy8gdGhpcy52aXNpdChub2RlLm5hbWUpO1xuICAgIC8vIHRoaXMudmlzaXQobm9kZS5rZXlUeXBlKTtcbiAgICAvLyB0aGlzLnZpc2l0KG5vZGUudmFsdWVUeXBlKTtcbiAgfVxuXG4gIHZpc2l0SW50ZXJmYWNlRGVjbGFyYXRpb24oXG4gICAgbm9kZTogSW50ZXJmYWNlRGVjbGFyYXRpb24sXG4gICAgaXNEZWZhdWx0PzogYm9vbGVhblxuICApOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XG4gICAgaWYgKG5vZGUuaXNHZW5lcmljKSB7XG4gICAgICB0aGlzLnZpc2l0KG5vZGUudHlwZVBhcmFtZXRlcnMpO1xuICAgIH1cbiAgICB0aGlzLnZpc2l0KG5vZGUuaW1wbGVtZW50c1R5cGVzKTtcbiAgICBpZiAobm9kZS5leHRlbmRzVHlwZSkgdGhpcy52aXNpdChub2RlLmV4dGVuZHNUeXBlKTtcbiAgICB0aGlzLmRlcHRoKys7XG4gICAgdGhpcy52aXNpdChub2RlLm1lbWJlcnMpO1xuICAgIHRoaXMuZGVwdGgtLTtcbiAgfVxuXG4gIHZpc2l0TWV0aG9kRGVjbGFyYXRpb24obm9kZTogTWV0aG9kRGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XG4gICAgaWYgKG5vZGUuaXNHZW5lcmljKSB7XG4gICAgICB0aGlzLnZpc2l0KG5vZGUudHlwZVBhcmFtZXRlcnMpO1xuICAgIH1cbiAgICB0aGlzLnZpc2l0KG5vZGUuc2lnbmF0dXJlKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycyk7XG4gICAgdGhpcy5kZXB0aCsrO1xuICAgIGlmIChub2RlLmJvZHkpIHRoaXMudmlzaXQobm9kZS5ib2R5KTtcbiAgICB0aGlzLmRlcHRoLS07XG4gIH1cblxuICB2aXNpdE5hbWVzcGFjZURlY2xhcmF0aW9uKFxuICAgIG5vZGU6IE5hbWVzcGFjZURlY2xhcmF0aW9uLFxuICAgIGlzRGVmYXVsdD86IGJvb2xlYW5cbiAgKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xuICAgIHRoaXMudmlzaXQobm9kZS5kZWNvcmF0b3JzKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUubWVtYmVycyk7XG4gIH1cblxuICB2aXNpdFJldHVyblN0YXRlbWVudChub2RlOiBSZXR1cm5TdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAobm9kZS52YWx1ZSkgdGhpcy52aXNpdChub2RlLnZhbHVlKTtcbiAgfVxuXG4gIHZpc2l0U3dpdGNoQ2FzZShub2RlOiBTd2l0Y2hDYXNlKTogdm9pZCB7XG4gICAgaWYgKG5vZGUubGFiZWwpIHRoaXMudmlzaXQobm9kZS5sYWJlbCk7XG4gICAgdGhpcy52aXNpdChub2RlLnN0YXRlbWVudHMpO1xuICB9XG5cbiAgdmlzaXRTd2l0Y2hTdGF0ZW1lbnQobm9kZTogU3dpdGNoU3RhdGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmNvbmRpdGlvbik7XG4gICAgdGhpcy5kZXB0aCsrO1xuICAgIHRoaXMudmlzaXQobm9kZS5jYXNlcyk7XG4gICAgdGhpcy5kZXB0aC0tO1xuICB9XG5cbiAgdmlzaXRUaHJvd1N0YXRlbWVudChub2RlOiBUaHJvd1N0YXRlbWVudCk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS52YWx1ZSk7XG4gIH1cblxuICB2aXNpdFRyeVN0YXRlbWVudChub2RlOiBUcnlTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUuc3RhdGVtZW50cyk7XG4gICAgaWYgKG5vZGUuY2F0Y2hWYXJpYWJsZSkgdGhpcy52aXNpdChub2RlLmNhdGNoVmFyaWFibGUpO1xuICAgIHRoaXMudmlzaXQobm9kZS5jYXRjaFN0YXRlbWVudHMpO1xuICAgIHRoaXMudmlzaXQobm9kZS5maW5hbGx5U3RhdGVtZW50cyk7XG4gIH1cblxuICB2aXNpdFR5cGVEZWNsYXJhdGlvbihub2RlOiBUeXBlRGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XG4gICAgdGhpcy52aXNpdChub2RlLmRlY29yYXRvcnMpO1xuICAgIHRoaXMudmlzaXQobm9kZS50eXBlKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUudHlwZVBhcmFtZXRlcnMpO1xuICB9XG5cbiAgdmlzaXRWYXJpYWJsZURlY2xhcmF0aW9uKG5vZGU6IFZhcmlhYmxlRGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XG4gICAgaWYgKG5vZGUudHlwZSkgdGhpcy52aXNpdChub2RlLnR5cGUpO1xuICAgIGlmIChub2RlLmluaXRpYWxpemVyKSB0aGlzLnZpc2l0KG5vZGUuaW5pdGlhbGl6ZXIpO1xuICB9XG5cbiAgdmlzaXRWYXJpYWJsZVN0YXRlbWVudChub2RlOiBWYXJpYWJsZVN0YXRlbWVudCk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5kZWNvcmF0b3JzKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjbGFyYXRpb25zKTtcbiAgfVxuXG4gIHZpc2l0V2hpbGVTdGF0ZW1lbnQobm9kZTogV2hpbGVTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUuY29uZGl0aW9uKTtcbiAgICB0aGlzLmRlcHRoKys7XG4gICAgdGhpcy52aXNpdChub2RlLnN0YXRlbWVudCk7XG4gICAgdGhpcy5kZXB0aC0tO1xuICB9XG5cbiAgdmlzaXRWb2lkU3RhdGVtZW50KG5vZGU6IFZvaWRTdGF0ZW1lbnQpOiB2b2lkIHt9XG5cbiAgdmlzaXRDb21tZW50KG5vZGU6IENvbW1lbnROb2RlKTogdm9pZCB7fVxuXG4gIHZpc2l0RGVjb3JhdG9yTm9kZShub2RlOiBEZWNvcmF0b3JOb2RlKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xuICAgIHRoaXMudmlzaXQobm9kZS5hcmd1bWVudHMpO1xuICB9XG5cbiAgdmlzaXRQYXJhbWV0ZXIobm9kZTogUGFyYW1ldGVyTm9kZSk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICBpZiAobm9kZS5pbXBsaWNpdEZpZWxkRGVjbGFyYXRpb24pIHtcbiAgICAgIHRoaXMudmlzaXQobm9kZS5pbXBsaWNpdEZpZWxkRGVjbGFyYXRpb24pO1xuICAgIH1cbiAgICBpZiAobm9kZS5pbml0aWFsaXplcikgdGhpcy52aXNpdChub2RlLmluaXRpYWxpemVyKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUudHlwZSk7XG4gIH1cblxuXG59XG4iXX0=