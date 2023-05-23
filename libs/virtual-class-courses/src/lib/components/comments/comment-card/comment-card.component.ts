import { Component, Input, OnInit } from '@angular/core';
import { Comments, UserModel, UserStateService } from "@virtual-class-frontend/virtual-class-web-api-v1";
import { CommentsService } from "@virtual-class-frontend/virtual-class-store";
import { Observable } from "rxjs";

@Component({
  selector: 'virtual-class-frontend-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss'],
})
export class CommentCardComponent implements OnInit {
  @Input() comment!: Comments;
  user$!: Observable<UserModel>;
  userRole$!: Observable<string[] | null>;

  constructor(
    private readonly commentsService: CommentsService,
    private readonly userService: UserStateService,
  ) {
  }

  ngOnInit() {
    this.user$ = this.userService.getUser$();
    this.userRole$ = this.userService.getRoles$();
  }

  onDelete(id: string) {
    this.commentsService.delete(id);
  }
}
