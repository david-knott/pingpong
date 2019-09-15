//src/app/models/gameobject.model.ts
import { GameObjectPosition } from "./game-object-position.model";
import { BoundingBox } from "./bounding-box.model";

export abstract class GameObject {

  public title: string;

  getTitle(): string {
    return this.title;
  }

  abstract getBoundingBox(): Array<BoundingBox>;

  abstract draw(ticks: number, context: CanvasRenderingContext2D);
}
