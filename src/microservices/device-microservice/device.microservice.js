const models = require('../../db/models');
const ERROR_TYPES = require('../../constants/error-types');
const { validateIdParam, smartyLogger } = require('../../helpers');

class DeviceMicroservice {
  constructor() {
    this.deviceCollection = models.DeviceModel
  }

  getAll = async (_, res, next) => {
    try {
      const allDevices = await this.deviceCollection.find();
      res.send(allDevices);
    } catch {
      next({ errorType: ERROR_TYPES.INTERNAL });
    }
  }

  getById = async (req, res, next) => {
    try {
      const requestError = validateIdParam(req);
      if (requestError) {
        next({ errorType: ERROR_TYPES.BAD_REQUEST, errorMessage: 'Sorry, a valid id param is mandatory' });
        return;
      }

      const device = await this.deviceCollection.findById(req.params.id);
      if (device === null) {
        next({ errorType: ERROR_TYPES.NOT_FOUND, errorMessage: 'We could not find a device with the given ID'});
        return;
      }

      res.send(device);
    } catch(e) {
      smartyLogger.log(e);
      next({ errorType: ERROR_TYPES.INTERNAL });
    }
  }
}

module.exports = DeviceMicroservice;