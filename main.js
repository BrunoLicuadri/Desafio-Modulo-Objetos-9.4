import Order from './js/models/order.js';
import * as orderService from './js/services/order-service.js';

const data = document.getElementById("Pedido").innerHTML.split("\n");

const order = new Order(data[0], Number(data[1]), Number(data[2]));
const total = orderService.total(order);

console.log(`Pedido código: ${order.code}`);
console.log(`Valor total: ${total.toFixed(2)}`);