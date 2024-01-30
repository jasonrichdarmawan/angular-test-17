import { Component } from '@angular/core';
import { CheckoutAComponent } from '../../components/checkout-a/checkout-a.component';
import { CheckoutBComponent } from '../../components/checkout-b/checkout-b.component';
import { CheckoutCComponent } from '../../components/checkout-c/checkout-c.component';
import { NgSwitch, NgSwitchCase } from '@angular/common';
import { CheckoutSelectionComponent } from '../../components/checkout-selection/checkout-selection.component';

@Component({
  selector: 'app-pass-data-between-components',
  standalone: true,
  imports: [
    CheckoutSelectionComponent,
  ],
  templateUrl: './pass-data-between-components.page.html',
  styleUrl: './pass-data-between-components.page.scss'
})
export class PassDataBetweenComponentsPage {
  constructor(
  ) {
  }
}
