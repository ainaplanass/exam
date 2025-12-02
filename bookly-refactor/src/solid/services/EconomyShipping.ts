import { IShippingCalculator } from '../interfaces';

export class EconomyShipping implements IShippingCalculator {
  static BASE = 3;
  static PER_ITEM = 0.25;
  calculate(quantity: number): number {
    return EconomyShipping.BASE + quantity * EconomyShipping.PER_ITEM;
  }
}
