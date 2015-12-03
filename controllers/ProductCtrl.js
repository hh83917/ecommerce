var mongoose = require('mongoose'),
    productSchema = require('../models/Product'),
    Product = mongoose.model('Product', productSchema);

module.exports = {
  create: function(req, res) {
    var product = req.body;
    Product.create(product, function(err, result) {
      if(err) {
        // console.log('if');
        res.status(500).json(err);
      }
      else {
        // console.log('else');
        res.status(201).json(result);
      }
    });
  },
  read: function(req, res) {
    Product
    .find(req.query)
    .exec()
    .then(function(products) {
      res.status(200).send(products);
    });
  },
  read_id: function(req, res) {
    Product
    .findById(req.params.id)
    .exec()
    .then(function(products) {
      console.log(req.params.id);
      res.status(200).send(products);
    });
  },
  update: function(req, res) {
    Product
    .findByIdAndUpdate(req.params.id, req.body, function(err, result) {
      if(err) {
        console.log(err);
      }
      else {
        res.status(200).end();
      }
    });
  },
  remove: function(req, res) {
    Product.findByIdAndRemove(req.params.id, function(err, result) {
      if(err) {
        console.log(err);
      }
      else {
        res.status(200).end();
      }
    });
  }

};


// module.exports = {
//   create: function(req, res) {
//     db.products.insert(req.body, function(err, results) {
//       if(!err) {
//         console.log(results);
//         res.status(201).end();
//       }
//     });
//   },
//   read: function(req, res) {
//     db.products.find({}, function(err, results) {
//       if(!err) {
//         res.status(200).send(results);
//       }
//     });
//   },
//   read_id: function(req, res) {
//     db.products.find({_id: mongojs.ObjectId(req.params.id)}, function(err, results) {
//       if(!err) {
//         res.status(200).send(results);
//       }
//     });
//   },
//   update: function(req, res) {
//     db.products.update({_id: mongojs.ObjectId(req.params.id)}, {$set: req.body}, function(err, results) {
//       console.log(results);
//       res.status(200).end();
//     });
//   },
//   remove: function(req, res) {
//     db.products.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, results) {
//       console.log(results);
//       res.status(200).end();
//     });
//   }
//
// };
