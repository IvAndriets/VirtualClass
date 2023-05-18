import { Injectable } from '@angular/core';
// import { Permissions, PERMISSIONS_CONFIG } from '@apx-ui/apx-config';
import { select, Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { UserModel } from '../../models';
import * as fromUserSelectors from '../selectors/user.selectors';

@Injectable()
export class UserStateService {

  constructor(private store: Store<never>) {
  }

  getUser$(): Observable<UserModel>;
  getUser$(preserve: boolean = true): Observable<UserModel | null> {
    const user$ = this.store.pipe(select(fromUserSelectors.selectCurrentUser));

    return preserve ? user$.pipe(filter(u => !!u)) : user$;
  }

  getRoles$(): Observable<string[] | null> {
    return this.store.pipe(select(fromUserSelectors.selectCurrentUserRoles));
  }

  // getAllRoles$(): Observable<string[] | null> {
  //   return combineLatest([
  //     this.store.pipe(select(fromUserSelectors.selectCurrentUser)),
  //     this.store.pipe(select(fromUserSelectors.selectCurrentUserRoles)),
  //     this.store.pipe(select(fromUserSelectors.selectCurrentUserAccRoles)),
  //   ]).pipe(
  //     filter(([user, roles]) => !!user && !!roles),
  //     map(([, roles, accRoles]) => [ ...roles, ...accRoles]),
  //   );
  // }

  // hasRight$(right: Permissions): Observable<boolean> {
  //   return this.getAllRoles$().pipe(
  //     map(allRoles => PERMISSIONS_CONFIG[right].some(role => allRoles?.includes(role))),
  //   );
  // }
  //
  // hasRight(right: Permissions, roles: string[]): boolean {
  //   return PERMISSIONS_CONFIG[right].some(role => roles?.includes(role));
  // }

}
