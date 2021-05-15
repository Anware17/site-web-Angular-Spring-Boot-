import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLaboratoireComponent } from './list-laboratoire.component';

describe('ListLaboratoireComponent', () => {
  let component: ListLaboratoireComponent;
  let fixture: ComponentFixture<ListLaboratoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLaboratoireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLaboratoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
