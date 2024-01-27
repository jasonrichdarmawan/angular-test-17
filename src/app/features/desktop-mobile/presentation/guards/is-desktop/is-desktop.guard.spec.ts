import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isDesktopGuard } from './is-desktop.guard';

describe('isDesktopGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isDesktopGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
