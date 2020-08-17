import { Component, HostListener, OnInit } from '@angular/core';

@Component({
    selector: 'app-experience-section',
    templateUrl: './experience-section.component.html',
    // styleUrls: ['./experience-section.component.css']
})
export class ExperienceSectionComponent implements OnInit {
    onDesktop = true;
    innerWidth: any;
    expList = [];
    companyNames = ['Capital One', 'Krumware', 'Boeing', 'UofSC']
    titles = ['Software Engineering Intern', 'Software Development Intern', 'Software Engineering Intern', 'Assistant Researcher']
    dates = ['June 2020 - August 2020', 'August 2019 - May 2020', 'May 2019 - August 2019', 'November 2017 - May 2019']
    bullets: string[][] = [
        ['Architected a full-stack application which enabled product owners to effortlessly manage Commercial Card Platform features, saving hours of time each week',
        'Implemented RESTful system architecture for a three-tier application to improve scalability',
        'Utilized Cypress to create automated end-to-end tests which lessened the need for manual user testing'],

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
            const positionBullets: string[] = this.bullets[i];
            const iconNum: number = i
            console.log(iconNum)
            const expItem = {
                companyName: this.companyNames[i],
                titles: this.titles[i],
                dates: this.dates[i],
                bullets: positionBullets,
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
