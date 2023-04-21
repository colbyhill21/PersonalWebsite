import { Component, HostListener, OnInit } from '@angular/core';
import * as experience from './experience.json';
@Component({
    selector: 'app-experience-section',
    templateUrl: './experience-section.component.html',
})
export class ExperienceSectionComponent implements OnInit {
    onDesktop = true;
    innerWidth: any;
    experienceData: any = experience;
    expList = [];

    constructor() {
        this.populateCards();
    }
    populateCards() {
        for(let i = 0; i < this.experienceData.length; i++) {
            const iconNum: number = i;

            const expItem = {
                companyName: this.experienceData[i].companyName,
                titles: this.experienceData[i].position,
                dates: this.experienceData[i].dates,
                bullets: this.experienceData[i].responsibilities,
                icon: iconNum
            };
            this.expList.push(expItem);
        }
    }
    ngOnInit() {
        this.innerWidth = window.innerWidth;
        this.adjustHeight();
    }
    @HostListener('window:resize', ['$event']) // dynamically update the width on resize.
    onResize(event: { target: { innerWidth: any; }; }) {
        this.innerWidth = event.target.innerWidth;
        this.adjustHeight();
    }

    adjustHeight() {
        if (this.innerWidth < 768) {
            this.onDesktop = false;
        } else {
            this.onDesktop = true;
        }
    }
}
