var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var ProductCtrl = require('./controllers/ProductCtrl.js');
var port = 9001;
// var mongojs = require('mongojs');

var app = express();
app.use(express.static(__dirname + "/public"));

// var db = mongojs('eCommerce', ['products']);

app.use(bodyParser.json());
app.use(cors());

// Product endpoints
app.post('/products', ProductCtrl.create);
app.get('/products', ProductCtrl.read);
app.get('/products/:id', ProductCtrl.read_id);
app.put('/products/:id', ProductCtrl.update);
app.delete('/products/:id', ProductCtrl.remove);

// User endpoints
app.post('/users', UserCtrl.create);
app.get('/users', UserCtrl.read);
app.get('/users/:id', UserCtrl.read_id);
app.delete('/users', UserCtrl.delete);

// Order endpoints
app.post('/orders', OrderCtrl.create);
app.get('/orders', OrderCtrl.read);
app.get('/orders/:id', OrderCtrl.read_id);
app.delete('/orders', OrderCtrl.delete);

// Cart endpoints
app.post('/cart', CartCtrl.create);
app.get('/cart', CartCtrl.read);
app.get('/cart/:id', CartCtrl.read_id);
app.delete('/cart', CartCtrl.delete);




app.listen(port, function() {
  console.log("eCommerce Server Running!");
});
mongoose.connect('mongodb://localhost/eCommerce');






// app.post('/products', function(req, res) {
//   db.products.insert(req.body, function(err, results) {
//     if(!err) {
//       console.log(results);
//       res.status(201).end();
//     }
//   });
// });
//
// app.get('/products', function(req, res) {
//   db.products.find({}, function(err, results) {
//     if(!err) {
//       res.status(200).send(results);
//     }
//   });
// });
//
// app.get('/products/:id', function(req, res) {
//   db.products.find({_id: mongojs.ObjectId(req.params.id)}, function(err, results) {
//     if(!err) {
//       res.status(200).send(results);
//     }
//   });
// });
//
// app.put('/products/:id', function(req, res) {
//   db.products.update({_id: mongojs.ObjectId(req.params.id)}, {$set: req.body}, function(err, results) {
//     console.log(results);
//     res.status(200).end();
//   });
// });
//
// app.delete('/products/:id', function(req, res) {
//   db.products.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, results) {
//     console.log(results);
//     res.status(200).end();
//   });
// });
