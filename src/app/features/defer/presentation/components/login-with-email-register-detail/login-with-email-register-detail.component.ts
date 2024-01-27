import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login-with-email-register-detail[email][back]',
  standalone: true,
  imports: [],
  templateUrl: './login-with-email-register-detail.component.html',
  styleUrl: './login-with-email-register-detail.component.scss'
})
export class LoginWithEmailRegisterDetailComponent {
  @Input({required: true}) email!: string;
  @Output() back: EventEmitter<void>

  constructor() {
    this.back = new EventEmitter();
  }
}
