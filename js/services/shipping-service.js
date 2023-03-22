
export function shipment(order){
    
    let freight = 0.0;
    const basic = Number(order.basic);

    if (basic < 100.0){
        freight = 20.0;
    }
    else if (basic < 200.0){
        freight = 12.0;
    }
    else{
        freight = 0.0;
    };

 return freight;
}