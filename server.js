var express = require('express');
var bodyParser = require('body-parser');
// var mongojs = require('mongojs');
var mongoose = require('mongoose');
// var db = mongojs('ibrahima:sarr@ds011168.mlab.com:11168/ballot', ['magasin','employe','facture','documents','equipement','reservation']);
var cors = require('cors');
var facture = require('../models/facture');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

var db = 'mongodb://ibrahima:sarr@ds011168.mlab.com:11168/ballot';
mongoose.connect(db);

app.get('/', function(req,res){
	db.magasin.find(function(err,docs){
		console.log(docs);
		res.json(docs);
	});
});
//------------------------------------------------------------------
//EQUIPEMENT
//------------------------------------------------------------------
app.get('/equipement', function (req, res) {
    db.equipement.find(function (err, docs) {
        console.log(docs);
        res.json(docs);
    });

});
app.get('/reservation', function (req, res) {
    db.reservation.find(function (err, docs) {
        console.log(docs);
        res.json(docs);
    });

});
app.post('/equipement/', function (req,res) {
    console.log(req.body);
    db.equipement.insert(req.body, function (err, doc) {
        res.json(doc);
    });
});
app.post('/reservation/', function (req,res) {
    console.log(req.body);
    db.reservation.insert(req.body, function (err, doc) {
        res.json(doc);
    });
});
//------------------------------------------------------------------
//EQUIPEMENT FIN
//------------------------------------------------------------------

app.get('/facture', function (req, res) {
    //db.facture.find(function (err, docs) {
    //    console.log(docs);
    //    res.json(docs);
    //});
    facture.find({}).exec(function(err,docs){
        if (err) {
            res.send('Une erreur s\'est produite');
        }else{
            res.json(docs);
            console.log(docs);
        }
    });    

});

app.post('/facture/', function (req,res) {
    console.log(req.body);
    //db.facture.insert(req.body, function (err, doc) {
    //    res.json(doc);
    //});
    newFacture = facture();
    newFacture.items = req.body.items;

    newFacture.save(function(err,docs){
        if (err) {
            res.send('Une erreur s\'est produite');
        }else{
            res.json(docs);
            console.log(docs);            
        }
    });
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
