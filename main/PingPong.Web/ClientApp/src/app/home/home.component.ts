import { HostListener, Component, Renderer2 } from '@angular/core';
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
  public playerOneScore: number = 0;
  private bat1: Bat;
  public gameEnv: GameEnv;
  constructor(
    private renderer: Renderer2
  ) {
    this.gameEnv = new GameEnv();
  }

  public getPlayerOneScore(): number {
    return this.gameEnv ? this.gameEnv.playerOneScore : 0;
  }

  public getPlayerTwoScore(): number {
    return this.gameEnv ? this.gameEnv.playerTwoScore : 0;
  }

  ngAfterViewInit(): void {
    this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
    this.renderer.setStyle(this.myCanvas.nativeElement, 'width', 800);
    this.renderer.setStyle(this.myCanvas.nativeElement, 'height', 600);
      //the court
    var court = new Court();
    this.gameEnv.setCourt(court);
    //create new ball model.
    var ball = new Ball();
    this.gameEnv.setBall(ball);
    //tell the court to watch the ball
    this.bat1 = new Bat();
    this.gameEnv.setBat1(this.bat1);
    let bat2 = new Bat();
    this.gameEnv.setBat2(bat2);
    //start the animation
    this.animate();
  }


  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'a')
      this.bat1.moveUp();
    else
      this.bat1.moveDown();
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
