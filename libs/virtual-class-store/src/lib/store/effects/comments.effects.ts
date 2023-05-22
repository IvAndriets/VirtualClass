import { Injectable } from '@angular/core';
import {
  EntityAction,
  EntityOp,
  ofEntityOp,
  ofEntityType,
} from '@ngrx/data';
import { Actions, createEffect } from '@ngrx/effects';
import { of, tap } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { RouterActions } from "@virtual-class-frontend/virtual-class-core";

@Injectable()
export class CommentsEffects {

  public handleSaveSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofEntityType('Comments'),
      ofEntityOp(EntityOp.SAVE_ADD_ONE_SUCCESS),
      switchMap(action => of(action.payload.data)),
      // tap(() => this.toastr.success('User has been create successfully')),
      tap(console.log),
      switchMap(item => ([
          RouterActions.navigate({
            path: ['courses', 'eeb43c69-c086-4003-8ef4-7a8069305f01', 'lectures',  item.lecture],
          }),
        ]
      )),
    ) as any,
  );

  public constructor(
    private readonly actions$: Actions<EntityAction>,
  ) {
  }

}
