import { Component, Input } from '@angular/core';
import { Observable } from "rxjs";
import { Homework, VirtualClassWebClientService } from "@virtual-class-frontend/virtual-class-web-api-v1";
import { HomeworksService } from "@virtual-class-frontend/virtual-class-store";

@Component({
  selector: 'virtual-class-frontend-homeworks-view',
  templateUrl: './homeworks-view.component.html',
  styleUrls: ['./homeworks-view.component.scss'],
})
export class HomeworksViewComponent {
  @Input() lectureId = '';

  homeworks$!: Observable<Homework[]>

  constructor(
    private readonly homeworksService: HomeworksService,
    private readonly client: VirtualClassWebClientService,
  ) {
  }

  ngOnInit(): void {
    this.homeworksService.clearCache();
    this.homeworksService.loadWithQuery({
      lecture_id: this.lectureId
    });

    this.homeworks$ = this.homeworksService.entities$;
  }

  onSubmit(event: any) {
    if (event.target.files.length > 0) {
      const formData = new FormData();
      formData.append('file', event.target.files[0]);
      formData.append('lecture_id', this.lectureId);
      formData.append('description', 'deckr');

      this.client.submitHomework(formData)
        .subscribe(i => console.log('i'));
    }
  }
}
