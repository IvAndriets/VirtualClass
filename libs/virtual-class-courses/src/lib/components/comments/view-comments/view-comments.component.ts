import { Component, Input } from '@angular/core';
import { CommentsService } from "@virtual-class-frontend/virtual-class-store";
import { RouterStateService } from "@virtual-class-frontend/virtual-class-core";
import { distinctUntilChanged, filter, Observable, switchMap } from "rxjs";
import { Comments, Lecture } from "@virtual-class-frontend/virtual-class-web-api-v1";

@Component({
  selector: 'virtual-class-frontend-view-comments',
  templateUrl: './view-comments.component.html',
  styleUrls: ['./view-comments.component.scss'],
})
export class ViewCommentsComponent {
  @Input() lectureId = '';

  comments$!: Observable<Comments[]>;

  constructor(
    private readonly commentsService: CommentsService,
  ) {
  }

  ngOnInit(): void {
    this.commentsService.clearCache();
    this.commentsService.loadWithQuery({
      lecture_id: this.lectureId
    });

    this.comments$ = this.commentsService.entities$;
  }
}
