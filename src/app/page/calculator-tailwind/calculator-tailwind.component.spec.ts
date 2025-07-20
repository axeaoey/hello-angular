import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorTailwindComponent } from './calculator-tailwind.component';

describe('CalculatorTailwindComponent', () => {
  let component: CalculatorTailwindComponent;
  let fixture: ComponentFixture<CalculatorTailwindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorTailwindComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorTailwindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
