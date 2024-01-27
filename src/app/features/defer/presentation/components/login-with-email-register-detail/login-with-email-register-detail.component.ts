import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-with-email-register-detail[back]',
  standalone: true,
  imports: [],
  templateUrl: './login-with-email-register-detail.component.html',
  styleUrl: './login-with-email-register-detail.component.scss'
})
export class LoginWithEmailRegisterDetailComponent {
  @Output() back: EventEmitter<void>

  constructor() {
    this.back = new EventEmitter();
  }
}
