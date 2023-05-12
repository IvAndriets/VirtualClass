import { DOCUMENT } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { AccountActions } from '@apx-ui/apx-account-store';
import { AuthService } from '@apx-ui/apx-auth';
import { RouterActions } from '@apx-ui/apx-core';
import {
  ACCOUNTS_FIXTURE,
  ApxSolsticeWebClientService,
  OIDC_USER_FIXTURE,
  UserActions,
} from '@apx-ui/apx-web-api-v1';
import { createServiceFactory, SpectatorService, SpyObject } from '@ngneat/spectator/jest';
import { provideMockActions } from '@ngrx/effects/testing';
import { of, ReplaySubject, Subject, throwError } from 'rxjs';

import { AppActions } from '../actions';
import { AppEffects as SuT } from './app.effects';

describe('AppEffects', () => {

  let client: SpyObject<ApxSolsticeWebClientService>;
  let auth: SpyObject<AuthService>;

  let effects: SuT;
  let actions$: Subject<any>;
  let subscribe: jest.Mock<any>;
  let doc: any;

  let spectator: SpectatorService<SuT>;

  class MockDocument {
    get location(): any {
      return { pathname: '/' };
    }
  }

  const createService = createServiceFactory({
    service: SuT,
    mocks: [
      ApxSolsticeWebClientService,
      AuthService,
    ],
    providers: [
      provideMockActions(() => actions$),
      { provide: DOCUMENT, useClass: MockDocument },
    ],
  });

  beforeEach(() => {

    spectator = createService();

    effects = spectator.inject(SuT);
    actions$ = new ReplaySubject(1);
    subscribe = jest.fn();

    client = spectator.inject(ApxSolsticeWebClientService);
    auth = spectator.inject(AuthService);
    doc = spectator.inject(DOCUMENT);

  });

  describe('handleBoot$', () => {

    it('should handle boot application with success', () => {

      const user  = OIDC_USER_FIXTURE;
      const roles = ['SuperAdmin'];

      auth.getUserToken.mockReturnValue('12345');
      auth.hasValidToken.mockReturnValue(true);
      auth.getUserClaims.mockReturnValue(user);
      auth.getLoginState.mockReturnValue({ url: null, search: null });

      client.getUserRoles.mockReturnValue(of(roles));
      client.getAccounts.mockReturnValue(of([ACCOUNTS_FIXTURE[0]]));

      effects.handleBoot$.subscribe(subscribe);

      actions$.next(
        AppActions.boot(),
      );

      expect(client.getUserRoles).toHaveBeenCalled();
      expect(client.getAccounts).toHaveBeenCalled();
      expect(auth.getUserClaims).toHaveBeenCalled();
      expect(auth.getUserToken).toHaveBeenCalled();

      expect(subscribe).toHaveBeenCalledWith(
        AccountActions.addAccounts({
          accounts: [ACCOUNTS_FIXTURE[0]],
        }),
      );

      expect(subscribe).toHaveBeenCalledWith(
        UserActions.addUser({
          user: OIDC_USER_FIXTURE,
        }),
      );

      expect(subscribe).toHaveBeenCalledWith(
        AppActions.bootSuccess({
          user,
          roles,
          accounts: [ACCOUNTS_FIXTURE[0]],
        }),
      );

    });

    it('should handle boot application with success and redirect', () => {

      const user  = {
        ...OIDC_USER_FIXTURE,
        state: JSON.stringify({ url: '/some-page' }),
      } as any;

      const roles = ['SuperAdmin'];

      auth.getUserToken.mockReturnValue('12345');
      auth.hasValidToken.mockReturnValue(true);
      auth.getUserClaims.mockReturnValue(user);
      auth.getLoginState.mockReturnValue({ url: '/some-page', search: null });

      client.getUserRoles.mockReturnValue(of(roles));
      client.getAccounts.mockReturnValue(of([ACCOUNTS_FIXTURE[0]]));

      effects.handleBoot$.subscribe(subscribe);

      actions$.next(
        AppActions.boot(),
      );

      expect(client.getUserRoles).toHaveBeenCalled();
      expect(client.getAccounts).toHaveBeenCalled();
      expect(auth.getUserClaims).toHaveBeenCalled();

      expect(subscribe).toHaveBeenCalledWith(
        AccountActions.addAccounts({
          accounts: [ACCOUNTS_FIXTURE[0]],
        }),
      );

      expect(subscribe).toHaveBeenCalledWith(
        UserActions.addUser({
          user,
        }),
      );

      expect(subscribe).toHaveBeenCalledWith(
        AppActions.bootSuccess({
          user,
          roles,
          accounts: [ACCOUNTS_FIXTURE[0]],
        }),
      );

      expect(subscribe).toHaveBeenCalledWith(
        RouterActions.navigate({
          path: ['/some-page'],
          query: {},
        }),
      );

    });

    it('should handle boot application and call login', () => {

      auth.getUserToken.mockReturnValue(null);

      effects.handleBoot$.subscribe(subscribe);

      actions$.next(
        AppActions.boot(),
      );

      expect(auth.login).toHaveBeenCalled();

    });

    it('should handle boot application and complete auth', () => {

      jest.spyOn(doc, 'location', 'get').mockReturnValue({ pathname: 'authcallback', hash: '#' });

      auth.getUserClaims.mockReturnValue(null);

      effects.handleBoot$.subscribe(subscribe);

      actions$.next(
        AppActions.boot(),
      );

      expect(auth.loginImplicitFlow).toHaveBeenCalled();

    });

    it('should handle boot application and call login if token expired', () => {

      const user = {
        OIDC_USER_FIXTURE,
        expired: true,
      } as any;

      auth.getUserClaims.mockReturnValue(user);
      auth.getUserToken.mockReturnValue('i12345');

      effects.handleBoot$.subscribe(subscribe);

      actions$.next(
        AppActions.boot(),
      );

      expect(auth.login).toHaveBeenCalled();

    });

    it('should handle boot application and complete auth if token expired', () => {

      const user = {
        OIDC_USER_FIXTURE,
        expired: true,
      } as any;

      jest.spyOn(doc, 'location', 'get').mockReturnValue({ pathname: 'authcallback' });

      auth.getUserToken.mockReturnValue('i12345');
      auth.getUserClaims.mockReturnValue(user);
      auth.hasValidToken.mockReturnValue(false);

      effects.handleBoot$.subscribe(subscribe);

      actions$.next(
        AppActions.boot(),
      );

      expect(auth.login).toHaveBeenCalled();

    });

    it('should handle boot and fail', () => {

      const user  = OIDC_USER_FIXTURE;
      const err = new HttpErrorResponse({ status: 404 });

      auth.getUserToken.mockReturnValue('12345');
      auth.hasValidToken.mockReturnValue(true);
      auth.getUserClaims.mockReturnValue(user);
      auth.getLoginState.mockReturnValue({ url: null, search: null });

      client.getUserRoles.mockReturnValue(throwError(err));
      client.getAccounts.mockReturnValue(throwError(err));

      effects.handleBoot$.subscribe(subscribe);

      actions$.next(
        AppActions.boot(),
      );

      expect(subscribe).toHaveBeenCalledWith(
        AppActions.bootFailure({
          err,
        }),
      );

    });

  });

  describe('handleBootSuccess$', () => {

    it('should handle boot success', () => {

      const user  = OIDC_USER_FIXTURE;
      const roles = ['SuperAdmin'];

      effects.handleBootSuccess$.subscribe(subscribe);

      actions$.next(
        AppActions.bootSuccess({ user, accounts: ACCOUNTS_FIXTURE, roles }),
      );

      expect(subscribe).toHaveBeenCalledWith(
        UserActions.setUser({
          userId: user.sub,
          roles,
        }),
      );

    });

  });

});
