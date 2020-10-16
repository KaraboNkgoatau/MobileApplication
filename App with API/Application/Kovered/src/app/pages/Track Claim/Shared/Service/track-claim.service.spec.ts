import { TestBed } from '@angular/core/testing';

import { TrackClaimService } from './track-claim.service';

describe('TrackClaimService', () => {
  let service: TrackClaimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackClaimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
