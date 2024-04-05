const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
	first_name: String,
	middle_name: String,
	last_name: String,
	email: String,
	password: String,
});
module.exports = mongoose.models.User || mongoose.model('User', userSchema);
