// import { Component, HostListener, OnInit } from '@angular/core';

// @Component({
//     selector: 'app-skills-section',
//     templateUrl: './skills-section.component.html',
//     styleUrls: ['./skills-section.component.css']
// })
// export class SkillsSectionComponent implements OnInit {
//     onDesktop = true;
//     innerWidth: any;
//     ngOnInit() {
//         this.innerWidth = window.innerWidth;
//         this.adjustHeight();
//     }
//     @HostListener('window:resize', ['$event']) // dynamically update the width on resize.
//     onResize(event: { target: { innerWidth: any; }; }) {
//         this.innerWidth = event.target.innerWidth;
//         this.adjustHeight();
//     }

//     adjustHeight() {
//         if (this.innerWidth < 768) {
//             this.onDesktop = false;
//         } else {
//             this.onDesktop = true;
//         }
//     }
// }
