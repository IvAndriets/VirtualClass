import { Component, Input } from '@angular/core';
import { Comments } from "@virtual-class-frontend/virtual-class-web-api-v1";
import { CommentsService } from "@virtual-class-frontend/virtual-class-store";

@Component({
  selector: 'virtual-class-frontend-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss'],
})
export class CommentCardComponent {
  @Input() comment!: Comments

  constructor(
    private readonly commentsService: CommentsService,
  ) {
  }

  onDelete(id: string) {
    this.commentsService.delete(id);
  }
}
