// const newData = {...myInfo ,crush};
//Constraints in Generics
// generic type ke force  kora je amr type emn oi hbe er baire hbe na 

type MandatoryTypes = { name: string; age: number; salary: number };
interface MandatoryInterface {
  name: string;
  age: number;
  salary: number;
}

const addMeInMyCrushMind = <T extends MandatoryInterface>(myInfo: T) => {
  const crush = "kate Winslet";
  const newData = { ...myInfo, crush };
  return newData;
};

// type MyInFoType = {
//   name: string;
//   age: number;
//   salary: number;
//   other1: boolean;
//   other2: null;
// };
const myInfo = {
  name: "Persian",
  age: 100,
  salary: 100000000,
  other1: false,
  other2: null,
};
const result5 = addMeInMyCrushMind(myInfo);
