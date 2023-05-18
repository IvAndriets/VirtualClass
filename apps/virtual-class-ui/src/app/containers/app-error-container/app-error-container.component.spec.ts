import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { of } from 'rxjs';

import { AppErrorContainerComponent as SuT } from './app-error-container.component';

describe('AppErrorContainerComponent', () => {

  let spectator: Spectator<SuT>;

  const activatedRouteMock = {
    queryParams: of({ 'test': 'test' }),
  };

  const createComponent = createComponentFactory({
    component: SuT,
    detectChanges: false,
    imports: [
    ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA,
    ],
    providers: [
      { provide: ActivatedRoute, useValue: activatedRouteMock },
    ],
  });

  beforeEach(() => {

    spectator = createComponent();

  });

  it('should create', () => {

    spectator.detectChanges();

    expect(spectator.component).toBeTruthy();

  });

});
