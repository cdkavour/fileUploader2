var express = require('express');
var router = express.Router();
var fs = require('fs');
var querystring = require('querystring');

router.get('/', function(req, res, next) {
	res.writeHead(200, {"Content-Type": "image/png"});
	fs.createReadStream("../fileStorage/test.png").pipe(res);
});

module.exports = router;