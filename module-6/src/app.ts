import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { Schema, model } from 'mongoose';
const app: Application = express();
// Application routes
import userRoutes from "./app/modules/user/user.route";
// using cors
app.use(cors());

// parse data
app.use(express.json());

// url encoded =>url encoded hok ba json hok amra oitake parse korte parbo
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoutes);

// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   // res.send('hello world')
//   /* 
//     step1: Interface
//     step2: Schema
//     step3: Model
//     step4: Database query
//  */
//   // 1. Create an interface representing a document in MongoDB.
//   interface IUser {
//     id: string;
//     role: "student";
//     password: string;
//     name: {
//       firstName: string;
//       middleName?: string;
//       lastName: string;
//     };
//     dateOfBirth?: string;
//     gender: "male" | "female";
//     email?: string;
//     contactNo: string;
//     emergencyContactNo: string;
//     presentAddress: string;
//     permanentAddress: string;
//   }
  

//   // 2. Create a Schema corresponding to the document interface.
//   const userSchema = new Schema<IUser>({
//     // id: {
//     //   type: String,
//     //   required: true,
//     //   unique: true,
//     // },
//     role: {
//       type: String,
//       required: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
  
//     name: {
//       firstName: {
//         type: String,
//         required: true,
//       },
//       middleName: {
//         type: String,
//       },
//       lastName: {
//         type: String,
//         required: true,
//       },
//     },
//     dateOfBirth: {
//       type: String,
//     },
//     gender: {
//       type: String,
//       enum: ["male", "female"],
//     },
//     email: {
//       type: String,
//     },
//     contactNo: {
//       type: String,
//       required: true,
//     },
//     emergencyContactNo: {
//       type: String,
//       required: true,
//     },
//     presentAddress: {
//       type: String,
//       required: true,
//     },
//     permanentAddress: {
//       type: String,
//       required: true,
//     },
//   });
//   // 3. Create a Model.
//   const User = model<IUser>('User', userSchema);

//   //   run().catch((err) => console.log(err));

//   const run = async () => {
//     let user = new User({
     
//       role: "admin",
//       password: "securepassword123",
      
//       name: {
//         firstName: "John",
//         middleName: "Michael",
//         lastName: "Doe",
//       },
      
//       dateOfBirth: "1990-01-01",
//       gender: "male",
//       email: "johndoe@example.com",
//       contactNo: "+1234567890",
//       emergencyContactNo: "+0987654321",
      
//       presentAddress: "123 Main St, Springfield, IL, USA",
//       permanentAddress: "456 Elm St, Springfield, IL, USA",
//     });
//     await user.save();

//     console.log(user); // 'bill@initech.com'
//   };
//   run();
// });

export default app;
