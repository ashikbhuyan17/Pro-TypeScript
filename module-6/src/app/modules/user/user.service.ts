import { promises } from "dns";
import { IUser } from "./user.interface";
import User from "./user.model";


export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  console.log("🚀 ~ createUserToDB ~ payload:", payload)
  // creating a new user
  const user = new User(payload); //User -> class  user -> instance
  await user.save(); // instance method
  // console.log(user.fullName());

  return user;
};


export const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = await User.find().select('-_id -__v')
  // const users = await User.find().select('-_id -__v -name' )
  return users;
};

export const getUserByIdFromDB = async (userId: string): Promise<IUser|null> => {
  const user = await User.findOne({ id: userId },{
    name:1,contactNo:1
  })
  return user;
}

