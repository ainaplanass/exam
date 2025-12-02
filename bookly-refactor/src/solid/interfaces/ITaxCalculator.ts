export interface ITaxCalculator {
  calculate(subtotal: number, taxType: string): number;
}
