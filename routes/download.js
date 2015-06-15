var express = require('express');
var fs = require('fs');

var router = express.Router();

var file = fs.createWriteStream("file.jpg");
var getDownload = router.get('/', function(res) {
  // res.pipe(file);
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write("hi<br/>");
  res.end();
});

var download = {};
download.onGet = getDownload;

module.exports = download;