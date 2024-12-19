import { CanActivateFn } from '@angular/router';

export const narutoGuard: CanActivateFn = (route, state) => {
  return true;
};
