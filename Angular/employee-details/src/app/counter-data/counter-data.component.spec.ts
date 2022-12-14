import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterDataComponent } from './counter-data.component';

describe('CounterDataComponent', () => {
  let component: CounterDataComponent;
  let fixture: ComponentFixture<CounterDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
