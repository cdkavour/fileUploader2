var mongoose = require('mongoose');

// Define Schema
var uploadSchema = mongoose.Schema({
  name: String,
  size: Number,
  path: String,
  type: String
});
// Define Model
var uploadedFile = mongoose.model('uploadedFile', uploadSchema);