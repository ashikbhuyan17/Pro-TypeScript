"use strict";
// Creating an object 'user' that conforms to the 'Person' interface
const user = {
    name: 'Zaki',
    age: 30,
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    },
    sayBye() {
        return `Bye, ${this.name}`;
    },
    acceptsParameter(name, age) {
        return `Name is ${name}, Age is ${age}`;
    },
    actions: [() => 'Walking', () => 'Talking'],
    hobbies: ['Reading', 'Coding', 'Traveling'], // Array of strings (hobbies)
    hobbiesTwo: ['Reading', 'Coding', 'Traveling', 4, 6, 7], // Mixed array of strings and numbers
    friends: [
        { name: 'Jamal', age: 25 },
        { name: 'Rahim', age: 28 },
    ], // Array of Friend objects
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
