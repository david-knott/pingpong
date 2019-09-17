"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameEnv = /** @class */ (function () {
    function GameEnv() {
        this.width = 780;
        this.height = 580;
        this.playerOneScore = 0;
        this.playerTwoScore = 0;
        this.gameObjects = new Array();
    }
    GameEnv.prototype.setBat1 = function (bat1) {
        this.bat1 = bat1;
        this.registerGameObject(this.bat1);
    };
    GameEnv.prototype.setBat2 = function (bat2) {
        this.bat2 = bat2;
        this.bat2.x = 780;
        this.registerGameObject(this.bat2);
    };
    GameEnv.prototype.setCourt = function (court) {
        this.court = court;
        this.registerGameObject(this.court);
    };
    GameEnv.prototype.setBall = function (ball) {
        this.ball = ball;
        this.registerGameObject(this.ball);
    };
    /**
     * Tracks ball to ensure it is in play, tots up scores when a players misses a s
     **/
    GameEnv.prototype.keepBallInCourt = function () {
        if (this.ball.x > this.width) {
            this.playerOneScore++;
            this.ball.reboundX();
        }
        if (this.ball.x < 0) {
            this.playerTwoScore++;
            this.ball.reboundX();
        }
        if (this.ball.y > this.height || this.ball.y < 0) {
            this.ball.reboundY();
        }
    };
    GameEnv.prototype.registerGameObject = function (gameObject) {
        this.gameObjects.push(gameObject);
    };
    GameEnv.prototype.detectCollisions = function () {
        for (var i = 1; i < this.gameObjects.length; i++) {
            for (var j = i + 1; j < this.gameObjects.length; j++) {
                var one = this.gameObjects[i].getBoundingBox();
                var two = this.gameObjects[j].getBoundingBox();
                if (one === null || two === null)
                    continue;
                if (one.collides(two)) {
                    this.gameObjects[i].onCollision(this.gameObjects[j]);
                }
            }
        }
    };
    /**
     * Main game loop.
     * @param ticks
     */
    GameEnv.prototype.loop = function (ticks, canvas, context) {
        context.save();
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.restore();
        this.keepBallInCourt();
        this.detectCollisions();
        this.gameObjects.forEach(function (go) {
            go.draw(ticks, context);
        });
    };
    return GameEnv;
}());
exports.GameEnv = GameEnv;
//# sourceMappingURL=game-env.model.js.map