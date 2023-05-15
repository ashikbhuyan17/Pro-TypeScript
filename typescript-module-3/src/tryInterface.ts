interface IUsers<T, C, ID> {
  userNames: T;
  age: number;
  foods: Array<string>;
  isStatus: boolean;
  created_by: C;
  receiver: {
    country: {
      name: string;
    };
    state: {
      name: string;
      _id: ID;
    };
  };
}
interface IUserNames {
  firstName: string;
  lastName: string;
}
interface ICreatedBy {
  email: string;
}
const users: IUsers<IUserNames, ICreatedBy, string> = {
  userNames: {
    firstName: 'ashik',
    lastName: 'bhuyan',
  },
  age: 100,
  foods: ['apple', 'egg'],
  isStatus: true,
  created_by: { email: 'rani2@gmail.com' },
  receiver: {
    country: { name: 'Bangladesh' },
    state: { name: 'Barguna', _id: '3467' },
  },
};
console.log('🚀 ~ file: try.ts:7 ~ users:', users);
