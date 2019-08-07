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
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = require("./base");
var visitor_1 = require("./visitor");
var Transformer = /** @class */ (function (_super) {
    __extends(Transformer, _super);
    function Transformer(parser, writer) {
        if (writer === void 0) { writer = new visitor_1.DefaultWriter(); }
        return _super.call(this, parser, writer) || this;
    }
    Object.defineProperty(Transformer.prototype, "program", {
        get: function () {
            return this.parser.program;
        },
        enumerable: true,
        configurable: true
    });
    return Transformer;
}(base_1.BaseVisitor));
exports.Transformer = Transformer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsK0JBQXFDO0FBQ3JDLHFDQUFrRDtBQUVsRDtJQUEwQywrQkFBVztJQUtqRCxxQkFBWSxNQUFjLEVBQUUsTUFBZ0Q7UUFBaEQsdUJBQUEsRUFBQSxhQUEyQix1QkFBYSxFQUFRO2VBQ3hFLGtCQUFNLE1BQU0sRUFBRSxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUxELHNCQUFJLGdDQUFPO2FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBS0wsa0JBQUM7QUFBRCxDQUFDLEFBVEQsQ0FBMEMsa0JBQVcsR0FTcEQ7QUFUcUIsa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwiYXNzZW1ibHlzY3JpcHQvY2xpL3RyYW5zZm9ybVwiO1xuaW1wb3J0IHsgUGFyc2VyLCBFeHBvcnRzV2Fsa2VyLCBQcm9ncmFtLCBOb2RlIH0gZnJvbSBcImFzc2VtYmx5c2NyaXB0XCI7XG5pbXBvcnQgeyBCYXNlVmlzaXRvciB9IGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgeyBEZWZhdWx0V3JpdGVyLCBXcml0ZXIgfSBmcm9tICcuL3Zpc2l0b3InO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVmlzaXRvciB7XG5cbiAgICBnZXQgcHJvZ3JhbSgpOiBQcm9ncmFtIHtcbiAgICAgIHJldHVybiB0aGlzLnBhcnNlci5wcm9ncmFtO1xuICAgIH1cbiAgICBjb25zdHJ1Y3RvcihwYXJzZXI6IFBhcnNlciwgd3JpdGVyOiBXcml0ZXI8Tm9kZT4gPSBuZXcgRGVmYXVsdFdyaXRlcjxOb2RlPigpKSB7XG4gICAgICAgIHN1cGVyKHBhcnNlciwgd3JpdGVyKTtcbiAgICB9XG5cbn1cbiJdfQ==