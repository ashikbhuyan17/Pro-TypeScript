// ✅  An enum is a type that represents a set of named values.

// 🔹 1. Basic Enum (Numeric)
// Status enum ডিফল্টভাবে নাম্বার মান ব্যবহার করে। Success = 0, Error = 1, Loading = 2
enum Status {
  Success,
  Error,
  Loading,
}

let currentStatus: Status = Status.Success;
console.log('Current Status:', currentStatus); // Output: 0

// 🔹 2. String Enum (Readable values)
// প্রতিটি রোলের জন্য নির্দিষ্ট string মান ব্যবহার করা হয়েছে। এটি API বা ইউজার টাইপ হ্যান্ডলিং-এ খুব কাজে লাগে।
enum Role {
  Admin = 'ADMIN',
  User = 'USER',
  Guest = 'GUEST',
}

let userRole: Role = Role.User;
console.log('User Role:', userRole); // Output: USER

// 🔹 3. Enum in Function (Real-world usage)
// HttpStatus enum ব্যবহার করে আমরা HTTP status code অনুযায়ী মেসেজ রিটার্ন করছি।
enum HttpStatus {
  OK = 200,
  NotFound = 404,
  ServerError = 500,
}

function getMessage(code: HttpStatus): string {
  switch (code) {
    case HttpStatus.OK:
      return 'Request successful!';
    case HttpStatus.NotFound:
      return 'Page not found!';
    case HttpStatus.ServerError:
      return 'Internal server error!';
    default:
      return 'Unknown status';
  }
}

console.log('Message:', getMessage(HttpStatus.NotFound)); // Output: Page not found!

// 🔹 4. Enum with Conditions
// Direction enum এর মাধ্যমে ব্যবহারকারী কোন দিকে যাচ্ছে তা নির্ধারণ করা হচ্ছে।
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

function move(direction: Direction) {
  if (direction === Direction.Up) {
    console.log('Moving up');
  } else if (direction === Direction.Down) {
    console.log('Moving down');
  } else {
    console.log('Moving in another direction');
  }
}

move(Direction.Up); // Output: Moving up

// 🔸 উপকারিতা (Why use enum?)
// - বারবার string/number লিখা লাগে না (No magic values)
// - টাইপ সেফ ও অটোকমপ্লিট পাওয়া যায়
// - কোড রিডেবল ও মেইনটেইনেবল হয়
