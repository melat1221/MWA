import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <section>
    <p>Compenent Counter Value: {{counterValue}}</p>
      <div>
        <button (click)="decr()"> - </button>
           {{counterValue}}
         <button (click)="incr()"> + </button>
      </div>
  </section>
  `,
  styles: [`
  section {border: 2px solid green;  box-sizing: border-box; width: 30%; padding: 15px;}
  p {display:inline}
  div {border: 1px solid red;display:inline; margin-left:70px; box-sizing: border-box;width: 20%; padding: 5px;}
 
  `]
})
export class CounterComponent {
  @Input() counterValue: number;
  @Output() eventClick = new EventEmitter();

  decr() {
    this.eventClick.emit(-1);
  }
  incr() {
    this.eventClick.emit(1);
  }

}
