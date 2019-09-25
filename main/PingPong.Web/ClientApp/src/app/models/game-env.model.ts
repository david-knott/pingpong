//src/app/models/gameobject.model.ts
import { GameObject } from "./game-object.model";
import { Court } from "./court.model";
import { Ball } from "./ball.model";
import { Bat } from "./bat.model";

export class GameEnv {

  private gameObjects: Array<GameObject>;
  private court: Court;
  private ball: Ball;
  private bat1: Bat;
  private bat2: Bat;
  private width: number = 780;
  private height: number = 580;
  public playerOneScore: number = 0;
  public playerTwoScore: number = 0;

  constructor() {
    this.gameObjects = new Array<GameObject>();
  }

  /**
   * Stores a reference to game object. This is used
   * for collision detection and for redrawing the objects
   * in the main game loop.
   * @param gameObject
   */
  private registerGameObject(gameObject: GameObject) {
    this.gameObjects.push(gameObject);
  }

  setBat1(bat1: Bat): void {
    this.bat1 = bat1;
    this.registerGameObject(this.bat1);
  }

  setBat2(bat2: Bat): void {
    this.bat2 = bat2;
    this.bat2.x = 780;
    //make bat2 follow the ball
    this.ball.moved.on((ge) => {
      this.bat2.y = ge.y;
   });
    this.registerGameObject(this.bat2);
  }

  setCourt(court: Court): void {
    this.court = court;
    this.registerGameObject(this.court);
  }

  setBall(ball: Ball): void {
    this.ball = ball;
    this.registerGameObject(this.ball);
  }

  /**
   * Tracks ball to ensure it is in play, tots up scores when a players misses a s
   **/
  private keepBallInCourt() {
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
  }

  /**
   * Detects collisions between 2 game objects. Uses bounding rectangles
   **/
  detectCollisions(): void {
    for (let i = 1; i < this.gameObjects.length; i++) {
      for (let j = i + 1; j < this.gameObjects.length; j++) {
        var one = this.gameObjects[i].getBoundingBox();
        var two = this.gameObjects[j].getBoundingBox();
        if (one === null || two === null)
          continue;
        if (one.collides(two)) {
          this.gameObjects[i].onCollision(this.gameObjects[j]);
        }
      }
    }
  }

  /**
   * Move game loop.
   * @param ticks
   */
  public moveLoop(ticks: number): void {
    this.keepBallInCourt();
    this.detectCollisions();
    this.gameObjects.forEach((go) => {
      go.move();
    });


  }

  /**
   * Draw game loop.
   * @param ticks
   */
  public drawLoop(ticks: number, canvas: any, context: CanvasRenderingContext2D): void {
  //  context.save();
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
  //  context.restore();
    this.gameObjects.forEach((go) => {
      go.draw(ticks, context);
  
    });
  }
}
