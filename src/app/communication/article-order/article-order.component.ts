import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-order',
  templateUrl: './article-order.component.html',
  styleUrls: ['./article-order.component.css']
})
export class ArticleOrderComponent implements OnInit {

  @Input() subtotals: number[] = [ ];

  total : number = 0 ;

  constructor() { }

  ngOnInit(): void {
  }


}
