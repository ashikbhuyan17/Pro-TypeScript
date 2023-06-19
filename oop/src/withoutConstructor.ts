// interface MyObject {
//   property1: string;
//   property2: number;
// }

// function processObject(obj: MyObject) {
//   console.log(obj.property1);
//   console.log(obj.property2);
//   // Perform additional operations with the object properties
//   return `${obj.property1},${obj.property2}`;
// }

// // Usage
// const myObj: MyObject = {
//   property1: 'Hello',
//   property2: 42,
// };

// const result = processObject(myObj);
// console.log('🚀 ~ file: withoutConstructor.ts:19 ~ result:', result);

class MyClass {
  property1!: string;
  property2!: number;
}

function createMyClassObject(prop1: string, prop2: number): MyClass {
  const obj = new MyClass();
  obj.property1 = prop1;
  obj.property2 = prop2;
  return obj;
}

// Usage
const myObj = createMyClassObject('Hello', 42);
console.log('🚀 ~ file: withoutConstructor.ts:36 ~ myObj:', myObj);
console.log(myObj.property1); // Output: Hello
console.log(myObj.property2); // Output: 42
