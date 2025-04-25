/**
  ফাংশন ইন্টারফেস (Function Interface) কী?
  ফাংশন ইন্টারফেস হলো এমন একটি structure or blueprint যা নির্ধারণ করে একটি ফাংশন দেখতে কেমন হবে — অর্থাৎ,

  ফাংশনটি কতটি প্যারামিটার নেবে,
  প্রতিটি প্যারামেটারের টাইপ (type) কী হবে,
  এবং ফাংশনটি কি ধরনের মান (return type) রিটার্ন করবে।

 */

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
