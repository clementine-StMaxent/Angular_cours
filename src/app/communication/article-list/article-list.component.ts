import { Component, Input, OnInit } from '@angular/core';
import {Article} from '../interfaces';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  @Input() articles: Article[];
  total : number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onChange(event:any, price: number) {
    let value = event.target.value;
    if(value != "")this.total = (value * price);
    console.log(this.total);
  }

}
