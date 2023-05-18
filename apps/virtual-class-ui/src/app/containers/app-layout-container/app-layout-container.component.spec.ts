import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AccountStateService } from '@apx-ui/apx-account-store';
import { CoreTestingModule, RouterStateService } from '@apx-ui/apx-core';
import { UserStateService } from '@apx-ui/apx-web-api-v1';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { of } from 'rxjs';

import { AppLayoutContainerComponent as SuT } from './app-layout-container.component';

describe('AppLayoutContainerComponent', () => {

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
      UserStateService,
      AccountStateService,
      RouterStateService,
    ],
  });

  beforeEach(() => {

    spectator = createComponent();

    const routerState = spectator.inject(RouterStateService);
    routerState.getParam$.mockReturnValue(of('account-id-1'));
    routerState.getQueryParam$.mockReturnValue(of(true));
  });

  it('should create', () => {

    spectator.detectChanges();

    expect(spectator.component).toBeTruthy();

  });

});
