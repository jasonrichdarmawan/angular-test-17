import { Injectable } from '@angular/core';

@Injectable()
export class PassDataBetweenComponentsCheckoutBlocService {
  dataB: number;
  tempDataB?: number;
  dataC: number;

  constructor() {
    this.dataB = 0;
    this.dataC = 0;
  }
}
