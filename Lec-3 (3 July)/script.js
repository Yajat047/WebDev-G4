let cart = ["shoes", "shirts", "wallets"];

function orderDetail(cart){
    //1.Total number of products
    const totalProducts = cart.length;
    
    //2. Total amount of products nos*1000
    const totalAmount = totalProducts * 1000;
    
    return {
        products: cart,
        totalProducts: totalProducts,
        totalAmount: totalAmount
    };
}


function orderSummary(){
    //total price and total product
    const orderDetails = orderDetail(cart);
    
    //then generate orderID
    const orderID = "ORD-" + Date.now() + "-" + Math.floor(Math.random() * 1000);
    
    const summary = {
        orderID: orderID,
        products: orderDetails.products,
        totalProducts: orderDetails.totalProducts,
        totalAmount: orderDetails.totalAmount,
        orderDate: new Date().toLocaleString()
    };
    
    return summary;
}

function paymentGateway(){
    //order id, product details, and price, order is successful
    const summary = orderSummary();
    
    // Simulate payment processing
    const paymentMethods = ["Credit Card", "Debit Card", "PayPal", "UPI"];
    const selectedPayment = paymentMethods[Math.floor(Math.random() * paymentMethods.length)];
    
    const paymentResult = {
        orderID: summary.orderID,
        amount: summary.totalAmount,
        paymentMethod: selectedPayment,
        transactionID: "TXN-" + Date.now(),
        status: "SUCCESS",
        timestamp: new Date().toLocaleString(),
        orderSummary: summary
    };
    
    if (paymentResult.status === "SUCCESS") {
        const orderConfirmation = successfulOrder(paymentResult);
        paymentResult.confirmation = orderConfirmation;
    }
    
    return paymentResult;
}

function successfulOrder(paymentResult){
    return {
        message: "Order placed successfully!",
        orderID: paymentResult.orderID,
        transactionID: paymentResult.transactionID,
        amountPaid: paymentResult.amount,
        paymentMethod: paymentResult.paymentMethod,
        orderTime: paymentResult.timestamp,
        estimatedDelivery: "3-5 business days",
        status: "CONFIRMED"
    };
}

// Function to start the complete order process
function processOrder() {
    return paymentGateway();
}