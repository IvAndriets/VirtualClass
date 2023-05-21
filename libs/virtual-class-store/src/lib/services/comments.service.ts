import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { BaseEntityCollectionService } from "@virtual-class-frontend/virtual-class-core";
import { Comments } from "@virtual-class-frontend/virtual-class-web-api-v1";

@Injectable({ providedIn: 'root' })
export class CommentsService extends BaseEntityCollectionService<Comments> {

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Comments', serviceElementsFactory);
  }

}
