import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoundingBox } from './bounding-box.model';

describe('BoundingBox', () => {

  it('should detect no collision', async(() => {
    let boundingBox1 = new BoundingBox(0, 0, 1, 1);
    let boundingBox2 = new BoundingBox(2, 2, 1, 1);
    expect(boundingBox1.collides(boundingBox2)).toBeFalsy();
  }));


  it('should detect simple collision', async(() => {
    let boundingBox1 = new BoundingBox(0, 0, 2, 2);
    let boundingBox2 = new BoundingBox(1, 1, 3, 3);
    expect(boundingBox2.collides(boundingBox1)).toBeTruthy();
  }));


  it('should detect exact collision', async(() => {
    let boundingBox1 = new BoundingBox(0, 0, 2, 2);
    let boundingBox2 = new BoundingBox(0, 0, 2, 2);
    expect(boundingBox2.collides(boundingBox1)).toBeTruthy();
  }));


  it('should detect another collision', async(() => {
    let boundingBox1 = new BoundingBox(0, 0, 10, 10);
    let boundingBox2 = new BoundingBox(0, 0, 1000, 1000);
    expect(boundingBox2.collides(boundingBox1)).toBeTruthy();
  }));


});
