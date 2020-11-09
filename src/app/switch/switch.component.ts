import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent  {

  constructor() { }

    // Switch
    value_switch = ()=>{
      console.log({'value_switch': true ? 1 : false})
    }
}
