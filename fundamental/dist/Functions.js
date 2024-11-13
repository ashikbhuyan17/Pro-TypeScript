"use strict";
// Renamed function to avoid conflicts
function sumNumbers(num1, num2) {
    const sum = num1 + num2;
    console.log(sum);
    return sum;
}
sumNumbers(2, 5);
// Arrow Function
const welcome = (fName, lName) => {
    return `Welcome ${fName} ${lName}`;
};
console.log(welcome('Masud', 'Rana'));
// Callback function using arrow functions and map method
const numbers = [1, 2, 4];
const squaredNumbers = numbers.map((item) => item * item);
console.log(squaredNumbers);
// Method inside an object
const Person = {
    name: 'Rana',
    balance: 5,
    addBalance(money) {
        this.balance += money; // Incrementing the balance with the provided money
        return this.balance; // Returning the updated balance
    },
};
// Calling the addBalance method and logging the new balance
console.log(Person.addBalance(10)); // Outputs: 15
