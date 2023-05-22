import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged, filter, Observable, switchMap, tap } from "rxjs";
import { Lecture, VirtualClassWebClientService } from "@virtual-class-frontend/virtual-class-web-api-v1";
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
    private readonly client: VirtualClassWebClientService,
  ) {
  }

  ngOnInit(): void {
    this.lecture$ = this.routerState.getParams$().pipe(
      distinctUntilChanged(),
      filter(({courseId, lectureId}) => !!courseId && !!lectureId),
      switchMap(({courseId, lectureId}) => this.lecturesService.getByKey(lectureId)),
      tap(i => console.error('this.lecturesService.', i)),
    );
  }

  uploadSelectedFiles(event: any): void {
    console.log('uploadSelectedFiles', event);
    if (event.target.files.length > 0) {
      const formData = new FormData();
      formData.append('file', event.target.files[0]);
      formData.append('course_id', '2a7956cb-d26d-4852-a19c-d344ad9515ff');
      formData.append('lecture_id', 'f11af1ac-2212-4e6f-ba51-a186723737d2');
      formData.append('description', 'deckr');

      this.client.uploadFiles('2a7956cb-d26d-4852-a19c-d344ad9515ff', 'f11af1ac-2212-4e6f-ba51-a186723737d2', formData)
        .subscribe(i => console.log('i'));
    }

  }
}
