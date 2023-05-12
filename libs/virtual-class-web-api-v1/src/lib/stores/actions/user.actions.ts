import { createAction, props } from '@ngrx/store';

import { User } from '../../interfaces';

export const addUser = createAction(
  '[APX API] Add User',
  props<{
    user: User;
  }>(),
);

export const setUser = createAction(
  '[APX API] Set User',
  props<{
    userId: string;
    roles: string[];
  }>(),
);

export const setAccRoles = createAction(
  '[APX API] Set Roles',
  props<{
    roles: string[];
  }>(),
);
