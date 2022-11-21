const express = require('express');
//const {faker} = require('@faker-js/faker');

const route = express.Router();

route.get('/', (req, res) => {
  res.send("Listado del estado de los libros Publicados / Archivados")
})

route.get('/published', (req, res) => {
  res.send("Listado de libros publicados")
})

module.exports = route;