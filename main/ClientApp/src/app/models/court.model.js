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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Court.prototype.getBoundingBox = function () {
        /* return [[
           [this.x, this.y],
           [this.x + this.width, this.y],
           [this.x + this.width, this.y + this.height],
           [this.x, this.y + this.height]
         ]];*/
        var bb = new Array();
        //    bb.push(new BoundingBox(0, 0, 1, 600));
        bb.push(new bounding_box_model_1.BoundingBox(100, 0, 1, 600));
        //    bb.push(new BoundingBox(0, 600, 800, 1));
        //  bb.push(new BoundingBox(799, 0, 1, 600));
        return bb;
    };
    Court.prototype.draw = function (ticks, context) {
        context.save();
        //pitch border
        context.beginPath();
        context.fillRect(100, 0, 1, 600);
        context.rect(0 /*x*/, 0 /*y*/, 800, 600);
        context.stroke();
        context.restore();
        //pitch center line
        //   context.save();
        //    context.beginPath();
        //  context.moveTo(20, 20);
        //context.lineTo(20, 100);
        //  context.lineTo(70, 100);
        // context.strokeStyle = "red";
        //  context.stroke();
        //  context.restore();
    };
    return Court;
}(game_object_model_1.GameObject));
exports.Court = Court;
//# sourceMappingURL=court.model.js.map