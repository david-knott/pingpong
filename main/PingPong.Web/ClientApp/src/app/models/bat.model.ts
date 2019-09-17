import { GameObject } from "./game-object.model";
import { BoundingBox } from "./bounding-box.model";

export class Bat extends GameObject {

  public x: number = 0;
  public y: number = 100;
  public width: number = 20;
  public height: number = 100;
  private velocityY: number = 25;

  draw(ticks: number, context: CanvasRenderingContext2D) {
    context.fillRect(this.x /*x*/, this.y /*y*/, this.width, this.height);
  }

  onCollision(go: GameObject): void {
  }

  getBoundingBox(): BoundingBox {
    return new BoundingBox(this.x, this.y, this.width, this.height);
  }

  public moveUp(): void {
    if (this.y < 0)
      this.y = 0
    else if (this.y > 500)
      this.y = 500;
    else
      this.y -= this.velocityY;
  }

  public moveDown(): void {
    if (this.y < 0)
      this.y = 0
    else if (this.y > 500)
      this.y = 500;
    else
      this.y += this.velocityY;
  }

  getName(): string {
    return "Bat";
  }
}
