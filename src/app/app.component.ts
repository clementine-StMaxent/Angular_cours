import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // propriétés
  title: string = "App Component";

  // méthodes
  constructor() {
    console.log("constructor executed");

  }
}
