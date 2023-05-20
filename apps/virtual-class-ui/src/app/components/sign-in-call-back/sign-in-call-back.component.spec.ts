import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@apx-ui/apx-auth';
import { CoreTestingModule } from '@apx-ui/apx-core';
import { OIDC_USER_FIXTURE } from '@apx-ui/apx-web-api-v1';
import { createComponentFactory, Spectator, SpyObject } from '@ngneat/spectator/jest';
import { of } from 'rxjs';

import { SignInCallBackComponent as SuT } from './sign-in-call-back.component';

describe('SignInCallBackComponent', () => {

  let auth: SpyObject<AuthService>;
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
      AuthService,
      Router,
    ],
  });

  beforeEach(() => {

    spectator = createComponent();

    auth = spectator.inject(AuthService);

    auth.getUserClaims$.mockReturnValue(of(OIDC_USER_FIXTURE));

  });

  it('should create', () => {

    spectator.detectChanges();

    expect(spectator.component).toBeTruthy();

  });

});
