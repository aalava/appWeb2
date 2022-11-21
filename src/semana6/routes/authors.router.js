const express = require('express');
const route = express.Router();

route.get('/:name', (res, req) => {
  const name = req.params.id;
  res.send("lista de libros por el autor: " +name);
})

route.get('/', (res, req) => {
  res.send("Lista de autores disponibles");
})

module.exports = route;