import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relay-on8',
  templateUrl: './relay-on8.component.html',
  styleUrls: ['./relay-on8.component.css']
})
export class RelayOn8Component implements OnInit {
relayOn8 = [
    {
      image: 'assets/images/innerpage/Xatu.png',
      field: 'Xatu',
      fieldText: 'Flying/Psychic',
      link: `https://bulbapedia.bulbagarden.net/wiki/Xatu_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Venusaur.png',
      field: 'Venusaur',
      fieldText: 'Grass/Poison',
      link: `https://bulbapedia.bulbagarden.net/wiki/Venusaur_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Druddigon.png',
      field: 'Druddigon (Customized)',
      fieldText: 'Dragon',
      link: `https://bulbapedia.bulbagarden.net/wiki/Druddigon_(Pokémon)`,
    },
   {
      image: 'assets/images/innerpage/Greninja.png',
      field: 'Greninja',
      fieldText: 'Water/Dark',
      link: `https://bulbapedia.bulbagarden.net/wiki/Greninja_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Volcarona.png',
      field: 'Volcarona',
      fieldText: 'Bug/Fire',
      link: `https://bulbapedia.bulbagarden.net/wiki/Volcarona_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Dugtrio.png',
      field: 'Dugtrio (Customized)',
      fieldText: 'Ground',
      link: `https://bulbapedia.bulbagarden.net/wiki/Dugtrio_(Pokémon)`,
    }];
  constructor() { }

  ngOnInit(): void {
  }

}
