"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BoundingBox = /** @class */ (function () {
    function BoundingBox(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    BoundingBox.prototype.collides = function (other) {
        if (other === null)
            return false;
        var a = {
            x1: this.x,
            y1: this.y,
            x2: this.x + this.w,
            y2: this.y + this.h
        };
        var b = {
            x1: other.x,
            y1: other.y,
            x2: other.x + other.w,
            y2: other.y + other.h
        };
        if (a.x1 <= b.x2 && a.x2 >= b.x1 && a.y1 <= b.y2 && a.y2 >= b.y1)
            return true;
        return false;
    };
    return BoundingBox;
}());
exports.BoundingBox = BoundingBox;
//# sourceMappingURL=bounding-box.model.js.map