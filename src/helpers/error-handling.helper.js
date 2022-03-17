const ERROR_TYPES = require('../constants/error-types');

const errorTypesFnMap = {
  [ERROR_TYPES.NOT_FOUND]: handleNotFound,
  [ERROR_TYPES.BAD_REQUEST]: handleBadRequest,
  [ERROR_TYPES.INTERNAL]: handleInternalError,
}
function handleNotFound(res, message) {
  res.status(404).send({ error: message });
}

function handleBadRequest(res, message) {
  res.status(400).send({ error: message });
}

function handleInternalError(res) {
  res.status(500).send({ error: 'Sorry, Smarty suffered an internal error. Please try again later' });
}

function handleError({ errorType, errorMessage }, req, res, next) {
  const handleFn = errorTypesFnMap[errorType] || handleInternalError;
  handleFn(res, errorMessage);
}

module.exports = {
  handleError,
  ERROR_TYPES
}