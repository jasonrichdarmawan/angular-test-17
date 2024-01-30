import { Component } from '@angular/core';
import { CheckoutAComponent } from '../checkout-a/checkout-a.component';
import { CheckoutBComponent } from '../checkout-b/checkout-b.component';
import { CheckoutCComponent } from '../checkout-c/checkout-c.component';
import { CheckoutSelectionBlocService } from '../../blocs/checkout-selection-bloc/checkout-selection-bloc.service';
import { NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-checkout-selection',
  standalone: true,
  imports: [
    CheckoutAComponent,
    CheckoutBComponent,
    CheckoutCComponent,
    NgSwitch,
    NgSwitchCase,
  ],
  providers: [
    CheckoutSelectionBlocService,
  ],
  templateUrl: './checkout-selection.component.html',
  styleUrl: './checkout-selection.component.scss'
})
export class CheckoutSelectionComponent {
  constructor(
    public checkoutSelectionBloc: CheckoutSelectionBlocService,
  ) {
  }
}
