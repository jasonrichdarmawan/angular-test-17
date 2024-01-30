import { Injectable } from '@angular/core';
import { CheckoutSelectionBlocRenderType } from './checkout-selection-bloc-render-type';

@Injectable()
export class CheckoutSelectionBlocService {
  render: CheckoutSelectionBlocRenderType;

  dataB: number;
  tempDataB?: number;

  dataC: number;

  constructor() {
    this.render = "initial";
    this.dataB = 0;
    this.dataC = 0;
  }
}
