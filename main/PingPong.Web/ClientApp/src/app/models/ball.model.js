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
var move_event_model_1 = require("./move-event.model");
var Ball = /** @class */ (function (_super) {
    __extends(Ball, _super);
    function Ball() {
        var _this = _super.call(this) || this;
        _this.x = 0;
        _this.y = 0;
        _this.width = 20;
        _this.height = 20;
        _this.velocityX = 4;
        _this.velocityY = 4;
        return _this;
    }
    Ball.prototype.move = function () {
        this.x += this.getVelocityX();
        this.y += this.getVelocityY();
        this.onMove.trigger(new move_event_model_1.MoveEvent(this.x, this.y));
    };
    Ball.prototype.reboundX = function () {
        this.velocityX = this.velocityX * -1;
    };
    Ball.prototype.reboundY = function () {
        this.velocityY = this.velocityY * -1;
    };
    Ball.prototype.getVelocityX = function () {
        return this.velocityX;
    };
    Ball.prototype.getVelocityY = function () {
        return this.velocityY;
    };
    Ball.prototype.getName = function () {
        return "Ball";
    };
    Ball.prototype.getBoundingBox = function () {
        return new bounding_box_model_1.BoundingBox(this.x, this.y, this.width, this.height);
    };
    Ball.prototype.onCollision = function (go) {
        this.reboundX();
    };
    Ball.prototype.draw = function (ticks, context) {
        // context.save();
        context.fillRect(this.x /*x*/, this.y /*y*/, this.width /*w*/, this.height /*h*/);
        // context.restore();
    };
    return Ball;
}(game_object_model_1.GameObject));
exports.Ball = Ball;
//# sourceMappingURL=ball.model.js.map