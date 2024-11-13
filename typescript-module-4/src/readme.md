
[Encapsulation_Link : ](https://java.howtocode.dev/5/5.3) https://java.howtocode.dev/5/5.3

### ========================Key Differences: =================

With Constructor:
-   অবজেক্টটি তৈরি হওয়ার সময় ভ্যালুগুলো দিয়ে ইনিশিয়ালাইজ হয়। উদাহরণস্বরূপ, new Car("Toyota", 2020) লিখলে, একই সময়ে অবজেক্টের প্রোপার্টিগুলো সেট হয়ে যাবে।
-   The object is initialized with values when it is created (new Car("Toyota", 2020)).
-   This provides a clear and concise way to set up the object’s initial state.

    class Car {
    model: string;
    year: number;

    constructor(model: string, year: number) {
        this.model = model;
        this.year = year;
    }

    startEngine(): void {
        console.log(`${this.model} engine started`);
    }
    }

    const myCar = new Car("Toyota", 2020); // Object initialized with values
    myCar.startEngine(); // Output: Toyota engine started


Without Constructor:
-    অবজেক্ট তৈরির পর প্রোপার্টিগুলো ম্যানুয়ালি সেট করতে হয়। উদাহরণস্বরূপ, অবজেক্ট তৈরি করার পরে myCar.model = "Toyota" এবং myCar.year = 2020 এইভাবে  আলাদাভাবে     সেট করতে হবে।
-   You have to manually set properties after creating the object (myCar.model = "Toyota").
-   This could lead to missing or uninitialized properties if the developer forgets to assign them.

    class Car {
    model: string;
    year: number;

    startEngine(): void {
        console.log(`${this.model} engine started`);
    }
    }

    const myCar = new Car();
    myCar.model = "Toyota"; // Setting properties manually
    myCar.year = 2020;
    myCar.startEngine(); // Output: Toyota engine started

Why Constructors Are Helpful:
Consistency: By using a constructor, you ensure that every object created from the class has the required properties initialized properly. Without it, there’s a chance you could forget to assign values.
Readability: It’s easier to read and maintain code when initialization happens in a constructor, as it reduces the number of manual steps.




<!-- ====================================Parameter properties============================ -->

Parameter properties  ব্যবহার করে আমরা কনস্ট্রাক্টরের প্যারামিটারের মধ্যে প্রোপার্টি ডিক্লেয়ার এবং ইনিশিয়ালাইজ করতে পারি। এর ফলে কোড ছোট এবং পরিষ্কার হয়। সাধারণত আমরা আলাদাভাবে প্রোপার্টি ডিক্লেয়ার করে কনস্ট্রাক্টরে সেট করি, কিন্তু প্যারামিটার প্রোপার্টিজ দিয়ে এক ধাপে কাজটি করা যায়।