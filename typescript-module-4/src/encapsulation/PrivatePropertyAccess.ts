/* 
    private properties cannot be accessed directly from outside the class. 
    This ensures encapsulation, meaning that the internal details of the class are hidden from the outside world. However, 
    there are a few ways to access or interact with private properties:
*/

/*
======================== 1. Using Getter and Setter Methods=================================
    To access or modify private properties, you can define getter and setter methods in your class. 
    This way, you can control how the properties are accessed or modified.
*/

class CarPriProAcc {
  // Private properties
  constructor(private model: string, private year: number) {}

  // Getter for 'model'
  getModel(): string {
    return this.model;
  }

  // Setter for 'model'
  setModel(newModel: string): void {
    this.model = newModel;
  }

  // Getter for 'year'
  getYear(): number {
    return this.year;
  }

  startEngine(): void {
    console.log(`Engine of car from year ${this.year} has started.`);
  }
}

const myCarPriProAcc = new CarPriProAcc('Toyota', 2020);
myCarPriProAcc.startEngine(); // Output: Engine of car from year 2020 has started.

// Accessing private property using getter
console.log(myCarPriProAcc.getModel()); // Output: Toyota

// Modifying private property using setter
myCarPriProAcc.setModel('Honda');
console.log(myCarPriProAcc.getModel()); // Output: Honda
