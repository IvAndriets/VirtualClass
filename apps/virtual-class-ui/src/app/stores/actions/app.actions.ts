import { HttpErrorResponse } from '@angular/common/http';
// import { Account } from '@apx-ui/apx-web-api-v1';
import { createAction, props } from '@ngrx/store';

export const boot = createAction('[App] Boot');

export const bootSuccess = createAction(
  '[App] Boot Success',
  props<{
    // accounts: Account[];
    accounts: any;
    user: any;
    roles: any;
  }>(),
);

export const bootFailure = createAction(
  '[App] Boot Failure',
  props<{ err: HttpErrorResponse }>(),
);
