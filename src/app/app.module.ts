import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { SwitchComponent } from './switch/switch.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CommunicationModule } from './communication/communication.module';



@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    SwitchComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommunicationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
