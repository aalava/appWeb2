const express = require('express');
//const {faker} = require('@faker-js/faker');

const route = express.Router();

route.get('/:id', (req, res) => {
  const catId = req.params.id;
  res.send("Mostrando los libros de las categorías: " +catId);
})

route.get('/', (req, res) => {
  res.send("Listado de categorías de libros")
})

module.exports = route;