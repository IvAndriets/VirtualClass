import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { AuthService } from '@apx-ui/apx-auth';
import { CoreTestingModule, RouterStateService } from '@apx-ui/apx-core';
import { NotificationStateService } from '@apx-ui/apx-notifications-store';
import { OIDC_USER_FIXTURE, UserStateService } from '@apx-ui/apx-web-api-v1';
import { createComponentFactory, Spectator, SpyObject } from '@ngneat/spectator/jest';
import { of } from 'rxjs';

import { AppHeaderComponent as SuT } from './app-header.component';

describe('AppHeaderComponent', () => {

  let auth: SpyObject<AuthService>;
  let notification: SpyObject<NotificationStateService>;
  let routerState: SpyObject<RouterStateService>;

  let spectator: Spectator<SuT>;

  const createComponent = createComponentFactory({
    component: SuT,
    detectChanges: false,
    imports: [
      CoreTestingModule,
      MatMenuModule,
    ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA,
    ],
    mocks: [
      AuthService,
      UserStateService,
      NotificationStateService,
      MatDialog,
      RouterStateService,
    ],
  });

  beforeEach(() => {

    spectator = createComponent();

    auth = spectator.inject(AuthService);
    auth.getUserClaims$.mockReturnValue(of(OIDC_USER_FIXTURE));

    notification = spectator.inject(NotificationStateService);
    notification.getNotificationCount$.mockReturnValue(of(33));

    routerState = spectator.inject(RouterStateService);
    routerState.getUrl$.mockReturnValue(of('landing'));
    routerState.getParam$.mockReturnValue(of('account-id'));

  });

  it('should create', () => {

    spectator.detectChanges();

    expect(spectator.component).toBeTruthy();

  });

});
