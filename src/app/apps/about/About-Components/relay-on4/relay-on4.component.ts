import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relay-on4',
  templateUrl: './relay-on4.component.html',
  styleUrls: ['./relay-on4.component.css']
})
export class RelayOn4Component implements OnInit {
relayOn4 = [
    {
      image: 'assets/images/innerpage/Stantler.png',
      field: 'Stantler (Customized)',
      fieldText: 'Normal (Hidden Power Ice Type)',
      link: `https://bulbapedia.bulbagarden.net/wiki/Stantler_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Typhlosion.png',
      field: 'Typhlosion',
      fieldText: 'Fire',
      link: `https://bulbapedia.bulbagarden.net/wiki/Typhlosion_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Tangrowth.png',
      field: 'Tangrowth',
      fieldText: 'Grass',
      link: `https://bulbapedia.bulbagarden.net/wiki/Tangrowth_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Yanmega.png',
      field: 'Yanmega',
      fieldText: 'Bug/Flying',
      link: `https://bulbapedia.bulbagarden.net/wiki/Yanmega_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Poliwrath.png',
      field: 'Poliwrath',
      fieldText: 'Water/Fighting',
      link: `https://bulbapedia.bulbagarden.net/wiki/Poliwrath_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Sandslash.png',
      field: 'Sandslash (Customized)',
      fieldText: 'Ground',
      link: `https://bulbapedia.bulbagarden.net/wiki/Sandslash_(Pokémon)`,
    }];
  constructor() { }

  ngOnInit(): void {
  }

}
