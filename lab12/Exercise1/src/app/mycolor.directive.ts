import { Directive, Renderer, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {

  colors = [];
  index = 0;
  constructor(
    private renderer: Renderer,
    private el: ElementRef
  ) { 
    this.colors = ['red', 'green', 'blue', 'pink', 'yellow', 'brown'];
    //this.index = 0;
  }

  @HostListener('click') onclick(){
    this.changeColor();
  }

  // Event method to be called on mouse enter and on mouse leave
    changeColor(){    
    // Mouse click  
      this.renderer.setElementStyle(this.el.nativeElement, 'color', this.colors[this.index]);
      
      if (this.index == this.colors.length)
        this.index = 0;
      else
        this.index = this.index + 1;
    
}

}
