const jwt = require('jsonwebtoken');
require('dotenv').config();
function generateAccessToken(user) {
	const payload = {
		id: user.id,
		email: user.email,
	};

	return jwt.sign(payload, process.env.SECRETKEY);
}
module.exports = generateAccessToken;