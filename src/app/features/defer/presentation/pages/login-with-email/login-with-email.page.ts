import { Component } from '@angular/core';
import { LoginWithEmailPasswordInputComponent } from '../../components/login-with-email-password-input/login-with-email-password-input.component';
import { LoginWithEmailRegisterDetailComponent } from '../../components/login-with-email-register-detail/login-with-email-register-detail.component';
import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-login-with-email',
  standalone: true,
  imports: [
    LoginWithEmailPasswordInputComponent,
    LoginWithEmailRegisterDetailComponent,
    NgSwitch,
    NgSwitchCase,
  ],
  templateUrl: './login-with-email.page.html',
  styleUrl: './login-with-email.page.scss'
})
export class LoginWithEmailPage {
  render:
    "initial"
    | "login-with-email-password-input"
    | "login-with-email-register-detail"

  constructor() {
    this.render = "initial";
  }
}
