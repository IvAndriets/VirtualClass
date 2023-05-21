import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CoursesService } from "@virtual-class-frontend/virtual-class-store";
import { RouterStateService } from "@virtual-class-frontend/virtual-class-core";
import { distinctUntilChanged, filter, Observable, switchMap } from "rxjs";
import { Course } from "@virtual-class-frontend/virtual-class-web-api-v1";

@Component({
  selector: 'virtual-class-frontend-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewCourseComponent implements OnInit{
  courses$!: Observable<Course>;

  constructor(
    private readonly coursesService: CoursesService,
    private readonly routerState: RouterStateService,
  ) {
  }
  ngOnInit(): void {


    this.courses$ = this.routerState.getParam$('courseId').pipe(
      distinctUntilChanged(),
      filter(courseId => !!courseId),
      switchMap(courseId => this.coursesService.getByKey(courseId)),
    );
  }
}


