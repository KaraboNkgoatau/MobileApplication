import { TestBed } from '@angular/core/testing';

import { BusinessContactDetailsService } from './business-contact-details.service';

describe('BusinessContactDetailsService', () => {
  let service: BusinessContactDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessContactDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
