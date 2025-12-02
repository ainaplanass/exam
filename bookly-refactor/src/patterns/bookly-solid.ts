// @ts-nocheck
class TaxStrategy {
  calculate(subtotal: number, taxType: string) {
    return taxType === 'gen' ? subtotal * 0.1 : subtotal * 0.04;
  }
}
class PremiumDiscountStrategy {
  calculate(subtotal: number, orderCount: number) {
    if (orderCount >= 10) return subtotal * 0.15;
    if (orderCount >= 5) return subtotal * 0.1;
    return subtotal * 0.05;
  }
}
class RegularDiscountStrategy {
  calculate(subtotal: number, orderCount: number) {
    if (orderCount >= 10) return subtotal * 0.05;
    if (orderCount >= 5) return subtotal * 0.02;
    return 0;
  }
}
class DiscountFactory {
  static create(customer: string) {
    return customer === 'premium' ? new PremiumDiscountStrategy() : new RegularDiscountStrategy();
  }
}
class ShippingBuilder {
  static build(type: string) {
    if (type === 'std') return { calculate: (quantity: number) => 5 + quantity * 0.5 };
    if (type === 'exp')
      return {
        calculate: (quantity: number) => {
          let amount = 12 + quantity * 1.0;
          if (quantity >= 4) amount += 6;
          return amount;
        }
      };
    return { calculate: (quantity: number) => 3 + quantity * 0.25 };
  }
}
class OrderFacade {
  constructor() {
    this.tax = new TaxStrategy();
  }
  process(order) {
    const subtotal = order.quantity * order.unitPrice;
    const tax = this.tax.calculate(subtotal, order.taxType);
    const shippingCost = ShippingBuilder.build(order.type).calculate(order.quantity);
    const discount = DiscountFactory.create(order.customerType).calculate(
      subtotal,
      order.orderCount
    );
    const total = subtotal + tax + shippingCost - discount;
    return {
      id: order.id,
      subtotal: subtotal,
      tax,
      shipping: shippingCost,
      discount: discount,
      total,
      type: order.type
    };
  }
}
function processOrders() {
  const orders = [
    {
      id: 1,
      type: 'std',
      quantity: 2,
      unitPrice: 15.0,
      taxType: 'gen',
      customerType: 'premium',
      orderCount: 6
    },
    {
      id: 2,
      type: 'exp',
      quantity: 1,
      unitPrice: 25.0,
      taxType: 'gen',
      customerType: 'regular',
      orderCount: 2
    },
    {
      id: 3,
      type: 'eco',
      quantity: 5,
      unitPrice: 9.5,
      taxType: 'red',
      customerType: 'premium',
      orderCount: 12
    },
    {
      id: 4,
      type: 'std',
      quantity: 3,
      unitPrice: 12.0,
      taxType: 'gen',
      customerType: 'regular',
      orderCount: 1
    },
    {
      id: 5,
      type: 'exp',
      quantity: 4,
      unitPrice: 18.0,
      taxType: 'gen',
      customerType: 'premium',
      orderCount: 8
    }
  ];
  const facade = new OrderFacade();
  let totalRevenue = 0,
    totalDiscounts = 0,
    totalTaxes = 0;
  const results = [];
  for (const order of orders) {
    const result = facade.process(order);
    totalRevenue += result.total;
    totalDiscounts += result.discount;
    totalTaxes += result.tax;
    results.push(result);
  }
  console.log(`=== BOOKLY REPORT === | Total pedidos: ${orders.length}`);
  for (const result of results) {
    console.log(
      `Pedido #${result.id} | Tipo: ${result.type} | Subtotal: €${result.subtotal.toFixed(2)} | IVA: €${result.tax.toFixed(2)} | Envío: €${result.shipping.toFixed(2)} | Descuento: €${result.discount.toFixed(2)} | Total: €${result.total.toFixed(2)}`
    );
  }
  console.log(
    `Ingresos totales: €${totalRevenue.toFixed(2)} | Descuentos totales: €${totalDiscounts.toFixed(2)} | Impuestos totales: €${totalTaxes.toFixed(2)}`
  );
  console.log('=====================');
  return results;
}
if (require.main === module) {
  processOrders();
}
export { processOrders };
