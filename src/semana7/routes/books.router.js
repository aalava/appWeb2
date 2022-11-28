const express = require('express');
//const {faker} = require('@faker-js/faker');

const route = express.Router();
route.use(express.json());

const BooksService = require('../services/books.service');
const service = new BooksService();

route.get('/', (req, res) => {
  const books = service.showAllBooks();
  res.json(books);
})

route.get('/:id', (req, res) => {
  const id = req.params.id;
  const filteredBooks = service.findOne(id);
  res.json(filteredBooks);
})

route.post('/', (req, res) => {
  const data  = req.body;
  const bookCreated = service.create(data);
  //res.status(201).json(bookCreated);
  res.json(bookCreated);
})

route.put('/:id', (req, res) => {
  const id = req.params.id;
  const change  = req.body;
  const updateBook = service.update(id, change);
  //res.status(204).json(change);
  res.json(updateBook);
})

route.delete('/:id', (req, res) => {
  const id = req.params.id;
  const deleteBook = service.delete(id);
  res.status(200).json(deleteBook);
})

module.exports = route;