import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtegeComponent } from './protege.component';

describe('ProtegeComponent', () => {
  let component: ProtegeComponent;
  let fixture: ComponentFixture<ProtegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtegeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
