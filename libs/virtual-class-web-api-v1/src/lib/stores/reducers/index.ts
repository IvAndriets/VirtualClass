import { Action, combineReducers, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromUserReducer from './user.reducer';

export const featureName = 'apx-v1-root-feature';

export interface State {
  user: fromUserReducer.UserState;
}

export function reducers(state: State | undefined, action: Action): State {
  return combineReducers({
    user: fromUserReducer.reducer,
  })(state, action);
}

export const selectAPXFeature = createFeatureSelector<State>(featureName);

export const selectUserState = createSelector(selectAPXFeature, state => state.user);
