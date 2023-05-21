import { Component, Input } from '@angular/core';
import { Lecture } from "@virtual-class-frontend/virtual-class-web-api-v1";

@Component({
  selector: 'virtual-class-frontend-lecture-card',
  templateUrl: './lecture-card.component.html',
  styleUrls: ['./lecture-card.component.scss'],
})
export class LectureCardComponent {
  @Input() lecture!: Lecture
}
