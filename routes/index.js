var express = require('express');
var router = express.Router();

/* GET home page. */
var getIndex = router.get('/', function(req, res, next) {
	res.render('index', { title: 'Admitt' });
});

var index = {};
index.onGet = getIndex;

module.exports = index;
