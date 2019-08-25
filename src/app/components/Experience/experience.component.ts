import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
    onDesktop = true;
    innerWidth: any;
    ngOnInit() {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth < 768) {
            this.onDesktop = false;
        }
        else {
            this.onDesktop = true;
        }
    }
    @HostListener('window:resize', ['$event']) //dynamically update the width on resize.
    onResize(event: { target: { innerWidth: any; }; }) {
        this.innerWidth = event.target.innerWidth;
        if (this.innerWidth < 768) {
            this.onDesktop = false;
        }
        else {
            this.onDesktop = true;
        }
    }
}