import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/Home/home.component'
import { AboutComponent } from './components/About/about.component'
import { ExperienceComponent } from './components/Experience/experience.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material.module';
import { FancyCardComponent } from './components/fancy-card/fancy-card.component';
import { TitleSectionComponent } from './components/Home/title-section/title-section.component';
import { SkillsSectionComponent } from './components/Home/skills-section/skills-section.component';
import { ExperienceSectionComponent } from './components/Home/experience-section/experience-section.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    FancyCardComponent,
    TitleSectionComponent,
    SkillsSectionComponent,
    ExperienceSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }