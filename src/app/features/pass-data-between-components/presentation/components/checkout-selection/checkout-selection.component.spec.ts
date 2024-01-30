import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutSelectionComponent } from './checkout-selection.component';

describe('CheckoutSelectionComponent', () => {
  let component: CheckoutSelectionComponent;
  let fixture: ComponentFixture<CheckoutSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutSelectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckoutSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
