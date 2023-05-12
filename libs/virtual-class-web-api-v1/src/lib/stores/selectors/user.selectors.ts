import { createSelector } from '@ngrx/store';

import { UserModel } from '../../models';
import { selectUserState } from '../reducers';
import * as fromUserSelector from '../reducers/user.reducer';

export const selectUserEntities = createSelector(
  selectUserState,
  fromUserSelector.selectUserEntities,
);

export const selectCurrentUserId = createSelector(
  selectUserState,
  state => state.selectedUserId,
);

export const selectCurrentUserRoles = createSelector(
  selectUserState,
  state => state.roles,
);

export const selectCurrentUserAccRoles = createSelector(
  selectUserState,
  state => state.accRoles,
);

export const selectCurrentUser = createSelector(
  selectCurrentUserId,
  selectUserEntities,
  (id, e) => id && e[id] ? new UserModel(e[id] as never) : null,
);
