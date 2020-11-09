import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // propriétés
  title: string = "App Component";
  name : string = "Clem";
  lastName : string = "St-Max"
  paragraphText: string = "Simple paragraphe"

  image = {
    src : "assets/image/attack-on-titan.jpg",
    alt : ""
  };

  // méthodes
  constructor() {
    console.log("constructor executed");
    // setTimeout(()=> this.updateUI(), 3000)
  }

  updateUI(){
    this.title += " updated !"
    this.name

    this.image.src="assets/image/l-attaque-des-titans-manga-2020-pika-edition.jpg"
  }
}
