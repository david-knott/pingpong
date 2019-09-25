import { HostListener, Component, Renderer2, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { Ball } from '../models/ball.model';
import { Bat } from '../models/bat.model';
import { Court } from '../models/court.model';
import { GameEnv } from '../models/game-env.model';
import { Document } from './document';
import { SignalRService } from '../services/signal-r.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  @ViewChild('myCanvas') myCanvas: ElementRef;
  public context: CanvasRenderingContext2D;
  public x: number = 0;
  public y: number = 0;
  private desiredFPS = 70;
  private lastTime = 0;
  public playerOneScore: number = 0;
  private bat1: Bat;
  public gameEnv: GameEnv;

  constructor(
    public signalRService: SignalRService,
    private renderer: Renderer2  ) {
    this.gameEnv = new GameEnv();
  }

  ngOnInit() {
    this.signalRService.startConnection();
    this.signalRService.addBroadcastChartDataListener();
   // this.startHttpRequest();
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
    this.mainLoop();
    this.drawingLoop();

    //start the animation
 //   this.startAnimate();
  }


  mainLoop() {
    let me = this;
    (function innerLoop() {
      me.gameEnv.moveLoop(0);
      // all of your game ﻿logic goes here, moving characters' positions, checking inputs, etc...
      // I guess it's proper to put all drawing to ﻿"off ﻿screen" ﻿canvases here too.  ...
var d = new Document();
      me.signalRService.broadcastGametData([d]);

      setTimeout(innerLoop, 1000 / me.desiredFPS);
    })();
  }

  drawingLoop() {
    let me = this;
    (function animationLoop(time) {
      var dt = time - me.lastTime;
      me.lastTime = time;
      me.gameEnv.drawLoop(dt, me.myCanvas.nativeElement, me.context);
      const id = requestAnimationFrame(animationLoop);

    })(0);
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'a')
      this.bat1.moveUp();
    if (event.key === 'z')
      this.bat1.moveDown();
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardStopEvent(event: KeyboardEvent): void {
    this.bat1.stop();
  }

}
