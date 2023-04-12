import { Component,OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Hero} from '../hero';
import {HeroService} from '../hero.service'


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit{
  // hero: Hero = {id: 1, name: "Windstorm"};
  constructor(private heroService: HeroService, private router: Router){}

  myHeroes: Hero[] = [];
  selectedHero?: Hero;

  ngOnInit(): void{
    this.myHeroes = this.heroService.getHeroes();
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    this.heroService.setSelectedHero(this.selectedHero);
    // console.log(this.heroService.getHeroes());
    this.router.navigate(["hero-details"]);
  }
}

