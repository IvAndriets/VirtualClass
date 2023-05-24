import { Component, Input, OnInit } from '@angular/core';
import { Homework, VirtualClassWebClientService } from "@virtual-class-frontend/virtual-class-web-api-v1";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'virtual-class-frontend-homeworks-card',
  templateUrl: './homeworks-card.component.html',
  styleUrls: ['./homeworks-card.component.scss'],
})
export class HomeworksCardComponent implements OnInit {
  @Input() homework!: Homework;
  form!: UntypedFormGroup;

  constructor(
    private readonly fb: UntypedFormBuilder,
    private readonly client: VirtualClassWebClientService,
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      mark: [77, [Validators.required]],
      teacher_comment: [''],
    });
  }

  onSubmit() {
    this.client.rateHomework(this.homework.id,this.form.value).pipe().subscribe();
  }
}
