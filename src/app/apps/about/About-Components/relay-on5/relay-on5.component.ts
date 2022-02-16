import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relay-on5',
  templateUrl: './relay-on5.component.html',
  styleUrls: ['./relay-on5.component.css']
})
export class RelayOn5Component implements OnInit {
relayOn5 = [
    {
      image: 'assets/images/innerpage/Swampert.png',
      field: 'Swampert',
      fieldText: 'Water/Ground',
      link: `https://bulbapedia.bulbagarden.net/wiki/Swampert_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Infernape.png',
      field: 'Infernape',
      fieldText: 'Fighting/Fire',
      link: `https://bulbapedia.bulbagarden.net/wiki/Infernape_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Serperior.png',
      field: 'Serperior',
      fieldText: 'Grass/Ground',
      link: `https://bulbapedia.bulbagarden.net/wiki/Serperior_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Swoobat.png',
      field: 'Swoobat',
      fieldText: 'Psychic/Flying',
      link: `https://bulbapedia.bulbagarden.net/wiki/Swoobat_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Eelektross.png',
      field: 'Eelektross',
      fieldText: 'Electric',
      link: `https://bulbapedia.bulbagarden.net/wiki/Eelektross_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Skuntank.png',
      field: 'Skuntank',
      fieldText: 'Poison/Dark',
      link: `https://bulbapedia.bulbagarden.net/wiki/Skuntank_(Pokémon)`,
    }];
  constructor() { }

  ngOnInit(): void {
  }

}
