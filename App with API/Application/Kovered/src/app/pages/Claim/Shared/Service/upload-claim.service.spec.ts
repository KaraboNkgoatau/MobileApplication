import { TestBed } from '@angular/core/testing';

import { UploadClaimService } from './upload-claim.service';

describe('UploadClaimService', () => {
  let service: UploadClaimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadClaimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
