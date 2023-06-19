class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Employees extends Person {
  empCode: number;

  constructor(empcode: number, name: string) {
    super(name); 
    this.empCode = empcode;
  }
  displayName(): void {
    console.log('Name = ' + this.name + ', Employee Code = ' + this.empCode);
  }
}

let employee = new Employees(100, 'Bill');
employee.displayName(); // Name = Bill, Employee Code = 100
