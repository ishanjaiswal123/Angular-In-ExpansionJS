import { TestBed } from '@angular/core/testing';

import { CombinationGuardService } from './combination-guard.service';

describe('CombinationGuardService', () => {
  let service: CombinationGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CombinationGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
