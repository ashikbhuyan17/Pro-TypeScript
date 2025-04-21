/**
 * 
  Type Assertion (টাইপ অ্যাসারশন)  <type>variableName
  
  Type Assertion হলো TypeScript-এ এমন একটি উপায়, যেখানে তুমি TypeScript-কে জোর করে বলে দাও যে, 
  কোনো ভ্যারিয়েবল একটা নির্দিষ্ট টাইপে থাকবে। এটা অনেকটা “আমি জানি এটা কী টাইপ হবে” — এই ভরসার মতো।
  টাইপScript-কে জোর করে জানানো যে ভ্যারিয়েবল একটি নির্দিষ্ট টাইপের
  follow both way: 
  // const resultToBeNumber = kgToGram(1000) as number ;
  // const resultToBeNumber = <number>kgToGram(1000);


  // Angle-bracket syntax (JSX ছাড়া ফাইলের জন্য)
  let value = <string>'Hello';

  // as syntax (সব জায়গায় safe)
  let value2 = 'Hello' as string;
 * 
 */

// // let emni: any;

// // emni = "Next level web devlopment";

// // (emni as string).length;
// // <string>emni.length;

// // function kgToGram(param: string | number): string | number | undefined {
// //   if (typeof param === "string") {
// //     const value = parseFloat(param) * 1000;
// //     return `The Converted result is: ${value} gram`;
// //   }
// //   if (typeof param === "number") {
// //     const value = param * 1000;
// //     return value;
// //   }
// // }

// // const resultToBeNumber = kgToGram(1000) as number ;
// // const resultToBeNumber = <number>kgToGram(1000);
// // const resultToBeString = <string>kgToGram("1000");

// // type CustomErrorType = {
// //   message: string;
// // };

// // try {
// // } catch (err) {
// //   console.log((err as CustomErrorType).message);
// // }

// // const rollNumbers: number[] = [1, 4, 7];

// type ArrayType<X,Y> = [X,Y];

// interface Name{
//   name:string,
// }
// const generic1: ArrayType<string,st> = ["1", "4", "7"];
// const generic2: ArrayType<number> = [1, 2, 3];
// const generic3: ArrayType<Name>=[{name:'Persian'},{age:'i'}]

// interface CrushInterface<T>{
//   name:'Kate Winslet',
//   husband:T
// }

// const husband1 :CrushInterface<boolean> = {name:'Kate Winslet',husband:true}

// const rollNumbers1: Array<number> = [1, 4, 7];
// const rollNumbers2: Array<string> = ["1", "2"];

// const makeArray = <X, Y>(param1: X, param2: Y): [X, Y] => [param1, param2];

// function makeArray2<X, Y>(param1: X, param2: Y): [X, Y] {
//   return [param1, param2];
// }

// const array1 = makeArray(1, 4);
// const array2 = makeArray("5", 6);

// const addMeToCrushMind = (param: object) => {
//   const crushName = "Kate Winslet";
//   const newMind = { ...param, crushName };
//   return newMind;
// };
const addMeToCrushMind = <T extends { name: string }>(param: T) => {
  const crushName = 'Kate Winslet';
  const newMind = { ...param, crushName };
  return newMind;
};

const result = addMeToCrushMind({ name: 'Farhan' });

// result.
