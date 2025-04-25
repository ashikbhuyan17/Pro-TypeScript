/*
    1. Basic Types
    Understanding how TypeScript enforces types is fundamental. Here are some basic types to explore:

    Primitives: number, string, boolean
    Arrays: number[], string[], etc.
    Tuples: [string, number] (fixed-length arrays with specific types)
    Enums: Named sets of constants
*/

// File: app.ts

// Define the structure for a Friend object
interface Friend {
  name: string;
  age: number;
}

// Define the structure for a Person object, including properties and methods
export interface Person {
  name: string;
  age: number;
  sayHello(): void; // A method to log a greeting message
  sayBye(): string; // A method to return a goodbye message
  acceptsParameter(name: string, age: number): string; // A method that takes parameters and returns a message
  actions: (() => string)[]; // An array of functions that return a string (like actions: walk, talk)
  year?: number; // Optional property (may or may not be present)
  hobbies: string[]; // A list of hobbies as strings
  hobbiesTwo: (string | number)[]; // A mixed array containing both strings and numbers
  friends: Friend[]; // A list of friends defined using the Friend interface
  friends2?: { name: string; age: number }[]; // Optional inline-defined array of friend objects
}

// Creating an object based on the Person interface
const user: Person = {
  name: 'Zaki',
  age: 30,

  // Logs a greeting to the console
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  },

  // Returns a goodbye message
  sayBye() {
    return `Bye, ${this.name}`;
  },

  // Takes name and age as parameters and returns a descriptive string
  acceptsParameter(name: string, age: number) {
    return `Name is ${name}, Age is ${age}`;
  },

  // Array of action functions, each returning a string
  actions: [() => 'Walking', () => 'Talking'],

  // List of user's hobbies (strings only)
  hobbies: ['Reading', 'Coding', 'Traveling'],

  // List that can contain both strings and numbers
  hobbiesTwo: ['Reading', 'Coding', 'Traveling', 4, 6, 7],

  // List of friend objects using the Friend interface
  friends: [
    { name: 'Jamal', age: 25 },
    { name: 'Rahim', age: 28 },
  ],

  // Optional properties (included here but not used in functions)
  year: 2025,
  friends2: [
    { name: 'Sana', age: 24 },
    { name: 'Ali', age: 27 },
  ],
};

// Call sayHello method to log greeting
user.sayHello(); // Output: Hello, my name is Zaki

// Log the return value of sayBye method
console.log(user.sayBye()); // Output: Bye, Zaki

// Call acceptsParameter with custom values and log the result
console.log(user.acceptsParameter('Jamal', 30)); // Output: Name is Jamal, Age is 30

// Loop through each action and log what it returns
user.actions.forEach((action) => console.log(action()));
// Output: Walking
// Output: Talking

// Print the user's list of hobbies
console.log('Hobbies:', user.hobbies);
// Output: Hobbies: ['Reading', 'Coding', 'Traveling']

// Print the user's mixed-type hobby list
console.log('Hobbies (mixed):', user.hobbiesTwo);
// Output: Hobbies (mixed): ['Reading', 'Coding', 'Traveling', 4, 6, 7]

// Print the list of friends
console.log('Friends:', user.friends);
// Output: Friends: [{ name: 'Jamal', age: 25 }, { name: 'Rahim', age: 28 }]

// Optionally print the second friends list if it exists
if (user.friends2) {
  console.log('Friends2 (optional):', user.friends2);
  // Output: Friends2 (optional): [{ name: 'Sana', age: 24 }, { name: 'Ali', age: 27 }]
}

// Log the optional year if it's set
if (user.year) {
  console.log('Year:', user.year);
  // Output: Year: 2025
}
