import { Component } from '@angular/core';

const CNT_INIT_VAL : number =0;

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count: number = CNT_INIT_VAL;
  constructor() { };

  increment() {
    this.count++;
    if (this.count == 10) this.count = CNT_INIT_VAL;
  }
}
