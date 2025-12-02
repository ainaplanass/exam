import { IShippingCalculator } from './IShippingCalculator';

export interface IShippingFactory {
  create(type: string): IShippingCalculator;
}
