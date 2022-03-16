const mongoose = require('mongoose');
require('dotenv').config();
const DATABASE_URL = process.env.DATABASE_URL;

const callback = err => err && console.error('Connection to the Smarty database failed 😣');

const config = { useUnifiedTopology: true, useNewUrlParser: true };

const connectDB = () => mongoose.connect(DATABASE_URL, config, callback);

module.exports = connectDB;