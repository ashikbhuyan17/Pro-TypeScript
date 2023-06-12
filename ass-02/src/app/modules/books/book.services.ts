import { IBook } from "./book.interface";
import Book from "./book.model";

export const findBookByGenreFromDb = async (
   genre: string
): Promise<IBook[]> => {
   const books = await Book.find({ genre: genre });
   return books;
};

export const findBookByGenreAndPubliserFromDb = async (): Promise<IBook[]> => {
   const books = await Book.find({
      $and: [{ genre: "Sci-Fi" }, { "publisher.name": "Roli Books" }],
   });
   return books;
};

export const findFeaturedBooksFromDb = async (): Promise<IBook[]> => {
   const featuredBooks = await Book.find();

   for (const book of featuredBooks) {
      if (book.rating > 4.5) {
         book.featured = "BestSeller";
      } else {
         book.featured = "Popular";
      }
   }
   return featuredBooks;
};

export const updatePriceInDb = async (): Promise<IBook[]> => {
   const updatedResult = await Book.updateMany(
      { publicationYear: { $gt: 2020 }, price: { $type: "string" } },
      [
         {
            $set: {
               price: { $toInt: "$price" },
            },
         },
      ]
   );
   const updatedBooks = await Book.find({
      publicationYear: { $gt: 2020 },
      price: { $type: "int" },
   });

   return updatedBooks;
};
