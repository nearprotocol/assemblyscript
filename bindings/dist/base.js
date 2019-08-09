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
var __1 = require("../..");
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
            case __1.NodeKind.SOURCE: {
                this.visitSource(node);
                break;
            }
            // types
            case __1.NodeKind.NAMEDTYPE: {
                this.visitNamedTypeNode(node);
                break;
            }
            case __1.NodeKind.FUNCTIONTYPE: {
                this.visitFunctionTypeNode(node);
                break;
            }
            case __1.NodeKind.TYPEPARAMETER: {
                this.visitTypeParameter(node);
                break;
            }
            // expressions
            case __1.NodeKind.FALSE:
            case __1.NodeKind.NULL:
            case __1.NodeKind.SUPER:
            case __1.NodeKind.THIS:
            case __1.NodeKind.TRUE:
            case __1.NodeKind.CONSTRUCTOR:
            case __1.NodeKind.IDENTIFIER: {
                this.visitIdentifierExpression(node);
                break;
            }
            case __1.NodeKind.ASSERTION: {
                this.visitAssertionExpression(node);
                break;
            }
            case __1.NodeKind.BINARY: {
                this.visitBinaryExpression(node);
                break;
            }
            case __1.NodeKind.CALL: {
                this.visitCallExpression(node);
                break;
            }
            case __1.NodeKind.CLASS: {
                this.visitClassExpression(node);
                break;
            }
            case __1.NodeKind.COMMA: {
                this.visitCommaExpression(node);
                break;
            }
            case __1.NodeKind.ELEMENTACCESS: {
                this.visitElementAccessExpression(node);
                break;
            }
            case __1.NodeKind.FUNCTION: {
                this.visitFunctionExpression(node);
                break;
            }
            case __1.NodeKind.INSTANCEOF: {
                this.visitInstanceOfExpression(node);
                break;
            }
            case __1.NodeKind.LITERAL: {
                this.visitLiteralExpression(node);
                break;
            }
            case __1.NodeKind.NEW: {
                this.visitNewExpression(node);
                break;
            }
            case __1.NodeKind.PARENTHESIZED: {
                this.visitParenthesizedExpression(node);
                break;
            }
            case __1.NodeKind.PROPERTYACCESS: {
                this.visitPropertyAccessExpression(node);
                break;
            }
            case __1.NodeKind.TERNARY: {
                this.visitTernaryExpression(node);
                break;
            }
            case __1.NodeKind.UNARYPOSTFIX: {
                this.visitUnaryPostfixExpression(node);
                break;
            }
            case __1.NodeKind.UNARYPREFIX: {
                this.visitUnaryPrefixExpression(node);
                break;
            }
            // statements
            case __1.NodeKind.BLOCK: {
                this.visitBlockStatement(node);
                break;
            }
            case __1.NodeKind.BREAK: {
                this.visitBreakStatement(node);
                break;
            }
            case __1.NodeKind.CONTINUE: {
                this.visitContinueStatement(node);
                break;
            }
            case __1.NodeKind.DO: {
                this.visitDoStatement(node);
                break;
            }
            case __1.NodeKind.EMPTY: {
                this.visitEmptyStatement(node);
                break;
            }
            case __1.NodeKind.EXPORT: {
                this.visitExportStatement(node);
                break;
            }
            case __1.NodeKind.EXPORTDEFAULT: {
                this.visitExportDefaultStatement(node);
                break;
            }
            case __1.NodeKind.EXPORTIMPORT: {
                this.visitExportImportStatement(node);
                break;
            }
            case __1.NodeKind.EXPRESSION: {
                this.visitExpressionStatement(node);
                break;
            }
            case __1.NodeKind.FOR: {
                this.visitForStatement(node);
                break;
            }
            case __1.NodeKind.IF: {
                this.visitIfStatement(node);
                break;
            }
            case __1.NodeKind.IMPORT: {
                this.visitImportStatement(node);
                break;
            }
            case __1.NodeKind.RETURN: {
                this.visitReturnStatement(node);
                break;
            }
            case __1.NodeKind.SWITCH: {
                this.visitSwitchStatement(node);
                break;
            }
            case __1.NodeKind.THROW: {
                this.visitThrowStatement(node);
                break;
            }
            case __1.NodeKind.TRY: {
                this.visitTryStatement(node);
                break;
            }
            case __1.NodeKind.VARIABLE: {
                this.visitVariableStatement(node);
                break;
            }
            case __1.NodeKind.WHILE: {
                this.visitWhileStatement(node);
                break;
            }
            // declaration statements
            case __1.NodeKind.CLASSDECLARATION: {
                this.visitClassDeclaration(node);
                break;
            }
            case __1.NodeKind.ENUMDECLARATION: {
                this.visitEnumDeclaration(node);
                break;
            }
            case __1.NodeKind.ENUMVALUEDECLARATION: {
                this.visitEnumValueDeclaration(node);
                break;
            }
            case __1.NodeKind.FIELDDECLARATION: {
                this.visitFieldDeclaration(node);
                break;
            }
            case __1.NodeKind.FUNCTIONDECLARATION: {
                this.visitFunctionDeclaration(node);
                break;
            }
            case __1.NodeKind.IMPORTDECLARATION: {
                this.visitImportDeclaration(node);
                break;
            }
            case __1.NodeKind.INDEXSIGNATUREDECLARATION: {
                this.visitIndexSignatureDeclaration(node);
                break;
            }
            case __1.NodeKind.INTERFACEDECLARATION: {
                this.visitInterfaceDeclaration(node);
                break;
            }
            case __1.NodeKind.METHODDECLARATION: {
                this.visitMethodDeclaration(node);
                break;
            }
            case __1.NodeKind.NAMESPACEDECLARATION: {
                this.visitNamespaceDeclaration(node);
                break;
            }
            case __1.NodeKind.TYPEDECLARATION: {
                this.visitTypeDeclaration(node);
                break;
            }
            case __1.NodeKind.VARIABLEDECLARATION: {
                this.visitVariableDeclaration(node);
                break;
            }
            // other
            case __1.NodeKind.DECORATOR: {
                this.visitDecoratorNode(node);
                break;
            }
            case __1.NodeKind.EXPORTMEMBER: {
                this.visitExportMember(node);
                break;
            }
            case __1.NodeKind.PARAMETER: {
                this.visitParameter(node);
                break;
            }
            case __1.NodeKind.SWITCHCASE: {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQkE0RWU7QUFFZixxQ0FBb0Q7QUFFcEQ7SUFBaUMsK0JBQXFCO0lBR3BELHFCQUFzQixNQUFjLEVBQVksTUFBb0I7UUFBcEUsWUFDRSxrQkFBTSxNQUFNLENBQUMsU0FDZDtRQUZxQixZQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVksWUFBTSxHQUFOLE1BQU0sQ0FBYztRQUZwRSxXQUFLLEdBQVcsQ0FBQyxDQUFDOztJQUlsQixDQUFDO0lBRUQsNEJBQU0sR0FBTixVQUFPLElBQVU7UUFDZixRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDakIsS0FBSyxZQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxXQUFXLENBQVMsSUFBSSxDQUFDLENBQUM7Z0JBQy9CLE1BQU07YUFDUDtZQUVELFFBQVE7WUFFUixLQUFLLFlBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLGtCQUFrQixDQUFnQixJQUFJLENBQUMsQ0FBQztnQkFDN0MsTUFBTTthQUNQO1lBQ0QsS0FBSyxZQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxxQkFBcUIsQ0FBbUIsSUFBSSxDQUFDLENBQUM7Z0JBQ25ELE1BQU07YUFDUDtZQUNELEtBQUssWUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMzQixJQUFJLENBQUMsa0JBQWtCLENBQW9CLElBQUksQ0FBQyxDQUFDO2dCQUNqRCxNQUFNO2FBQ1A7WUFFRCxjQUFjO1lBRWQsS0FBSyxZQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3BCLEtBQUssWUFBUSxDQUFDLElBQUksQ0FBQztZQUNuQixLQUFLLFlBQVEsQ0FBQyxLQUFLLENBQUM7WUFDcEIsS0FBSyxZQUFRLENBQUMsSUFBSSxDQUFD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aEQsa0NBQVksR0FBWixVQUFhLElBQWlCLElBQVMsQ0FBQztJQUV4Qyx3Q0FBa0IsR0FBbEIsVUFBbUIsSUFBbUI7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELG9DQUFjLEdBQWQsVUFBZSxJQUFtQjtRQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLElBQUksQ0FBQyx3QkFBd0IsRUFBRTtZQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1NBQzNDO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVztZQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFHSCxrQkFBQztBQUFELENBQUMsQUF2cEJELENBQWlDLHlCQUFlLEdBdXBCL0M7QUF2cEJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgU291cmNlLFxuICBUeXBlTm9kZSxcbiAgVHlwZU5hbWUsXG4gIE5hbWVkVHlwZU5vZGUsXG4gIEZ1bmN0aW9uVHlwZU5vZGUsXG4gIFR5cGVQYXJhbWV0ZXJOb2RlLFxuICBJZGVudGlmaWVyRXhwcmVzc2lvbixcbiAgQXJyYXlMaXRlcmFsRXhwcmVzc2lvbixcbiAgT2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24sXG4gIEFzc2VydGlvbkV4cHJlc3Npb24sXG4gIEJpbmFyeUV4cHJlc3Npb24sXG4gIENhbGxFeHByZXNzaW9uLFxuICBDbGFzc0V4cHJlc3Npb24sXG4gIENvbW1hRXhwcmVzc2lvbixcbiAgRWxlbWVudEFjY2Vzc0V4cHJlc3Npb24sXG4gIEZ1bmN0aW9uRXhwcmVzc2lvbixcbiAgTGl0ZXJhbEV4cHJlc3Npb24sXG4gIEZsb2F0TGl0ZXJhbEV4cHJlc3Npb24sXG4gIEluc3RhbmNlT2ZFeHByZXNzaW9uLFxuICBJbnRlZ2VyTGl0ZXJhbEV4cHJlc3Npb24sXG4gIFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uLFxuICBSZWdleHBMaXRlcmFsRXhwcmVzc2lvbixcbiAgTmV3RXhwcmVzc2lvbixcbiAgUGFyZW50aGVzaXplZEV4cHJlc3Npb24sXG4gIFByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbixcbiAgVGVybmFyeUV4cHJlc3Npb24sXG4gIFVuYXJ5RXhwcmVzc2lvbixcbiAgVW5hcnlQb3N0Zml4RXhwcmVzc2lvbixcbiAgVW5hcnlQcmVmaXhFeHByZXNzaW9uLFxuICBTdXBlckV4cHJlc3Npb24sXG4gIEZhbHNlRXhwcmVzc2lvbixcbiAgVHJ1ZUV4cHJlc3Npb24sXG4gIFRoaXNFeHByZXNzaW9uLFxuICBOdWxsRXhwcmVzc2lvbixcbiAgQ29uc3RydWN0b3JFeHByZXNzaW9uLFxuICBTdGF0ZW1lbnQsXG4gIEJsb2NrU3RhdGVtZW50LFxuICBCcmVha1N0YXRlbWVudCxcbiAgQ29udGludWVTdGF0ZW1lbnQsXG4gIENsYXNzRGVjbGFyYXRpb24sXG4gIERvU3RhdGVtZW50LFxuICBFbXB0eVN0YXRlbWVudCxcbiAgRW51bURlY2xhcmF0aW9uLFxuICBFbnVtVmFsdWVEZWNsYXJhdGlvbixcbiAgRXhwb3J0SW1wb3J0U3RhdGVtZW50LFxuICBFeHBvcnRNZW1iZXIsXG4gIEV4cG9ydFN0YXRlbWVudCxcbiAgRXhwb3J0RGVmYXVsdFN0YXRlbWVudCxcbiAgRXhwcmVzc2lvblN0YXRlbWVudCxcbiAgRmllbGREZWNsYXJhdGlvbixcbiAgRm9yU3RhdGVtZW50LFxuICBGdW5jdGlvbkRlY2xhcmF0aW9uLFxuICBJZlN0YXRlbWVudCxcbiAgSW1wb3J0RGVjbGFyYXRpb24sXG4gIEltcG9ydFN0YXRlbWVudCxcbiAgSW5kZXhTaWduYXR1cmVEZWNsYXJhdGlvbixcbiAgSW50ZXJmYWNlRGVjbGFyYXRpb24sXG4gIE1ldGhvZERlY2xhcmF0aW9uLFxuICBOYW1lc3BhY2VEZWNsYXJhdGlvbixcbiAgUmV0dXJuU3RhdGVtZW50LFxuICBTd2l0Y2hDYXNlLFxuICBTd2l0Y2hTdGF0ZW1lbnQsXG4gIFRocm93U3RhdGVtZW50LFxuICBUcnlTdGF0ZW1lbnQsXG4gIFR5cGVEZWNsYXJhdGlvbixcbiAgVmFyaWFibGVEZWNsYXJhdGlvbixcbiAgVmFyaWFibGVTdGF0ZW1lbnQsXG4gIFdoaWxlU3RhdGVtZW50LFxuICBWb2lkU3RhdGVtZW50LFxuICBDb21tZW50Tm9kZSxcbiAgRGVjb3JhdG9yTm9kZSxcbiAgUGFyYW1ldGVyTm9kZSxcbiAgTm9kZSxcbiAgUGFyc2VyLFxuICBOb2RlS2luZFxufSBmcm9tIFwiLi4vLi5cIjtcblxuaW1wb3J0IHsgQWJzdHJhY3RWaXNpdG9yLCBXcml0ZXIgfSBmcm9tIFwiLi92aXNpdG9yXCI7XG5cbmV4cG9ydCBjbGFzcyBCYXNlVmlzaXRvciBleHRlbmRzIEFic3RyYWN0VmlzaXRvcjxOb2RlPiB7XG4gIGRlcHRoOiBudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBwYXJzZXI6IFBhcnNlciwgcHJvdGVjdGVkIHdyaXRlcjogV3JpdGVyPE5vZGU+KSB7XG4gICAgc3VwZXIod3JpdGVyKTtcbiAgfVxuXG4gIF92aXNpdChub2RlOiBOb2RlKTogdm9pZCB7XG4gICAgc3dpdGNoIChub2RlLmtpbmQpIHtcbiAgICAgIGNhc2UgTm9kZUtpbmQuU09VUkNFOiB7XG4gICAgICAgIHRoaXMudmlzaXRTb3VyY2UoPFNvdXJjZT5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIHR5cGVzXG5cbiAgICAgIGNhc2UgTm9kZUtpbmQuTkFNRURUWVBFOiB7XG4gICAgICAgIHRoaXMudmlzaXROYW1lZFR5cGVOb2RlKDxOYW1lZFR5cGVOb2RlPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRlVOQ1RJT05UWVBFOiB7XG4gICAgICAgIHRoaXMudmlzaXRGdW5jdGlvblR5cGVOb2RlKDxGdW5jdGlvblR5cGVOb2RlPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVFlQRVBBUkFNRVRFUjoge1xuICAgICAgICB0aGlzLnZpc2l0VHlwZVBhcmFtZXRlcig8VHlwZVBhcmFtZXRlck5vZGU+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvLyBleHByZXNzaW9uc1xuXG4gICAgICBjYXNlIE5vZGVLaW5kLkZBTFNFOlxuICAgICAgY2FzZSBOb2RlS2luZC5OVUxMOlxuICAgICAgY2FzZSBOb2RlS2luZC5TVVBFUjpcbiAgICAgIGNhc2UgTm9kZUtpbmQuVEhJUzpcbiAgICAgIGNhc2UgTm9kZUtpbmQuVFJVRTpcbiAgICAgIGNhc2UgTm9kZUtpbmQuQ09OU1RSVUNUT1I6XG4gICAgICBjYXNlIE5vZGVLaW5kLklERU5USUZJRVI6IHtcbiAgICAgICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKDxJZGVudGlmaWVyRXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkFTU0VSVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0QXNzZXJ0aW9uRXhwcmVzc2lvbig8QXNzZXJ0aW9uRXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkJJTkFSWToge1xuICAgICAgICB0aGlzLnZpc2l0QmluYXJ5RXhwcmVzc2lvbig8QmluYXJ5RXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkNBTEw6IHtcbiAgICAgICAgdGhpcy52aXNpdENhbGxFeHByZXNzaW9uKDxDYWxsRXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkNMQVNTOiB7XG4gICAgICAgIHRoaXMudmlzaXRDbGFzc0V4cHJlc3Npb24oPENsYXNzRXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkNPTU1BOiB7XG4gICAgICAgIHRoaXMudmlzaXRDb21tYUV4cHJlc3Npb24oPENvbW1hRXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkVMRU1FTlRBQ0NFU1M6IHtcbiAgICAgICAgdGhpcy52aXNpdEVsZW1lbnRBY2Nlc3NFeHByZXNzaW9uKDxFbGVtZW50QWNjZXNzRXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkZVTkNUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRGdW5jdGlvbkV4cHJlc3Npb24oPEZ1bmN0aW9uRXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLklOU1RBTkNFT0Y6IHtcbiAgICAgICAgdGhpcy52aXNpdEluc3RhbmNlT2ZFeHByZXNzaW9uKDxJbnN0YW5jZU9mRXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkxJVEVSQUw6IHtcbiAgICAgICAgdGhpcy52aXNpdExpdGVyYWxFeHByZXNzaW9uKDxMaXRlcmFsRXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLk5FVzoge1xuICAgICAgICB0aGlzLnZpc2l0TmV3RXhwcmVzc2lvbig8TmV3RXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlBBUkVOVEhFU0laRUQ6IHtcbiAgICAgICAgdGhpcy52aXNpdFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uKDxQYXJlbnRoZXNpemVkRXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlBST1BFUlRZQUNDRVNTOiB7XG4gICAgICAgIHRoaXMudmlzaXRQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24oPFByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlRFUk5BUlk6IHtcbiAgICAgICAgdGhpcy52aXNpdFRlcm5hcnlFeHByZXNzaW9uKDxUZXJuYXJ5RXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlVOQVJZUE9TVEZJWDoge1xuICAgICAgICB0aGlzLnZpc2l0VW5hcnlQb3N0Zml4RXhwcmVzc2lvbig8VW5hcnlQb3N0Zml4RXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlVOQVJZUFJFRklYOiB7XG4gICAgICAgIHRoaXMudmlzaXRVbmFyeVByZWZpeEV4cHJlc3Npb24oPFVuYXJ5UHJlZml4RXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIHN0YXRlbWVudHNcblxuICAgICAgY2FzZSBOb2RlS2luZC5CTE9DSzoge1xuICAgICAgICB0aGlzLnZpc2l0QmxvY2tTdGF0ZW1lbnQoPEJsb2NrU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuQlJFQUs6IHtcbiAgICAgICAgdGhpcy52aXNpdEJyZWFrU3RhdGVtZW50KDxCcmVha1N0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkNPTlRJTlVFOiB7XG4gICAgICAgIHRoaXMudmlzaXRDb250aW51ZVN0YXRlbWVudCg8Q29udGludWVTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5ETzoge1xuICAgICAgICB0aGlzLnZpc2l0RG9TdGF0ZW1lbnQoPERvU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRU1QVFk6IHtcbiAgICAgICAgdGhpcy52aXNpdEVtcHR5U3RhdGVtZW50KDxFbXB0eVN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkVYUE9SVDoge1xuICAgICAgICB0aGlzLnZpc2l0RXhwb3J0U3RhdGVtZW50KDxFeHBvcnRTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FWFBPUlRERUZBVUxUOiB7XG4gICAgICAgIHRoaXMudmlzaXRFeHBvcnREZWZhdWx0U3RhdGVtZW50KDxFeHBvcnREZWZhdWx0U3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRVhQT1JUSU1QT1JUOiB7XG4gICAgICAgIHRoaXMudmlzaXRFeHBvcnRJbXBvcnRTdGF0ZW1lbnQoPEV4cG9ydEltcG9ydFN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkVYUFJFU1NJT046IHtcbiAgICAgICAgdGhpcy52aXNpdEV4cHJlc3Npb25TdGF0ZW1lbnQoPEV4cHJlc3Npb25TdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5GT1I6IHtcbiAgICAgICAgdGhpcy52aXNpdEZvclN0YXRlbWVudCg8Rm9yU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuSUY6IHtcbiAgICAgICAgdGhpcy52aXNpdElmU3RhdGVtZW50KDxJZlN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLklNUE9SVDoge1xuICAgICAgICB0aGlzLnZpc2l0SW1wb3J0U3RhdGVtZW50KDxJbXBvcnRTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5SRVRVUk46IHtcbiAgICAgICAgdGhpcy52aXNpdFJldHVyblN0YXRlbWVudCg8UmV0dXJuU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuU1dJVENIOiB7XG4gICAgICAgIHRoaXMudmlzaXRTd2l0Y2hTdGF0ZW1lbnQoPFN3aXRjaFN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlRIUk9XOiB7XG4gICAgICAgIHRoaXMudmlzaXRUaHJvd1N0YXRlbWVudCg8VGhyb3dTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5UUlk6IHtcbiAgICAgICAgdGhpcy52aXNpdFRyeVN0YXRlbWVudCg8VHJ5U3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVkFSSUFCTEU6IHtcbiAgICAgICAgdGhpcy52aXNpdFZhcmlhYmxlU3RhdGVtZW50KDxWYXJpYWJsZVN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLldISUxFOiB7XG4gICAgICAgIHRoaXMudmlzaXRXaGlsZVN0YXRlbWVudCg8V2hpbGVTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvLyBkZWNsYXJhdGlvbiBzdGF0ZW1lbnRzXG5cbiAgICAgIGNhc2UgTm9kZUtpbmQuQ0xBU1NERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0Q2xhc3NEZWNsYXJhdGlvbig8Q2xhc3NEZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkVOVU1ERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0RW51bURlY2xhcmF0aW9uKDxFbnVtRGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FTlVNVkFMVUVERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0RW51bVZhbHVlRGVjbGFyYXRpb24oPEVudW1WYWx1ZURlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRklFTERERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0RmllbGREZWNsYXJhdGlvbig8RmllbGREZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkZVTkNUSU9OREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdEZ1bmN0aW9uRGVjbGFyYXRpb24oPEZ1bmN0aW9uRGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5JTVBPUlRERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0SW1wb3J0RGVjbGFyYXRpb24oPEltcG9ydERlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuSU5ERVhTSUdOQVRVUkVERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0SW5kZXhTaWduYXR1cmVEZWNsYXJhdGlvbig8SW5kZXhTaWduYXR1cmVEZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLklOVEVSRkFDRURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRJbnRlcmZhY2VEZWNsYXJhdGlvbig8SW50ZXJmYWNlRGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5NRVRIT0RERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0TWV0aG9kRGVjbGFyYXRpb24oPE1ldGhvZERlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuTkFNRVNQQUNFREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdE5hbWVzcGFjZURlY2xhcmF0aW9uKDxOYW1lc3BhY2VEZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlRZUEVERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0VHlwZURlY2xhcmF0aW9uKDxUeXBlRGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5WQVJJQUJMRURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRWYXJpYWJsZURlY2xhcmF0aW9uKDxWYXJpYWJsZURlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gb3RoZXJcblxuICAgICAgY2FzZSBOb2RlS2luZC5ERUNPUkFUT1I6IHtcbiAgICAgICAgdGhpcy52aXNpdERlY29yYXRvck5vZGUoPERlY29yYXRvck5vZGU+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FWFBPUlRNRU1CRVI6IHtcbiAgICAgICAgdGhpcy52aXNpdEV4cG9ydE1lbWJlcig8RXhwb3J0TWVtYmVyPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuUEFSQU1FVEVSOiB7XG4gICAgICAgIHRoaXMudmlzaXRQYXJhbWV0ZXIoPFBhcmFtZXRlck5vZGU+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5TV0lUQ0hDQVNFOiB7XG4gICAgICAgIHRoaXMudmlzaXRTd2l0Y2hDYXNlKDxTd2l0Y2hDYXNlPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IGFzc2VydChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gLyoqIFZpc2l0cyBlYWNoIG5vZGUgaW4gYW4gYXJyYXkgaWYgYXJyYXkgZXhpc3RzLiAqL1xuICAvLyB2aXNpdEFycmF5KGFycmF5OiBOb2RlW10gfCBudWxsKTogdm9pZCB7XG4gIC8vICAgaWYgKGFycmF5KSB7XG4gIC8vICAgICBhcnJheS5tYXAobm9kZSA9PiB7XG4gIC8vICAgICAgIGlmIChub2RlKSB0aGlzLnZpc2l0KG5vZGUpO1xuICAvLyAgICAgfSk7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgc3RhcnQoKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdCh0aGlzLnBhcnNlci5wcm9ncmFtLnNvdXJjZXMpO1xuICB9XG5cbiAgdmlzaXRTb3VyY2Uobm9kZTogU291cmNlKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBzdG10IG9mIG5vZGUuc3RhdGVtZW50cykge1xuICAgICAgdGhpcy5kZXB0aCsrO1xuICAgICAgdGhpcy52aXNpdChzdG10KTtcbiAgICAgIHRoaXMuZGVwdGgtLTtcbiAgICB9XG4gIH1cblxuICB2aXNpdFR5cGVOb2RlKG5vZGU6IFR5cGVOb2RlKTogdm9pZCB7fVxuXG4gIHZpc2l0VHlwZU5hbWUobm9kZTogVHlwZU5hbWUpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUuaWRlbnRpZmllcik7XG4gICAgaWYgKG5vZGUubmV4dCkge1xuICAgICAgdGhpcy52aXNpdChub2RlKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdE5hbWVkVHlwZU5vZGUobm9kZTogTmFtZWRUeXBlTm9kZSk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUudHlwZUFyZ3VtZW50cyk7XG4gIH1cblxuICB2aXNpdEZ1bmN0aW9uVHlwZU5vZGUobm9kZTogRnVuY3Rpb25UeXBlTm9kZSk6IHZvaWQge1xuICAgIGZvciAobGV0IHBhcmFtIG9mIG5vZGUucGFyYW1ldGVycykge1xuICAgICAgdGhpcy52aXNpdChwYXJhbSk7XG4gICAgfVxuICAgIHRoaXMudmlzaXQobm9kZS5yZXR1cm5UeXBlKTtcbiAgfVxuXG4gIHZpc2l0VHlwZVBhcmFtZXRlcihub2RlOiBUeXBlUGFyYW1ldGVyTm9kZSk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICBpZiAobm9kZS5leHRlbmRzVHlwZSkgdGhpcy52aXNpdChub2RlLmV4dGVuZHNUeXBlKTtcbiAgICBpZiAobm9kZS5kZWZhdWx0VHlwZSkgdGhpcy52aXNpdChub2RlLmRlZmF1bHRUeXBlKTtcbiAgfVxuXG4gIHZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obm9kZTogSWRlbnRpZmllckV4cHJlc3Npb24pOiB2b2lkIHt9XG5cbiAgdmlzaXRBcnJheUxpdGVyYWxFeHByZXNzaW9uKG5vZGU6IEFycmF5TGl0ZXJhbEV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICBub2RlLmVsZW1lbnRFeHByZXNzaW9ucy5tYXAoZSA9PiB7XG4gICAgICBpZiAoZSkgdGhpcy52aXNpdChlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZpc2l0T2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24obm9kZTogT2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICBpZiAobm9kZS52YWx1ZXMgJiYgbm9kZS5uYW1lcykge1xuICAgICAgYXNzZXJ0KG5vZGUudmFsdWVzLmxlbmd0aCA9PSBub2RlLm5hbWVzLmxlbmd0aCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUudmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMudmlzaXQobm9kZS5uYW1lc1tpXSk7XG4gICAgICAgIHRoaXMudmlzaXQobm9kZS52YWx1ZXNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZpc2l0QXNzZXJ0aW9uRXhwcmVzc2lvbihub2RlOiBBc3NlcnRpb25FeHByZXNzaW9uKTogdm9pZCB7XG4gICAgaWYgKG5vZGUudG9UeXBlKSB0aGlzLnZpc2l0KG5vZGUudG9UeXBlKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZXhwcmVzc2lvbik7XG4gIH1cblxuICB2aXNpdEJpbmFyeUV4cHJlc3Npb24obm9kZTogQmluYXJ5RXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5sZWZ0KTtcbiAgICB0aGlzLnZpc2l0KG5vZGUucmlnaHQpO1xuICB9XG5cbiAgdmlzaXRDYWxsRXhwcmVzc2lvbihub2RlOiBDYWxsRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5leHByZXNzaW9uKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUudHlwZUFyZ3VtZW50cyk7XG4gICAgdGhpcy52aXNpdChub2RlLmFyZ3VtZW50cyk7XG4gIH1cblxuICB2aXNpdENsYXNzRXhwcmVzc2lvbihub2RlOiBDbGFzc0V4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjbGFyYXRpb24pO1xuICB9XG5cbiAgdmlzaXRDb21tYUV4cHJlc3Npb24obm9kZTogQ29tbWFFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmV4cHJlc3Npb25zKTtcbiAgfVxuXG4gIHZpc2l0RWxlbWVudEFjY2Vzc0V4cHJlc3Npb24obm9kZTogRWxlbWVudEFjY2Vzc0V4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZWxlbWVudEV4cHJlc3Npb24pO1xuICAgIHRoaXMudmlzaXQobm9kZS5leHByZXNzaW9uKTtcbiAgfVxuXG4gIHZpc2l0RnVuY3Rpb25FeHByZXNzaW9uKG5vZGU6IEZ1bmN0aW9uRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5kZWNsYXJhdGlvbik7XG4gIH1cblxuICB2aXNpdExpdGVyYWxFeHByZXNzaW9uKG5vZGU6IExpdGVyYWxFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgLy8gbm9kZS5cbiAgfVxuXG4gIHZpc2l0RmxvYXRMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBGbG9hdExpdGVyYWxFeHByZXNzaW9uKTogdm9pZCB7fVxuXG4gIHZpc2l0SW5zdGFuY2VPZkV4cHJlc3Npb24obm9kZTogSW5zdGFuY2VPZkV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZXhwcmVzc2lvbik7XG4gICAgdGhpcy52aXNpdChub2RlLmlzVHlwZSk7XG4gIH1cblxuICB2aXNpdEludGVnZXJMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBJbnRlZ2VyTGl0ZXJhbEV4cHJlc3Npb24pOiB2b2lkIHt9XG5cbiAgdmlzaXRTdHJpbmdMaXRlcmFsKHN0cjogc3RyaW5nLCBzaW5nbGVRdW90ZWQ/OiBib29sZWFuKTogdm9pZCB7fVxuXG4gIHZpc2l0U3RyaW5nTGl0ZXJhbEV4cHJlc3Npb24obm9kZTogU3RyaW5nTGl0ZXJhbEV4cHJlc3Npb24pOiB2b2lkIHt9XG5cbiAgdmlzaXRSZWdleHBMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBSZWdleHBMaXRlcmFsRXhwcmVzc2lvbik6IHZvaWQge31cblxuICB2aXNpdE5ld0V4cHJlc3Npb24obm9kZTogTmV3RXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5leHByZXNzaW9uKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUudHlwZUFyZ3VtZW50cyk7XG4gICAgdGhpcy52aXNpdChub2RlLmFyZ3VtZW50cyk7XG4gIH1cblxuICB2aXNpdFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uKG5vZGU6IFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmV4cHJlc3Npb24pO1xuICB9XG5cbiAgdmlzaXRQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24obm9kZTogUHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLnByb3BlcnR5KTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZXhwcmVzc2lvbik7XG4gIH1cblxuICB2aXNpdFRlcm5hcnlFeHByZXNzaW9uKG5vZGU6IFRlcm5hcnlFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmNvbmRpdGlvbik7XG4gICAgdGhpcy52aXNpdChub2RlLmlmVGhlbik7XG4gICAgdGhpcy52aXNpdChub2RlLmlmRWxzZSk7XG4gIH1cblxuICB2aXNpdFVuYXJ5RXhwcmVzc2lvbihub2RlOiBVbmFyeUV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUub3BlcmFuZCk7XG4gIH1cblxuICB2aXNpdFVuYXJ5UG9zdGZpeEV4cHJlc3Npb24obm9kZTogVW5hcnlQb3N0Zml4RXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5vcGVyYW5kKTtcbiAgfVxuXG4gIHZpc2l0VW5hcnlQcmVmaXhFeHByZXNzaW9uKG5vZGU6IFVuYXJ5UHJlZml4RXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5vcGVyYW5kKTtcbiAgfVxuXG4gIHZpc2l0U3VwZXJFeHByZXNzaW9uKG5vZGU6IFN1cGVyRXhwcmVzc2lvbik6IHZvaWQge31cblxuICB2aXNpdEZhbHNlRXhwcmVzc2lvbihub2RlOiBGYWxzZUV4cHJlc3Npb24pOiB2b2lkIHt9XG5cbiAgdmlzaXRUcnVlRXhwcmVzc2lvbihub2RlOiBUcnVlRXhwcmVzc2lvbik6IHZvaWQge31cblxuICB2aXNpdFRoaXNFeHByZXNzaW9uKG5vZGU6IFRoaXNFeHByZXNzaW9uKTogdm9pZCB7fVxuXG4gIHZpc2l0TnVsbEV4cGVyc3Npb24obm9kZTogTnVsbEV4cHJlc3Npb24pOiB2b2lkIHt9XG5cbiAgdmlzaXRDb25zdHJ1Y3RvckV4cHJlc3Npb24obm9kZTogQ29uc3RydWN0b3JFeHByZXNzaW9uKTogdm9pZCB7fVxuXG4gIHZpc2l0Tm9kZUFuZFRlcm1pbmF0ZShzdGF0ZW1lbnQ6IFN0YXRlbWVudCk6IHZvaWQge31cblxuICB2aXNpdEJsb2NrU3RhdGVtZW50KG5vZGU6IEJsb2NrU3RhdGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy5kZXB0aCsrO1xuICAgIHRoaXMudmlzaXQobm9kZS5zdGF0ZW1lbnRzKTtcbiAgICB0aGlzLmRlcHRoLS07XG4gIH1cblxuICB2aXNpdEJyZWFrU3RhdGVtZW50KG5vZGU6IEJyZWFrU3RhdGVtZW50KTogdm9pZCB7XG4gICAgaWYgKG5vZGUubGFiZWwpIHtcbiAgICAgIHRoaXMudmlzaXQobm9kZS5sYWJlbCk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRDb250aW51ZVN0YXRlbWVudChub2RlOiBDb250aW51ZVN0YXRlbWVudCk6IHZvaWQge1xuICAgIGlmIChub2RlLmxhYmVsKSB7XG4gICAgICB0aGlzLnZpc2l0KG5vZGUubGFiZWwpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0Q2xhc3NEZWNsYXJhdGlvbihub2RlOiBDbGFzc0RlY2xhcmF0aW9uLCBpc0RlZmF1bHQ/OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xuICAgIHRoaXMuZGVwdGgrKztcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycyk7XG4gICAgYXNzZXJ0KFxuICAgICAgbm9kZS5pc0dlbmVyaWMgPyBub2RlLnR5cGVQYXJhbWV0ZXJzICE9IG51bGwgOiBub2RlLnR5cGVQYXJhbWV0ZXJzID09IG51bGxcbiAgICApO1xuICAgIGlmIChub2RlLmlzR2VuZXJpYykge1xuICAgICAgdGhpcy52aXNpdChub2RlLnR5cGVQYXJhbWV0ZXJzKTtcbiAgICB9XG4gICAgaWYgKG5vZGUuZXh0ZW5kc1R5cGUpIHtcbiAgICAgIHRoaXMudmlzaXQobm9kZS5leHRlbmRzVHlwZSk7XG4gICAgfVxuICAgIHRoaXMudmlzaXQobm9kZS5pbXBsZW1lbnRzVHlwZXMpO1xuICAgIHRoaXMudmlzaXQobm9kZS5tZW1iZXJzKTtcbiAgICB0aGlzLmRlcHRoLS07XG4gIH1cblxuICB2aXNpdERvU3RhdGVtZW50KG5vZGU6IERvU3RhdGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmNvbmRpdGlvbik7XG4gICAgdGhpcy52aXNpdChub2RlLnN0YXRlbWVudCk7XG4gIH1cblxuICB2aXNpdEVtcHR5U3RhdGVtZW50KG5vZGU6IEVtcHR5U3RhdGVtZW50KTogdm9pZCB7fVxuXG4gIHZpc2l0RW51bURlY2xhcmF0aW9uKG5vZGU6IEVudW1EZWNsYXJhdGlvbiwgaXNEZWZhdWx0PzogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycyk7XG4gICAgdGhpcy52aXNpdChub2RlLnZhbHVlcyk7XG4gIH1cblxuICB2aXNpdEVudW1WYWx1ZURlY2xhcmF0aW9uKG5vZGU6IEVudW1WYWx1ZURlY2xhcmF0aW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xuICAgIGlmIChub2RlLmluaXRpYWxpemVyKSB7XG4gICAgICB0aGlzLnZpc2l0KG5vZGUuaW5pdGlhbGl6ZXIpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0RXhwb3J0SW1wb3J0U3RhdGVtZW50KG5vZGU6IEV4cG9ydEltcG9ydFN0YXRlbWVudCk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZXh0ZXJuYWxOYW1lKTtcbiAgfVxuXG4gIHZpc2l0RXhwb3J0TWVtYmVyKG5vZGU6IEV4cG9ydE1lbWJlcik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5sb2NhbE5hbWUpO1xuICAgIHRoaXMudmlzaXQobm9kZS5leHBvcnRlZE5hbWUpO1xuICB9XG5cbiAgdmlzaXRFeHBvcnRTdGF0ZW1lbnQobm9kZTogRXhwb3J0U3RhdGVtZW50KTogdm9pZCB7XG4gICAgaWYgKG5vZGUucGF0aCkge1xuICAgICAgdGhpcy52aXNpdChub2RlLnBhdGgpO1xuICAgIH1cbiAgICB0aGlzLnZpc2l0KG5vZGUubWVtYmVycyk7XG4gIH1cblxuICB2aXNpdEV4cG9ydERlZmF1bHRTdGF0ZW1lbnQobm9kZTogRXhwb3J0RGVmYXVsdFN0YXRlbWVudCk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5kZWNsYXJhdGlvbik7XG4gIH1cblxuICB2aXNpdEV4cHJlc3Npb25TdGF0ZW1lbnQobm9kZTogRXhwcmVzc2lvblN0YXRlbWVudCk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5leHByZXNzaW9uKTtcbiAgfVxuXG4gIHZpc2l0RmllbGREZWNsYXJhdGlvbihub2RlOiBGaWVsZERlY2xhcmF0aW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xuICAgIGlmIChub2RlLnR5cGUpIHtcbiAgICAgIHRoaXMudmlzaXQobm9kZS50eXBlKTtcbiAgICB9XG4gICAgaWYgKG5vZGUuaW5pdGlhbGl6ZXIpIHtcbiAgICAgIHRoaXMudmlzaXQobm9kZS5pbml0aWFsaXplcik7XG4gICAgfVxuICAgIHRoaXMudmlzaXQobm9kZS5kZWNvcmF0b3JzKTtcbiAgfVxuXG4gIHZpc2l0Rm9yU3RhdGVtZW50KG5vZGU6IEZvclN0YXRlbWVudCk6IHZvaWQge1xuICAgIGlmIChub2RlLmluaXRpYWxpemVyKSB0aGlzLnZpc2l0KG5vZGUuaW5pdGlhbGl6ZXIpO1xuICAgIGlmIChub2RlLmNvbmRpdGlvbikgdGhpcy52aXNpdChub2RlLmNvbmRpdGlvbik7XG4gICAgaWYgKG5vZGUuaW5jcmVtZW50b3IpIHRoaXMudmlzaXQobm9kZS5pbmNyZW1lbnRvcik7XG4gICAgdGhpcy52aXNpdChub2RlLnN0YXRlbWVudCk7XG4gIH1cblxuICB2aXNpdEZ1bmN0aW9uRGVjbGFyYXRpb24oXG4gICAgbm9kZTogRnVuY3Rpb25EZWNsYXJhdGlvbixcbiAgICBpc0RlZmF1bHQ/OiBib29sZWFuXG4gICk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycyk7XG4gICAgaWYgKG5vZGUuaXNHZW5lcmljKSB7XG4gICAgICB0aGlzLnZpc2l0KG5vZGUudHlwZVBhcmFtZXRlcnMpO1xuICAgIH1cbiAgICB0aGlzLnZpc2l0KG5vZGUuc2lnbmF0dXJlKTtcbiAgICB0aGlzLmRlcHRoKys7XG4gICAgaWYgKG5vZGUuYm9keSkgdGhpcy52aXNpdChub2RlLmJvZHkpO1xuICAgIHRoaXMuZGVwdGgtLTtcbiAgfVxuXG4gIHZpc2l0RnVuY3Rpb25Db21tb24obm9kZTogRnVuY3Rpb25EZWNsYXJhdGlvbik6IHZvaWQge1xuICAgIC8vIHRoaXMudmlzaXQobm9kZS5uYW1lKVxuICB9XG5cbiAgdmlzaXRJZlN0YXRlbWVudChub2RlOiBJZlN0YXRlbWVudCk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5jb25kaXRpb24pO1xuICAgIHRoaXMudmlzaXQobm9kZS5pZlRydWUpO1xuICAgIGlmIChub2RlLmlmRmFsc2UpIHRoaXMudmlzaXQobm9kZS5pZkZhbHNlKTtcbiAgfVxuXG4gIHZpc2l0SW1wb3J0RGVjbGFyYXRpb24obm9kZTogSW1wb3J0RGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZm9yZWlnbk5hbWUpO1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycyk7XG4gIH1cblxuICB2aXNpdEltcG9ydFN0YXRlbWVudChub2RlOiBJbXBvcnRTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAobm9kZS5uYW1lc3BhY2VOYW1lKSB0aGlzLnZpc2l0KG5vZGUubmFtZXNwYWNlTmFtZSk7XG4gICAgdGhpcy52aXNpdChub2RlLmRlY2xhcmF0aW9ucyk7XG4gIH1cblxuICB2aXNpdEluZGV4U2lnbmF0dXJlRGVjbGFyYXRpb24obm9kZTogSW5kZXhTaWduYXR1cmVEZWNsYXJhdGlvbik6IHZvaWQge1xuICAgIC8vIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICAvLyB0aGlzLnZpc2l0KG5vZGUua2V5VHlwZSk7XG4gICAgLy8gdGhpcy52aXNpdChub2RlLnZhbHVlVHlwZSk7XG4gIH1cblxuICB2aXNpdEludGVyZmFjZURlY2xhcmF0aW9uKFxuICAgIG5vZGU6IEludGVyZmFjZURlY2xhcmF0aW9uLFxuICAgIGlzRGVmYXVsdD86IGJvb2xlYW5cbiAgKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xuICAgIGlmIChub2RlLmlzR2VuZXJpYykge1xuICAgICAgdGhpcy52aXNpdChub2RlLnR5cGVQYXJhbWV0ZXJzKTtcbiAgICB9XG4gICAgdGhpcy52aXNpdChub2RlLmltcGxlbWVudHNUeXBlcyk7XG4gICAgaWYgKG5vZGUuZXh0ZW5kc1R5cGUpIHRoaXMudmlzaXQobm9kZS5leHRlbmRzVHlwZSk7XG4gICAgdGhpcy5kZXB0aCsrO1xuICAgIHRoaXMudmlzaXQobm9kZS5tZW1iZXJzKTtcbiAgICB0aGlzLmRlcHRoLS07XG4gIH1cblxuICB2aXNpdE1ldGhvZERlY2xhcmF0aW9uKG5vZGU6IE1ldGhvZERlY2xhcmF0aW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xuICAgIGlmIChub2RlLmlzR2VuZXJpYykge1xuICAgICAgdGhpcy52aXNpdChub2RlLnR5cGVQYXJhbWV0ZXJzKTtcbiAgICB9XG4gICAgdGhpcy52aXNpdChub2RlLnNpZ25hdHVyZSk7XG4gICAgdGhpcy52aXNpdChub2RlLmRlY29yYXRvcnMpO1xuICAgIHRoaXMuZGVwdGgrKztcbiAgICBpZiAobm9kZS5ib2R5KSB0aGlzLnZpc2l0KG5vZGUuYm9keSk7XG4gICAgdGhpcy5kZXB0aC0tO1xuICB9XG5cbiAgdmlzaXROYW1lc3BhY2VEZWNsYXJhdGlvbihcbiAgICBub2RlOiBOYW1lc3BhY2VEZWNsYXJhdGlvbixcbiAgICBpc0RlZmF1bHQ/OiBib29sZWFuXG4gICk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycyk7XG4gICAgdGhpcy52aXNpdChub2RlLm1lbWJlcnMpO1xuICB9XG5cbiAgdmlzaXRSZXR1cm5TdGF0ZW1lbnQobm9kZTogUmV0dXJuU3RhdGVtZW50KTogdm9pZCB7XG4gICAgaWYgKG5vZGUudmFsdWUpIHRoaXMudmlzaXQobm9kZS52YWx1ZSk7XG4gIH1cblxuICB2aXNpdFN3aXRjaENhc2Uobm9kZTogU3dpdGNoQ2FzZSk6IHZvaWQge1xuICAgIGlmIChub2RlLmxhYmVsKSB0aGlzLnZpc2l0KG5vZGUubGFiZWwpO1xuICAgIHRoaXMudmlzaXQobm9kZS5zdGF0ZW1lbnRzKTtcbiAgfVxuXG4gIHZpc2l0U3dpdGNoU3RhdGVtZW50KG5vZGU6IFN3aXRjaFN0YXRlbWVudCk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5jb25kaXRpb24pO1xuICAgIHRoaXMuZGVwdGgrKztcbiAgICB0aGlzLnZpc2l0KG5vZGUuY2FzZXMpO1xuICAgIHRoaXMuZGVwdGgtLTtcbiAgfVxuXG4gIHZpc2l0VGhyb3dTdGF0ZW1lbnQobm9kZTogVGhyb3dTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUudmFsdWUpO1xuICB9XG5cbiAgdmlzaXRUcnlTdGF0ZW1lbnQobm9kZTogVHJ5U3RhdGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLnN0YXRlbWVudHMpO1xuICAgIGlmIChub2RlLmNhdGNoVmFyaWFibGUpIHRoaXMudmlzaXQobm9kZS5jYXRjaFZhcmlhYmxlKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuY2F0Y2hTdGF0ZW1lbnRzKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZmluYWxseVN0YXRlbWVudHMpO1xuICB9XG5cbiAgdmlzaXRUeXBlRGVjbGFyYXRpb24obm9kZTogVHlwZURlY2xhcmF0aW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xuICAgIHRoaXMudmlzaXQobm9kZS5kZWNvcmF0b3JzKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUudHlwZSk7XG4gICAgdGhpcy52aXNpdChub2RlLnR5cGVQYXJhbWV0ZXJzKTtcbiAgfVxuXG4gIHZpc2l0VmFyaWFibGVEZWNsYXJhdGlvbihub2RlOiBWYXJpYWJsZURlY2xhcmF0aW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xuICAgIGlmIChub2RlLnR5cGUpIHRoaXMudmlzaXQobm9kZS50eXBlKTtcbiAgICBpZiAobm9kZS5pbml0aWFsaXplcikgdGhpcy52aXNpdChub2RlLmluaXRpYWxpemVyKTtcbiAgfVxuXG4gIHZpc2l0VmFyaWFibGVTdGF0ZW1lbnQobm9kZTogVmFyaWFibGVTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycyk7XG4gICAgdGhpcy52aXNpdChub2RlLmRlY2xhcmF0aW9ucyk7XG4gIH1cblxuICB2aXNpdFdoaWxlU3RhdGVtZW50KG5vZGU6IFdoaWxlU3RhdGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmNvbmRpdGlvbik7XG4gICAgdGhpcy5kZXB0aCsrO1xuICAgIHRoaXMudmlzaXQobm9kZS5zdGF0ZW1lbnQpO1xuICAgIHRoaXMuZGVwdGgtLTtcbiAgfVxuXG4gIHZpc2l0Vm9pZFN0YXRlbWVudChub2RlOiBWb2lkU3RhdGVtZW50KTogdm9pZCB7fVxuXG4gIHZpc2l0Q29tbWVudChub2RlOiBDb21tZW50Tm9kZSk6IHZvaWQge31cblxuICB2aXNpdERlY29yYXRvck5vZGUobm9kZTogRGVjb3JhdG9yTm9kZSk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuYXJndW1lbnRzKTtcbiAgfVxuXG4gIHZpc2l0UGFyYW1ldGVyKG5vZGU6IFBhcmFtZXRlck5vZGUpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XG4gICAgaWYgKG5vZGUuaW1wbGljaXRGaWVsZERlY2xhcmF0aW9uKSB7XG4gICAgICB0aGlzLnZpc2l0KG5vZGUuaW1wbGljaXRGaWVsZERlY2xhcmF0aW9uKTtcbiAgICB9XG4gICAgaWYgKG5vZGUuaW5pdGlhbGl6ZXIpIHRoaXMudmlzaXQobm9kZS5pbml0aWFsaXplcik7XG4gICAgdGhpcy52aXNpdChub2RlLnR5cGUpO1xuICB9XG5cblxufVxuIl19