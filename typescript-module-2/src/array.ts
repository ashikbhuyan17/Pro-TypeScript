// TypeScript-এ array ডিফাইন করার জন্য type[] অথবা Array<type> ব্যবহার করা হয়।
// tuple: represents an array with a fixed number of elements, each with a specific type.

// tuple (thats a couple like jura jura 🤣)
// key value in this scenario we will use tuple
const names: [string, number, boolean] = ['abul', 77, true];

const names1 = ['abul ', 'kabul', 'babul', 77, , true];

const boyfriends: [string, boolean] = ['abul', true];

const roll: number[] = [1, 2, 3, 4, 5, 6];

const GroupName: string[] = ['abul ', 'kabul', 'babul'];

// different types of data in array list
const different: (string | number | boolean)[] = ['abul', 77, true];

const arrayObject: { name: string }[] = [{ name: 'ashik' }];
