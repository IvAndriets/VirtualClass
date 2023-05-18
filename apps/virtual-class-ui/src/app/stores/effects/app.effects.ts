import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, from, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

import { AppActions } from '../actions';
import { AuthService } from "@virtual-class-frontend/virtual-class-auth";
import { VirtualClassWebClientService, UserActions } from "@virtual-class-frontend/virtual-class-web-api-v1";
import { RouterActions } from "@virtual-class-frontend/virtual-class-core";

@Injectable()
export class AppEffects {

  handleBoot$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        AppActions.boot,
      ),
      switchMap(() => {
        return of(this.auth.getUserToken()).pipe(
          switchMap(token => {
            const url = this.document.location.pathname;
            const hash = this.document.location.hash;
            const search = this.document.location.search;

            const isAuthCallBack = url?.includes('authcallback') && hash;

            if (!token && !isAuthCallBack) {
              this.auth.login({ url: url ?? '/', search });
            }

            if (isAuthCallBack) {
              return from(this.auth.loginImplicitFlow()).pipe(
                map(res => res ? this.auth.getUserTokenInfo() : null),
              );
            } else if (token && this.auth.hasValidToken()) {
              return of(this.auth.getUserTokenInfo());
            } else {
              this.auth.login();
              return of(null);
            }
          }),
        );
      }),
      filter(user => user),
      switchMap(user => {

        const { url, search } = this.auth.getLoginState();

        return this.client.getAccounts()
        .pipe(
          switchMap((accounts) => {

            const actions = [];

            if (url) {
              const params: URLSearchParams = new URLSearchParams(search ?? '');
              const query: { [key: string]: string } = { };

              params.forEach((v, k) => (query[k] = v));
              actions.push(RouterActions.navigate({ path: [url], query }));
            }

            return [
              ...actions,
              UserActions.setUser({ userId: user.sub, roles: user['realm_access'].roles }),
              // AccountActions.addAccounts({ accounts }),
              UserActions.addUser({ user }),
              AppActions.bootSuccess({ user, roles: user['realm_access'].roles, accounts: [] }),
            ];

          }),
          catchError(err => of(AppActions.bootFailure({ err }))),
        );
      }),
    ),
  );

  handleBootSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        AppActions.bootSuccess,
      ),
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      switchMap(({ user, accounts, roles }) => {
        return [
          UserActions.setUser({ userId: user.sub, roles }),
        ];
      }),
    ) as any,
  );

  constructor(
    private readonly actions$: Actions,
    private readonly auth: AuthService,
    private readonly client: VirtualClassWebClientService,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {
  }

}
