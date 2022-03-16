const express = require('express');

const deviceRouter = new express.Router();
const DeviceMicroservice = require('./device.microservice');
const deviceMicroservice = new DeviceMicroservice();

deviceRouter.use(express.json());

deviceRouter.get('/all', deviceMicroservice.getAll);

module.exports = deviceRouter;