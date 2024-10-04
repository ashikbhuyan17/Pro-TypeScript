import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

// all routes
import bookdRoutes from "./app/modules/books/book.route";

// middileware
app.use(cors());

// Perser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes

app.use("/api/v1/book", bookdRoutes);

export default app;
