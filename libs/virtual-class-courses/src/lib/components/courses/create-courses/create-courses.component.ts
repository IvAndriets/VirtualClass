import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { CoursesService } from "@virtual-class-frontend/virtual-class-store";

@Component({
  selector: 'virtual-class-frontend-create-courses',
  templateUrl: './create-courses.component.html',
  styleUrls: ['./create-courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateCoursesComponent implements OnInit {
  form!: UntypedFormGroup;

  constructor(
    private readonly fb: UntypedFormBuilder,
    private readonly coursesService: CoursesService,
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      full_description: ['', [Validators.required]],
     });
  }

  onSubmit() {
    if (this.form.valid) {
      this.coursesService.add(this.form.value);
    } else {
      this.form.markAllAsTouched()
    }
  }
}
