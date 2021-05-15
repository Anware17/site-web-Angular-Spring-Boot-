import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboeratoiresDetailsComponent } from './laboeratoires-details.component';

describe('LaboeratoiresDetailsComponent', () => {
  let component: LaboeratoiresDetailsComponent;
  let fixture: ComponentFixture<LaboeratoiresDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboeratoiresDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboeratoiresDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
