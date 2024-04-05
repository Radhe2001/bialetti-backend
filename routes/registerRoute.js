const express = require('express');
const router = express.Router();
const User = require('../database/models/user');
const encode = require('../auth/bcript');

router.get('/', (req, res) => {
	res.send('you are on the router');
});

router.post('/', async (req, res) => {
	const body = req.body;
	let encPass = await encode(body.password);
	let new_user = new User({
		first_name: body.first_name,
		middle_name: body.middle_name,
		last_name: body.last_name,
		email: body.email,
		password: encPass,
	});
	let user = await new_user.save();
	if (!user)
		return res.json({
			success: true,
			message: 'unable to register the user',
		});
	return res.json({
		success: true,
		message: user,
	});
});

module.exports = router;
