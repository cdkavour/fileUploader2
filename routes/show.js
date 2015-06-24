// require middleware
var express = require('express');

// use a the built in modular, mountable route handler to handle routes for 'show'
var router = express.Router();

/* GET show page. */
var getShow = router.get('/', function(req, res, next) {
	res.send("show this page");
});

// export the show route as an object with a get method
var show = {};
show.onGet = getShow;

module.exports = show;
