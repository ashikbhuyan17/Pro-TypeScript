
// interface CrushInterface<T,U>{
//   name:string,
//   husband:T,
//   wife4:U,
//   // other:V
// }

// const crushBou: CrushInterface<Object,Object> = {
//   name: 'Kate',
//   husband: {
//     name: 'Persian',
//     age: 30,
//   },
//   wife4: {
//     name: 'Winslet',
//     age: 40,
//   },
//   // other: undefined,
// };

// interface CrushInterface<T,U>{
//   name:string,
//   husband:T,
//   wife4:U,
//   // other:V
// }

// interface husband{
//   name:string,
//   age:number
// }
// interface wife{
//   name:string,
//   age:number,
//   isAngry:boolean
// }
// const crushBou: CrushInterface<husband,wife> = {
//   name: 'Kate',
//   husband: {
//     name: 'Persian',
//     age: 30,
//   },
//   wife4: {
//     name: 'Winslet',
//     age: 40,
//     isAngry:true
//   },
//   // other: undefined,
// };


// =========================== if type are null or undefined when use in optional generic type
interface CrushInterface<T,U>{
  name:string,
  husband:T,
  wife4?:U,
  // other:V
}

interface husband{
  name:string,
  age:number
}

const crushBou: CrushInterface<husband> = {
  name: 'Kate',
  husband: {
    name: 'Persian',
    age: 30,
  },
  
  // other: undefined,
};
