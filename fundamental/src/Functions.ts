// Renamed function to avoid conflicts
function sumNumbers(num1: number, num2: number): number {
  const sum = num1 + num2;
  console.log(sum);
  return sum;
}
sumNumbers(2, 5);

// Arrow Function
const welcome = (fName: string, lName: string): string => {
  return `Welcome ${fName} ${lName}`;
};
console.log(welcome('Masud', 'Rana'));

// Callback function using arrow functions and map method
const numbers: number[] = [1, 2, 4];
const squaredNumbers = numbers.map((item: number): number => item * item);
console.log(squaredNumbers);

// Method inside an object
const Person: {
  name: string;
  balance: number;
  addBalance(money: number): number;
} = {
  name: 'Rana',
  balance: 5,
  addBalance(money: number) {
    this.balance += money; // Incrementing the balance with the provided money
    return this.balance; // Returning the updated balance
  },
};

// Calling the addBalance method and logging the new balance
console.log(Person.addBalance(10)); // Outputs: 15
