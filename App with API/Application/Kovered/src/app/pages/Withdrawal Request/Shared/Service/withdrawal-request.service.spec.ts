import { TestBed } from '@angular/core/testing';

import { WithdrawalRequestService } from './withdrawal-request.service';

describe('WithdrawalRequestService', () => {
  let service: WithdrawalRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WithdrawalRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
