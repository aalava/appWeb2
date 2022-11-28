const express = require('express');
const routerApi = require('./routes/index.js');
const {faker} = require('@faker-js/faker');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send("Mi primer server con express");
})

routerApi(app);

app.listen(port, () => {
  console.log("nuestra peticion");
})