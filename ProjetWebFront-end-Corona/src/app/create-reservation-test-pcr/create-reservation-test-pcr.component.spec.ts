import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReservationTestPCRComponent } from './create-reservation-test-pcr.component';

describe('CreateReservationTestPCRComponent', () => {
  let component: CreateReservationTestPCRComponent;
  let fixture: ComponentFixture<CreateReservationTestPCRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateReservationTestPCRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReservationTestPCRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
