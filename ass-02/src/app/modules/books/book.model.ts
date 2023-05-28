import { Schema, model } from "mongoose";
import { IBook } from "./book.interface";

const bookSchema = new Schema<IBook>({
   title: {
      type: String,
      required: true,
   },
   author: {
      type: [String],
      required: true,
   },
   genre: {
      type: String,
      required: true,
   },
   publicationYear: {
      type: Number,
      required: true,
   },
   featured: {
      type: String,
   },
   price: {
      type: Number,
      required: true,
   },
   rating: {
      type: Number,
      required: true,
   },
   publisher: {
      name: {
         type: String,
         required: true,
      },
      location: {
         type: String,
         required: true,
      },
   },
   reviews: [
      {
         user: {
            type: String,
            required: true,
         },
         comment: {
            type: String,
            required: true,
         },
      },
   ],
});

const Book = model<IBook>("book", bookSchema);

export default Book;
