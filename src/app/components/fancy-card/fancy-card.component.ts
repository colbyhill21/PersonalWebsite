import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fancy-card',
  templateUrl: './fancy-card.component.html',
  styleUrls: ['./fancy-card.component.css']
})
export class FancyCardComponent implements OnInit {
  @Input('companyName') companyName: String = "company"
  @Input('positionName') positionName = "position"
  @Input('positionDates') positionDates = "position dates"
  @Input('imageName') imageName = "img.jpg"
  @Input('positionDetails') positionDetails = "details"
  constructor() {

   }

  ngOnInit() {
  }

}