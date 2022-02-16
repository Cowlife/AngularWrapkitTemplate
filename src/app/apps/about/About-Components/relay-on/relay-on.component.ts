import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relay-on',
  templateUrl: './relay-on.component.html',
  styleUrls: ['./relay-on.component.css']
})
export class RelayOnComponent implements OnInit {

  relayOn = [
    {
      image: 'assets/images/innerpage/Meganium.png',
      field: 'Meganium',
      fieldText: 'Grass',
      link: `https://bulbapedia.bulbagarden.net/wiki/Meganium_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Jynx.png',
      field: 'Jynx',
      fieldText: 'Ice/Psychic',
      link: `https://bulbapedia.bulbagarden.net/wiki/Meganium_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Marowak.png',
      field: 'Marowak',
      fieldText: 'Ground',
      link: `https://bulbapedia.bulbagarden.net/wiki/Marowak_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Hitmonlee.png',
      field: 'Hitmonlee',
      fieldText: 'Fighting',
      link: `https://bulbapedia.bulbagarden.net/wiki/Hitmonlee_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Rotom_(Heat_Rotom).png',
      field: 'Rotom - Oven Form',
      fieldText: 'Fire/Electric',
      link: `https://bulbapedia.bulbagarden.net/wiki/Rotom_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Blissey.png',
      field: 'Blissey',
      fieldText: 'Normal',
      link: `https://bulbapedia.bulbagarden.net/wiki/Blissey_(Pokémon)`,
    }];

  constructor() { }

  ngOnInit(): void {
  }

}
