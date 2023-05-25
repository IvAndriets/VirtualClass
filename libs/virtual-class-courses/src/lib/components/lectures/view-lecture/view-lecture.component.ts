import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged, filter, Observable, switchMap, tap } from "rxjs";
import {
  Lecture,
  UserStateService,
  VirtualClassWebClientService
} from "@virtual-class-frontend/virtual-class-web-api-v1";
import { RouterStateService } from "@virtual-class-frontend/virtual-class-core";
import { LecturesService } from "@virtual-class-frontend/virtual-class-store";
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'virtual-class-frontend-view-lecture',
  templateUrl: './view-lecture.component.html',
  styleUrls: ['./view-lecture.component.scss'],
})
export class ViewLectureComponent  implements OnInit{
  lecture$!: Observable<Lecture>;
  userRole$!: Observable<string[] | null>;
  form!: UntypedFormGroup;
  editMode = false;
  lecture: Lecture;


  constructor(
    private readonly lecturesService: LecturesService,
    private readonly routerState: RouterStateService,
    private readonly client: VirtualClassWebClientService,
    private readonly userService: UserStateService,
    private readonly fb: UntypedFormBuilder,
  ) {
    this.lecture = {} as Lecture;
  }

  ngOnInit(): void {
    this.userRole$ = this.userService.getRoles$();

    this.lecture$ = this.routerState.getParams$().pipe(
      distinctUntilChanged(),
      filter(({courseId, lectureId}) => !!courseId && !!lectureId),
      switchMap(({courseId, lectureId}) => this.lecturesService.getByKey(lectureId))
    );

    this.lecture$.subscribe(i => {
      this.lecture = {...i};
      this.initForm();
    })
  }

  initForm() {
    console.log(this.lecture);
    this.form = this.fb.group({
      id: [this.lecture.id, [Validators.required]],
      name: [this.lecture.name, [Validators.required]],
      description: [this.lecture.description, [Validators.required]],
    });
  }

  uploadSelectedFiles(event: any): void {
    console.log('uploadSelectedFiles', event);
    if (event.target.files.length > 0) {
      const formData = new FormData();
      formData.append('file', event.target.files[0]);
      formData.append('course_id', this.lecture.course);
      formData.append('lecture_id', this.lecture.id);
      formData.append('description', 'deckr');

      this.client.uploadFiles(this.lecture.course, this.lecture.id, formData)
        .subscribe(i => console.log('i'));
    }

  }

  onToggleMode(): void {
    this.editMode = !this.editMode;
  }

  onSubmitLecture() {
    if (this.form.valid) {
      this.lecturesService.update(this.form.value);
    } else {
      this.form.markAllAsTouched()
    }
  }
}
