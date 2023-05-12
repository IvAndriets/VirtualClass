import { HttpClient } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import {
  DefaultDataServiceConfig,
  DefaultDataServiceFactory,
  EntityCollectionDataService,
  HttpUrlGenerator,
} from '@ngrx/data';

import { RouterStateService } from '../states';
import { DataService } from './data.service';

@Injectable()
export class DataServiceFactory extends DefaultDataServiceFactory {
  constructor(
    private readonly routerState: RouterStateService,
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    @Optional() config?: DefaultDataServiceConfig,
  ) {
    super(http, httpUrlGenerator, config);
  }

  override create<T>(entityName: string): EntityCollectionDataService<T> {
    return new DataService<T>(
      this.routerState,
      entityName,
      this.http,
      this.httpUrlGenerator,
      this.config,
    );
  }
}
