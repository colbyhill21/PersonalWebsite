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

    CompanyOneName = "Capital One"
    CompanyTwoName = "Krumware"
    CompanyThreeName = "Boeing"
    CompanyFourName = "University of South Carolina"
    C1Position = "Software Engineering Intern"
    C2Position = "Software Development Intern"
    C3Position = "Programmer / Analyst Intern"
    C4Position = "Research Assistant"

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