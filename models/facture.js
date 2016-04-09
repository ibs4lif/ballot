var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FactueSchema = new Schema({
	remorque:String,
	route:String,
	porte:String,
	reference:String,
	items:Array,
	date:String,
});

module.exports = mongoose.model('facture',FactueSchema);
