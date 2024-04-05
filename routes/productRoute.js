const express = require('express');
const router = express.Router();
require('dotenv').config();
const Product = require('../database/models/product');

router.get('/', (req, res) => {
	res.send('you are on the router');
});

router.post('/', async (req, res) => {
	try {
		let body = req.body;
		let product = await Product.create(body);
		return res.json({
			status: 200,
			success: true,
			product: product,
		});
	} catch (err) {
		return res.json({ status: 402, success: false, message: err });
	}
});

module.exports = router;
