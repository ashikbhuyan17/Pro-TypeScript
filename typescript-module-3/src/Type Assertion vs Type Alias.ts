/**
 *
 * টাইপScript-কে জোর করে জানানো যে ভ্যারিয়েবল একটি নির্দিষ্ট টাইপের =>Type Assertion
 * একটি টাইপের নাম দেওয়া যেনো তা বারবার ব্যবহার করা যায় =>Type Alias (টাইপ এলিয়াস)
 */

let value: any = 'Hello Zaki';

// আমরা TypeScript-কে জোর করে বলছি এটা string টাইপ
let length = (value as string).length;

console.log(length); // Output: 11

type User = {
  name: string;
  age: number;
};

const user1: User = {
  name: 'Zaki',
  age: 30,
};
