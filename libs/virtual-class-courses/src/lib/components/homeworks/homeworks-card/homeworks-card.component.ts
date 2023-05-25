import { Component, Input, OnInit } from '@angular/core';
import { Homework, VirtualClassWebClientService } from "@virtual-class-frontend/virtual-class-web-api-v1";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { HomeworksService } from "@virtual-class-frontend/virtual-class-store";

@Component({
  selector: 'virtual-class-frontend-homeworks-card',
  templateUrl: './homeworks-card.component.html',
  styleUrls: ['./homeworks-card.component.scss'],
})
export class HomeworksCardComponent implements OnInit {
  @Input() homework!: Homework;
  @Input() maxGrade!: string;
  form!: UntypedFormGroup;

  constructor(
    private readonly fb: UntypedFormBuilder,
    private readonly client: VirtualClassWebClientService,
    private readonly homeworksService: HomeworksService,
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      mark: [this.homework.mark, [Validators.required]],
      teacher_comment: [this.homework.teacher_comment],
    });
  }

  gradeValidator(grade: number): boolean {
    return grade < +this.maxGrade;
  }

  onSubmit() {
    this.client.rateHomework(this.homework.id,this.form.value)
      .pipe()
      .subscribe((i) =>
        this.homeworksService.loadWithQuery({ lecture_id: this.homework.lecture })
      );
  }
}
