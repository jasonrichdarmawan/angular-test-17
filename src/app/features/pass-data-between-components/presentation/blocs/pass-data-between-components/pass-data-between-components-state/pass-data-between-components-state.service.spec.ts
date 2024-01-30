import { TestBed } from '@angular/core/testing';

import { PassDataBetweenComponentsStateService } from './pass-data-between-components-state.service';

describe('PassDataBetweenComponentsStateService', () => {
  let service: PassDataBetweenComponentsStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassDataBetweenComponentsStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
