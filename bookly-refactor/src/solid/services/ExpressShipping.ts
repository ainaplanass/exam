import { IShippingCalculator } from '../interfaces';

export class ExpressShipping implements IShippingCalculator {
  static BASE = 12;
  static PER_ITEM = 1.0;
  static BULK_THRESHOLD = 4;
  static BULK_SURCHARGE = 6;
  calculate(quantity: number): number {
    let amount = ExpressShipping.BASE + quantity * ExpressShipping.PER_ITEM;
    if (quantity >= ExpressShipping.BULK_THRESHOLD)
      amount = amount + ExpressShipping.BULK_SURCHARGE;
    return amount;
  }
}
