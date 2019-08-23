import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/Home/home.component'
import { AboutComponent } from './components/About/about.component'
import { ExperienceComponent } from './components/Experience/experience.component'

const routes: Routes = [
  {  path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent},
  { path: 'experience', component: ExperienceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
