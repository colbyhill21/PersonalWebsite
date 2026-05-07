import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-experience-card',
    templateUrl: './experience-card.component.html',
    styleUrls: ['./experience-card.component.css'],
    standalone: false
})
export class ExperienceCardComponent {
    @Input() compName: string;
    @Input() title: string;
    @Input() dates: string;
    @Input() bullets: string[];
    @Input() logo: string;
}
