import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutAComponent } from './checkout-a.component';

describe('CheckoutAComponent', () => {
  let component: CheckoutAComponent;
  let fixture: ComponentFixture<CheckoutAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckoutAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
