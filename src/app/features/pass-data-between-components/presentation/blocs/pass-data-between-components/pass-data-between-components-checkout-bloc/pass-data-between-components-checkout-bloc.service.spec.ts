import { TestBed } from '@angular/core/testing';

import { PassDataBetweenComponentsCheckoutBlocService } from './pass-data-between-components-checkout-bloc.service';

describe('PassDataBetweenComponentsCheckoutBlocService', () => {
  let service: PassDataBetweenComponentsCheckoutBlocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassDataBetweenComponentsCheckoutBlocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
