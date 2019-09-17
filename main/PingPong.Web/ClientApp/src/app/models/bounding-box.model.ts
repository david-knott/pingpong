
export class BoundingBox {

  private x: number;
  private y: number;
  private w: number;
  private h: number;

  constructor(x: number, y: number, w: number, h: number) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  collides(other: BoundingBox): boolean {
    if (other === null)
      return false;
    let a = {
      x1: this.x,
      y1: this.y,
      x2: this.x + this.w,
      y2: this.y + this.h
    };
    let b = {
      x1: other.x,
      y1: other.y,
      x2: other.x + other.w,
      y2: other.y + other.h
    };
    if (a.x1 <= b.x2 && a.x2 >= b.x1 && a.y1 <= b.y2 && a.y2 >= b.y1)
      return true;
    return false;
  }
}
