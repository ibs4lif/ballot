var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FactueSchema = new Schema({
	items:Array
});

module.exports = mongoose.model('facture',FactueSchema);
