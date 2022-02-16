import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relay-on3',
  templateUrl: './relay-on3.component.html',
  styleUrls: ['./relay-on3.component.css']
})
export class RelayOn3Component implements OnInit {
relayOn3 = [
    {
      image: 'assets/images/innerpage/Serperior.png',
      field: 'Serperior',
      fieldText: 'Grass/Dragon',
      link: `https://bulbapedia.bulbagarden.net/wiki/Serperior_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Victini.png',
      field: 'Victini',
      fieldText: 'Fire/Psychic',
      link: `https://bulbapedia.bulbagarden.net/wiki/Victini_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Whiscash.png',
      field: 'Whiscash',
      fieldText: 'Water/Ground',
      link: `https://bulbapedia.bulbagarden.net/wiki/Whiscash_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Hariyama.png',
      field: 'Hariyama',
      fieldText: 'Fighting',
      link: `https://bulbapedia.bulbagarden.net/wiki/Hariyama_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Rotom.png',
      field: 'Rotom',
      fieldText: 'Electric/Ghost',
      link: `https://bulbapedia.bulbagarden.net/wiki/Rotom_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Bouffalant.png',
      field: 'Bouffalant',
      fieldText: 'Normal',
      link: `https://bulbapedia.bulbagarden.net/wiki/Bouffalant_(Pokémon)`,
    }];
  constructor() { }

  ngOnInit(): void {
  }

}
