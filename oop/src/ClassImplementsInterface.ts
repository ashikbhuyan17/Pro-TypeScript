interface IPerson {
  name: string;
  display11(): void;
}

interface IEmployee {
  empCode: number;
}

class Employee2 implements IPerson, IEmployee {
  empCode: number;
  name: string;

  constructor(empcode: number, name: string) {
    this.empCode = empcode;
    this.name = name;
  }

  display11(): void {
    console.log('Name = ' + this.name + ', Employee Code = ' + this.empCode);
  }
}

let per1: IPerson = new Employee2(100, 'Bill');
per1.display11(); // Name = Bill, Employee Code = 100

let emp2: IPerson = new Employee2(100, 'Bill');
emp2.display11(); //Compiler Error: Property 'display' does not exist on type 'IEmployee'
