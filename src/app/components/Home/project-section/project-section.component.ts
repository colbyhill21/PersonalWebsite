import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.css']
})
export class ProjectSectionComponent implements OnInit {
  onDesktop = true;
  innerWidth: any;
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
