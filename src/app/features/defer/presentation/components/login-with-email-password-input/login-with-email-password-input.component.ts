import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login-with-email-password-input[email][back]',
  standalone: true,
  imports: [],
  templateUrl: './login-with-email-password-input.component.html',
  styleUrl: './login-with-email-password-input.component.scss'
})
export class LoginWithEmailPasswordInputComponent {
  @Input({required: true}) email!: string;
  @Output() back: EventEmitter<void>;

  constructor() {
    this.back = new EventEmitter();
  }
}
