import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CoursesService, LinksService } from "@virtual-class-frontend/virtual-class-store";
import { RouterStateService } from "@virtual-class-frontend/virtual-class-core";
import { distinctUntilChanged, filter, Observable, switchMap, tap } from "rxjs";
import { Course, UserStateService } from "@virtual-class-frontend/virtual-class-web-api-v1";

@Component({
  selector: 'virtual-class-frontend-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewCourseComponent implements OnInit{
  course$!: Observable<Course>;
  userRole$!: Observable<string[] | null>;

  constructor(
    private readonly coursesService: CoursesService,
    private readonly linksService: LinksService,
    private readonly routerState: RouterStateService,
    private readonly userService: UserStateService,
  ) {
  }
  ngOnInit(): void {
    this.course$ = this.routerState.getParam$('courseId').pipe(
      distinctUntilChanged(),
      filter(courseId => !!courseId),
      switchMap(courseId => this.coursesService.getByKey(courseId)),
    );

    this.userRole$ = this.userService.getRoles$();
  }
}


