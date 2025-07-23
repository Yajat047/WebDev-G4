const { add, subtract, multiply, divide, square, power } = require('./index.js');

console.log('Testing Chainsend Math Utils Package');
console.log('====================================');

// Test addition
console.log('1. Testing add function:');
console.log(`add(5, 3) = ${add(5, 3)}`);
console.log(`add(-2, 7) = ${add(-2, 7)}`);
console.log(`add(0, 0) = ${add(0, 0)}`);
console.log(`add(3.5, 2.1) = ${add(3.5, 2.1)}`);

// Test subtraction
console.log('\n2. Testing subtract function:');
console.log(`subtract(10, 4) = ${subtract(10, 4)}`);
console.log(`subtract(5, 8) = ${subtract(5, 8)}`);
console.log(`subtract(0, 5) = ${subtract(0, 5)}`);
console.log(`subtract(7.5, 2.2) = ${subtract(7.5, 2.2)}`);

// Test multiplication
console.log('\n3. Testing multiply function:');
console.log(`multiply(6, 7) = ${multiply(6, 7)}`);
console.log(`multiply(-3, 4) = ${multiply(-3, 4)}`);
console.log(`multiply(0, 10) = ${multiply(0, 10)}`);
console.log(`multiply(2.5, 4) = ${multiply(2.5, 4)}`);

// Test division
console.log('\n4. Testing divide function:');
console.log(`divide(15, 3) = ${divide(15, 3)}`);
console.log(`divide(10, 4) = ${divide(10, 4)}`);
console.log(`divide(-12, 3) = ${divide(-12, 3)}`);
console.log(`divide(7, 2) = ${divide(7, 2)}`);

// Test error handling
console.log('\n5. Testing error handling:');

// Test type checking
try {
    add('5', 3);
} catch (error) {
    console.log(`Type error caught: ${error.message}`);
}

try {
    multiply(5, 'abc');
} catch (error) {
    console.log(`Type error caught: ${error.message}`);
}

// Test division by zero
try {
    divide(10, 0);
} catch (error) {
    console.log(`Division by zero error caught: ${error.message}`);
}

// Test new functions
console.log('\n7. Testing square function:');
console.log(`square(4) = ${square(4)}`);
console.log(`square(7) = ${square(7)}`);

console.log('\n8. Testing power function:');
console.log(`power(2, 3) = ${power(2, 3)}`);
console.log(`power(5, 2) = ${power(5, 2)}`);
console.log(`power(3, 0) = ${power(3, 0)}`);
console.log(`power(2, -1) = ${power(2, -1)}`);
console.log(`power(4, 0.5) = ${power(4, 0.5)}`);

console.log('\nAll tests completed!');
