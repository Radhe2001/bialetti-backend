const jwt = require('jsonwebtoken');

function decode(token) {
	try {
		const data = jwt.decode(token);
		if (data === null) return { success: false };
		return { success: true, data: data };
	} catch {
		return { success: false };
	}
}

module.exports = decode;
