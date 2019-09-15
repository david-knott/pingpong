
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

    /*
    if ((this.x + this.w < other.x) && (this.y + this.h < other.y))
      return false;
    if ((other.x + other.w < this.x) && (other.y + other.h < this.y))
      return false;
    //check if the boxes maybe coincide..
    if (this.x)
    */
    let l1 = {
      x: this.x,
      y: this.y
    };
    let r1 = {
      x: this.x + this.w,
      y: this.y + this.h
    };
    let l2 = {
      x: other.x,
      y: other.y
    };
    let r2 = {
      x: other.x + other.w,
      y: other.y + other.h
    };


    console.log('l1');
    console.log(l1);
    console.log('l2');
    console.log(l2);
    
    // If one rectangle is on left side of other 
    if (l1.x > r2.x || l2.x > r1.x)
      return false;

    // If one rectangle is above other 
    if (l1.y < r2.y || l2.y < r1.y)
      return false;


    return true; 
  }

}
