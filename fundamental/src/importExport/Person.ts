// File: Person.ts

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
