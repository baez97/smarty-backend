const express = require('express')
const { connectDB } = require('./db/config');
const microserviceRouter = require('./microservices/microservices.routing');
const app = express()
const port = process.env.port || 3000;

connectDB();

app.use(microserviceRouter)

const server = app.listen(port, () => {
  console.log(`\n🚀 Smarty backend is up and running at port ${port} 🚀\n`);
});

module.exports = server;