export interface IBook {
   title: string;
   author: string[];
   genre: string;
   publicationYear: number;
   rating: number;
   featured?: string;
   price: number | string;
   publisher: {
      name: string;
      location: string;
   };
   reviews: [
      {
         user: string;
         comment: string;
      }
   ];
}
