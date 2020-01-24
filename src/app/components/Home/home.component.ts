import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    onDesktop = true;
    innerWidth: any;
    rowHeight= "2:1";
    numCols = 2;
    gutterHeight = "0px";

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
            this.rowHeight = "1.35:1";
            this.numCols = 1;
            this.gutterHeight = "10px"
        }
        else if (this.innerWidth < 1100) {
            this.onDesktop = false;
            this.rowHeight = "2:1";
            this.gutterHeight = "10px"
            this.numCols = 1;
        }
        else {
            this.onDesktop = true;
            this.rowHeight = "1.75:1";
            this.numCols = 2;
        }
    }
}