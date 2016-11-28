var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan'),
    path = require('path'),
    mongoose = require('mongoose');

var dbConfig = require('./config/db.config');
mongoose.connect(dbConfig.url, ['Customer'], function() {
    console.log('Connected to the db ' + dbConfig.url);
})

var index = require('./routes/index');
var customer = require('./routes/customer.routes');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'app')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', index);
app.use('/customers', customer);

app.listen(3000, function() {
    console.log('Server running on port 3000');
});

app.all('*', function(req, res) {
    res.status(200).sendFile(path.join(__dirname, '/app/index.html'));
});