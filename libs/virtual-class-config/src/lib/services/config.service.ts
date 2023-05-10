import { Inject, Injectable } from '@angular/core';

import { ENVIRONMENT } from '../tokens';

@Injectable()
export class ConfigService {

  constructor(@Inject(ENVIRONMENT) private environment: any) {
  }

  getEnvironment(): any {
    return { ...this.environment };
  }

}
