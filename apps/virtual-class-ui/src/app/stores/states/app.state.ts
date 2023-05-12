import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserStateService } from '@apx-ui/apx-web-api-v1';
import { select, Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { filter, mapTo, take } from 'rxjs/operators';

import { AppActions } from '../actions';
import { selectAppError } from '../selectors';

@Injectable()
export class AppStateService {

  constructor(
    private readonly store: Store<never>,
    private readonly userState: UserStateService,
  ) {
  }

  boot(): void {
    this.store.dispatch(AppActions.boot());
  }

  ready$(): Observable<boolean> {
    return combineLatest([
      this.userState.getUser$(),
    ]).pipe(
      filter(res => !!res[0]),
      take(1),
      mapTo(true),
    );
  }

  getError$(): Observable<HttpErrorResponse | null> {
    return this.store.pipe(select(selectAppError));
  }

}
