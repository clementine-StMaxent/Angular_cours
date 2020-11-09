import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  test : string = "https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/beaute/cheveux/questions/faut-il-vraiment-se-couper-les-cheveux-un-soir-de-pleine-lune-3864771/93183235-4-fre-FR/Faut-il-vraiment-se-couper-les-cheveux-un-soir-de-pleine-lune.jpg";

  gallerie : string[] = [
    "https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/beaute/cheveux/questions/faut-il-vraiment-se-couper-les-cheveux-un-soir-de-pleine-lune-3864771/93183235-4-fre-FR/Faut-il-vraiment-se-couper-les-cheveux-un-soir-de-pleine-lune.jpg",
    "https://lh3.googleusercontent.com/proxy/b_7ps1GbYt-8mrTbY2b9Qf2sf38tqEStIaG4JAwW2gNO3W4RI0Bekn0FIBTkYniJcpUJTT_6BRQdcVLADt46KnSa7I7W",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSE4Z8PUzPgBpebGcwj_9b1BzHxJUi9TLwpJw&usqp=CAU",
    "https://cdn-s-www.dna.fr/images/7FB3EF87-3140-4755-BC05-134691FD3D8F/NW_raw/au-fil-des-six-missions-apollo-qui-ont-ete-sur-la-lune-leurs-astronautes-ont-laisse-toutes-sortes-d-objets-a-la-surface-de-notre-satellite-photo-nasa-1562239999.jpg"
  ]
  iterator : number = 0;

  constructor() {
    setInterval(()=>{
      this.defilement();
    },3000)
  }


  defilement(){
    if(this.iterator ==3){
      this.iterator =0;
    }
    else{
      this.iterator++;
    }
  }


}