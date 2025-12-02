export interface IReporter {
  print(
    results: any[],
    totals: { revenue: number; discounts: number; taxes: number },
    count: number
  ): void;
}
