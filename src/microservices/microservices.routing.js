const express = require('express');
const { handleError } = require('../helpers/error-handling.helper');
const deviceDbRouter = require('./device-microservice/device.routing');

const microservicesRouter = new express.Router();
microservicesRouter.use('/device', deviceDbRouter);

microservicesRouter.use(handleError);
module.exports = microservicesRouter;