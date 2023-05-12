import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { User } from '../../interfaces';
import { UserActions } from '../actions';

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: a => a.sub,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export interface UserState extends EntityState<User> {
  selectedUserId: string | null;
  roles: string[] | null,
  accRoles: string[] | null,
}

export const initialState: UserState = adapter.getInitialState({
  selectedUserId: null,
  roles: [],
  accRoles: [],
});

export const reducer = createReducer(
  initialState,
  on(UserActions.addUser,
    (state, { user }) => {
      return adapter.upsertOne(user, state);
    },
  ),
  on(UserActions.setUser,
    (state, { userId, roles }) => ({
      ...state,
      selectedUserId: userId,
      roles,
    }),
  ),
  on(UserActions.setAccRoles,
    (state, { roles }) => ({
      ...state,
      accRoles: roles,
    }),
  ),
);

const { selectAll, selectEntities } = adapter.getSelectors();

export const selectUsers = selectAll;
export const selectUserEntities = selectEntities;
