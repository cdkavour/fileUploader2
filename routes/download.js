// require middleware
var express = require('express');
var fs = require('fs');
var url = require('url');
var http = require('http');
var exec = require('child_process').exec;
var spawn = require('child_process').spawn;

// use a the built in modular, mountable route handler to handle routes for 'upload'
var router = express.Router();

// get request handler for downloads
var getDownload = router.get('/', function(req, res, next) {
	res.write("Right now, this page just downloads a picture of a scuba-diver from national geographic to the downloads folder.");

	// App variables
	var file_url = 'http://d.ibtimes.co.uk/en/full/1391825/national-geographic-traveller-photo-contest-2014-winners.jpg';
	var DOWNLOAD_DIR = './downloads/';

	// We will be downloading the files to a directory, so make sure it's there
	// This step is not required if you have manually created the directory
	var mkdir = 'mkdir -p ' + DOWNLOAD_DIR;
	var child = exec(mkdir, function(err, stdout, stderr) {
	    if (err) throw err;
	    else download_file_httpget(file_url);
	});

	res.end();

	// Function to download file using HTTP.get
	var download_file_httpget = function(file_url) {
	var options = {
	    host: url.parse(file_url).host,
	    port: 80,
	    path: url.parse(file_url).pathname
	};

	var file_name = url.parse(file_url).pathname.split('/').pop();
	var file = fs.createWriteStream(DOWNLOAD_DIR + file_name);

	http.get(options, function(res) {
	    res.on('data', function(data) {
	            file.write(data);
	        }).on('end', function() {
	            file.end();
	            console.log(file_name + ' downloaded to ' + DOWNLOAD_DIR);
	        });
	    });
	};
});


// export the upload route as an object with a get methods
var download = {};
download.onGet = getDownload;

module.exports = download;