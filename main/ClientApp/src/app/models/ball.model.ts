import { GameObject } from "./game-object.model";
import { BoundingBox } from "./bounding-box.model";

export class Ball extends GameObject {
  private x: number;
  private y: number;
  private width: number;
  private height: number;
  private velocity: number;
  constructor() {
    super();
    this.x = 0;
    this.y = 0;
    this.width = 10;
    this.height = 10;
    this.velocity = 1;
  }

  getVelocity() {
    return this.velocity;
  }

  getBoundingBox(): Array<BoundingBox> {
    let bb = new Array<BoundingBox>();
    bb.push(new BoundingBox(this.x, this.y, this.width, this.height));
    return bb;
  }

  draw(ticks: number, context: CanvasRenderingContext2D) {
    context.save();
    this.x+= this.getVelocity();
    context.fillRect(this.x /*x*/, this.y /*y*/, this.width/*w*/, this.height/*h*/);
    context.restore();
  }

}
