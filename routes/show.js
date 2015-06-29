// require middleware
var express = require('express');
var mongoose = require('mongoose');

// use a the built in modular, mountable route handler to handle routes for 'show'
var router = express.Router();

	//        Connect to the local database 'mydb'
	mongoose.connect('mongodb://localhost/27107/mydb');

	//        Define schema for uploading files to the database
	mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
	// mongoose.connection.once('open', function(cb) {


	// });


/* GET show page. */
var getShow = router.get('/', function(req, res, next) {
	res.send("show this page");
});

var getUploadedFile = router.get('/uploadedFile/', function(req, res, next) {
	console.log('debug');
	var uploadSchema = mongoose.Schema({
	  name: String,
	  size: Number,
	  path: String,
	  type: String
	});
	//        Show files
	mongoose.model('uploadedFile').find(function (err, uploadedFile) {
		res.send(uploadedFile);
	});
});

// export the show route as an object with a get method
exports.onGet = getShow;
exports.getFile = getUploadedFile;
