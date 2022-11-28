const express = require('express');
//const {faker} = require('@faker-js/faker');

const route = express.Router();
route.use(express.json());

const CategoriesService = require('../services/categories.services');
const service = new CategoriesService();

route.get('/:id', (req, res) => {
  const catId = req.params.id;
  const filteredCategory = service.findOne(catId);
  res.json(filteredCategory);
  //res.send("Mostrando los libros de las categorías: " +catId);
})

route.get('/', (req, res) => {
  //res.send("Listado de categorías de libros")
  const getAllCategories = service.showAllCategories();
  res.json(getAllCategories);
})

route.post('/', (req, res) => {
  const data = req.body;
  const createCategory = service.create(data);
  res.json(createCategory);
})

route.put('/:category/:changeCategory', (req, res) => {
  const category = req.params.category;
  const categoryTochange = req.params.changeCategory;
  const updateCategory = service.update(category, categoryTochange);
  res.json(updateCategory);
})

route.delete('/:category', (req, res) => {
  const category = req.params.category;
  const deleteCategory = service.delete(category);
  res.json(deleteCategory);
})

module.exports = route;