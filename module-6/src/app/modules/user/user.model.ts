// Schema হলো Mongoose-এর একটি কাঠামো (structure) যা বলে দেয় তোমার ডাটাবেসে (MongoDB) কোনো ডকুমেন্ট (Data Record) কেমন হবে।

// mongoose, Schema, model, Model import করা হয়েছে
import mongoose, { Schema, model, Model } from 'mongoose';
import { IUser, IUserMethods, UserModel } from './user.interface';

// User Schema তৈরির জন্য Schema টাইপ define করা হয়েছে যেখানে IUser হচ্ছে Document এর টাইপ, UserModel হচ্ছে Static Method এর টাইপ,
// এবং IUserMethods হচ্ছে Instance Method এর টাইপ
const userSchema = new Schema<IUser, UserModel, IUserMethods>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  dateOfBirth: {
    type: String,
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
  },
  email: {
    type: String,
  },
  contactNo: {
    type: String,
    required: true,
  },
  emergencyContactNo: {
    type: String,
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
});

// Static method add করা হয়েছে যেটা শুধুমাত্র মডেলের জন্য কাজ করবে (instance এর জন্য নয়)
// getAdminUsers method --> সমস্ত admin role থাকা users return করবে
userSchema.static('getAdminUsers', async function getAdminUsers() {
  const admins = await this.find({ role: 'admin' }); // 'admin' রোল অনুযায়ী ইউজার খুঁজবে
  console.log(admins);
  return admins; // খুঁজে পাওয়া admin ইউজার গুলো রিটার্ন করবে
});

// Instance method add করা হয়েছে যেটা প্রত্যেকটা ইউজারের instance এর জন্য available থাকবে
// fullName method --> firstName এবং lastName যোগ করে ফুল নাম রিটার্ন করবে
userSchema.method('fullName', function fullName() {
  //normal function use korte hbe jody this use kora hoi, this means ey schema property bujache
  return this.name.firstName + ' ' + this.name.lastName; // 'this' দিয়ে ইউজারের তথ্য access করা হয়েছে
});

// User মডেল তৈরি করা হয়েছে, যেখানে IUser হচ্ছে ডকুমেন্ট টাইপ এবং UserModel হচ্ছে মডেল টাইপ
const User = model<IUser, UserModel>('User', userSchema);

// User মডেলটি বাইরের ফাইল থেকে ব্যবহার করার জন্য export করা হয়েছে
export default User;

// কিছু বেসিক concept:
// instance methods --> প্রতিটি instance বা document এর নিজস্ব method থাকে
// class -> instance + methods -> instance methods (যেমন fullName)
// class -> static methods -> শুধুমাত্র মডেলের মাধ্যমে call করা যায় (যেমন getAdminUsers)

// instance methods --> instance er methods
// class -> instance + methods -> instance methods
