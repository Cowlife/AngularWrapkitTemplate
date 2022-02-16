import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relay-on9',
  templateUrl: './relay-on9.component.html',
  styleUrls: ['./relay-on9.component.css']
})
export class RelayOn9Component implements OnInit {
relayOn9 = [
    {
      image: 'assets/images/innerpage/Slowking.png',
      field: 'Slowking',
      fieldText: 'Water/Psychic',
      link: `https://bulbapedia.bulbagarden.net/wiki/Xatu_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Bisharp.png',
      field: 'Bisharp',
      fieldText: 'Steel/Dark',
      link: `https://bulbapedia.bulbagarden.net/wiki/Bisharp_(Pokémon)`,
    },
   {
      image: 'assets/images/innerpage/Scolipede.png',
      field: 'Scolipede',
      fieldText: 'Bug/Poison',
      link: `https://bulbapedia.bulbagarden.net/wiki/Scolipede_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Avalugg.png',
      field: 'Avalugg',
      fieldText: 'Icee',
      link: `https://bulbapedia.bulbagarden.net/wiki/Avalugg_(Pokémon)`,
    },

    {
      image: 'assets/images/innerpage/Chesnaught.png',
      field: 'Chesnaught',
      fieldText: 'Grass/Fighting',
      link: `https://bulbapedia.bulbagarden.net/wiki/Chesnaught_(Pokémon)`,
    },

    {
      image: 'assets/images/innerpage/Charizard.png',
      field: 'Charizard',
      fieldText: 'Fire/Flying',
      link: `https://bulbapedia.bulbagarden.net/wiki/Charizard_(Pokémon)`,
    }];
  constructor() { }

  ngOnInit(): void {
  }

}
