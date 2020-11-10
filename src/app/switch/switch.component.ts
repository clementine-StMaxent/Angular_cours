import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent  {

  text:"oui" | "non" = "oui"
  isOff: boolean = false


  constructor() { }

    // Switch
    value_switch = ()=>{
      console.log({'value_switch': true ? 1 : false})

      if(this.isOff = this.text === "oui"){
        this.text = "non"

      }else{
        this.text = "oui"
      }
      console.log(this.text)
    }


}
