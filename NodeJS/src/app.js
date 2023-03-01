import express from "express";
import DB from "./config/dbConnect.js"; // Interessante colocar a extensão
import books from "./models/Book.js";

DB.on("error", console.log.bind(console, 'DB ERROR')); //Link entre terminal e o log do mongo
//"Abre" a conexão
DB.once("open", () =>{
  console.log("BD Connected")
});

const app = express(); // Instanciando Express

app.use(express.json()); // Para interpretar Json

//Mapeando o get para a rota '/'
app.get('/', (req, res) => {
  res.status(200).send('Hello from BookBase');
});


app.get('/books/:id', (req,res) => {
  let {id} = req.params;
  const index = findBook(id);
  res.status(200).json(books[index]);
});

app.post('/books', (req,res) => {
  books.push(req.body);
  res.status(200).send('Book created with success!');
});

app.put('/books/:id', (req, res) =>{
  let {id} = req.params;
  const index = findBook(id);
  books[index].title = req.body.Title;
  res.status(200).send('Book updated succefully!');
});

app.delete('/books/:id', (req, res) => {
  let {id} = req.params;
  const index = findBook(id);
  books.splice(index, 1);
  res.status(200).send('Book deleted succefully!');
});

function findBook(id){
  return books.findIndex(book => book.id == id);
}

//Export 
export default app
