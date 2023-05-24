import { Component, Input } from '@angular/core';
import { Observable } from "rxjs";
import { Comments, Homework } from "@virtual-class-frontend/virtual-class-web-api-v1";
import { CommentsService, HomeworksService } from "@virtual-class-frontend/virtual-class-store";

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
  ) {
  }

  ngOnInit(): void {
    this.homeworksService.clearCache();
    this.homeworksService.loadWithQuery({
      lecture_id: this.lectureId
    });

    this.homeworks$ = this.homeworksService.entities$;
  }
}
