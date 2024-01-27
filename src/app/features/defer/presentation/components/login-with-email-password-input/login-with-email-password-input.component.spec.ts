import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWithEmailPasswordInputComponent } from './login-with-email-password-input.component';

describe('LoginWithEmailPasswordInputComponent', () => {
  let component: LoginWithEmailPasswordInputComponent;
  let fixture: ComponentFixture<LoginWithEmailPasswordInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginWithEmailPasswordInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginWithEmailPasswordInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
