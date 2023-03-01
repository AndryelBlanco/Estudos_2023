import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

//Passar a string de conexão aqui
mongoose.connect(process.env.BD_CONNECTION_STRING); 

let DB = mongoose.connection;

export default DB;