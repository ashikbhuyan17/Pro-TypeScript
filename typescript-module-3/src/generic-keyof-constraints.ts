// type PersonType = {
//   name: string;
//   age: number;
//   address: string;
// };

// type newType = "name" | "age" | "address"; // manully korsi

// type newTypeUsingKeyOf = keyof PersonType;   //keyof => PersonType object take union e convert kore flve => "name" | "age" | "address";

// // const a: newType= 'age'
// // const b: newTypeUsingKeyOf='hh'

// // Y = 'name' |'age'


// amra keyOf er madhome ekta generic type ke onno ekta generic type er upor constraints korte pari orthat force korte pari
function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
    console.log("🚀 ~ file: generic-keyof-constraints.ts:17 ~ key:", key)
    return obj[key];
}

const property = getProperty({ name: "Mr.X", age: 100 }, "name");
console.log("🚀 ~ file: generic-keyof-constraints.ts:21 ~ property:", property)

// // ({name: 'Mr.X' ,age:100} , 'age')  //100
// // const a={
// //   name: 'Mr.X' ,age:100
// // }
// // a['age']
