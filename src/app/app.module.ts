import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/Home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { TitleSectionComponent } from './components/Home/title-section/title-section.component';
import { IntroSectionComponent } from './components/Home/intro-section/intro-section.component';
import { ExperienceSectionComponent } from './components/Home/experience-section/experience-section.component';
import { ExperienceCardComponent } from './components/Home/experience-section/experience-card/experience-card.component';
// tslint:disable-next-line: max-line-length
import { ExperienceCardMobileComponent } from './components/Home/experience-section/experience-card-mobile/experience-card-mobile.component';
import { ProjectSectionComponent } from './components/Home/project-section/project-section.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TitleSectionComponent,
    IntroSectionComponent,
    ExperienceSectionComponent,
    ExperienceCardMobileComponent,
    ExperienceCardComponent,
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
