/*
Interface এবং Inheritance
Class-এর সঙ্গে Interface ব্যবহার করে inheritance-এর আরেকটি স্তর যোগ করা যায়।
*/

// প্রথম ইন্টারফেস
interface Person5 {
  name: string;
  age: number;
}

// দ্বিতীয় ইন্টারফেস, যা প্রথম ইন্টারফেস থেকে উত্তরাধিকার নিয়েছে
interface Employee4 extends Person5 {
  jobTitle: string;
}

// এখন Employee ইন্টারফেসের মধ্যে name, age এবং jobTitle থাকবে
const employee: Employee4 = {
  name: 'Zaki Imtiaz',
  age: 30,
  jobTitle: 'Software Developer',
};
