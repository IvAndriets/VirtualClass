import { Component, Input } from '@angular/core';
import { Homework } from "@virtual-class-frontend/virtual-class-web-api-v1";

@Component({
  selector: 'virtual-class-frontend-homeworks-card',
  templateUrl: './homeworks-card.component.html',
  styleUrls: ['./homeworks-card.component.scss'],
})
export class HomeworksCardComponent {
  @Input() homework!: Homework;
}
