### of vs new observable ()

In RxJS, of and new Observable() are two ways to create observables,
1. of — Simplified Observable Creation for Static Values
   
```javascript
    const { of } = require('rxjs');

    const observable = of(1, 2, 3, 4, 5);

    observable.subscribe({
    next: (value) => console.log(value),
    complete: () => console.log('Completed')
    });
```

2. new Observable() — Flexible, Customizable Observable Creation
   Using new Observable() gives you full control over the observable’s behavior, allowing you to define exactly how and when values are emitted. This is useful for creating complex observables, such as those that emit values over time, respond to user actions, handle errors, or don’t complete right away.
```javascript
    const { Observable } = require('rxjs');

    const observable = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);

    setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
    }, 1000); // Emit after a delay

    // Note: No need to return anything in simple examples
    });

    observable.subscribe({
    next: (value) => console.log(value),
    complete: () => console.log('Completed')
    });

```


# Observable in JavaScript

## Observable Overview
- **Observable** একটি ডেটা স্ট্রিম  বা ইভেন্টের সিরিজ যা সময়ের সাথে ইভেন্ট  আসতে থাকে.
- One-way (emits values)

### Example (Real-Life Analogy):
- Observable হলো কারও **YouTube channel**:
  - Observable is like a youtube channel of someone else. (( It uploads new videos(data) from time to time, so it is a data source for you))
  - Your youtube account is an  **Observer**
  - Your youtube account (Observer) can only get notifications about whether someone else's youtube channel (Observable) has uploaded a new video (has new data) or made a livestream (new event) only if you have subscribed to that channel
    
... **শুধুমাত্র তখনই যদি আপনি সেই চ্যানেলকে সাবস্ক্রাইব করেন।**

---
## Observable এবং Observer কীভাবে একসাথে কাজ করে
- Observable একটি ডেটা  স্ট্রিম তৈরি করে এবং observer সেই স্টিম থেকে ডাটা গ্রহণ করে। 

## Observer এর প্রধান কলব্যাক ফাংশন:
Observer তিনটি প্রধান ফাংশনের মাধ্যমে Observable থেকে ডেটা/ইভেন্ট গ্রহণ করে:

1. **`next(value)`**  
   যখন Observable থেকে নতুন মান পাওয়া যাবে, তখন এটি কল হবে।  

2. **`error(err)`**  
   যখন কোনো ত্রুটি ঘটে, তখন এটি কল হবে।  

3. **`complete()`**  
   যখন Observable তার স্ট্রিম শেষ করে, তখন এটি কল হবে।  

---

### উদাহরণ (Code Example)
নীচে একটি প্রোগ্রামেটিক উদাহরণ দেওয়া হলো:

```javascript
import { Observable } from 'rxjs';

// Observable তৈরি করা
const observable = new Observable(subscriber => {
  subscriber.next('ভিডিও ১ আপলোড হয়েছে');
  subscriber.next('ভিডিও ২ আপলোড হয়েছে');
  subscriber.error('ত্রুটি: ইন্টারনেট সমস্যা'); // ত্রুটি ইমিট করা
  subscriber.complete(); // স্ট্রিম শেষ করা
});

// Observer তৈরি করা
const observer = {
  next: (value) => console.log(`নোটিফিকেশন: ${value}`),
  error: (err) => console.error(`ত্রুটি: ${err}`),
  complete: () => console.log('আর কোনো নোটিফিকেশন নেই।'),
};

// Observer-কে Observable-এ subscribe করানো
observable.subscribe(observer);

```


=================================

# `asObservable`

## Overview
`asObservable` মূলত একটি **Subject** বা অন্য **Observable**-কে **Observable** হিসেবে ব্যবহার করার জন্য ব্যবহৃত হয়। এটি মূল Observable-এর behavior পরিবর্তন করে না।

---

## Key Features
- `asObservable` এটি একটি মেথড যা Subject/BehaviorSubject কে Observable এ রূপান্তর করে। এটি মূল Observable-এর behavior পরিবর্তন করে না।

---

### উদাহরণ: `asObservable` ব্যবহার
নিচে একটি TypeScript উদাহরণ দেওয়া হলো:

```typescript
import { Subject } from 'rxjs';

// একটি Subject তৈরি করা
const subject = new Subject();

// Subject-কে Observable হিসেবে ব্যবহার করা
const observable = subject.asObservable();

// Observable-এ subscribe করা
observable.subscribe(data => console.log('Observable:', data));

// Subject থেকে ডেটা পাঠানো
subject.next('Data 1'); // আউটপুট: Observable: Data 1

```
==============================================================

# Subject in RxJS

## What is a Subject?
**Subject** হলো RxJS-এ একটি বিশেষ ধরনের Observable যা ডেটা ইমিট এবং ডেটা গ্রহণ, দুটিই করতে পারে। এটি একসাথে একাধিক  সাবস্ক্রাইবারকে একই ইভেন্ট বা ডেটা স্ট্রিম শেয়ার করতে পারে। অর্থাৎ, একাধিক জায়গায় একই ডেটা পৌঁছে দিতে Subject ব্যবহার করা হয়। 
- Two-way (emits and receives)
-  You can push values into a Subject, and subscribers will receive them.

---

## Key Features
- A **Subject** acts as both an **Observable** (data source) and an **Observer** (can receive data).
- It allows multiple subscribers to share the same data stream.

---

## উদাহরণ: Subject ব্যবহার
নিচে একটি TypeScript উদাহরণ দেওয়া হলো যেখানে **Subject** ব্যবহার করা হয়েছে:

```typescript
import { Subject } from 'rxjs';

// একটি Subject তৈরি করা
const subject = new Subject();

// Subject-এ দুইজন Subscriber যোগ করা
subject.subscribe(data => console.log('Subscriber 1:', data));
subject.subscribe(data => console.log('Subscriber 2:', data));

// Subject থেকে ডেটা পাঠানো
subject.next('Hello'); 
// আউটপুট:
// Subscriber 1: Hello
// Subscriber 2: Hello


```


=====================================================

# Subject vs Observable in RxJS

## Observable

1. **একক সাবস্ক্রাইবারের জন্য**:  
   - Observable সাধারণত প্রতিটি সাবস্ক্রাইবারের জন্য আলাদা করে ডেটা স্ট্রিম তৈরি করে।

2. **সাধারণ ডেটা স্ট্রিম**:  
   - Observable শুধুমাত্র ডেটা ইমিট করে, তবে এটি নিজে থেকে ডেটা গ্রহণ বা সেই ডেটা শেয়ার করতে পারে না।  
   - এটি কেবলমাত্র একটি ডেটা উৎস হিসেবে কাজ করে।

3. **Multicasting নয়**:  
   - সাধারণ Observable সাধারণত multicasting সমর্থন করে না, অর্থাৎ একাধিক সাবস্ক্রাইবার থাকলেও তাদের প্রত্যেকেই আলাদা স্ট্রিম পায়।

4. **পাশ থেকে ডেটা পুশ করতে পারে না**:  
   - Observable এর ক্ষেত্রে আমরা কেবলমাত্র সাবস্ক্রাইব করার মাধ্যমে স্ট্রিমের ডেটা নিতে পারি। এটি সাধারণত ডেটা পুশ করতে পারে না, কেবল সাবস্ক্রাইবারের জন্য ডেটা সরবরাহ করে।

---

## Subject

1. **Multicasting সমর্থন করে**:  
   - Subject একবার ডেটা ইমিট করলে সেটি সব সাবস্ক্রাইবারকে একই ডেটা পাঠায়। এটি একাধিক সাবস্ক্রাইবারের জন্য একই স্ট্রিম শেয়ার করতে পারে।

2. **ডেটা ইমিট করতে এবং গ্রহণ করতে পারে**:  
   - Subject কে আমরা ডেটা ইমিট বা পুশ করার জন্য ব্যবহার করতে পারি।  
   - এটি Observer হিসেবে ডেটা গ্রহণ করতে পারে এবং Observable হিসেবে ডেটা ইমিট করতে পারে।

3. **EventEmitter এর মতো কাজ করে**:  
   - Subject এমনভাবে কাজ করে যেন এটি **EventEmitter**, যেখানে একবার ডেটা ইমিট হলে সেটি প্রত্যেক সাবস্ক্রাইবারের কাছে পৌঁছে।

4. **শেয়ারড স্টেট**:  
   - Subject সব সাবস্ক্রাইবারদের জন্য একই স্ট্রিম শেয়ার করে।  
   - কোনো নতুন সাবস্ক্রাইবার যুক্ত হলে সে ডেটা স্ট্রিমের বর্তমান অবস্থার উপর ভিত্তি করে ডেটা পায়।

---

## Subject vs Observable: Comparison Table

| Feature                          | Observable                              | Subject                                |
|-----------------------------------|-----------------------------------------|----------------------------------------|
| **Multicasting**                  | সমর্থন করে না, আলাদা স্ট্রিম তৈরি করে।   | সমর্থন করে, একই স্ট্রিম শেয়ার করে।     |
| **Data Emission**                 | শুধুমাত্র ডেটা ইমিট করতে পারে।          | ডেটা ইমিট এবং গ্রহণ দুটোই করতে পারে।  |
| **Acts like EventEmitter**        | নয়।                                    | হ্যাঁ।                                 |
| **Shared State**                  | আলাদা সাবস্ক্রাইবারদের জন্য আলাদা।      | সব সাবস্ক্রাইবারদের জন্য শেয়ারড।       |
| **Usage**                         | ডেটা স্ট্রিম কেবল পড়ার জন্য।            | ডেটা স্ট্রিম পড়া এবং লিখা উভয়ের জন্য। |

---

### Summary
- **Observable**: একটি আলাদা ডেটা স্ট্রিম প্রতিটি সাবস্ক্রাইবারের জন্য তৈরি করে। এটি শুধুমাত্র ডেটা সরবরাহ করে।  
- **Subject**: একই ডেটা স্ট্রিম সব সাবস্ক্রাইবার শেয়ার করতে পারে এবং ডেটা পাঠাতে এবং গ্রহণ করতে পারে। এটি **EventEmitter**-এর মতো কাজ করে।


=======================================

# BehaviorSubject in RxJS

## What is a BehaviorSubject?
**BehaviorSubject** হলো **Subject**-এর একটি বিশেষ ধরন, যা সর্বশেষ emitted value ধরে রাখে।  
যখন কোনো নতুন subscriber যোগ হয়, তখন তাকে সর্বশেষ emitted value প্রদান করে।

---

## Key Features
1. **Initial Value**: BehaviorSubject তৈরি করার সময় একটি প্রাথমিক মান (initial value) সেট করা হয়।  
   - এই মানটি নতুন subscriber-কে প্রদান করা হয়, যদি কোনো মান ইমিট না করা হয়ে থাকে।

2. **Latest Value Retention**: সর্বশেষ emitted value মনে রাখে এবং নতুন subscriber-কে সেই মান প্রদান করে।

3. **Multicasting**: BehaviorSubject একাধিক subscriber-কে একই মান সরবরাহ করতে পারে।

---

## উদাহরণ: BehaviorSubject ব্যবহার

```typescript
import { BehaviorSubject } from 'rxjs';

// BehaviorSubject তৈরি করা
const behaviorSubject = new BehaviorSubject('Initial Value');

// প্রথম Subscriber যোগ করা
behaviorSubject.subscribe(data => console.log('Subscriber 1:', data)); 
// আউটপুট: Subscriber 1: Initial Value

// BehaviorSubject-এ নতুন মান পাঠানো
behaviorSubject.next('Updated Value');

// দ্বিতীয় Subscriber যোগ করা
behaviorSubject.subscribe(data => console.log('Subscriber 2:', data)); 
// আউটপুট: Subscriber 2: Updated Value

```
# How is BehaviorSubject Different from Subject?

## Summary
- **Subject**:
  - প্রাথমিক মান সেট করার দরকার হয় না।
  - নতুন subscriber কোনো পূর্বের ডেটা পায় না, শুধুমাত্র নতুন ডেটা ইমিট হলে সেটি পায়।
  - Multicasting সমর্থন করে।

- **BehaviorSubject**:
  - প্রাথমিক মান সেট করতে হয়।
  - সর্বশেষ emitted value ধরে রাখে এবং নতুন subscriber-কে সেই মান প্রদান করে।
  - Multicasting সমর্থন করে।

BehaviorSubject সাধারণত **state management** এবং **data sharing**-এর ক্ষেত্রে ব্যবহৃত হয়, যেখানে সর্বশেষ মান গুরুত্বপূর্ণ।

## 


## Summary of Each Concept

### 1. **Observable**
- **Description**: 
  - এটি শুধুমাত্র ডেটা ইমিট করে।
  - এটি ডেটা গ্রহণ করতে পারে না।
- **Usage**: যখন আপনি কেবলমাত্র একটি ডেটা স্ট্রিম তৈরি করতে চান।

---

### 2. **Subject**
- **Description**: 
  - এটি **Observable** এবং **Observer** উভয় হিসেবে কাজ করে।
  - ডেটা ইমিট করতে এবং গ্রহণ করতে পারে।
- **Usage**: যখন একই ডেটা একাধিক subscriber-এর সাথে শেয়ার করতে চান।

---

### 3. **BehaviorSubject**
- **Description**: 
  - **Subject**-এর মত, তবে এটি সর্বশেষ মান ধরে রাখে এবং নতুন subscriber-কে সেই মান প্রদান করে।
  - একটি প্রাথমিক মান (initial value) দিয়ে শুরু করতে হয়।
- **Usage**: যখন ডেটা স্ট্রিমের সর্বশেষ মান গুরুত্বপূর্ণ এবং নতুন subscriber-কে তা জানানো প্রয়োজন।

---

### 4. **asObservable**
- **Description**: 
  - এটি একটি **Subject**-কে এমন একটি **Observable**-এ রূপান্তর করে, যা শুধুমাত্র subscribe করা যায়।
  - এটি মূল Subject-কে সরাসরি অ্যাক্সেস করার পরিবর্তে encapsulation নিশ্চিত করে।
- **Usage**: যখন আপনি চান যে **Subject** এর ডেটা শুধুমাত্র সাবস্ক্রাইবযোগ্য হোক, কিন্তু পরিবর্তনযোগ্য না হোক।

---





