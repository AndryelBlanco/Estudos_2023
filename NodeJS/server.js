import app from "./src/app.js";

//Definir porta
// Prod ou local 
const port = process.env.PORT || 4000; 

app.listen(port, () => {
  console.log("Server iniciado em http://localhost:",port);
}); //"Iniciar" o server
