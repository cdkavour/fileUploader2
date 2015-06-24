var mongoose = require('mongoose');

var setUpDatabase = function() {

	//        Connect to the local database 'mydb'
	mongoose.connect('mongodb://localhost/mydb');

	//        Define schema for uploading files to the database
	mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
	mongoose.connection.once('open', function(cb) {

	  console.log('creating schema for file uploads...');
	  var uploadSchema = mongoose.Schema({
	    name: String,
	    size: Number,
	    path: String,
	    type: String
	  });
	//        Define model for uploading files to the database based on above schema
	  var uploadedFile = mongoose.model('uploadedFile', uploadSchema);
	});

}

var database = {};
database.setUp = setUpDatabase;

module.exports = database;