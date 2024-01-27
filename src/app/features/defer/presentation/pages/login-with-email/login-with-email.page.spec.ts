import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWithEmailPage } from './login-with-email.page';

describe('LoginWithEmailPage', () => {
  let component: LoginWithEmailPage;
  let fixture: ComponentFixture<LoginWithEmailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginWithEmailPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginWithEmailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
