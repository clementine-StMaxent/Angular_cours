import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleOrderComponent } from './article-order/article-order.component';



@NgModule({
  declarations: [ArticleListComponent, ArticleOrderComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ArticleListComponent, ArticleOrderComponent
  ]
})
export class CommunicationModule { }
