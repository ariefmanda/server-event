var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors')
var mongoose = require('mongoose')
var redis = require("redis")
var client = redis.createClient();

mongoose.connection.openUri('mongodb://localhost/event');
mongoose.Promise = global.Promise;

mongoose.connection.once('open', () => {
  console.log('mongoose connection success');
}).on('error', (error) => {
  console.log('connection error', error);
})

client.on('ready', (err)=>{
  err ? console.log('connection error :', err) : console.log('Redis connection success')
})

var index = require('./routes/index');
var api = require('./routes/api');

var app = express();
app.use(cors())
// view engine setup

// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500).send(err)
});

module.exports = app;
