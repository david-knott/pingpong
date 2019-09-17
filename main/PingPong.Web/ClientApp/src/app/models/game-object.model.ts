import { BoundingBox } from "./bounding-box.model";

export abstract class GameObject {

  public title: string;

  getTitle(): string {
    return this.title;
  }

  abstract onCollision(go: GameObject): void;

  abstract getBoundingBox(): BoundingBox;

  abstract draw(ticks: number, context: CanvasRenderingContext2D);

  abstract getName(): string;
}


