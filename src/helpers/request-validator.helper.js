const { default: mongoose } = require("mongoose");
const { ERROR_TYPES } = require("./error-handling.helper");

function validateIdParam(req) {
  const id = req.params;
  if (id === undefined) {
    return true;
  }
  return !mongoose.isValidObjectId(id);
}

module.exports = { validateIdParam };