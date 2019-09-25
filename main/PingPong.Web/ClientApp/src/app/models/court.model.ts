import { GameObject } from "./game-object.model";
import { BoundingBox } from "./bounding-box.model";
import { Ball } from "./ball.model";

export class Court extends GameObject {

  private width: number = 780;
  private height: number = 580;

  public move(): void {

  }

  getBoundingBox(): BoundingBox {
    return new BoundingBox(10, 0, 100, 100);
  }

  onCollision(go: GameObject): void {
//    console.log('court collision with ' + go.getName());
  }

  getName(): string {
    return "Court";
  }

  draw(ticks: number, context: CanvasRenderingContext2D) {
    context.beginPath();
    context.fillRect(0, 0, 1, this.height + 20)
    context.rect(0 /*x*/, 0 /*y*/, this.width + 20, this.height + 20);
    context.stroke();
  }
}
