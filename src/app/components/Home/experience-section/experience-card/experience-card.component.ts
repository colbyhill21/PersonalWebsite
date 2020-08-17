import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-experience-card',
    templateUrl: './experience-card.component.html'
})
export class ExperienceCardComponent {
    @Input() compName: string;
    @Input() title: string;
    @Input() dates: string;
    @Input() bullets: string[];
    @Input() iconNum: number;
}
