import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-experience-card-mobile',
    templateUrl: './experience-card-mobile.component.html'
})
export class ExperienceCardMobileComponent {
    @Input() compName: string;
    @Input() title: string;
    @Input() dates: string;
    @Input() bullets: string[];
}
