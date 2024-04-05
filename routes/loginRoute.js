const express = require('express');
const router = express.Router();
const generateAccessToken = require('../auth/jwtGenerator');
const bcrypt = require('bcrypt');
const User = require('../database/models/user');

router.get('/', (req, res) => {
	res.send('you are on the router');
});

router.post('/', async (req, res) => {
	try {
		let body = req.body;
		try {
			let user = await User.findOne({ email: body.email });
			if (!user)
				return res.json({
					success: false,
					message: 'unable to find user',
				});
			let result = await bcrypt.compare(body.password, user.password);
			if (!result)
				return res.json({
					success: false,
					message: 'ubnable to match the password',
				});
			let token = generateAccessToken(user);
			return res.json({
				success: true,
				message: token,
			});
		} catch (err) {
			return res.json({
				success: false,
				message: err,
			});
		}
	} catch (err) {
		return res.json({
			success: false,
			message: 'failed to parse the body',
		});
	}
});

module.exports = router;
