const mongoose = require('mongoose');
require('dotenv').config();
const DATABASE_URL = process.env.DATABASE_URL;

const callback = err => err && console.error('Connection to the Smarty database failed 😣');

const config = { useUnifiedTopology: true, useNewUrlParser: true };

let mongooseInstance;
const connectDB = async () => {
  await mongoose.connect(DATABASE_URL, config, callback);
  mongooseInstance = mongoose;
};
const getMongooseInstance = () => mongooseInstance;

module.exports = { connectDB, getMongooseInstance };