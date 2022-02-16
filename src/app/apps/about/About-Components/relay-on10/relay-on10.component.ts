import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relay-on10',
  templateUrl: './relay-on10.component.html',
  styleUrls: ['./relay-on10.component.css']
})
export class RelayOn10Component implements OnInit {
relayOn10 = [
    {
      image: 'assets/images/innerpage/Sudowoodo.png',
      field: 'Suduwoodo',
      fieldText: 'Rock',
      link: `https://bulbapedia.bulbagarden.net/wiki/Sudowoodo_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Rotom_(Wash_Rotom).png',
      field: 'Rotom - Wash Form',
      fieldText: 'Electric/Water',
      link: `https://bulbapedia.bulbagarden.net/wiki/Rotom_(Pokémon)`,
    },
   {
      image: 'assets/images/innerpage/Amoonguss.png',
      field: 'Amoonguss',
      fieldText: 'Grass/Poison',
      link: `https://bulbapedia.bulbagarden.net/wiki/Amoonguss_(Pokémon)`,
    },
    {
      image: 'assets/images/innerpage/Delibird.png',
      field: 'Delibird (Customized)',
      fieldText: 'Ice/Flying',
      link: `https://bulbapedia.bulbagarden.net/wiki/Delibird_(Pokémon)`,
    },

    {
      image: 'assets/images/innerpage/Primeape.png',
      field: 'Primeape',
      fieldText: 'Fighting',
      link: `https://bulbapedia.bulbagarden.net/wiki/Primeape_(Pokémon)`,
    },

    {
      image: 'assets/images/innerpage/Delphox.png',
      field: 'Delphox',
      fieldText: 'Fire/Psychic',
      link: `https://bulbapedia.bulbagarden.net/wiki/Delphox_(Pokémon)`,
    }];
  constructor() { }

  ngOnInit(): void {
  }

}
