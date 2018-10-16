import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <section>
  <p>Compenent Counter Value: {{value}}</p>
  <div>
  <button (click)="decr()"> - </button>
  {{value}}
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
export class AppComponent {
  value = 0;
  decr() {
    this.value = this.value - 1;
  }
  incr() {
    this.value = this.value + 1;
  }
}
