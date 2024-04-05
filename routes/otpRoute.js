const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

router.get('/', (req, res) => {
	res.send('you are on the router');
});

router.post('/', async (req, res) => {
	let otp = 255847 + Math.floor(Math.random() * 100000);
	let data = req.body;
	let transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: process.env.SENDER,
			pass: process.env.EMAILPASSWORD,
		},
	});
	let mailOptions = {
		from: process.env.SENDER,
		to: data.email,
		subject: `OTP From Belatti Application`,
		text: `Greetings of the day this is the varification otp from the Belatti application \n\n Your OTP is ${otp}`,
	};
	transporter.sendMail(mailOptions);
	return res.json({ success: true, otp: otp });
});

module.exports = router;
