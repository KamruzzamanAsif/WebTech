import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Hero} from '../hero';
import {HeroService} from '../hero.service'


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{
  constructor(private heroService: HeroService){}

  selectedHero?: Hero;
  ngOnInit(): void{
    this.selectedHero = this.heroService.getSelectedHero();
  }

  
}
