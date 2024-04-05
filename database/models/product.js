const mongoose = require('mongoose');

let productSchema = new mongoose.Schema({
	title: String,
	category: String,
	image: String,
	about_desc: String,
	detail_desc: String,
	price: String,
});
module.exports =
	mongoose.models.Product || mongoose.model('Product', productSchema);
