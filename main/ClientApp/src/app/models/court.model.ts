import { GameObject } from "./game-object.model";
import { BoundingBox } from "./bounding-box.model";

export class Court extends GameObject {

  getBoundingBox(): Array<BoundingBox> {
    /* return [[
       [this.x, this.y],
       [this.x + this.width, this.y],
       [this.x + this.width, this.y + this.height],
       [this.x, this.y + this.height]
     ]];*/
    let bb = new Array<BoundingBox>();
//    bb.push(new BoundingBox(0, 0, 1, 600));
    bb.push(new BoundingBox(100, 0, 1, 600));
//    bb.push(new BoundingBox(0, 600, 800, 1));
  //  bb.push(new BoundingBox(799, 0, 1, 600));
    return bb;
  }

  draw(ticks: number, context: CanvasRenderingContext2D) {

    context.save();
    //pitch border
    context.beginPath();
    context.fillRect(100, 0, 1, 600)
    context.rect(0 /*x*/, 0 /*y*/, 800, 600);
    context.stroke();
    context.restore();

    //pitch center line
 //   context.save();
//    context.beginPath();
  //  context.moveTo(20, 20);
    //context.lineTo(20, 100);
  //  context.lineTo(70, 100);
   // context.strokeStyle = "red";
  //  context.stroke();
  //  context.restore();

  }
}
