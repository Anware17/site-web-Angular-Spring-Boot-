import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLaboratoireComponent } from './create-laboratoire.component';

describe('CreateLaboratoireComponent', () => {
  let component: CreateLaboratoireComponent;
  let fixture: ComponentFixture<CreateLaboratoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLaboratoireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLaboratoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
