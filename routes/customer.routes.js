var express = require('express');
var router = express.Router();

var Customer = require('../models/customer.model');

router.get('/', function(req, res) {
    Customer.find({}, function(err, result) {
        if (err)
            console.log(err);
        else
            res.json(result);
    })
});

router.get('/:id', function(req, res) {
    Customer.findOne({ _id: req.params.id }, function(err, result) {
        if (err)
            console.log(err);
        else
            res.json(result);
    })
});

router.post('/', function(req, res) {
    console.log(req.body);
    var newCustomer = new Customer(req.body);
    newCustomer.save(function(err) {
        if (!err) {
            console.log('Customer Saved');
            res.json(newCustomer);
        }
    });
});

router.delete('/:id', function(req, res) {
    Customer.findOneAndRemove({ _id: req.params.id }, function(err, result) {
        if (err)
            console.log(err);
        else
            res.json(result);
    })
});

router.put('/:id', function(req, res) {
    Customer.findOneAndUpdate({ _id: req.params.id }, req.body, function(err, result) {
        if (err)
            console.log(err);
        else
            res.json(result);
    })
});


module.exports = router;