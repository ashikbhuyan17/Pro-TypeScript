step1: Interface
step2: Schema
step3: Model
step4: Database query on model

<!-- mongoose hocce mongodb er wrapper , mongoose is an object data modeling (ODM) libary for mongoDb
insert and insertmany shudhu mongodb te kaj korbe bt mongoose e kaj korbe na  , baki sob mongodb method mongoose e support korbe 
 -->
<!-- 
pattern MVC , 
Modular => (user) => user.interface.ts, user.model.ts, user.route.ts, user.controller.ts,service => user module user folder er modhe tkbe jeta readable onk sojok and file gula o onk fast kuje pawa jai
Interface => interface.ts 
 Schema, Model => model.ts
 route function => controller.ts
 database logic or database query function => service.ts
 -->

 <!-- 
 instance method : instance er method 
 //kono ekta class theke jody instance create kory and ey  instance sathe jody 
ekta method attarched thake setay hocce  instance method.
 class -> instance + method -> instance method 

 const user = new User (payload ) // user -> class user -> instance
 user.save()  => that is method that is instance method and jehetu eta mongoose dce tay eta built in  instance methods
 >

static = classs er sathe attached howa method jeta amra directly call korte pari using class 
  //instance create korte hbe na, user.methodName() no need new user()

 <!-- 
 export const createUser = async (payload:IUser):Promise<IUser> =>{   //jehetu async tay eta promise return korbe and  promise ta IUser type er 
   const user = new User (payload )
   await user.save()
   return user
 }
  -->
MVC হল এমন একটি আর্কিটেকচারাল প্যাটার্ন, যেখানে অ্যাপ্লিকেশনকে তিনটি ভাগে ভাগ করা হয়— Model, View, এবং Controller। এটি কোডকে পরিষ্কারভাবে আলাদা করে, যাতে রক্ষণাবেক্ষণ সহজ হয়।

MVC প্যাটার্নে একটি অ্যাপ্লিকেশনকে তিনটি ভাগে ভাগ করা হয়:
Model (মডেল) – ডেটা এবং লজিক সংরক্ষণ করে। যেমন: ডাটাবেস, ডেটার নিয়মকানুন।   //ডেটা ম্যানেজ করে, যেমন ডাটাবেস সংযোগ, ভ্যালিডেশন, ও বিজনেস লজিক।
View (ভিউ) – ব্যবহারকারীর সামনে যেটা দেখা যায়, UI বা উপস্থাপন অংশ।
Controller (কন্ট্রোলার) – ব্যবহারকারীর ইনপুট নেয় এবং সেই অনুযায়ী মডেল ও ভিউকে আপডেট করে। //HTTP রিকোয়েস্ট হ্যান্ডেল করে, মডেল থেকে ডেটা নিয়ে ভিউতে পাঠায়।


 What is the Modular Pattern?
Modular Pattern হল ফ্লেক্সিবল প্যাটার্ন  যেখানে পুরো অ্যাপ্লিকেশনকে ছোট ছোট "মডিউলে" ভাগ করা হয়। প্রতিটি মডিউল একেকটি ফিচার বা ফাংশনালিটির জন্য দায়ী।