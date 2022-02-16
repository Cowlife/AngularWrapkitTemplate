import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relay-on6',
  templateUrl: './relay-on6.component.html',
  styleUrls: ['./relay-on6.component.css']
})
export class RelayOn6Component implements OnInit {
relayOn6 = [
    {
      image: 'assets/images/innerpage/Dugtrio.png',
      field: 'Dugtrio',
      fieldText: 'Ground',
      link: `https://bulbapedia.bulbagarden.net/wiki/Dugtrio_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Qwilfish.png',
      field: 'Quilfish',
      fieldText: 'Water/Poison',
      link: `https://bulbapedia.bulbagarden.net/wiki/Quilfish_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Chimecho.png',
      field: 'Chimecho',
      fieldText: 'Psychic',
      link: `https://bulbapedia.bulbagarden.net/wiki/Chimecho_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Infernape.png',
      field: 'Infernape',
      fieldText: 'Fire/Fighting',
      link: `https://bulbapedia.bulbagarden.net/wiki/Infernape_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Rotom_(Frost_Rotom).png',
      field: 'Rotom - Fridge Form',
      fieldText: 'Ice/Electric',
      link: `https://bulbapedia.bulbagarden.net/wiki/Rotom_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Purugly.png',
      field: 'Purugly',
      fieldText: 'Normal',
      link: `https://bulbapedia.bulbagarden.net/wiki/Purugly_(Pokémon)`,
    }];
  constructor() { }

  ngOnInit(): void {
  }

}
