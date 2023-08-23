const Stock = require('../models/stockModel');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

exports.getStock = async (req, res) => {
  const stocks = await Stock.find();

  res.status(200).sendFile(__dirname + 'demo_ui/stockView.html');
};

exports.addStock = async (req, res) => {
  console.log(req.body);
  //const newStock = await Stock.create(req.body);
  const stockDetails = await Stock.create({
    stockName: req.body.stockName,
    lastTradedPrice: req.body.lastTradedPrice,
    marketCap: req.body.marketCap,
    dividend: req.body.dividend,
  });
  res.status(200).send(
    // "<h2>
    //   Stock Added, Return to <a href='/'>home</a>
    // </h2>"
    "<h2>Stock Added! Return to <a href = '/'>home</h2>"
  );
};
exports.home = async (req, res) => {
  console.log(__dirname);
  console.log(__filename);
  res.status(200).sendFile('/stockView.html', {
    root: path.join(__dirname, '../../demo_ui'),
  });
};
exports.getSingleStock = async (req, res) => {
  console.log(req);
  console.log(req.query.viewStock + "It's me");
  const stock = await Stock.findOne({ stockName: req.query.viewStock });
  // console.log(stock.stockName);
  // console.log(stock.lastTradedPrice);
  if (stock) {
    res.status(200).render('queryStock', {
      stockName: stock.stockName,
      lastTradedPrice: stock.lastTradedPrice,
      marketCap: stock.marketCap,
      dividend: stock.dividend,
    });
  } else {
    res.status(404).send('<h2>Sorry, No data found </h2>');
  }
};
