import { InjectionToken } from '@angular/core';
import * as fromRouter from '@ngrx/router-store';
import { Action, ActionReducerMap } from '@ngrx/store';

import * as fromAppReducer from './app.reducer';
import { StateRoute } from "@virtual-class-frontend/virtual-class-core";

export interface State {
  app: fromAppReducer.AppState;
  router: fromRouter.RouterReducerState<StateRoute>;
}

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>('Root reducers token', {
  factory: () => ({
    app: fromAppReducer.reducer,
    router: fromRouter.routerReducer,
  }),
});

export const selectAppState = (state: State): fromAppReducer.AppState => state.app;
export const selectRouterState = (state: State): fromRouter.RouterReducerState<StateRoute> => state.router;
