var express = require('express');
var app = express();

var session = require('express-session');
var bodyParser = require('body-parser');

//app.use(express.static('static'));
app.set('view engine', 'ejs');

app.use(express.static('public'));


/**
 * Let's creat the .tpl and .error on the res object
 */
app.use(function (req, res, next) {
  res.tpl = {};
  return next();
});

/**
 * Include all the routes
 */
require('./routes/profil')(app);
require('./routes/list')(app);
require('./routes/outside')(app);

/**
 * Standard error handler
 */
app.use(function (err, req, res, next) {
  res.status(500).send('Houston, we have a problem!');

  //Flush out the stack to the console
  console.error(err.stack);
});


var server = app.listen(5000, function () {
	console.log('Port :5000');
});