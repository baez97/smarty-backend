const express = require('express')
const { connectDB } = require('./db/config');
const microserviceRouter = require('./microservices/microservices.routing');
var cors = require('cors')
const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(microserviceRouter);

const server = app.listen(port, () => {
  console.log(`\nš Smarty backend is up and running at port ${port} š\n`);
});

module.exports = server;