const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  stockName: {
    type: String,
    required: true,
    maxLength: 20,
    unique: true,
  },
  lastTradedPrice: {
    type: Number,
    required: true,
    maxLength: 5,
  },
  marketCap: {
    type: Number,
    required: true,
    maxLength: 20,
  },
  dividend: {
    type: Number,
    required: true,
    maxLength: 5,
  },
});

const Stock = mongoose.model('Stock', stockSchema);
// const testStock = new Stock({
//   stockName: 'INFY',
//   lastTradedPrice: 412.56,
//   marketCap: 1000000,
//   dividend: 10,
// });

// testStock
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
module.exports = Stock;
