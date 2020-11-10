import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleOrderComponent } from './article-order/article-order.component';
import { CommunicationComponent } from './communication/communication.component';



@NgModule({
  declarations: [ArticleListComponent, ArticleOrderComponent, CommunicationComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ArticleListComponent, ArticleOrderComponent, CommunicationComponent
  ]
})
export class CommunicationModule { }
