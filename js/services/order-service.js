import * as shippingService from './Shipping-service.js';

export function total(order){

    const ship = shippingService.shipment(order);
    const disc = order.basic * (order.discount/100);

return order.basic + disc - ship;
}
