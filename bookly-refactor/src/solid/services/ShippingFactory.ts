import { IShippingCalculator, IShippingFactory } from '../interfaces';
import { StandardShipping } from './StandardShipping';
import { ExpressShipping } from './ExpressShipping';
import { EconomyShipping } from './EconomyShipping';

export class ShippingFactory implements IShippingFactory {
  create(type: string): IShippingCalculator {
    if (type === 'std') return new StandardShipping();
    if (type === 'exp') return new ExpressShipping();
    return new EconomyShipping();
  }
}
