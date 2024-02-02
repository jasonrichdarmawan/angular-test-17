import { Component, EventEmitter, Output } from '@angular/core';
import { CheckoutSelectionRenderType } from '../checkout-selection/checkout-selection-render-type';

@Component({
  selector: 'app-checkout-b',
  standalone: true,
  imports: [],
  templateUrl: './checkout-b.component.html',
  styleUrl: './checkout-b.component.scss'
})
export class CheckoutBComponent {
  @Output() backClicked: EventEmitter<void>;
  @Output() bClicked: EventEmitter<number>;
  @Output() updateRender: EventEmitter<CheckoutSelectionRenderType>;

  constructor(
  ) {
    this.backClicked = new EventEmitter<void>();
    this.bClicked = new EventEmitter<number>();
    this.updateRender = new EventEmitter<CheckoutSelectionRenderType>();
  }
}
