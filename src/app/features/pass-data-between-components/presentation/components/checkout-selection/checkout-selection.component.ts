import { Component } from '@angular/core';
import { CheckoutAComponent } from '../checkout-a/checkout-a.component';
import { CheckoutBComponent } from '../checkout-b/checkout-b.component';
import { CheckoutCComponent } from '../checkout-c/checkout-c.component';
import { NgSwitch, NgSwitchCase } from '@angular/common';
import { CheckoutSelectionRenderType } from './checkout-selection-render-type';

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
  templateUrl: './checkout-selection.component.html',
  styleUrl: './checkout-selection.component.scss'
})
export class CheckoutSelectionComponent {
  render: CheckoutSelectionRenderType;

  dataB: number;
  tempDataB?: number;

  dataC: number;

  constructor() {
    this.render = "initial";
    this.dataB = 0;
    this.dataC = 0;
  }
}
