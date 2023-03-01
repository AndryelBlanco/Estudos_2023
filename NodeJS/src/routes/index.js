//Centraliza todas as rotas de todas controllers
import express from "express";
import booksRouter from "./booksRoutes.js";

const routes = (app) => {
  //Apenas para caso seja a rota base
  app.route('/').get((req, res) => {
    res.status(200).send({Title: "NodeBooks"})
  })
  
  app.use(
    express.json(),
    booksRouter
  )
};

export default routes;