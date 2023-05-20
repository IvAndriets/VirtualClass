import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Course } from "@virtual-class-frontend/virtual-class-web-api-v1";

@Component({
  selector: 'virtual-class-frontend-courses-card',
  templateUrl: './courses-card.component.html',
  styleUrls: ['./courses-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesCardComponent {
  @Input() course!: Course
}
