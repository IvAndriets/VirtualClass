import { Component } from '@angular/core';
import { CoursesService } from "@virtual-class-frontend/virtual-class-store";

@Component({
  selector: 'virtual-class-frontend-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  customTags$;

  constructor(
    private readonly coursesService: CoursesService,
  ){
    this.coursesService.getAll();
    this.customTags$ = this.coursesService.entities$;
  }

}
