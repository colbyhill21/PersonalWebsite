import { Component, HostListener, OnInit } from '@angular/core';
import { stringify } from 'querystring';

type ExperienceCardInfo = {
    companyName: string;
    titles: string;
    dates: string;
    bulletss: string[];
}

@Component({
    selector: 'app-experience-section',
    templateUrl: './experience-section.component.html',
    styleUrls: ['./experience-section.component.css']
})
export class ExperienceSectionComponent implements OnInit {
    onDesktop = true;
    innerWidth: any;
    expList = [];
    companyNames = ['Capital One', 'Krumware', 'Boeing', 'University Of South Carolina']
    titles = ['Software Engineering Intern', 'Software Development Intern', 'Software Engineering Intern', 'Assistant Researcher']
    dates = ['June 2020 - Current', 'August 2019 - May 2020', 'May 2019 - August 2019', 'November 2017 - May 2019']
    bullets: string[][] = [
        ['Architecting a full stack application to easily manage the features used in the Commercial Card Platform, saving managers hours of time each week',
        'Collaborating with an Agile team remotely to develop, test, and implement solutions across the full stack',
        'Developing a 3-layer architecture application consisting of frontend, backend, and APIs simultaneously'],

        ['Led the migration to Rancher, enabling Multi-Cloud Computing and improving application availability by 10%',
        'Automated Kubernetes resource management which eliminated the need for manual processing',
        'Created interactive documentation using Swagger UI that facilitated client application interactions'],

        ['Pioneered Boeing’s shift to the cloud by deploying an identity management application into production on Pivotal Cloud Foundry',
        'Leveraged CI/CD techniques to accelerate development speed, improve testability, and maximize efficiency',
        'Revamped the IDS website to ensure easy access to identity services, applications, and resources'],

        ['Developed an Android smartwatch application that detected smoking gestures with 99% classification accuracy',
        'Optimized accelerometer signal processing and gesture classification, extending smartwatch battery lifespan by 325% which increased viability for field survey testing',
        'Showcased research to Public Health clients']
    ]
    constructor() {
        this.populateCards();
    }
    populateCards() {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.companyNames.length; i++) {
            // let x = ExperienceCardInfo('','','',['']);
            let yur: string[] = this.bullets[i];
            let x = {
                companyName: this.companyNames[i],
                titles: this.titles[i],
                dates: this.dates[i],
                bullets: yur
            };
            this.expList.push(x);
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
