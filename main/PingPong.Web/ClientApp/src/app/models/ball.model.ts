import { GameObject } from "./game-object.model";
import { BoundingBox } from "./bounding-box.model";

export class Ball extends GameObject {
  
  public x: number;
  public y: number;
  public width: number;
  public height: number;
  private velocityX: number;
  private velocityY: number;

  constructor() {
    super();
    this.x = 0;
    this.y = 0;
    this.width = 20;
    this.height = 20;
    this.velocityX = 4;
    this.velocityY = 4;
  }

  reboundX() {
    this.velocityX = this.velocityX * -1;
  }

  reboundY() {
    this.velocityY = this.velocityY * -1;
  }

  getVelocityX() {
    return this.velocityX;
  }

  getVelocityY() {
    return this.velocityY;
  }

  getName(): string {
    return "Ball";
  }

  getBoundingBox(): BoundingBox {
    return new BoundingBox(this.x, this.y, this.width, this.height);
  }

  onCollision(go: GameObject): void {
    console.log('ball collision @ (' + this.x + ',' + this.y + ') with ' + go.getName());
    this.reboundX();
  }

  draw(ticks: number, context: CanvasRenderingContext2D) {
   // context.save();
    this.x += this.getVelocityX();
    this.y += this.getVelocityY();
    context.fillRect(this.x /*x*/, this.y /*y*/, this.width/*w*/, this.height/*h*/);
   // context.restore();
  }

}
