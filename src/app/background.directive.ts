import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBackground]',
  standalone: true
})
export class BackgroundDirective implements OnInit{

  @HostBinding('style.backgroundColor') myBackgroundColor:string='';

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
  }

  @HostListener('mouseenter') mouseEnterEvent (eventData:Event) {
    this.myBackgroundColor = 'yellow';
    this.renderer.addClass(this.elRef.nativeElement, 'large-text');
  }

  @HostListener('mouseleave') mouseLeaveEvent (eventData:Event) {
    this.myBackgroundColor = 'transparent';
    this.renderer.removeClass(this.elRef.nativeElement, 'large-text');
  }

}
