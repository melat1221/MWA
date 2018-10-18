import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective {

  // constructor(private element: ElementRef) { 
  //   //element.nativeElement.style.texttransform = 'uppercase';
  //   element.nativeElement.style.fontSize = '22px';
  // }

  constructor(private element: ElementRef) { 
    element.nativeElement.style.textTransform = 'uppercase';
    //element.nativeElement.style.fontSize = '22px';
  }

}
