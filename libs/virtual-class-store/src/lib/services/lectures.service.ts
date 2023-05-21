import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { BaseEntityCollectionService } from "@virtual-class-frontend/virtual-class-core";
import { Lecture } from "@virtual-class-frontend/virtual-class-web-api-v1";

@Injectable({ providedIn: 'root' })
export class LecturesService extends BaseEntityCollectionService<Lecture> {

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Lectures', serviceElementsFactory);
  }

}
