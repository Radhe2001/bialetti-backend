const express = require('express');
const router = express.Router();
const Product = require('../database/models/product');

router.get('/', (req, res) => {
	res.send('you are on the router');
});

router.post('/', async (req, res) => {
	let body = req.body;
	try {
		let products = await Product.find({ category: body.category });
		return res.json({
			success: true,
			message: products,
		});
	} catch (err) {
		return res.json({
			success: false,
			message: err,
		});
	}
});

module.exports = router;
