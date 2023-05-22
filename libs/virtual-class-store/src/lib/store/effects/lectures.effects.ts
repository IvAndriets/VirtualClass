import { Injectable } from '@angular/core';
import {
  EntityAction,
  EntityOp,
  ofEntityOp,
  ofEntityType,
} from '@ngrx/data';
import { Actions, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { RouterActions } from "@virtual-class-frontend/virtual-class-core";

@Injectable()
export class LecturesEffects {

  public handleSaveSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofEntityType('Lectures'),
      ofEntityOp(EntityOp.SAVE_ADD_ONE_SUCCESS),
      switchMap(action => of(action.payload.data)),
      // tap(() => this.toastr.success('User has been create successfully')),
      switchMap(item => ([
          RouterActions.navigate({
            path: ['/courses', item.course],
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
