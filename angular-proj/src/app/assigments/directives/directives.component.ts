import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  public isRevealedDetails = false;
  public buttonName = 'Reveal button';
  public logs = [];

  constructor() { }

  ngOnInit(): void {
  }

  changeRevealDetails() {
    if (this.isRevealedDetails) {
      this.isRevealedDetails = false;
      this.buttonName = 'reveal button';
    } else {
      this.buttonName = 'hide info';
      this.isRevealedDetails = true;
    }

    this.logs.push(new Date().getTime());
  }

}
