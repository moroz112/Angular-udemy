import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-elemm',
  templateUrl: './server-elemm.component.html',
  styleUrls: ['./server-elemm.component.css']
})
export class ServerElemmComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy {
  // @Input() element: {type: string, name: string, content: string};
  @Input() name: string;
  @ContentChild('serverElementContent', { static: true }) serverElementContent: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  // fires one time after constructor
  ngOnInit() {
    console.log('ngOnInit called');
    console.log('Text content' + this.serverElementContent.nativeElement.textContent);
  }

  // fires every time when input values(@Input) of component changes
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log('ngOnChanges', changes);
  }

  // fires every time when template MIGHT be changed
  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  // fires only once after doCheck when content(ng-content) init
  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
    console.log('Text content' + this.serverElementContent.nativeElement.textContent);
  }

  // fires every time doCheck has been fired
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  // fires every time after 'ngAfterContentInit'
  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
  }

  // fires every time after 'ngAfterContentChecked'
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
}
