import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PassDataBetweenComponentsRenderState } from '../../blocs/pass-data-between-components/pass-data-between-components';

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
  @Output() updateRender: EventEmitter<PassDataBetweenComponentsRenderState>;

  constructor(
  ) {
    this.updateRender = new EventEmitter<PassDataBetweenComponentsRenderState>();
  }
}
