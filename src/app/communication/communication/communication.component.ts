import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces'

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent implements OnInit {

// articles
articles: Article[] = [
  {name: "Pomme", price: 2.99},
  {name: "Salade", price: 1.80},
  {name: "T-shirt", price: 5.00}
  ];

  subtotals: number[]= [] ;

  constructor() { }

  ngOnInit(): void {
  }

  UdpateSubTotals(){
    // console.log("Mon enfant me parle");
    // this.total = 100;
    
  }


}
