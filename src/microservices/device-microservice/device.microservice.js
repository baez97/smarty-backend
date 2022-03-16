const models = require('../../db/models');

class DeviceMicroservice {
  constructor() {
    this.deviceCollection = models.DeviceModel
  }

  getAll = async (req, res, next) => {
    const allDevices = await this.deviceCollection.find();
    res.send(allDevices);
  }
}

module.exports = DeviceMicroservice;