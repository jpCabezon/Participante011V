import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { narutoGuard } from './naruto.guard';

describe('narutoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => narutoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
