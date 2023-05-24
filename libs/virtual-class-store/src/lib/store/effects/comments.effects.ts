import { Injectable } from '@angular/core';
import {
  EntityAction, EntityActionFactory,
  EntityOp, MergeStrategy,
  ofEntityOp,
  ofEntityType,
} from '@ngrx/data';
import { Actions, createEffect } from '@ngrx/effects';
import { of, tap } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { RouterActions } from "@virtual-class-frontend/virtual-class-core";
import { entityTypes } from "./entity-types.interface";

@Injectable()
export class CommentsEffects {

  public handleSaveSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofEntityType('Comments'),
      ofEntityOp(EntityOp.SAVE_ADD_ONE_SUCCESS),
      switchMap(action => of(action.payload.data)),
      // tap(() => this.toastr.success('User has been create successfully')),
      tap((item) => console.error('User has been create successfully', item)),
      tap(console.log),
      switchMap(item => ([
          this.entityActionFactory.create(entityTypes['Comments'], EntityOp.QUERY_MANY,
            {lecture_id: item.lecture},
            {mergeStrategy: MergeStrategy.OverwriteChanges})
        ]
      )),
    ) as any,
  );

  public constructor(
    private readonly actions$: Actions<EntityAction>,
    private readonly entityActionFactory: EntityActionFactory,
  ) {
  }

}
