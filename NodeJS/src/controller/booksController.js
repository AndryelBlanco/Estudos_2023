import books from "../models/Book.js";

class BookController{
  
  static GetBooks = (req, res) => {
    books.find()
    .then(() => {
      res.status(200).json(books);
    })
    .catch(err => console.log("ERROR WHILE FIND ALL -> ", err));
  };

};


export default BookController;