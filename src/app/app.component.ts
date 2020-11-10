import { Component } from '@angular/core';

interface Image {
  src: string;
  alt: string;
}

interface Student {
  name: string;
  grade: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // propriétés
  title: string = "App Component";
  name: string = "Clem";
  lastName: string = "St-Max"
  paragraphText: string = "Simple paragraphe"

  image: Image = {
    src: "assets/image/attack-on-titan.jpg",
    alt: ""
  };

  // students

  students: string[] = ["Noémie", "Umberto", "Thomas"]; //itérable, boucle

  students2: Student[] = [
    { name: "Noémie", grade: 18 },
    { name: "Umerto", grade: 5 },
    { name: "Thomas", grade: 10 }
  ];

  color: string = "green";

  

  // méthodes
  constructor() {
    console.log("constructor executed");
    // setTimeout(()=> this.updateUI(), 3000)
  }

  updateUI() {
    this.title += " updated !"
    this.name

    this.image.src = "assets/image/l-attaque-des-titans-manga-2020-pika-edition.jpg"
  }

}
