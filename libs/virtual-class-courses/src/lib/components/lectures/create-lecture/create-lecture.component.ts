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
  lectureType = false;

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
      max_grade: 0,
      due_date: null,
    });
  }

  isLab(): boolean {
    return this.form.get('type')?.value === 'lab';
  }

  changeType(lectureTypes:boolean) :void {
    this.lectureType = lectureTypes;
  }

  onSubmit() {
    console.error('onSubmit');
    if (this.form.valid) {
      this.lecturesService.add(this.form.value);
    } else {
      console.error('not valid')
    }
  }
}
