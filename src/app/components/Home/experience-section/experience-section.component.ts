import { Component, OnInit } from '@angular/core';
import experience from './experience.json';
@Component({
    selector: 'app-experience-section',
    templateUrl: './experience-section.component.html',
    styleUrls: ['./experience-section.component.css'],
    standalone: false
})
export class ExperienceSectionComponent implements OnInit {
    experienceData: any = experience;
    expList = [];

    constructor() {
        this.populateCards();
    }

    populateCards() {
        for (let i = 0; i < this.experienceData.length; i++) {
            this.expList.push({
                companyName: this.experienceData[i].companyName,
                titles: this.experienceData[i].position,
                dates: this.experienceData[i].dates,
                bullets: this.experienceData[i].responsibilities,
                logo: this.experienceData[i].logo
            });
        }
    }

    ngOnInit() {}
}
