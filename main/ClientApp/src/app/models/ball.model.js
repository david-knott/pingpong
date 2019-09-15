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
var Ball = /** @class */ (function (_super) {
    __extends(Ball, _super);
    function Ball() {
        var _this = _super.call(this) || this;
        _this.x = 0;
        _this.y = 0;
        _this.width = 10;
        _this.height = 10;
        _this.velocity = 1;
        return _this;
    }
    Ball.prototype.getVelocity = function () {
        return this.velocity;
    };
    Ball.prototype.getBoundingBox = function () {
        var bb = new Array();
        bb.push(new bounding_box_model_1.BoundingBox(this.x, this.y, this.width, this.height));
        return bb;
    };
    Ball.prototype.draw = function (ticks, context) {
        context.save();
        this.x += this.getVelocity();
        context.fillRect(this.x /*x*/, this.y /*y*/, this.width /*w*/, this.height /*h*/);
        context.restore();
    };
    return Ball;
}(game_object_model_1.GameObject));
exports.Ball = Ball;
//# sourceMappingURL=ball.model.js.map