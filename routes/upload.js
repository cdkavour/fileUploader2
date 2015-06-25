// require middleware
var express = require('express');
var mongoose = require('mongoose');

// require database
// var database = require('../database/setUp');

// use a the built in modular, mountable route handler to handle routes for 'upload'
var router = express.Router();

// get request handler for uploads
var getUpload = router.post('/', function(req, res, next) {


	//        Connect to the local database 'mydb'
	mongoose.connect('mongodb://localhost/27107');

	//        Define schema for uploading files to the database
	mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
	// mongoose.connection.once('open', function(cb) {


	// });

	console.log('debug');
	var uploadSchema = mongoose.Schema({
	  name: String,
	  size: Number,
	  path: String,
	  type: String
	});
	//        Define model for uploading files to the database based on above schema
	var uploadedFile = mongoose.model('uploadedFile', uploadSchema);

	console.log(req.body);
	console.log(req.files);

	// add file to database
	var newUpload = new uploadedFile({ 
		name: req.files.upload.name,
		size: req.files.upload.size,
		path: req.files.upload.path,
		type: req.files.upload.mimetype
	});
	newUpload.save();

	// // add file to database
	// mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
	// mongoose.connection.once('open', function(cb) {

	// 	console.log('about to upload a new file...');
	// 	var uploadSchema = mongoose.Schema({
	// 		name: String,
	// 		size: int,
	// 		path: String,
	// 		type: String
	// 	});

	// 	var uploadedFile = mongoose.model('uploadedFile', uploadSchema);
	// 	var newUpload = new uploadedFile({ 
	// 		name: req.files.upload.name,
	// 		size: req.files.upload.size,
	// 		path: req.files.upload.path,
	// 		type: req.files.upload.mimetype
	// 	});
	// 	newUpload.save();
	// });

	// display image
	res.writeHead(200, {"Content-Type": "text/html"});
	res.write("received file:<br/>");

	var filepath = '/fileStorage/' + req.files.upload.name;
	res.write("<img src='" + filepath + "'/>");

	res.end();
});

// // connect to the local database 'mydb'
// mongoose.connect('mongodb://localhost/mydb');


// export the upload route as an object with a get method
var upload = {};
upload.onGet = getUpload;

module.exports = upload;
