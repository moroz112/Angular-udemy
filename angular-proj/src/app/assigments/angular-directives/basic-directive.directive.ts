import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBasicDirective]'
})
export class BasicDirectiveDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';

  constructor(private elemRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover() {
    // this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave() {
    // this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
  }
}
