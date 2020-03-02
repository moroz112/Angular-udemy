import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameCount = new EventEmitter<number>();
  intervalRef;
  gameInterval = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onGameStart() {
    this.intervalRef = setInterval(() => {
      this.gameCount.emit(this.gameInterval);
      this.gameInterval++;
    }, 1000);
  }

  onGameStop() {
    clearInterval(this.intervalRef);
  }

}
