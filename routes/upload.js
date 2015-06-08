var express = require('express');
var multer = require('multer');
var querystring = require('querystring');
var fs = require('fs');

var router = express.Router();

/* GET upload page. */
// var getUpload =	router.get('/', function(req, res, next) {
// 	var form = new formidable.IncomingForm();
// 	form.parse(req, function(error, fields, files) {

// 		//	Possible error on Windows systems:
// 		//	renaming an already existing file
// 		fs.rename(files.upload.path, "../fileStorage/test.png", function(error) {
// 			if (error) {
// 				fs.unlink("../fileStorage/test.png");
// 				fs.rename(files.upload.path, "../fileStorage/test.png");
// 			}
// 		});

// 		res.writeHead(200, {"Content-Type": "text/html"});
// 		res.write("received file:<br/>");
// 		res.write("<img src='/show' />");
// 		res.end();
// 	});
// });

var getUpload = router.post('/', function(req, res, next) {
	console.log(req.body);
	console.log(req.files);

	var name = req.files.upload.name;
	var filepath = '../fileStorage/' + name;

	console.log(filepath);

	res.writeHead(200, {"Content-Type": "text/html"});
	res.write("received file:<br/>");
	res.write("<img src= filepath />");
	res.end();
});

var upload = {};
upload.onGet = getUpload;

module.exports = upload;
