import { Component } from '@angular/core';
import { LoginWithEmailPasswordInputComponent } from '../../components/login-with-email-password-input/login-with-email-password-input.component';
import { LoginWithEmailRegisterDetailComponent } from '../../components/login-with-email-register-detail/login-with-email-register-detail.component';
import { NgSwitch, NgSwitchCase } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-with-email',
  standalone: true,
  imports: [
    LoginWithEmailPasswordInputComponent,
    LoginWithEmailRegisterDetailComponent,
    NgSwitch,
    NgSwitchCase,
    ReactiveFormsModule
  ],
  templateUrl: './login-with-email.page.html',
  styleUrl: './login-with-email.page.scss'
})
export class LoginWithEmailPage {
  render:
    "initial"
    | "login-with-email-password-input"
    | "login-with-email-register-detail"

  emailFormControl: FormControl;

  constructor() {
    this.render = "initial";
    this.emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  }
}
