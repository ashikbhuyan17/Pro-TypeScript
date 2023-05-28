import mongoose from "mongoose";
import app from "./app";
const port: number = 5000;

async function connection() {
   try {
      await mongoose.connect("mongodb://localhost:27017/assignment2");
      console.log("Db is connected. So let's start...");

      app.listen(port, () => {
         console.log(`Server is  listening on port ${port}`);
      });
   } catch (error) {
      console.log(error);
   }
}

connection();
