import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relay-on2',
  templateUrl: './relay-on2.component.html',
  styleUrls: ['./relay-on2.component.css']
})
export class RelayOn2Component implements OnInit {
relayOn2 = [
    {
      image: 'assets/images/innerpage/Typhlosiona.png',
      field: 'Typhlosion',
      fieldText: 'Fire',
      link: `https://bulbapedia.bulbagarden.net/wiki/Typhlosion_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Spiritomb.png',
      field: 'Spiritomb',
      fieldText: 'Ghost/Dark',
      link: `https://bulbapedia.bulbagarden.net/wiki/Spiritomb_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Breloom.png',
      field: 'Breloom',
      fieldText: 'Grass/Fighting',
      link: `https://bulbapedia.bulbagarden.net/wiki/Breloom_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Mamoswine.png',
      field: 'Mamoswine',
      fieldText: 'Ice/Ground',
      link: `https://bulbapedia.bulbagarden.net/wiki/Mamoswine_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Metagross.png',
      field: 'Metagross',
      fieldText: 'Psychic/Steel',
      link: `https://bulbapedia.bulbagarden.net/wiki/Metagross_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Snorlax.png',
      field: 'Snorlax',
      fieldText: 'Normal',
      link: `https://bulbapedia.bulbagarden.net/wiki/Snorlax_(Pokémon)`,
    }];
  constructor() { }

  ngOnInit(): void {
  }

}
