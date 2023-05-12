import { createReducer, on } from '@ngrx/store';

import { AppActions } from '../actions';
import { Status } from "@virtual-class-frontend/virtual-class-core";

export interface AppState {
  status: Status;
}

export const initialState: AppState = {
  status: {
    resolved: false,
    rejected: false,
    pending: false,
    err: null,
  },
};

export const reducer = createReducer(
  initialState,
  on(AppActions.boot, (state) => ({
    ...state,
    status: {
      ...state.status,
      pending: true,
    },
  })),
  on(AppActions.bootSuccess, (state) => ({
    ...state,
    status: {
      resolved: true,
      rejected: false,
      pending: false,
      err: null,
    },
  })),
  on(AppActions.bootFailure, (state, { err }) => ({
    ...state,
    status: {
      resolved: false,
      rejected: true,
      pending: false,
      err,
    },
  })),
);
