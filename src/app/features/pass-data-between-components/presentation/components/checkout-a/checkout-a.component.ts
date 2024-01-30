import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CheckoutSelectionBlocRenderType } from '../../blocs/checkout-selection-bloc/checkout-selection-bloc-render-type';

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
  @Output() updateRender: EventEmitter<CheckoutSelectionBlocRenderType>;

  constructor(
  ) {
    this.updateRender = new EventEmitter<CheckoutSelectionBlocRenderType>();
  }
}
