Type alias vs Interface — ব্যাখ্যা ও ব্যবহারের সঠিক নির্দেশনা

🔹 কখন type ব্যবহার করব?
✔️ যখন তুমি primitive types (যেমন: string, number, boolean) বা union/intersection types এর জন্য টাইপ তৈরি করো — তখন type সবচেয়ে উপযোগী।

type ID = string;
type Status = 'success' | 'error' | 'loading';

প্রিমিটিভ টাইপ হলো TypeScript-এর built-in types, তাই এগুলোর জন্য interface দিয়ে কাস্টোমাইজ করা যায় না।

type দিয়ে তুমি union (|) এবং intersection (&) টাইপ গঠন করতে পারো, যা interface দিয়ে সম্ভব নয়।

🔹 কখন interface ব্যবহার করব?
✔️ যখন তুমি object, function, বা array এর স্ট্রাকচার তৈরি করো — তখন interface ব্যবহার করা ভালো।


interface User {
  name: string;
  age: number;
}
interface ব্যবহার করে তুমি object-এর গঠন নির্ধারণ করতে পারো।

এছাড়াও, interface গুলো extend (বড় করা বা combine করা) করা যায়, যা inheritance-এর মতো কাজ করে: