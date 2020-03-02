import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigment4',
  templateUrl: './assigment4.component.html',
  styleUrls: ['./assigment4.component.css']
})
export class Assigment4Component implements OnInit {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onAddGameCount(gameNumber: number) {
    if (gameNumber % 2) {
      this.oddNumbers.push(gameNumber);
    } else {
      this.evenNumbers.push(gameNumber);
    }
  }
}
