// require middleware
var express = require('express');

// use a the built in modular, mountable route handler to handle routes for 'profile'
var router = express.Router();

// get request handler for profile page:
var mainGet = router.get('/', function(req, res, next) {
	res.render('profile');
});

// export the profile route as an object with a get method
var profile = {};
profile.loadMainProfilePage = mainGet;

module.exports = profile;