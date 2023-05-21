import { Component, Input } from '@angular/core';
import { Comments } from "@virtual-class-frontend/virtual-class-web-api-v1";

@Component({
  selector: 'virtual-class-frontend-comments-card-list',
  templateUrl: './comments-card-list.component.html',
  styleUrls: ['./comments-card-list.component.scss'],
})
export class CommentsCardListComponent {
  @Input() comments!: Comments[]
}
