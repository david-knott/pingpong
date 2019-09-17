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
var game_object_model_1 = require("./game-object.model");
var bounding_box_model_1 = require("./bounding-box.model");
var Court = /** @class */ (function (_super) {
    __extends(Court, _super);
    function Court() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.width = 780;
        _this.height = 580;
        return _this;
    }
    Court.prototype.getBoundingBox = function () {
        return new bounding_box_model_1.BoundingBox(10, 0, 100, 100);
    };
    Court.prototype.onCollision = function (go) {
        console.log('court collision with ' + go.getName());
    };
    Court.prototype.getName = function () {
        return "Court";
    };
    Court.prototype.draw = function (ticks, context) {
        //   context.save();
        context.beginPath();
        context.fillRect(0, 0, 1, this.height + 20);
        context.rect(0 /*x*/, 0 /*y*/, this.width + 20, this.height + 20);
        context.stroke();
        // context.restore();
    };
    return Court;
}(game_object_model_1.GameObject));
exports.Court = Court;
//# sourceMappingURL=court.model.js.map