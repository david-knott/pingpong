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
var Bat = /** @class */ (function (_super) {
    __extends(Bat, _super);
    function Bat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.x = 0;
        _this.y = 100;
        _this.width = 20;
        _this.height = 100;
        _this.velocityY = 0;
        return _this;
    }
    Bat.prototype.draw = function (ticks, context) {
        context.fillRect(this.x /*x*/, this.y /*y*/, this.width, this.height);
    };
    Bat.prototype.onCollision = function (go) {
    };
    Bat.prototype.getBoundingBox = function () {
        return new bounding_box_model_1.BoundingBox(this.x, this.y, this.width, this.height);
    };
    Bat.prototype.move = function () {
        if (this.y > 500)
            this.y = 500;
        else if (this.y < 0)
            this.y = 0;
        else {
            this.y += this.velocityY;
        }
    };
    Bat.prototype.moveUp = function () {
        this.velocityY = -9;
    };
    Bat.prototype.moveDown = function () {
        this.velocityY = +9;
    };
    Bat.prototype.stop = function () {
        this.velocityY = 0;
    };
    Bat.prototype.getName = function () {
        return "Bat";
    };
    return Bat;
}(game_object_model_1.GameObject));
exports.Bat = Bat;
//# sourceMappingURL=bat.model.js.map