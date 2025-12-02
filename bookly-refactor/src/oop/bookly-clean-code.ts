// @ts-nocheck
function calculateTax(subtotal, taxType) {
  return taxType === 'gen' ? subtotal * 0.1 : subtotal * 0.04;
}

function calculateDiscount(subtotal, customerType, orderCount) {
  if (customerType === 'premium') {
    if (orderCount >= 10) return subtotal * 0.15;
    if (orderCount >= 5) return subtotal * 0.1;
    return subtotal * 0.05;
  }
  if (customerType === 'regular') {
    if (orderCount >= 10) return subtotal * 0.05;
    if (orderCount >= 5) return subtotal * 0.02;
    return 0;
  }
  return 0;
}

function calculateShippingCost(type, quantity) {
  if (type === 'std') return 5 + quantity * 0.5;
  if (type === 'exp') {
    let amount = 12 + quantity * 1.0;
    if (quantity >= 4) amount += 6;
    return amount;
  }
  return 3 + quantity * 0.25;
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
  let totalRevenue = 0,
    totalDiscounts = 0,
    totalTaxes = 0;
  const results = [];
  for (let i = 0; i < orders.length; i++) {
    const order = orders[i];
    const subtotal = order.quantity * order.unitPrice;
    const tax = calculateTax(subtotal, order.taxType);
    const shippingCost = calculateShippingCost(order.type, order.quantity);
    const discount = calculateDiscount(subtotal, order.customerType, order.orderCount);
    const total = subtotal + tax + shippingCost - discount;
    totalDiscounts += discount;
    totalTaxes += tax;
    results.push({
      id: order.id,
      subtotal: subtotal,
      tax,
      shipping: shippingCost,
      discount: discount,
      total,
      type: order.type
    });
  }
  console.log(`=== BOOKLY REPORT === | Total pedidos: ${orders.length}`);
  for (let j = 0; j < results.length; j++) {
    const result = results[j];
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
