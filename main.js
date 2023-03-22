import Order from './js/models/order.js';
import * as orderService from './js/services/order-service.js';
import * as ship from './js/services/shipping-service.js';

const data = document.getElementById("Pedido").innerHTML.split("\n");

const order1 = new Order(data[0], Number(data[1]).toFixed(2), Number(data[2]).toFixed(2));
const total = orderService.total(order1);

console.log(`TESTE Valor basico: R$ ${order1.basic}`);
console.log(`TESTE Desconto de: R$ ${order1.discount}`);
console.log(`TESTE frete: R$ ${ship.shipment(order1)}`);
console.log(`TESTE Valor total deveria ser: R$ 132.00`);

console.log(`Pedido código: ${order1.code}`);
console.log(`Valor total: ${total.toFixed(2)}`);