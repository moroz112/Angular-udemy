import { Component, EventEmitter, OnInit, Output, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation: ViewEncapsulation.Emulated // ViewEncapsulation.None; ViewEncapsulation.Native
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() bluePrintsCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @ViewChild('newServerContentInput', { static: true }) newServerContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(newServerNameInput: HTMLInputElement) {
    this.serverCreated.emit({ serverName: newServerNameInput.value, serverContent: this.newServerContentInput.nativeElement.value });
  }

  onAddBlueprint(newServerNameInput: HTMLInputElement) {
    this.bluePrintsCreated.emit({ serverName: newServerNameInput.value, serverContent: this.newServerContentInput.nativeElement.value });
  }

}
