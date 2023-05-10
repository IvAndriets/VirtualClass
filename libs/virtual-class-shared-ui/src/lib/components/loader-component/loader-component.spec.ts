import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoreTestingModule } from '@apx-ui/apx-core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { LoaderComponent as SuT } from './loader-component';

describe('LoaderComponent', () => {

  let spectator: Spectator<SuT>;

  const createComponent = createComponentFactory({
    component: SuT,
    detectChanges: false,
    imports: [
      CoreTestingModule,
    ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA,
    ],
    mocks: [
    ],
  });

  beforeEach(() => {

    spectator = createComponent();

  });

  it('should create', () => {

    spectator.detectChanges();

    expect(spectator.component).toBeTruthy();

  });

});
