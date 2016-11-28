var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var customerSchema = new Schema({
    CustomerId: Number,
    CustomerName: String,
    Address: String
});

var Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;