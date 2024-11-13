interface MathFunction {
  (a: number, b: number): number;
}
const add: MathFunction = (a: number, b: number): number => a + b;
console.log(add(2, 3)); // Output: 5

interface Calculator {
  (a: number, b: number, operation: string): number | string;
}

const calculate: Calculator = (
  a: number,
  b: number,
  operation: string
): number | string => {
  switch (operation) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return b !== 0 ? a / b : 'Error: Division by zero';
    default:
      return 'Unknown operation';
  }
};

console.log(calculate(10, 5, 'add')); // Output: 15
console.log(calculate(10, 5, 'divide')); // Output: 2
console.log(calculate(10, 0, 'divide')); // Output: Error: Division by zero
