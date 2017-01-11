// Include Server Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(express.static('./public'));

// -------------------------------------------------

// // MongoDB Configuration configuration
// mongoose.connect('mongodb://admin:reactrocks@ds023593.mlab.com:23593/heroku_pg676kmk');
// var db = mongoose.connection;
// db.on('error', function (err) {
// 	console.log('Mongoose Error: ', err);
// });

// db.once('open', function () {
// 	console.log('Mongoose connection successful.');
// });


//Require Schemas
// var Article = require('./server/model.js');
// var MongoClient = require('mongodb').MongoClient
//   , assert = require('assert');

// -------------------------------------------------

// Main Route
app.get('/', function(req, res){
	res.sendFile('./public/index.html');
})

app.get('/repairs', function (req, res) {
	res.sendFile(path.join(__dirname, './public/repairs.html'));
});

app.get('/iphone-repairs', function (req, res) {
	res.sendFile(path.join(__dirname, './public/iphone-repairs.html'));
});

app.get('/google-repairs', function (req, res) {
	res.sendFile(path.join(__dirname, './public/google-repairs.html'));
});

app.get('/tablet-repairs'), function(req, res) {
	res.sendFile('./public/tablet-repairs.html')
}


// -------------------------------------------------

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});