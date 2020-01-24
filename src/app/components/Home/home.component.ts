import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    onDesktop = true;
    innerWidth: any;
    OnDesktopCompressCards = false;
    onDesktopNoCompress = false;
    onMobileElse = false;

    CompanyOneName = "Capital One";
    CompanyTwoName = "Krumware";
    CompanyThreeName = "Boeing";
    CompanyFourName = "University of South Carolina";
    C1Position = "Software Engineering Intern";
    C2Position = "Software Development Intern";
    C3Position = "Programmer / Analyst Intern";
    C4Position = "Research Assistant";
    C1Image =  "../../../assets/cap1.png";
    C2Image =  "../../../assets/krum.png";
    C3Image =  "../../../assets/boeing2.png";
    C4Image =  "../../../assets/usc.png";
    C1Dates =  "June 2020 - August 2020";
    C2Dates =  "August 2019 - May 2020";
    C3Dates =  "May 2019 - August 2019";
    C4Dates =  "November 2017 - May 2019";
    C1Details = "During the summer after I graduate, I will be working as a Software Engineering Intern at Capital One. I will be working at their Headquarters in McLean, VA.";
    C2Details = "During my senior year, I worked as a Software Development intern at Krumware, a startup in Columbia, SC that builds distributed systems and web applications.";
    C3Details = "na.";
    C4Details = "na.";


    ngOnInit() {
        this.innerWidth = window.innerWidth;
        this.adjustHeight();
    }

    @HostListener('window:resize', ['$event']) //dynamically update the width on resize.
    onResize(event: { target: { innerWidth: any; }; }) {
        this.innerWidth = event.target.innerWidth;
        this.adjustHeight();
    }

    adjustHeight() {
        if (this.innerWidth < 768) {
            this.onDesktop = false;
            this.OnDesktopCompressCards = false;
            this.onDesktopNoCompress = false;
            this.onMobileElse = true;
        }
        else if (this.innerWidth < 1300) {
            this.onDesktop = true;
            this.OnDesktopCompressCards = true;
            this.onDesktopNoCompress = false;
            this.onMobileElse = false;
        }
        else {
            this.onDesktop = true;
            this.OnDesktopCompressCards = false;
            this.onDesktopNoCompress = true;
            this.onMobileElse = false;
        }
    }
}