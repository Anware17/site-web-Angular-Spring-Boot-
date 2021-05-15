import { TestBed } from '@angular/core/testing';

import { ReservationTestService } from './reservation-test.service';

describe('ReservationTestService', () => {
  let service: ReservationTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
