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

    console.error('resourceUrls', resourceUrls);

    if (!resourceUrls) {
      const nRoot = normalizeRoot(root);
      const url = `${ nRoot }/${ this.pluralizzer.pluralize(
        entityName,
      ) }/`.toLowerCase();
      resourceUrls = {
        entityResourceUrl: url,
        collectionResourceUrl: url,
      };
      this.registerHttpResourceUrls({ [entityName]: resourceUrls });
    }

    // else if(resourceUrls.collectionResourceUrl.includes(':courseId')) {
    //   // const nRoot = normalizeRoot(root);
    //   // const url = `${ nRoot }/${ this.pluralizzer.pluralize(
    //   //   entityName,
    //   // ) }/`.toLowerCase().replace(':courseId', '6b506bd6-31eb-48b0-b782-47c71619b0b8');
    //   //
    //   // console.error('url', url);
    //   //
    //   resourceUrls = {
    //     entityResourceUrl: resourceUrls.entityResourceUrl.replace(':courseId', '6b506bd6-31eb-48b0-b782-47c71619b0b8'),
    //     collectionResourceUrl: resourceUrls.collectionResourceUrl.replace(':courseId', '6b506bd6-31eb-48b0-b782-47c71619b0b8'),
    //   };
    //   this.registerHttpResourceUrls({ [entityName]: resourceUrls });
    // }

    return resourceUrls;
  }

}
