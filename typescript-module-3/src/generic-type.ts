// type RelationWithSalaryType = { name: string; salary: number };

interface RelationWithSalaryInterface {
  name: string;
  salary: number;
}

const relationWithSalary: GenericTuple<RelationWithSalaryInterface, string> = [
  {
    name: 'Persian',
    salary: 1000000000,
  },
  'Kate Winslet',
];

const relationWithSalary2: GenericTuple<RelationWithSalaryType, string> = [
  {
    name: 'Persian',
    salary: 1000000000,
  },
  'Kate Winslet',
];

type GenericArray<T> = Array<T>; //jekono type array ke se consider korbe

// const rollNumbers4: Array<number> = [44, 12, 4];
const rollNumbers: GenericArray<number| string> = [44, 12, 4,'fgg'];
const rollNumbers2: GenericArray<string> = ['44', '12', '4'];
const rolllNumbers3: GenericArray<boolean> = [true, false];

type NameRollType = { name: string; roll: number };

const userNameAndRollNumbers: GenericArray<NameRollType> = [
  {
    name: 'Mr. X',
    roll: 1,
  },
  {
    name: 'Mr. Y',
    roll: 2,
  },
];



// generic tuple
type GenericTuple<X, Y> = [X, Y];
// type GenericTuple<X, Y> = Array<X, Y>; //Generic type 'Array<T>' requires 1 type argument(s)

// const relation: GenericTuple<string, Number> = ['Persian', 10];
const relation: GenericTuple<{ a: number; b: string }, Number> = [
  {
    a: 10,
    b: 'asss',
  },
  10,
];


type commonGen<T> = Array<T>
const jamal:commonGen<number> = [5,5,4,43,3,3]
const b:commonGen<string> = ['s','c']

// const obj:Array<{a:number,b:string}>=[{
//   a:30,
//   b:'jamal'
// }]

const obj:commonGen<{a:number,b:string}>=[{
  a:30,
  b:'jamal'
}]