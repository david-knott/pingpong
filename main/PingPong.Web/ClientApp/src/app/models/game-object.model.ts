import { BoundingBox } from "./bounding-box.model";
import { MoveEvent } from "./move-event.model";


interface ILiteEvent<T> {
  on(handler: { (data?: T): void }): void;
  off(handler: { (data?: T): void }): void;
}

class LiteEvent<T> implements ILiteEvent<T> {
  private handlers: { (data?: T): void; }[] = [];

  public on(handler: { (data?: T): void }): void {
    this.handlers.push(handler);
  }

  public off(handler: { (data?: T): void }): void {
    this.handlers = this.handlers.filter(h => h !== handler);
  }

  public trigger(data?: T) {
    this.handlers.slice(0).forEach(h => h(data));
  }

  public expose(): ILiteEvent<T> {
    return this;
  }
}


export abstract class GameObject {

  protected readonly onMove = new LiteEvent<MoveEvent>();

  public get moved() { return this.onMove.expose(); }

  public title: string;

  getTitle(): string {
    return this.title;
  }

  abstract onCollision(go: GameObject): void;

  abstract getBoundingBox(): BoundingBox;

  abstract draw(ticks: number, context: CanvasRenderingContext2D);

  abstract move();

  abstract getName(): string;

}


