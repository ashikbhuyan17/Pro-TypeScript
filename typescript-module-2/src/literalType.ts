//www.tektutorialshub.com/typescript/typescript-literal-types/#union-types

// A literal is a notation for representing a fixed value in the source code.
// Literal types let you indicate that an expression is equal to some specific primitive value.
// literal types available in TypeScript today: strings, numbers, and booleans;

// string literal
// here company string type are same of company value and you will store multiple literal string by union
// Literal type নির্দিষ্ট কিছু মানকে টাইপ হিসেবে ব্যবহার করতে দেয়।
const user1: {
  company: 'Programming Hero' | 'bangladesh' | 'india';
  name: string;
  age: number;
  isMarried: boolean;
  wife?: string;
} = {
  company: 'Programming Hero',
  name: 'Montu Mia',
  age: 52,
  isMarried: true,
};

// ------------------------------------------------------------------------
type Easing = 'ease-in' | 'ease-out' | 'ease-in-out';

class UIElement {
  animate(dx: number, dy: number, easing: Easing) {
    if (easing === 'ease-in') {
      // ...
    } else if (easing === 'ease-out') {
    } else if (easing === 'ease-in-out') {
    } else {
      // It's possible that someone could reach this
      // by ignoring your types though.
    }
  }
}

let button = new UIElement();
button.animate(0, 0, 'ease-in');
button.animate(0, 0, 'uneasy');

// Numeric Literal Types
function getSize(size: 35 | 38 | 41 | 44 | 47 | 50): string {
  if (size == 35) {
    return 'S';
  } else if (size == 38) {
    return 'M';
  } else if (size == 41) {
    return 'L';
  } else if (size == 44) {
    return 'XL';
  } else if (size == 47) {
    return 'XXL';
  } else if (size == 50) {
    return 'XXXL';
  }
  return 'xxxxxxxxxxxx';
}

getSize(35); //OK
// getS
