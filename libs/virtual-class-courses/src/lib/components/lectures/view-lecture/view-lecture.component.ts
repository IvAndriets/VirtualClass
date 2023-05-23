import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged, filter, Observable, switchMap, tap } from "rxjs";
import {
  Lecture,
  UserStateService,
  VirtualClassWebClientService
} from "@virtual-class-frontend/virtual-class-web-api-v1";
import { RouterStateService } from "@virtual-class-frontend/virtual-class-core";
import { LecturesService } from "@virtual-class-frontend/virtual-class-store";

@Component({
  selector: 'virtual-class-frontend-view-lecture',
  templateUrl: './view-lecture.component.html',
  styleUrls: ['./view-lecture.component.scss'],
})
export class ViewLectureComponent  implements OnInit{
  lecture$!: Observable<Lecture>;
  userRole$!: Observable<string[] | null>;
  courseId: string = '';
  lectureId: string = '';

  constructor(
    private readonly lecturesService: LecturesService,
    private readonly routerState: RouterStateService,
    private readonly client: VirtualClassWebClientService,
    private readonly userService: UserStateService,
  ) {
  }

  ngOnInit(): void {
    this.userRole$ = this.userService.getRoles$();

    this.lecture$ = this.routerState.getParams$().pipe(
      distinctUntilChanged(),
      filter(({courseId, lectureId}) => !!courseId && !!lectureId),
      switchMap(({courseId, lectureId}) => this.lecturesService.getByKey(lectureId)),
      tap(i => {
        console.error('this.lecturesService.', i);
        this.lectureId = i.id;
        this.courseId = i.course;
      }),
    );
  }

  uploadSelectedFiles(event: any): void {
    console.log('uploadSelectedFiles', event);
    if (event.target.files.length > 0) {
      const formData = new FormData();
      formData.append('file', event.target.files[0]);
      formData.append('course_id', this.courseId);
      formData.append('lecture_id', this.lectureId);
      formData.append('description', 'deckr');

      this.client.uploadFiles(this.courseId, this.lectureId, formData)
        .subscribe(i => console.log('i'));
    }

  }
}
