"use strict";
/*
  Parameter properties  ব্যবহার করে আমরা কনস্ট্রাক্টরের প্যারামিটারের মধ্যে প্রোপার্টি ডিক্লেয়ার এবং ইনিশিয়ালাইজ করতে পারি ,
  with access modifier (private,public,readonly)
  এর ফলে কোড ছোট এবং পরিষ্কার হয়। সাধারণত আমরা আলাদাভাবে প্রোপার্টি ডিক্লেয়ার করে কনস্ট্রাক্টরে সেট করি,
  কিন্তু প্যারামিটার প্রোপার্টিজ দিয়ে এক ধাপে কাজটি করা যায়।

*/
// Example Without Parameter Properties:
class CarP {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    startEngine() {
        console.log(`${this.model} engine started`);
    }
}
const myCarP1 = new CarP('Toyota', 2020);
myCarP1.startEngine(); // Output: Toyota engine started
// ================================================ Example  Parameter Properties: ==========================================
class CarP2 {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    startEngine() {
        console.log(`${this.model} engine started`);
    }
}
const myCarP2 = new CarP2('Toyota', 2020);
myCarP2.startEngine(); // Output: Toyota engine started
//   =================Example with private Parameter Properties:=======================
class CarPri {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    startEngine() {
        console.log(`Engine of car from year ${this.year} has started.`);
    }
}
const myCar = new CarPri('Toyota', 2020);
myCar.startEngine(); // Output: Engine of car from year 2020 has started.
// Can't access model and year directly since they are private:
// console.log(myCar.model);  // Error: Property 'model' is private
