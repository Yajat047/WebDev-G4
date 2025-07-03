// console.log("Start scipt");

// function walkInRes(){
//     setTimeout(()=>{
//         console.log("Walking to the restaurant");
//     },5000)
//     setTimeout(cb,3000);
// }
// // function walkInRes(cb){
// //     console.log("I am walking to the res");
// //     setTimeout(cb,3000);
// // }
// function checkMenu(cb){
//     console.log("I am checking the menu");
//     setTimeout(cb,2000);
// }
// function orderFood(cb){
//     console.log("I am ordering food");
//     setTimeout(cb,5000);
// }
// function HavingLunch(cb){
//     console.log("I am having lunch");
//     setTimeout(cb,6000);
// }
// function paybill(cb){
//     console.log("I am paying the bill");
//     setTimeout(cb,3000);
// }
// function walkout(cb){
//     console.log("I am walking out of the res");
//     setTimeout(cb,3000);
// }
// walkInRes(()=>{
//     checkMenu(()=>{
//         orderFood(()=>{
//             HavingLunch(()=>{
//                 paybill(()=>{
//                     walkout(()=>{
//                         console.log("End of script");
//                     })
//                 })
//             })
//         })
//     })
// })

// function checkMenu(){
//     setTimeout(()=>{
//         console.log("I am checking the menu");
//     },2000);
// }

// function orderFood(){
//     setTimeout(()=>{
//         console.log("I am ordering the food");
//     },5000);
// }


var cart=["Shoes","T-shirt","Watches","Cap"];

function createOrder(cart,cb) {
    
        let price = cart.length * 1000;
        let noOfItem = cart.length;
        console.log(" Items: " + noOfItem +"  Order created: value:" + price );
        setTimeout(() => {
             cb(price, noOfItem);
    }, 2000);
}

function placeOrder(price, noOfItem, cb) {
    
        let orderId = Math.floor(Math.random() * 10000);
        console.log("Order placed! ID:", orderId);
        setTimeout(() => {
         cb(orderId, price, noOfItem);
    }, 5000); 
}

function orderPayment(orderId, price, noOfItem, cb) {
    setTimeout(() => {
        console.log(`Payment of ${price} for ${noOfItem} items (Order ID: ${orderId}) successful!`);
         cb(orderId, price, noOfItem);
    }, 3000);
}

function orderStatus(cart, price, noOfItem, orderId) {
    setTimeout(() => {
        console.log("Order Summary-->");
        console.log("Number of Items:", noOfItem);
        console.log("Total Price: Rs." + price);
        console.log("Order ID:", orderId);
        console.log("Payment Status: Successful");
        console.log("Order Status: Delivered");
    }, 5000);
}

createOrder(cart, function(price, noOfItem) {
    placeOrder(price, noOfItem, function(orderId, price, noOfItem) {
        orderPayment(orderId, price, noOfItem, function(cart, price, noOfItem, orderId) {
            orderStatus(cart, price, noOfItem, orderId);
        });
    });
});


let arr3 = [1,2,3,4,5];
// prototype
Array.prototype.doubleArrVal = function(logic){
    let output1 = [];
    for(let i = 0 ; i < this.length ; i++){
        output1.push(logic(this[i]));
    }
    return output1;
}

// syntax is similar to map
let answer = arr3.doubleArrVal(function(x){
    return x * 2;
});
console.log(answer);