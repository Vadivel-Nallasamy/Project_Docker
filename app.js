const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const StockController = require('./controllers/stockController');
// var engines = require('consolidate');

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
// app.engine('html', engines.mustache);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

const db =
  'mongodb+srv://vadivelnallasamy7575:Aldebaran123@democluster.c0wba3o.mongodb.net/';

mongoose
  .connect(db)
  .then((con) => {
    console.log('Database connected');
    // console.log(con.connections);
  })
  .catch((err) => {
    console.log(err);
  });

app.get('/all', StockController.getStock);
app.post('/', StockController.addStock);
app.get('/single', StockController.getSingleStock);
app.get('/', StockController.home);
const portNumber = 7700;
app.listen(portNumber, () => {
  console.log(`Port ${portNumber} , up and running`);
});
