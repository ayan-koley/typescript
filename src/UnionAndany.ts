// union
let subscriber: number | string = 43;
subscriber = '1m';

let order: 'process' | 'success' | 'error' = 'process';


// any -> always try to avoid any from your code ( turns off type checking for that variable )
let orders = [12, 43, 45];
let currentOrder;

for(let order of orders) {
    if(order === 43) {
        currentOrder = order;
    }
    currentOrder = 23;
}

console.log(currentOrder);