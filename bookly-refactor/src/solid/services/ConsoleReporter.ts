import { IReporter } from '../interfaces';

export class ConsoleReporter implements IReporter {
  print(
    results: any[],
    totals: { revenue: number; discounts: number; taxes: number },
    count: number
  ): void {
    console.log(`=== BOOKLY REPORT === | Total pedidos: ${count}`);
    for (let j = 0; j < results.length; j++) {
      const r = results[j];
      console.log(
        `Pedido #${r.id} | Tipo: ${r.type} | Subtotal: €${r.subtotal.toFixed(2)} | IVA: €${r.tax.toFixed(2)} | Envío: €${r.shipping.toFixed(2)} | Descuento: €${r.discount.toFixed(2)} | Total: €${r.total.toFixed(2)}`
      );
    }
    console.log(
      `Ingresos totales: €${totals.revenue.toFixed(2)} | Descuentos totales: €${totals.discounts.toFixed(2)} | Impuestos totales: €${totals.taxes.toFixed(2)}`
    );
    console.log('=====================');
  }
}
