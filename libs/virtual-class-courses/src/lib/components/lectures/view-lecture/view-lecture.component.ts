import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged, filter, Observable, switchMap } from "rxjs";
import { Lecture } from "@virtual-class-frontend/virtual-class-web-api-v1";
import { RouterStateService } from "@virtual-class-frontend/virtual-class-core";
import { LecturesService } from "@virtual-class-frontend/virtual-class-store";

@Component({
  selector: 'virtual-class-frontend-view-lecture',
  templateUrl: './view-lecture.component.html',
  styleUrls: ['./view-lecture.component.scss'],
})
export class ViewLectureComponent  implements OnInit{
  lecture$!: Observable<Lecture>;

  constructor(
    private readonly lecturesService: LecturesService,
    private readonly routerState: RouterStateService,
  ) {
  }

  ngOnInit(): void {
    this.lecture$ = this.routerState.getParams$().pipe(
      distinctUntilChanged(),
      filter(({courseId, lectureId}) => !!courseId && !!lectureId),
      switchMap(({courseId, lectureId}) => this.lecturesService.getByKey(lectureId)),
    );
  }
}
