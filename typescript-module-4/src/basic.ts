
//===============  CHECK FAST README FILE ==================================

// ========================================== Example: Using a Constructor ================================
class Car {
    model: string;   // property declare 
    year: number;
  
    // Constructor: initializes the properties of the class
    constructor(model: string, year: number) {
      this.model = model;
      this.year = year;
    }
  
    // Method: function inside a class
    startEngine(): void {
      console.log(`${this.model} engine started`);
    }
  }

  const car1 = new Car('brc',2023)
  console.log("🚀 ~ car1:", car1)
  car1.model='update' //we wii update because its public
  console.log("🚀 ~ car1:", car1)


// ========================================== Example:Without Constructor ================================
// class Car {
//     model: string;
//     year: number;
  
//     startEngine(): void {
//       console.log(`${this.model} engine started`);
//     }
//   }
  
//   const myCar = new Car();
//   myCar.model = "Toyota"; // Setting properties manually
//   myCar.year = 2020;
//   myCar.startEngine(); // Output: Toyota engine started
  