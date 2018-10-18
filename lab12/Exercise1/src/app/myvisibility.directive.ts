import { Directive, Input, ElementRef, Renderer,HostListener } from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective {
  constructor(
    private renderer: Renderer,
    private el: ElementRef
  ) { }

  // @HostListener('mouseenter') onmouseenter(){
  //   this.hover(true);
  // }

  // @HostListener('mouseleave') onmouseleave(){
  //   this.hover(false);
  // }

  @Input() set appMyvisibility(shouldHide: boolean){
    if(shouldHide){
    // Mouse enter   
      this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
    } else {
// Mouse leave           
      this.renderer.setElementStyle(this.el.nativeElement, 'display', 'inline');
    }
}

//   // Event method to be called on mouse enter and on mouse leave
//   hover(shouldHide: boolean){
//     if(shouldHide){
//     // Mouse enter   
//       this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
//     } else {
// // Mouse leave           
//       this.renderer.setElementStyle(this.el.nativeElement, 'display', 'block');
//     }
// }

}
