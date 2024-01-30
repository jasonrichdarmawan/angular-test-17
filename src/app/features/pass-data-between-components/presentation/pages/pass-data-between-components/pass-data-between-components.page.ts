import { Component } from '@angular/core';
import { CheckoutAComponent } from '../../components/checkout-a/checkout-a.component';
import { CheckoutBComponent } from '../../components/checkout-b/checkout-b.component';
import { CheckoutCComponent } from '../../components/checkout-c/checkout-c.component';
import { NgSwitch, NgSwitchCase } from '@angular/common';
import { PassDataBetweenComponentsRenderState } from '../../blocs/pass-data-between-components/pass-data-between-components';
import { PassDataBetweenComponentsCheckoutBlocService } from '../../blocs/pass-data-between-components/pass-data-between-components-checkout-bloc/pass-data-between-components-checkout-bloc.service';

@Component({
  selector: 'app-pass-data-between-components',
  standalone: true,
  imports: [
    CheckoutAComponent,
    CheckoutBComponent,
    CheckoutCComponent,
    NgSwitch,
    NgSwitchCase,
  ],
  providers: [
    PassDataBetweenComponentsCheckoutBlocService,
  ],
  templateUrl: './pass-data-between-components.page.html',
  styleUrl: './pass-data-between-components.page.scss'
})
export class PassDataBetweenComponentsPage {
  render: PassDataBetweenComponentsRenderState;

  constructor(
    public checkoutBloc: PassDataBetweenComponentsCheckoutBlocService,
  ) {
    this.render = "initial";
  }
}
