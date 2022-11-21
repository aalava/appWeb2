const booksRouter = require('./books.router');
const authorsRouter = require('./authors.router');
const categoriesRouter = require('./categories.router');
const statusRouter = require('./status.router');

const routerApi = (app) => {
  app.use('/books', booksRouter);
  app.use('/authors', authorsRouter);
  app.use('/categories', categoriesRouter);
  app.use('/status', statusRouter);
}

module.exports = routerApi;