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
        /*
        if ((this.x + this.w < other.x) && (this.y + this.h < other.y))
          return false;
        if ((other.x + other.w < this.x) && (other.y + other.h < this.y))
          return false;
        //check if the boxes maybe coincide..
        if (this.x)
        */
        var l1 = {
            x: this.x,
            y: this.y
        };
        var r1 = {
            x: this.x + this.w,
            y: this.y + this.h
        };
        var l2 = {
            x: other.x,
            y: other.y
        };
        var r2 = {
            x: other.x + other.w,
            y: other.y + other.h
        };
        console.log('l1');
        console.log(l1);
        console.log('l2');
        console.log(l2);
        // If one rectangle is on left side of other 
        if (l1.x > r2.x || l2.x > r1.x)
            return false;
        // If one rectangle is above other 
        if (l1.y < r2.y || l2.y < r1.y)
            return false;
        return true;
    };
    return BoundingBox;
}());
exports.BoundingBox = BoundingBox;
//# sourceMappingURL=bounding-box.model.js.map