class Employee {
  empCode!: number;
  empName!: string;

  getEmp(code: number, name: string) {
    this.empCode = code;
    this.empName = name;
  }
}

let emp = new Employee();
console.log('🚀 ~ file: basic.ts:7 ~ emp:', emp.getEmp(100, 'rahat'));

// class Car {
//   model: string | undefined; //class variable
//   year: number | undefined;
//   price: string | undefined;

//   drive() {
//     //method
//     console.log('The Car has Started driving');
//   }

//   stop() {
//     console.log('The car has stopped');
//   }
// }

// const tesla = new Car();
// tesla.model = 'Model X';
// tesla.year = 2022;
// tesla.price = '$114,990';
// tesla.drive();
// tesla.stop();
