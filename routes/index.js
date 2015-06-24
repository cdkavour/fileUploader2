// require middleware
var express = require('express');

// use a the built in modular, mountable route handler to handle routes for home page
var router = express.Router();

/* GET home page. */
var getIndex = router.get('/', function(req, res, next) {
	res.render('index');
});

// export this route as an object with a get method
var index = {};
index.onGet = getIndex;

module.exports = index;
