import express from "express";
import {
   getBookByGenre,
   getBookByGenreAndPublisher,
   getFeatureProduct,
   updatePrice,
} from "./book.controller";

const router = express.Router();

router.get("/update", updatePrice);
router.get("/feature", getFeatureProduct);
router.get("/genrePublisher", getBookByGenreAndPublisher);
router.get("/:genre", getBookByGenre);

export default router;
