const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const StockController = require('./controllers/stockController');
const AXIOS = require('axios');
// var engines = require('consolidate');

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
// app.engine('html', engines.mustache);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

const db = 'secret';

mongoose
  .connect(db)
  .then((con) => {
    console.log('Database connected');
    // console.log(con.connections);
  })
  .catch((err) => {
    console.log(err);
  });
//Comment added for fun
app.get('/all', StockController.getStock);
app.post('/', StockController.addStock);
app.get('/single', StockController.getSingleStock);
app.get('/', StockController.home);
AXIOS.get('/');
const portNumber = 7700;
app.listen(portNumber, () => {
  console.log(`Port ${portNumber} , up and running`);
});
