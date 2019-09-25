"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LiteEvent = /** @class */ (function () {
    function LiteEvent() {
        this.handlers = [];
    }
    LiteEvent.prototype.on = function (handler) {
        this.handlers.push(handler);
    };
    LiteEvent.prototype.off = function (handler) {
        this.handlers = this.handlers.filter(function (h) { return h !== handler; });
    };
    LiteEvent.prototype.trigger = function (data) {
        this.handlers.slice(0).forEach(function (h) { return h(data); });
    };
    LiteEvent.prototype.expose = function () {
        return this;
    };
    return LiteEvent;
}());
var GameObject = /** @class */ (function () {
    function GameObject() {
        this.onMove = new LiteEvent();
    }
    Object.defineProperty(GameObject.prototype, "moved", {
        get: function () { return this.onMove.expose(); },
        enumerable: true,
        configurable: true
    });
    GameObject.prototype.getTitle = function () {
        return this.title;
    };
    return GameObject;
}());
exports.GameObject = GameObject;
//# sourceMappingURL=game-object.model.js.map