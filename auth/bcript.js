const bcrypt = require('bcrypt');
require('dotenv').config();
function encode(pass) {
	let password = '';
	return bcrypt
		.hash(pass, parseInt(process.env.SALT))
		.then((encPass) => {
			return encPass;
		})
		.catch((err) => {
			password = 'err';
		});
}

module.exports = encode;
