import { Injectable } from '@angular/core';

@Injectable()
export class PassDataBetweenComponentsStateService {
  dataB: number;
  dataC: number;

  constructor() {
    this.dataB = 0;
    this.dataC = 0;
  }
}
