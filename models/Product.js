var mongoose = require('mongoose');

var Product = new mongoose.Schema ({
  brand: {
    type: String,
    require: true,
    // index: true
  },
  product_name: {
    type: String,
    // unique: true,
    require: true,
    // index: true
  },
  model: {
    type: String,
    // unique: true,
    require: true,
    // index: true
  },
  price: {
    type: Number,
    require: true,
    min: 0
  },
  quantity: {
    type: Number,
    require: true,
    min: 0
  },
  color: {
    type: String,
    // require: true
  },
  dimension: {
    type: String
  },
  weight: {
    type: Number,
    min: 0
  },
  country_origin: {
    type: String
  },
  note: {
    type: String,
    require: true
  }
});

module.exports = Product;
