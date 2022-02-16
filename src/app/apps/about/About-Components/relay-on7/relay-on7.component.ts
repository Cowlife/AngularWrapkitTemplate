import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relay-on7',
  templateUrl: './relay-on7.component.html',
  styleUrls: ['./relay-on7.component.css']
})
export class RelayOn7Component implements OnInit {
relayOn7 = [
    {
      image: 'assets/images/innerpage/Gliscor.png',
      field: 'Gliscor',
      fieldText: 'Flying/Ground',
      link: `https://bulbapedia.bulbagarden.net/wiki/Gliscor_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Empoleon.png',
      field: 'Empoleon',
      fieldText: 'Water/Steel',
      link: `https://bulbapedia.bulbagarden.net/wiki/Empoleon_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Medicham.png',
      field: 'Medicham',
      fieldText: 'Fighting/Psychic',
      link: `https://bulbapedia.bulbagarden.net/wiki/Medicham_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Gengar.png',
      field: 'Gengar',
      fieldText: 'Ghost/Poison',
      link: `https://bulbapedia.bulbagarden.net/wiki/Gengar_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Glaceon.png',
      field: 'Glaceon',
      fieldText: 'Ice',
      link: `https://bulbapedia.bulbagarden.net/wiki/Glaceon_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Carnivine.png',
      field: 'Carnivine',
      fieldText: 'Grass',
      link: `https://bulbapedia.bulbagarden.net/wiki/Carnivine_(Pokémon)`,
    }];
  constructor() { }

  ngOnInit(): void {
  }

}
