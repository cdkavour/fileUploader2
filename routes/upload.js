var express = require('express');
var formidable = require('formidable');
var querystring = require('querystring');
var fs = require('fs');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var form = new formidable.IncomingForm();
	form.parse(req, function(error, fields, files) {

		//	Possible error on Windows systems:
		//	renaming an already existing file
		fs.rename(files.upload.path, "../fileStorage/test.png", function(error) {
			if (error) {
				fs.unlink("../fileStorage/test.png");
				fs.rename(files.upload.path, "../fileStorage/test.png");
			}
		});

		res.writeHead(200, {"Content-Type": "text/html"});
		res.write("received file:<br/>");
		res.write("<img src='/show' />");
		res.end();
	});
});

module.exports = router;
