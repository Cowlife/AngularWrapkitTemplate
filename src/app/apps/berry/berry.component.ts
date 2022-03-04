import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BerryService} from './berry.service';
import {Berry} from './berry.type';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-berry',
  templateUrl: './berry.component.html',
  styleUrls: ['./berry.component.css']
})
export class BerryComponent implements OnInit {

  constructor(public http: HttpClient, activatedRouter: ActivatedRoute, public service: BerryService, public router: Router) {
    this.id = activatedRouter.snapshot.paramMap.get('id');
    this.service.showEdit = false;
  }

  id: any;
  berryDetail: Berry | null = null;

  Berries = [
    {
      image: 'assets/images/berries/Aguav.webp',
      field: 'Aguav Berry',
      fieldText: 'Restores a small ammount of HP when it falls below 25-50%, but confuses Pokémon that dislike bitter food.',
    },
    {
      image: 'assets/images/berries/Apicot.webp',
      field: 'Apicot Berry',
      fieldText: 'Raises Special Defense when HP falls below 25%.',
    },
    {
      image: 'assets/images/berries/Aspear.webp',
      field: 'Aspear Berry',
      fieldText: 'Cures freeze.',
    },
    {
      image: 'assets/images/berries/Babiri.webp',
      field: 'Babiri Berry',
      fieldText: 'Halves damage taken from a super effective Steel-type move.',
    },
    {
      image: 'assets/images/berries/Belue.webp',
      field: 'Belue Berry',
      fieldText: 'Special berry.',
    },
    {
      image: 'assets/images/berries/Bluk.webp',
      field: 'Bluk Berry',
      fieldText: 'Special berry.',
    },
    {
      image: 'assets/images/berries/Cheri.webp',
      field: 'Cheri Berry',
      fieldText: 'Cures paralysis.',
    },
    {
      image: 'assets/images/berries/Chesto.webp',
      field: 'Chesto Berry',
      fieldText: 'Cures sleep.',
    },
    {
      image: 'assets/images/berries/Chilan.webp',
      field: 'Chilan Berry',
      fieldText: 'Halves damage taken from a Normal-type move.',
    },
    {
      image: 'assets/images/berries/Chople.webp',
      field: 'Chople Berry',
      fieldText: 'Halves damage taken from a super effective Fighting-type move.',
    },
    {
      image: 'assets/images/berries/Coba.webp',
      field: 'Coba Berry',
      fieldText: 'Halves damage taken from a super effective Flying-type move.',
    },
    {
      image: 'assets/images/berries/Colbur.webp',
      field: 'Colbur Berry',
      fieldText: 'Halves damage taken from a super effective Dark-type move.',
    },
    {
      image: 'assets/images/berries/Cornn.webp',
      field: 'Cornn Berry',
      fieldText: 'Special berry.',
    },
    {
      image: 'assets/images/berries/Durin.webp',
      field: 'Durin Berry',
      fieldText: 'Special berry.',
    },
    {
      image: 'assets/images/berries/Custap.webp',
      field: 'Custap Berry',
      fieldText: 'Causes next move to go first in its priority bracket when HP falls below 25%.',
    },
    {
      image: 'assets/images/berries/Enigma.webp',
      field: 'Enigma Berry',
      fieldText: 'Restores 25% HP when hit with a super effective move.',
    },
    {
      image: 'assets/images/berries/Figy.webp',
      field: 'Figy Berry',
      fieldText: 'Restores a small ammount of HP when it falls below 25-50%, but confuses Pokémon that dislike spicy food.',
    },
    {
      image: 'assets/images/berries/Ganlon.webp',
      field: 'Ganlon Berry',
      fieldText: 'Raises Defense when HP falls below 25%.',
    },
    {
      image: 'assets/images/berries/Grepa.webp',
      field: 'Grepa Berry',
      fieldText: 'Lowers Special Defense EVs, raises friendship.',
    },
    {
      image: 'assets/images/berries/Haban.webp',
      field: 'Haban Berry',
      fieldText: 'Halves damage taken from a super effective Dragon-type move.',
    },
    {
      image: 'assets/images/berries/Hondew.webp',
      field: 'Hondew Berry',
      fieldText: 'Lowers Special Attack EVs, raises friendship.',
    },
    {
      image: 'assets/images/berries/Iapapa.webp',
      field: 'Iapapa Berry',
      fieldText: 'Restores a small ammount of HP when it falls below 25-50%, but confuses Pokémon that dislike sour food.',
    },
    {
      image: 'assets/images/berries/Jaboca.webp',
      field: 'Jaboca Berry',
      fieldText: 'Damages attacker for 12.5% HP when hit with a physical move.',
    },
    {
      image: 'assets/images/berries/Kasib.webp',
      field: 'Kasib Berry',
      fieldText: 'Halves damage taken from a super effective Ghost-type move.',
    },
    {
      image: 'assets/images/berries/Kebia.webp',
      field: 'Kebia Berry',
      fieldText: 'Halves damage taken from a super effective Poison-type move.',
    },
    {
      image: 'assets/images/berries/Kee.webp',
      field: 'Kee Berry',
      fieldText: 'Raises Defense when hit with a physical move.',
    },
    {
      image: 'assets/images/berries/Kelpsy.webp',
      field: 'Kelpsy Berry',
      fieldText: 'Lowers Attack EVs, raises friendship.',
    },
    {
      image: 'assets/images/berries/Lansat.webp',
      field: 'Lansat Berry',
      fieldText: 'Raises critical hit ratio when HP falls below 25%.',
    },
    {
      image: 'assets/images/berries/Leppa.webp',
      field: 'Leppa Berry',
      fieldText: 'Restores 10 PP.',
    },
    {
      image: 'assets/images/berries/Liechi.webp',
      field: 'Liechi Berry',
      fieldText: 'Raises Attack when HP falls below 25%',
    },
    {
      image: 'assets/images/berries/Lum.webp',
      field: 'Lum Berry',
      fieldText: 'Cures any non-volatile status condition and confusion.',
    },
    {
      image: 'assets/images/berries/Mago.webp',
      field: 'Mago Berry',
      fieldText: 'Restores a small ammount of HP when it falls below 25-50%, but confuses Pokémon that dislike sweet food.',
    },
    {
      image: 'assets/images/berries/Magost.webp',
      field: 'Magost Berry',
      fieldText: 'Special berry.',
    },
    {
      image: 'assets/images/berries/Nomel.webp',
      field: 'Nomel Berry',
      fieldText: 'Special berry.',
    },
    {
      image: 'assets/images/berries/Maranga.webp',
      field: 'Maranga Berry',
      fieldText: 'Raises Special Defense when hit with a special move.',
    },
    {
      image: 'assets/images/berries/Micle.webp',
      field: 'Micle Berry',
      fieldText: 'Causes next move to raise the accuracy of the next move by 20% when HP falls below 25%.',
    },
    {
      image: 'assets/images/berries/Occa.webp',
      field: 'Occa Berry',
      fieldText: 'Halves damage taken from a super effective Fire-type move.',
    },
    {
      image: 'assets/images/berries/Oran.webp',
      field: 'Oran Berry',
      fieldText: 'Restores 10 HP.',
    },
    {
      image: 'assets/images/berries/Pamtre.webp',
      field: 'Pamtre Berry',
      fieldText: 'Special berry.',
    },
    {
      image: 'assets/images/berries/Rabuta.webp',
      field: 'Rabuta Berry',
      fieldText: 'Special berry.',
    },
    {
      image: 'assets/images/berries/Passho.webp',
      field: 'Passho Berry',
      fieldText: 'Halves damage taken from a super effective Water-type move.',
    },
    {
      image: 'assets/images/berries/Papaya.webp',
      field: 'Papaya Berry',
      fieldText: 'Halves damage taken from a super effective Psychic-type move.',
    },
    {
      image: 'assets/images/berries/Pecha.webp',
      field: 'Pecha Berry',
      fieldText: 'Cures poison.',
    },
    {
      image: 'assets/images/berries/Persim.webp',
      field: 'Persim Berry',
      fieldText: 'Cures confusion.',
    },
    {
      image: 'assets/images/berries/Petaya.webp',
      field: 'Petaya Berry',
      fieldText: 'Raises Special Attack when HP falls below 25%.',
    },
    {
      image: 'assets/images/berries/Salac.webp',
      field: 'Salac Berry',
      fieldText: 'Raises Speed when HP falls below 25%.',
    },
    {
      image: 'assets/images/berries/Pomeg.webp',
      field: 'Pomeg Berry',
      fieldText: 'Lowers HP EVs, raises friendship.',
    },
    {
      image: 'assets/images/berries/Qualot.webp',
      field: 'Qualot Berry',
      fieldText: 'Lowers Defense EVs, raises friendship.',
    },
    {
      image: 'assets/images/berries/Leppa.webp',
      field: 'Leppa Berry',
      fieldText: 'Restores 10 PP.',
    },
    {
      image: 'assets/images/berries/Rawst.webp',
      field: 'Rawst Berry',
      fieldText: 'Cures burn.',
    },
    {
      image: 'assets/images/berries/Sitrus.webp',
      field: 'Sitrus Berry',
      fieldText: 'Restores 25% HP.',
    },
    {
      image: 'assets/images/berries/Rindo.webp',
      field: 'Rindo Berry',
      fieldText: 'Halves damage taken from a super effective Grass-type move.',
    },
    {
      image: 'assets/images/berries/Roseli.webp',
      field: 'Roseli Berry',
      fieldText: 'Halves damage taken from a super effective Fairy-type move.',
    },
    {
      image: 'assets/images/berries/Rowap.webp',
      field: 'Rowap Berry',
      fieldText: 'Damages attacker for 12.5% HP when hit with a special move.',
    },
    {
      image: 'assets/images/berries/Shuca.webp',
      field: 'Shuca Berry',
      fieldText: 'Halves damage taken from a super effective Ground-type move.',
    },
    {
      image: 'assets/images/berries/Spelon.webp',
      field: 'Spelon Berry',
      fieldText: 'Special berry.',
    },
    {
      image: 'assets/images/berries/Starf.webp',
      field: 'Starf Berry',
      fieldText: 'Sharply raises a random stat when HP falls below 25%.',
    },
    {
      image: 'assets/images/berries/Watmel.webp',
      field: 'Watmel Berry',
      fieldText: 'Special berry.',
    },
    {
      image: 'assets/images/berries/Wepear.webp',
      field: 'Wepear Berry',
      fieldText: 'Special berry.',
    },
    {
      image: 'assets/images/berries/Tamato.webp',
      field: 'Tamato Berry',
      fieldText: 'Lowers Speed EVs, raises friendship.',
    },
    {
      image: 'assets/images/berries/Wiki.webp',
      field: 'Wiki Berry',
      fieldText: 'Restores a small ammount of HP when it falls below 25-50%, but confuses Pokémon that dislike sweet food.',
    },
    {
      image: 'assets/images/berries/Tanga.webp',
      field: 'Tanga Berry',
      fieldText: 'Halves damage taken from a super effective Bug-type move.',
    },
    {
      image: 'assets/images/berries/Wacan.webp',
      field: 'Wacan Berry',
      fieldText: 'Halves damage taken from a super effective Electric-type move.',
    },
    {
      image: 'assets/images/berries/Yache.webp',
      field: 'Yache Berry',
      fieldText: 'Halves damage taken from a super effective Electric-type move.',
    },
    ];

Mutations3 = [
  {
      image: 'assets/images/berries/Pomeg.webp',
      field: 'Pomeg Berry',
  },
  {
      image: 'assets/images/berries/Kelpsy.webp',
      field: 'Kelpsy Berry',
  },
  {
      image: 'assets/images/berries/Qualot.webp',
      field: 'Qualot Berry',
  },
  {
      image: 'assets/images/berries/Hondew.webp',
      field: 'Hondew Berry',
  },
  {
      image: 'assets/images/berries/Grepa.webp',
      field: 'Grepa Berry',
  },
  {
      image: 'assets/images/berries/Tamato.webp',
      field: 'Tamato Berry',
  },
  {
      image: 'assets/images/berries/Liechi.webp',
      field: 'Liechi Berry',
  },
  {
      image: 'assets/images/berries/Ganlon.webp',
      field: 'Ganlon Berry',
  },
  {
      image: 'assets/images/berries/Salac.webp',
      field: 'Salac Berry',
  },
  {
      image: 'assets/images/berries/Petaya.webp',
      field: 'Petaya Berry',
  },
  {
      image: 'assets/images/berries/Apicot.webp',
      field: 'Apicot Berry',
  },
  {
      image: 'assets/images/berries/Kee.webp',
      field: 'Kee Berry',
  },
  {
      image: 'assets/images/berries/Maranga.webp',
      field: 'Maranga Berry',
  },
];

Mutations2 = [
  {
      image: 'assets/images/berries/Mago.webp',
      field: 'Mago Berry',
      margin: 6.5,
  },
  {
      image: 'assets/images/berries/Persim.webp',
      field: 'Persim Berry',
      margin: 1.5,
  },
  {
      image: 'assets/images/berries/Pecha.webp',
      field: 'Pecha Berry',
      margin: 1.5,
  },
  {
      image: 'assets/images/berries/Leppa.webp',
      field: 'Leppa Berry',
      margin: 1.5,
  },
  {
      image: 'assets/images/berries/Figy.webp',
      field: 'Figy Berry',
      margin: 1.5,
  },
  {
      image: 'assets/images/berries/Sitrus.webp',
      field: 'Sitrus Berry',
      margin: 1.5,
  },
  {
      image: 'assets/images/berries/Yache.webp',
      field: 'Yache Berry',
      margin: 1.5,
  },
  {
      image: 'assets/images/berries/Tanga.webp',
      field: 'Tanga Berry',
      margin: 1.5,
  },
  {
      image: 'assets/images/berries/Roseli.webp',
      field: 'Roseli Berry',
      margin: 1.5,
  },
  {
      image: 'assets/images/berries/Kasib.webp',
      field: 'Kasib Berry',
      margin: 1.5,
  },
  {
      image: 'assets/images/berries/Wacan.webp',
      field: 'Wacan Berry',
      margin: 1.5,
  },
  {
      image: 'assets/images/berries/Liechi.webp',
      field: 'Liechi Berry',
      margin: 1.5,
  },
  {
      image: 'assets/images/berries/Salac.webp',
      field: 'Petaya Berry',
      margin: 1.5,
  },
];

Mutations = [
  {
      image: 'assets/images/berries/Iapapa.webp',
      field: 'Iapapa Berry',
  },
  {
      image: 'assets/images/berries/Chesto.webp',
      field: 'Chesto Berry',
  },
  {
      image: 'assets/images/berries/Oran.webp',
      field: 'Oran Berry',
  },
  {
      image: 'assets/images/berries/Aspear.webp',
      field: 'Aspear Berry',
  },
  {
      image: 'assets/images/berries/Aguav.webp',
      field: 'Aguav Berry',
  },
  {
      image: 'assets/images/berries/Lum.webp',
      field: 'Lum Berry',
  },
  {
      image: 'assets/images/berries/Hondew.webp',
      field: 'Hondew Berry',
  },
  {
      image: 'assets/images/berries/Qualot.webp',
      field: 'Qualot Berry',
  },
  {
      image: 'assets/images/berries/Grepa.webp',
      field: 'Grepa Berry',
  },
  {
      image: 'assets/images/berries/Pomeg.webp',
      field: 'Pomeg Berry',
  },
  {
      image: 'assets/images/berries/Kelpsy.webp',
      field: 'Kelpsy Berry',
  },
  {
      image: 'assets/images/berries/Ganlon.webp',
      field: 'Ganlon Berry',
  },
  {
      image: 'assets/images/berries/Salac.webp',
      field: 'Salac Berry',
  },
];

   ngOnInit(): void { // This line controls ts-data imports
   if (this.service.Berries.length === 0) {
      this.service.getBerry().subscribe((d: any) => (this.service.Berries = d));
    }

  }

  loginClick() {
    this.router.navigate([('/login')]);
  }

  newPost() {
    this.service.showEdit = false;
    this.router.navigate([('/post')]);

  }

  editPost() {
    this.service.showEdit = false;
    this.router.navigate([('/editPost'), this.berryDetail?.id]);
  }
}
