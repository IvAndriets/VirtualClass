import { Injectable } from '@angular/core';
import {
  DefaultDataServiceConfig,
  DefaultHttpUrlGenerator,
  HttpResourceUrls,
  normalizeRoot,
  Pluralizer,
} from '@ngrx/data';

@Injectable()
export class ApxApiHttpUrlGenerator extends DefaultHttpUrlGenerator {
  constructor(
    private pluralizzer: Pluralizer,
    private config?: DefaultDataServiceConfig,
  ) {
    super(pluralizzer);
  }

  protected override getResourceUrls(
    entityName: string,
    root: string,
  ): HttpResourceUrls {

    let resourceUrls = this.knownHttpResourceUrls[entityName];
    if (!resourceUrls) {
      const nRoot = normalizeRoot((this.config as any).entityRoot[entityName] || root);
      const url = `${ nRoot }/${ this.pluralizzer.pluralize(
        entityName,
      ) }/`.toLowerCase();
      resourceUrls = {
        entityResourceUrl: url,
        collectionResourceUrl: url,
      };
      this.registerHttpResourceUrls({ [entityName]: resourceUrls });
    }

    return resourceUrls;
  }

}
