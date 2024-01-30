import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CheckoutSelectionBlocRenderType } from '../../blocs/checkout-selection-bloc/checkout-selection-bloc-render-type';

@Component({
  selector: 'app-checkout-c',
  standalone: true,
  imports: [],
  templateUrl: './checkout-c.component.html',
  styleUrl: './checkout-c.component.scss'
})
export class CheckoutCComponent {
  @Input({required: true}) dataB!: number;
  @Output() backClicked: EventEmitter<void>;
  @Output() updateDataB: EventEmitter<number>;
  @Output() updateDataC: EventEmitter<number>;
  @Output() updateRender: EventEmitter<CheckoutSelectionBlocRenderType>;

  constructor() {
    this.backClicked = new EventEmitter<void>();
    this.updateDataB = new EventEmitter<number>();
    this.updateDataC = new EventEmitter<number>();
    this.updateRender = new EventEmitter<CheckoutSelectionBlocRenderType>();
  }

}
