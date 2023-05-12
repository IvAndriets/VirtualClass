import { UserStateService } from '@apx-ui/apx-web-api-v1';
import { createServiceFactory, SpectatorService, SpyObject } from '@ngneat/spectator/jest';
import { Store } from '@ngrx/store';

import { AppActions } from '../actions';
import { AppStateService as SuT } from './app.state';

describe('AppStateService', () => {

  let spectator: SpectatorService<SuT>;
  let sut: SuT;
  let store: SpyObject<Store<any>>;

  const createService = createServiceFactory({
    service: SuT,
    mocks: [
      Store,
      UserStateService,
    ],
  });

  beforeEach(() => {

    spectator = createService();

    sut = spectator.inject(SuT);
    store = spectator.inject(Store);

  });

  it('should create', () => {

    expect(sut).toBeTruthy();
  });

  it('boot app', () => {

    sut.boot();

    expect(store.dispatch).toHaveBeenCalledWith(
      AppActions.boot(),
    );

  });

});
