var express = require('express');
var router = express.Router();
var fs = require('fs');
var querystring = require('querystring');

var getShow = router.get('/', function(req, res, next) {
	// res.writeHead(200, {"Content-Type": "image/png"});
	// fs.createReadStream(file).pipe(res);
});

var show = {};
show.onGet = getShow;

module.exports = show;
