export interface IDiscountCalculator {
  calculate(subtotal: number, customerType: string, orderCount: number): number;
}
