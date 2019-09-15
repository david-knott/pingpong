import { Component, Renderer2 } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { Ball } from '../models/ball.model';
import { Bat } from '../models/bat.model';
import { Court } from '../models/court.model';
import { GameEnv } from '../models/game-env.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  @ViewChild('myCanvas') myCanvas: ElementRef;
  public context: CanvasRenderingContext2D;
  public x: number = 0;
  public y: number = 0;
  private gameEnv: GameEnv;
  constructor(
    private renderer: Renderer2
  ) { }


  ngAfterViewInit(): void {
    this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
    this.renderer.setStyle(this.myCanvas.nativeElement, 'width', 800);
    this.renderer.setStyle(this.myCanvas.nativeElement, 'height', 600);

    this.gameEnv = new GameEnv();
      //the court
    var court = new Court();
    this.gameEnv.registerGameObject(court);

    //create new ball model.
    var ball = new Ball();
    this.gameEnv.registerGameObject(ball);

    this.animate();
  }

  animate(): void {
    let me = this;
    function animationLoop() {
      const id = requestAnimationFrame(animationLoop);
      me.gameEnv.loop(id, me.myCanvas.nativeElement , me.context);
    }
    animationLoop();
  }
}
