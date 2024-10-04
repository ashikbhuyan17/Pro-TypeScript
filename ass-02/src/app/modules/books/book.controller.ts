import { Request, Response } from "express";
import {
   findBookByGenreAndPubliserFromDb,
   findBookByGenreFromDb,
   findFeaturedBooksFromDb,
   updatePriceInDb,
} from "./book.services";

export const getBookByGenre = async (req: Request, res: Response) => {
   const result = await findBookByGenreFromDb(req.params.genre);
   res.status(200).json({
      status: "success",
      data: result,
   });
};

export const getBookByGenreAndPublisher = async (
   req: Request,
   res: Response
) => {
   const result = await findBookByGenreAndPubliserFromDb();
   res.status(200).json({
      status: "success",
      data: result,
   });
};

export const getFeatureProduct = async (req: Request, res: Response) => {
   const result = await findFeaturedBooksFromDb();
   res.status(200).json({
      status: "success",
      data: result,
   });
};

export const updatePrice = async (req: Request, res: Response) => {
   const result = await updatePriceInDb();
   res.status(200).json({
      status: "success",
      data: result,
   });
};
