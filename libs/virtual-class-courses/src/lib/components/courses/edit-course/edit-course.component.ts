import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { CoursesService } from "@virtual-class-frontend/virtual-class-store";
import { Course } from "@virtual-class-frontend/virtual-class-web-api-v1";

@Component({
  selector: 'virtual-class-frontend-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditCourseComponent implements OnInit {
  @Input() course!: Course
  form!: UntypedFormGroup;
  editMode = false;

  constructor(
    private readonly fb: UntypedFormBuilder,
    private readonly coursesService: CoursesService,
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [this.course.id, [Validators.required]],
      name: [this.course.name, [Validators.required]],
      description: [this.course.description, [Validators.required]],
      full_description: [this.course.full_description, [Validators.required]],
      active: [this.course.active, [Validators.required]],
    });
  }

  onToggleMode(): void {
    this.editMode = !this.editMode;
  }

  onSubmit() {
    if (this.form.valid) {
      this.coursesService.update(this.form.value);
    } else {
      this.form.markAllAsTouched()
    }
  }
}
