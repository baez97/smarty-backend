const express = require('express');
const deviceDbRouter = require('./device-microservice/device.routing');

const microservicesRouter = new express.Router();
microservicesRouter.use('/device', deviceDbRouter);

module.exports = microservicesRouter;