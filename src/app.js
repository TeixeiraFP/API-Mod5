//Import Express
const express = require("express");
const cors = require("cors");
//Import DB
const db = require("../src/infra/sqlite-db");

//Config
const app = express();
const port = process.env.PORT || 3050;

//Middlewares
app.use(express.json());
app.use(cors());

//Rota
const RotaCardapio = require("../src/Controller/CardapioController");
const RotaComentarios = require("../src/Controller/Avalicao-controller");

//Uso da rota
RotaCardapio(app, db);
RotaComentarios(app, db);

//Listen
app.listen(port, () => {
  console.log("Servidor rodando na porta: " + port);
});
