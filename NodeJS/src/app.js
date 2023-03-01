import express from "express";
import DB from "./config/dbConnect.js"; // Interessante colocar a extensão
import books from "./models/Book.js";
import routes from "./routes/index.js";

DB.on("error", console.log.bind(console, 'DB ERROR')); //Link entre terminal e o log do mongo
//"Abre" a conexão
DB.once("open", () =>{
  console.log("BD Connected")
});

const app = express(); // Instanciando Express
app.use(express.json()); // Para interpretar Json
routes(app); //Usando as rotas

//Export 
export default app
