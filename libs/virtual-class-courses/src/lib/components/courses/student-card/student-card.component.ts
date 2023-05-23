import { Component, Input } from '@angular/core';
import { Lecture } from "@virtual-class-frontend/virtual-class-web-api-v1";

@Component({
  selector: 'virtual-class-frontend-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss'],
})
export class StudentCardComponent {
  @Input() student!: any
}
