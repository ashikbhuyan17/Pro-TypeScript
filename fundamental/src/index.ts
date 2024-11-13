/*
    1. Basic Types
    Understanding how TypeScript enforces types is fundamental. Here are some basic types to explore:

    Primitives: number, string, boolean
    Arrays: number[], string[], etc.
    Tuples: [string, number] (fixed-length arrays with specific types)
    Enums: Named sets of constants
*/

// File: app.ts

interface Friend {
  name: string;
  age: number;
}

export interface Person {
  name: string;
  age: number;
  sayHello(): void; // Logs a greeting message
  sayBye(): string; // Returns a farewell message
  acceptsParameter(name: string, age: number): string; // Accepts a name and age as parameters
  actions: (() => string)[]; // Array of functions returning a string
  year?: number; // Optional property
  hobbies: string[]; // An array of strings
  hobbiesTwo: (string | number)[]; // An array of strings or numbers
  friends: Friend[]; // Array of objects with name and age
  friends2?: { name: string; age: number }[]; // Optional inline friend array
}

// Creating an object based on the Person interface
const user: Person = {
  name: 'Zaki',
  age: 30,
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  },
  sayBye() {
    return `Bye, ${this.name}`;
  },
  acceptsParameter(name: string, age: number) {
    return `Name is ${name}, Age is ${age}`;
  },
  actions: [() => 'Walking', () => 'Talking'],
  hobbies: ['Reading', 'Coding', 'Traveling'],
  hobbiesTwo: ['Reading', 'Coding', 'Traveling', 4, 6, 7],
  friends: [
    { name: 'Jamal', age: 25 },
    { name: 'Rahim', age: 28 },
  ],
};

// Method calls with console logging to showcase functionality
user.sayHello(); // Output: Hello, my name is Zaki

console.log(user.sayBye()); // Output: Bye, Zaki

console.log(user.acceptsParameter('Jamal', 30)); // Output: Name is Jamal, Age is 30

// Looping over the actions array and logging each action's output
user.actions.forEach((action) => console.log(action()));
// Output: Walking
// Output: Talking

// Displaying hobbies array
console.log('Hobbies:', user.hobbies); // Output: Hobbies: ['Reading', 'Coding', 'Traveling']

// Displaying mixed hobbiesTwo array
console.log('Hobbies (mixed):', user.hobbiesTwo); // Output: Hobbies (mixed): ['Reading', 'Coding', 'Traveling', 4, 6, 7]

// Displaying friends array
console.log('Friends:', user.friends);
// Output: Friends: [{ name: 'Jamal', age: 25 }, { name: 'Rahim', age: 28 }]
