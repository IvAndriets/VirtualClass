import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { BaseEntityCollectionService } from "@virtual-class-frontend/virtual-class-core";
import { RateLab } from "@virtual-class-frontend/virtual-class-web-api-v1";

@Injectable({ providedIn: 'root' })
export class RateLabService extends BaseEntityCollectionService<RateLab> {

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('RateLab', serviceElementsFactory);
  }

}
