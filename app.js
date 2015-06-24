// require middleware
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var multer = require('multer');
var mongoose = require('mongoose');

// require routes
var index = require('./routes/index');
var upload = require('./routes/upload');
var show = require('./routes/show');
var download = require('./routes/download');
var profile = require('./routes/profile');

// require database
var database = require('./database/setUp');


/* *********************************************************** */
//        Define the app using express
var app = express();
/* *********************************************************** */


/* *********************************************************** */
//        Set the view engine to use 'jade' views
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'jade');
/* *********************************************************** */


////////////////////////////// SET MIDDLEWARE ////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

/* ********************************************************************* */
//        Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use("/fileStorage", express.static(__dirname + "/fileStorage"));
/* ********************************************************************* */
//        Use 'logger' middleware for logging to the console
app.use(logger('dev'));
/* ********************************************************************* */
//        Use 'body-parser' middleware to parse JSON and URLENCODED data
//        (populates 'req.body' with data being parsed)
//        (use multer for multi-part data)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
/* ********************************************************************* */
//        Use 'multer' middleware to process multi-part data files
app.use(multer({
  dest: './fileStorage/',
  rename: function(fieldname, filename) {
    return filename.replace(/\W+/g, '-').toLowerCase();
  }
}));


////////////////////////////// DIRECT ROUTES /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

/* ********************************************************************* */
//        Direct get requests to their respective routes
app.use('/', index.onGet);
app.use('/upload', upload.onGet);
app.use('/show', show.onGet);
app.use('/download', download.onGet);
app.use('/profile', profile.loadMainProfilePage);
/* ********************************************************************* */

////////////////////////////// SET UP DATABASE ///////////////////////////////
//////////////////////////////////////////////////////////////////////////////
// database.setUp();

////////////////////////////// ERROR HANDLING ////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


/* ********************************************************************* */
//        Export App
module.exports = app;
