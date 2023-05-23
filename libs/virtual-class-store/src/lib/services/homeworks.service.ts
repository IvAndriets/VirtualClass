import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { BaseEntityCollectionService } from "@virtual-class-frontend/virtual-class-core";
import { Homework } from "@virtual-class-frontend/virtual-class-web-api-v1";

@Injectable({ providedIn: 'root' })
export class HomeworksService extends BaseEntityCollectionService<Homework> {

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Homeworks', serviceElementsFactory);
  }

}
