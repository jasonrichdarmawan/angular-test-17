import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-with-email-password-input[back]',
  standalone: true,
  imports: [],
  templateUrl: './login-with-email-password-input.component.html',
  styleUrl: './login-with-email-password-input.component.scss'
})
export class LoginWithEmailPasswordInputComponent {
  @Output() back: EventEmitter<void>;

  constructor() {
    this.back = new EventEmitter();
  }
}
