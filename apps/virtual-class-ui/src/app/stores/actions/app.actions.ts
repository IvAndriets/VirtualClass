import { HttpErrorResponse } from '@angular/common/http';
// import { Account } from '@apx-ui/apx-web-api-v1';
import { createAction, props } from '@ngrx/store';

export const boot = createAction('[App] Boot');

export const bootSuccess = createAction(
  '[App] Boot Success',
  props<{
    accounts: any[];
    // accounts: Account[];
    user: any;
    roles: string[];
  }>(),
);

export const bootFailure = createAction(
  '[App] Boot Failure',
  props<{ err: HttpErrorResponse }>(),
);
