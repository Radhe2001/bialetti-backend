const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./database/config');

// importing all the available routes
const detail = require('./routes/detailRoute');
const allProduct = require('./routes/allProductRoute');
const login = require('./routes/loginRoute');
const otherProduct = require('./routes/otherProductRoute');
const otp = require('./routes/otpRoute');
const product = require('./routes/productRoute');
const profile = require('./routes/profileRoute');
const register = require('./routes/registerRoute');

let app = express();

app.use(express.json());
app.use(
	cors({
		origin: '*',
	})
);

// managing the routes
app.use('/api/detail', detail);
app.use('/api/login', login);
app.use('/api/otp', otp);
app.use('/api/product/all', allProduct);
app.use('/api/product/other', otherProduct);
app.use('/api/products', product);
app.use('/api/profile', profile);
app.use('/api/register', register);

let PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
	res.send(
		'<a href="http://localhost:5000/api/detail">http://localhost:5000/api/detail</a><br/> <a a href = "http://localhost:5000/api/login" > http://localhost:5000/api/login</a><br/><a href="http://localhost:5000/api/otp">http://localhost:5000/api/otp</a><br/><a href="http://localhost:5000/api/product/all">http://localhost:5000/api/product/all</a><br/><a href="http://localhost:5000/api/product/other">http://localhost:5000/api/product/other</a><br/><a href="http://localhost:5000/api/products">http://localhost:5000/api/products</a><br/><a href="http://localhost:5000/api/profile">http://localhost:5000/api/profile</a><br/><a href="http://localhost:5000/api/register">http://localhost:5000/api/register</a><br/>'
	);
});

app.listen(PORT, () => console.log(`Backend is up on port ${PORT}`));
