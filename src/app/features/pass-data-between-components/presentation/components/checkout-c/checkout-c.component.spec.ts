import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutCComponent } from './checkout-c.component';

describe('CheckoutCComponent', () => {
  let component: CheckoutCComponent;
  let fixture: ComponentFixture<CheckoutCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckoutCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
