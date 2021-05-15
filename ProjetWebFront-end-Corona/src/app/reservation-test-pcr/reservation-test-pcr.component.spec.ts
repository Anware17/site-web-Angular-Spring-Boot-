import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationTestPCRComponent } from './reservation-test-pcr.component';

describe('ReservationTestPCRComponent', () => {
  let component: ReservationTestPCRComponent;
  let fixture: ComponentFixture<ReservationTestPCRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationTestPCRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationTestPCRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
