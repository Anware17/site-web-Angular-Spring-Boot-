import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLaboratoireComponent } from './update-laboratoire.component';

describe('UpdateLaboratoireComponent', () => {
  let component: UpdateLaboratoireComponent;
  let fixture: ComponentFixture<UpdateLaboratoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLaboratoireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLaboratoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
