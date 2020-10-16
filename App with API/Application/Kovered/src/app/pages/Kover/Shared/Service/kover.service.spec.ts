import { TestBed } from '@angular/core/testing';

import { KoverService } from './kover.service';

describe('KoverService', () => {
  let service: KoverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KoverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
