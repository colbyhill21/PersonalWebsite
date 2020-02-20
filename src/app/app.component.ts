import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ch-web';
  innerWidth: any;
  navVisible = true;
  showMobileNav = false;
  currentYear = new Date().getFullYear();
  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 768) {
      this.navVisible = false;
    } else {
      this.navVisible = true;
    }

  }
  @HostListener('window:resize', ['$event']) // dynamically update the width on resize.
  onResize(event: { target: { innerWidth: any; }; }) {
    this.innerWidth = event.target.innerWidth;
    if (this.innerWidth < 768) {
      this.navVisible = false;
    } else {
      this.navVisible = true;
    }
  }

  hideMobileNav() {
    this.showMobileNav = false;
  }

}

