const express = require('express');
const booksRouter = require('./books.router');
const authorsRouter = require('./authors.router');
const categoriesRouter = require('./categories.router');
const statusRouter = require('./status.router');

const routerApi = (app) => {
  const route = express.Router();
  app.use('/api/v1', route);

  route.use('/books', booksRouter);
  route.use('/authors', authorsRouter);
  route.use('/categories', categoriesRouter);
  route.use('/status', statusRouter);
}

module.exports = routerApi;