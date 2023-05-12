import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../../environments/environment';

export const extModules = [
  StoreDevtoolsModule.instrument({
    name: 'APX Store DevTools',
    maxAge: 100,
    logOnly: environment.production,
  }),
];
