var express = require('express');
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
var db = mongojs('ibrahima:sarr@ds011168.mlab.com:11168/ballot', ['magasin','employe','facture','documents']);

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', function(req,res){
	var data = [1,2,{test:1}];
	db.magasin.find(function(err,docs){
		console.log(docs);
		data.push(JSON.parse(docs));
		data.push(2);
	});
	db.documents.find(function(err,docs){
		console.log(docs);
		data.push(JSON.parse(docs));
	});
	res.json(JSON.stringify(data));
});

app.get('/employe', function(req,res){
	db.employe.find(function(err,docs){
		console.log(docs);
		res.json(docs);
	});
});

app.get('/facture', function(req,res){
	db.facture.find(function(err,docs){
		console.log(docs);
		res.json(docs);
	});
});

app.get('/phone', function(req,res){
	db.magasin.find(function(err,docs){
		console.log(docs);
		res.json(docs);
	});
});

app.listen(PORT,function(){
	console.log('App running on port '+ PORT);
});
