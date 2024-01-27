import { DOCUMENT } from '@angular/common';
import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn } from '@angular/router';

export const isDesktopGuard: CanMatchFn = (route, state) => {
  return (inject(DOCUMENT).defaultView?.innerWidth ?? 0) > 576;
};
