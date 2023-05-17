import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { Schema, model } from 'mongoose';
const app: Application = express();

// using cors
app.use(cors());

// parse data
app.use(express.json());

// url encoded =>url encoded hok ba json hok amra oitake parse korte parbo
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  /* 
    step1: Interface
    step2: Schema
    step3: Model
    step4: Database query
 */
  // 1. Create an interface representing a document in MongoDB.
  interface IUser {
    name: string;
    email: string;
    avatar?: string;
  }

  // 2. Create a Schema corresponding to the document interface.
  const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: String,
  });

  // 3. Create a Model.
  const User = model<IUser>('User', userSchema);

  //   run().catch((err) => console.log(err));

  const run = async () => {
    let user = new User({
      name: 'Bill',
      email: 'bill14@initech.com',
      avatar: 'https://i.imgur.com/dM7Thhn.png11',
    });
    await user.save();

    console.log(user.email); // 'bill@initech.com'
  };
  run();
});

export default app;
