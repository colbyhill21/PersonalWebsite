import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/Home/home.component';
import { AboutComponent } from './components/About/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { TitleSectionComponent } from './components/Home/title-section/title-section.component';
import { SkillsSectionComponent } from './components/Home/skills-section/skills-section.component';
import { ExperienceSectionComponent } from './components/Home/experience-section/experience-section.component';
import { ProjectSectionComponent } from './components/Home/project-section/project-section.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TitleSectionComponent,
    SkillsSectionComponent,
    ExperienceSectionComponent,
    ProjectSectionComponent,
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
