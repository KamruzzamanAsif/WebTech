import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroesComponent} from './heroes/heroes.component';
import {AddHeroComponent} from './add-hero/add-hero.component'

const routes: Routes = [
  {path:"heroes", component: HeroesComponent},
  {path:"hero-details", component: HeroDetailComponent},
  {path:"add-hero", component: AddHeroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
