import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrayitems',
  templateUrl: './arrayitems.component.html',
  styleUrls: ['./arrayitems.component.css']
})
export class ArrayitemsComponent implements OnInit {
  items = [];
  constructor() { 
    this.items = ['Class Room', 'Dorm', 'Cafe', 'Library'];
  }

  ngOnInit() {

    
  }

}
