const mongoose = require('mongoose');
require('dotenv').config();

mongoose
	.connect(
		`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.uloifkk.mongodb.net/`
	)
	.then(() => {
		console.log('Database has connected successfully');
	})
	.catch((error) => {
		console.log('some error occured ' + error);
	});
