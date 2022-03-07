import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';

import { DeactivateGuard } from './deactivate.guard';

describe('DeactivateGuard', () => {
  let guard: DeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [{
      provide: MatDialog,
      useValue: {}
    }]});
    guard = TestBed.inject(DeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
