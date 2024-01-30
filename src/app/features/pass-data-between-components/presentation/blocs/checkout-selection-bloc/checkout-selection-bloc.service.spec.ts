import { TestBed } from '@angular/core/testing';

import { CheckoutSelectionBlocService } from './checkout-selection-bloc.service';

describe('CheckoutSelectionBlocService', () => {
  let service: CheckoutSelectionBlocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckoutSelectionBlocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
