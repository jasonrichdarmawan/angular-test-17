import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CheckoutSelectionRenderType } from '../checkout-selection/checkout-selection-render-type';

@Component({
  selector: 'app-checkout-a',
  standalone: true,
  imports: [],
  templateUrl: './checkout-a.component.html',
  styleUrl: './checkout-a.component.scss'
})
export class CheckoutAComponent {
  @Input({required: true}) dataB!: number;
  @Input({required: true}) dataC!: number;
  @Output() updateRender: EventEmitter<CheckoutSelectionRenderType>;

  constructor(
  ) {
    this.updateRender = new EventEmitter<CheckoutSelectionRenderType>();
  }
}
