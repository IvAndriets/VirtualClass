import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { CoursesService, LecturesService } from "@virtual-class-frontend/virtual-class-store";
import { RouterStateService } from "@virtual-class-frontend/virtual-class-core";
import { distinctUntilChanged, filter, first, switchMap } from "rxjs";

@Component({
  selector: 'virtual-class-frontend-create-lecture',
  templateUrl: './create-lecture.component.html',
  styleUrls: ['./create-lecture.component.scss'],
})
export class CreateLectureComponent implements OnInit {
  form!: UntypedFormGroup;

  constructor(
    private readonly fb: UntypedFormBuilder,
    private readonly lecturesService: LecturesService,
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      type: ['lecture', [Validators.required]],
      "max_grade": 2147483647,
      "due_date": "2023-05-21T14:21:36.540Z"
    });
  }

  onSubmit() {
    console.error('onSubmit');
    if (this.form.valid) {
      console.error('this.form.value');

      this.lecturesService.add(this.form.value);
    } else {
      console.error('not valid')
    }
  }
}
