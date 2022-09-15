import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolateDataComponent } from './interpolate-data.component';

describe('InterpolateDataComponent', () => {
  let component: InterpolateDataComponent;
  let fixture: ComponentFixture<InterpolateDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpolateDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterpolateDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
