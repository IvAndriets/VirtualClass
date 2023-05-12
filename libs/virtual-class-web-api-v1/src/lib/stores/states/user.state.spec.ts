import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { Store } from '@ngrx/store';

import { UserStateService as SuT } from './user.state';

describe('UserStateService', () => {

  let spectator: SpectatorService<SuT>;
  let sut: SuT;

  const createService = createServiceFactory({
    service: SuT,
    mocks: [
      Store,
    ],
  });

  beforeEach(() => {

    spectator = createService();

    sut = spectator.inject(SuT);

  });

  it('should create', () => {

    expect(sut).toBeTruthy();

  });

});
