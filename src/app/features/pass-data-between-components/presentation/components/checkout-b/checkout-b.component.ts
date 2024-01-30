import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PassDataBetweenComponentsRenderState } from '../../blocs/pass-data-between-components/pass-data-between-components';

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
  @Output() updateRender: EventEmitter<PassDataBetweenComponentsRenderState>;

  constructor(
  ) {
    this.backClicked = new EventEmitter<void>();
    this.bClicked = new EventEmitter<number>();
    this.updateRender = new EventEmitter<PassDataBetweenComponentsRenderState>();
  }
}
