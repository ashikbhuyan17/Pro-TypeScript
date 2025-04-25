/**
 *
 * Generic হলো যা  TypeScript- ke  ডাইনামিক টাইপ ব্যবহারের সুযোগ দেয়, কিন্তু টাইপ সেফটি বজায় রেখে।
 * 👉 এটি ফাংশন, টাইপ, ইন্টারফেস বা ক্লাসে ব্যবহার করা যায়, যেখানে টাইপ আগে থেকে না জানলেও আমরা generic হিসেবে তা ব্যবহার করতে পারি।
 */

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

// ==============manual array =============
// const rollNumbers4: Array<number> = [44, 12, 4];
// const rollNumbers: Array<number | string> = [44, 12, 4, 'fgg'];
// const rollNumbers2: Array<string> = ['44', '12', '4'];
// const rolllNumbers3: Array<boolean> = [true, false];
// const rolllNumbers4: Array<{name:string, age:number}> = [{name:'jamal',age:'20'},{name:'jamal',age:'20'}};
// const rolllNumbers5: {name:string, age:number}[] = [{name:'jamal',age:'20'},{name:'jamal',age:'20'}};
const rollNumbers: GenericArray<number | string> = [44, 12, 4, 'fgg'];
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

type commonGen<T> = Array<T>;
const jamal: commonGen<number> = [5, 5, 4, 43, 3, 3];
const b: commonGen<string> = ['s', 'c'];

// const obj:Array<{a:number,b:string}>=[{
//   a:30,
//   b:'jamal'
// }]

const obj: commonGen<{ a: number; b: string }> = [
  {
    a: 30,
    b: 'jamal',
  },
];

// ============================================================
type ApiResponse<T> = {
  success: boolean;
  data: T;
};

const userResponse: ApiResponse<{ name: string; age: number }> = {
  success: true,
  data: {
    name: 'Zaki',
    age: 30,
  },
};

const stringResponse: ApiResponse<string> = {
  success: true,
  data: 'This is a message',
};
