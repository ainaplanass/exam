import { IShippingCalculator } from '../interfaces';

export class StandardShipping implements IShippingCalculator {
  static BASE = 5;
  static PER_ITEM = 0.5;
  calculate(quantity: number): number {
    return StandardShipping.BASE + quantity * StandardShipping.PER_ITEM;
  }
}
