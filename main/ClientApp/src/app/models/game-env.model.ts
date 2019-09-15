//src/app/models/gameobject.model.ts
import { GameObject } from "./game-object.model";

interface ILiteEvent<T> {
  on(handler: { (data1?: T, data2?: T): void }): void;
  off(handler: { (data1?: T, data2?: T): void }): void;
}

class LiteEvent<T> implements ILiteEvent<T> {
  private handlers: { (data1?: T, data2?: T): void; }[] = [];

  public on(handler: { (data1?: T, data2?: T): void }): void {
    this.handlers.push(handler);
  }

  public off(handler: { (data1?: T, data2?: T): void }): void {
    this.handlers = this.handlers.filter(h => h !== handler);
  }

  public trigger(data1?: T, data2?: T) {
    this.handlers.slice(0).forEach(h => h(data1, data2));
  }

  public expose(): ILiteEvent<T> {
    return this;
  }
}

export class GameEnv {

  private gameObjects: Array<GameObject>;
  private readonly onCollision = new LiteEvent<GameObject>();


  constructor() {
    this.gameObjects = new Array<GameObject>();
  }

  registerGameObject(gameObject: GameObject) {
    this.gameObjects.push(gameObject);
  }

  deregisterGameObject(gameObject: GameObject) {
    var idx = -1;
    if ((idx = this.gameObjects.indexOf(gameObject)) !== -1) {
      this.gameObjects = this.gameObjects.splice(idx, 1);
    }
  }

  detectCollisions(): void {
    for (let i = 0; i < this.gameObjects.length; i++) {
      for (let j = 1; j < this.gameObjects.length; j++) {
        var one = this.gameObjects[i].getBoundingBox();
        var two = this.gameObjects[j].getBoundingBox();
        for (let k = 0; k < one.length; k++) {
          for (let l = 0; l < two.length; l++) {
            if (one[k].collides(two[l])) {
              console.log('collision');
            }
          }
        }
      }
    }
  }

  /**
   * Main game loop.
   * @param ticks
   */
  loop(ticks: number, canvas: any, context: CanvasRenderingContext2D): void {
    context.save();
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.restore();
    this.gameObjects.forEach((go) => {
      this.detectCollisions();
      go.draw(ticks, context);

    });
  }
}
