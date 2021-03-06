import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Heroe, HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe:Heroe;

  constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService ) {
    this.activatedRoute.params.subscribe(params=>{
      // console.log(params.id);
      // console.log(params['id'])
      this.heroe= this._heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    });
  }

  ngOnInit() {
  }

}
