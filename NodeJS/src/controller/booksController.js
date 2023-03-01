import books from "../models/Book.js";

class BookController{
  
  static GetBooks = (req, res) => {
    books.find()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(err => console.log("ERROR WHILE FIND ALL -> ", err));
  };

  static CreateBook = (req, res) => {
    let book = new books(req.body);
    book.save()
    .then(() => {
      res.status(201).send(book.toJSON());
    })
    .catch(err => {
      res.status(500).send({message: `Error while creating -> ${err.message}`})
    });
  };

  static UpdateBook = (req, res) => {
    const id = req.params.id;
    books.findByIdAndUpdate(id, { $set: req.body })
    .then((response) =>{
      res.status(200).send({message: "Book updated succefully!"});
    })
    .catch(err => res.status(404).send({message: `Error while updating -> ${err.message}`})); // Usamos o "SET"
  };

  static GetBookById = (req, res) => {
    const id = req.params.id;
    books.findById(id)
    .then((response) => {
      res.status(200).send(response.toJSON());
    })
    .catch(err => res.status(404).send({message: `Cannot found the book ${id}`}));
  };

  static DeleteBookById = (req, res) => {
    const id = req.params.id;
    books.findByIdAndDelete(id)
    .then((response) => {
      res.status(200).send(response.toJSON());
    })
    .catch(err => res.status(404).send({message: `Cannot Delete the book ${id}`}));
  };
  
};



export default BookController;