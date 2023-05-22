import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { BaseEntityCollectionService } from "@virtual-class-frontend/virtual-class-core";
import { Link } from "@virtual-class-frontend/virtual-class-web-api-v1";

@Injectable({ providedIn: 'root' })
export class LinksService extends BaseEntityCollectionService<Link> {

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Links', serviceElementsFactory);
  }

}
