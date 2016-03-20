var express = require('express');
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
var db = mongojs('ibrahima:sarr@ds011168.mlab.com:11168/ballot', ['magasin']);

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', function(req,res){
	db.magasin.find(function(err,docs){
		console.log(docs);
		res.json(docs);
	});
});

app.listen(PORT,function(){
	console.log('App running on port '+ PORT);
});