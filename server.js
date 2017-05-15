//server.js
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');

var uriString = "mongodb://localhost/find_teacher_db";

var port = process.env.PORT || 8080;

//connect to db
mongoose.connect(uriString, function(err, db) {

	var server = app.listen(port, function() {
		port = server.address().port;
		console.log("App running on port", port);
	});
});

app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));


//configure routes
require('./app/routes')(app);



//expose app
exports = module.exports = app;