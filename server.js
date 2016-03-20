var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', function(req,res){
	res.send('Le test fonctionne');
});

app.listen(PORT,function(){
	console.log('App running on port '+ PORT);
});