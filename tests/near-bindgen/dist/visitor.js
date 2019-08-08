"use strict";
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
// export type Collection<T> = NonNullCollection<T>| null;
var isIterable = function (object) {
    //@ts-ignore
    return object != null && typeof object[Symbol.iterator] === "function";
};
var DefaultWriter = /** @class */ (function () {
    function DefaultWriter() {
    }
    DefaultWriter.prototype.writeString = function (s) { };
    DefaultWriter.prototype.writeNode = function (node) { };
    return DefaultWriter;
}());
exports.DefaultWriter = DefaultWriter;
var AbstractVisitor = /** @class */ (function () {
    function AbstractVisitor(writer) {
        if (writer === void 0) { writer = new DefaultWriter(); }
        this.writer = writer;
    }
    AbstractVisitor.prototype.writeString = function (str) {
        return this.writeString(str);
    };
    AbstractVisitor.prototype.writeNode = function (item) {
        this.writer.writeNode(item);
    };
    AbstractVisitor.prototype.visit = function (node) {
        var _this = this;
        var e_1, _a, e_2, _b;
        if (node == null)
            return;
        if (node instanceof Array) {
            node.map(function (node) { return _this.visit(node); });
        }
        else if (node instanceof Map) {
            try {
                for (var _c = __values(node.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var _e = __read(_d.value, 2), key = _e[0], _node = _e[1];
                    this.visit(_node);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
            //@ts-ignore Need a better way to test type
        }
        else if (isIterable(item)) {
            try {
                //TODO: Find better way to test if iterable
                for (var node_1 = __values(node), node_1_1 = node_1.next(); !node_1_1.done; node_1_1 = node_1.next()) {
                    var _node = node_1_1.value;
                    this.visit(_node);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (node_1_1 && !node_1_1.done && (_b = node_1.return)) _b.call(node_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        else {
            //@ts-ignore Node is not iterable.
            return this._visit(node);
        }
    };
    return AbstractVisitor;
}());
exports.AbstractVisitor = AbstractVisitor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy92aXNpdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSwwREFBMEQ7QUFFMUQsSUFBTSxVQUFVLEdBQUcsVUFBQyxNQUFjO0lBQ2hDLFlBQVk7SUFDWixPQUFBLE1BQU0sSUFBSSxJQUFJLElBQUksT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLFVBQVU7QUFBL0QsQ0FBK0QsQ0FBQztBQU9sRTtJQUFBO0lBSUEsQ0FBQztJQUhDLG1DQUFXLEdBQVgsVUFBWSxDQUFTLElBQVUsQ0FBQztJQUNoQyxpQ0FBUyxHQUFULFVBQVUsSUFBbUIsSUFBUyxDQUFDO0lBRXpDLG9CQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7QUFKWSxzQ0FBYTtBQVExQjtJQUVFLHlCQUFzQixNQUEwQztRQUExQyx1QkFBQSxFQUFBLGFBQXdCLGFBQWEsRUFBSztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFvQztJQUFHLENBQUM7SUFFcEUscUNBQVcsR0FBWCxVQUFZLEdBQVc7UUFDckIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxtQ0FBUyxHQUFULFVBQVUsSUFBbUI7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELCtCQUFLLEdBQUwsVUFBTSxJQUEwQjtRQUFoQyxpQkFrQkM7O1FBakJDLElBQUksSUFBSSxJQUFJLElBQUk7WUFBRSxPQUFPO1FBQ3pCLElBQUksSUFBSSxZQUFZLEtBQUssRUFBRTtZQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBTyxJQUFXLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO1NBQy9DO2FBQU0sSUFBSSxJQUFJLFlBQVksR0FBRyxFQUFFOztnQkFDOUIsS0FBeUIsSUFBQSxLQUFBLFNBQUEsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBLGdCQUFBLDRCQUFFO29CQUFoQyxJQUFBLHdCQUFZLEVBQVgsV0FBRyxFQUFFLGFBQUs7b0JBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ25COzs7Ozs7Ozs7WUFDRCwyQ0FBMkM7U0FDNUM7YUFBTSxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTs7Z0JBQ3pCLDJDQUEyQztnQkFDN0MsS0FBa0IsSUFBQSxTQUFBLFNBQUEsSUFBSSxDQUFBLDBCQUFBLDRDQUFFO29CQUFuQixJQUFJLEtBQUssaUJBQUE7b0JBQ1YsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDckI7Ozs7Ozs7OztTQUNGO2FBQU07WUFDTCxrQ0FBa0M7WUFDbEMsT0FBUSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQztJQUtILHNCQUFDO0FBQUQsQ0FBQyxBQW5DRCxJQW1DQztBQW5DcUIsMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCB0eXBlIENvbGxlY3Rpb248VD4gPSBUIHwgVFtdIHwgTWFwPHN0cmluZywgVCB8IFRbXSB8IEl0ZXJhYmxlPFQ+PiB8IEl0ZXJhYmxlPFQ+O1xuLy8gZXhwb3J0IHR5cGUgQ29sbGVjdGlvbjxUPiA9IE5vbk51bGxDb2xsZWN0aW9uPFQ+fCBudWxsO1xuXG5jb25zdCBpc0l0ZXJhYmxlID0gKG9iamVjdDogb2JqZWN0KTogYm9vbGVhbiA9PlxuICAvL0B0cy1pZ25vcmVcbiAgb2JqZWN0ICE9IG51bGwgJiYgdHlwZW9mIG9iamVjdFtTeW1ib2wuaXRlcmF0b3JdID09PSBcImZ1bmN0aW9uXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgV3JpdGVyPFQ+IHtcbiAgd3JpdGVTdHJpbmcoeDogQ29sbGVjdGlvbjxUPiB8IHN0cmluZyk6IHZvaWQ7XG4gIHdyaXRlTm9kZSh4OiBDb2xsZWN0aW9uPFQ+KTogdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIERlZmF1bHRXcml0ZXI8VD4gaW1wbGVtZW50cyBXcml0ZXI8VD4ge1xuICB3cml0ZVN0cmluZyhzOiBzdHJpbmcpOiB2b2lkIHsgfVxuICB3cml0ZU5vZGUobm9kZTogQ29sbGVjdGlvbjxUPik6IHZvaWQge31cblxufVxuXG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0VmlzaXRvcjxUPiB7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHdyaXRlcjogV3JpdGVyPFQ+ID0gbmV3IERlZmF1bHRXcml0ZXI8VD4oKSkge31cblxuICB3cml0ZVN0cmluZyhzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMud3JpdGVTdHJpbmcoc3RyKTtcbiAgfVxuXG4gIHdyaXRlTm9kZShpdGVtOiBDb2xsZWN0aW9uPFQ+ICk6IHZvaWQge1xuICAgIHRoaXMud3JpdGVyLndyaXRlTm9kZShpdGVtKTtcbiAgfVxuXG4gIHZpc2l0KG5vZGU6IENvbGxlY3Rpb248VD4gfCBudWxsKTogdm9pZCB7XG4gICAgaWYgKG5vZGUgPT0gbnVsbCkgcmV0dXJuO1xuICAgIGlmIChub2RlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIG5vZGUubWFwKChub2RlOiBUKTogdm9pZCA9PiB0aGlzLnZpc2l0KG5vZGUpKTtcbiAgICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBNYXApIHtcbiAgICAgIGZvciAobGV0IFtrZXksIF9ub2RlXSBvZiBub2RlLmVudHJpZXMoKSkge1xuICAgICAgICB0aGlzLnZpc2l0KF9ub2RlKTtcbiAgICAgIH1cbiAgICAgIC8vQHRzLWlnbm9yZSBOZWVkIGEgYmV0dGVyIHdheSB0byB0ZXN0IHR5cGVcbiAgICB9IGVsc2UgaWYgKGlzSXRlcmFibGUoaXRlbSkpIHtcbiAgICAgICAgLy9UT0RPOiBGaW5kIGJldHRlciB3YXkgdG8gdGVzdCBpZiBpdGVyYWJsZVxuICAgICAgZm9yIChsZXQgX25vZGUgb2Ygbm9kZSkge1xuICAgICAgICAgIHRoaXMudmlzaXQoX25vZGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvL0B0cy1pZ25vcmUgTm9kZSBpcyBub3QgaXRlcmFibGUuXG4gICAgICByZXR1cm4gIHRoaXMuX3Zpc2l0KG5vZGUpO1xuICAgIH1cbiAgfVxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgX3Zpc2l0KG5vZGU6IFQpOiB2b2lkO1xuXG4gIGFic3RyYWN0IHN0YXJ0KCk6IHZvaWQ7XG5cbn0iXX0=