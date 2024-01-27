import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWithEmailRegisterDetailComponent } from './login-with-email-register-detail.component';

describe('LoginWithEmailRegisterDetailComponent', () => {
  let component: LoginWithEmailRegisterDetailComponent;
  let fixture: ComponentFixture<LoginWithEmailRegisterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginWithEmailRegisterDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginWithEmailRegisterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
