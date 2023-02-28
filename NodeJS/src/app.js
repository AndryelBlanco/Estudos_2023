import express from "express";

const app = express(); // Instanciando Express

app.use(express.json()); // Para interpretar Json

const books = [
  {id: 191, "title": "Atomic Heart"},
  {id: 1211, "title": "Hogwarts Legacy"}
];

//Mapeando o get para a rota '/'
app.get('/', (req, res) => {
  res.status(200).send('Hello from BookBase');
});

//Rota '/books'
app.get('/books', (req,res) => {
  res.status(200).json(books);
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
