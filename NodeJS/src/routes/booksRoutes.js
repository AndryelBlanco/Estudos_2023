import express from "express";
import BookController from "../controller/booksController.js";

//Usando o roteamento do express
const booksRouter = express.Router();

booksRouter
  .get("/books", BookController.GetBooks)
  .get("/books/:id", BookController.GetBookById)
  .post("/books", BookController.CreateBook)
  .put("/books/:id", BookController.UpdateBook)
  .delete("/books/:id", BookController.DeleteBookById)

  export default booksRouter;