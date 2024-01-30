import { Component } from '@angular/core';
import { CheckoutAComponent } from '../../components/checkout-a/checkout-a.component';
import { CheckoutBComponent } from '../../components/checkout-b/checkout-b.component';
import { CheckoutCComponent } from '../../components/checkout-c/checkout-c.component';
import { NgSwitch, NgSwitchCase } from '@angular/common';
import { PassDataBetweenComponentsRenderState } from '../../blocs/pass-data-between-components/pass-data-between-components';
import { PassDataBetweenComponentsStateService } from '../../blocs/pass-data-between-components/pass-data-between-components-state/pass-data-between-components-state.service';

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
    PassDataBetweenComponentsStateService,
  ],
  templateUrl: './pass-data-between-components.page.html',
  styleUrl: './pass-data-between-components.page.scss'
})
export class PassDataBetweenComponentsPage {
  render: PassDataBetweenComponentsRenderState;
  tempDataB?: number;

  constructor(
    public state: PassDataBetweenComponentsStateService,
  ) {
    this.render = "initial";
  }
}
