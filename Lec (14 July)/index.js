const { sumOfTwo, subOfTwo, mulOfTwo, divOfTwo } = require('./sumOfTwo.js');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getUserInput() {
    rl.question('Enter first number: ', (num1) => {
        rl.question('Enter second number: ', (num2) => {
            const a = parseFloat(num1);
            const b = parseFloat(num2);
            
            console.log('\n--- Results ---');
            console.log('Sum:', sumOfTwo(a, b));
            console.log('Subtraction:', subOfTwo(a, b));
            console.log('Multiplication:', mulOfTwo(a, b));
            console.log('Division:', divOfTwo(a, b));
            
            rl.close();
        });
    });
}

getUserInput();