const express = require('express');
const route = express.Router();
route.use(express.json());

const AuthorsService = require('../services/authors.service');
const service = new AuthorsService();

route.get('/', (req, res) => {
  const getAllAuthors = service.getAllAuthors();
  res.json(getAllAuthors);
})

route.get('/:name', (req, res) => {
  const author = req.params.name;
  const booksByAuthor = service.getBooksByAuthor(author);
  res.json(booksByAuthor);
})

route.post('/', (req, res) => {
  const data = req.body;
  const createCategory = service.createAuthor(data);
  res.json(createCategory);
})

route.put('/:name1/:name2', (req, res) => {
  const author1 = req.params.name1;
  const author2 = req.params.name2;
  const updateAuthor = service.updateBookByAuthor(author1, author2);
  res.json(updateAuthor);
})

route.delete('/:author', (req, res) => {
  const author = req.params.author;
  const deleteAuthor = service.deleteBookByAuthor(author);
  res.json(deleteAuthor);
})

module.exports = route;