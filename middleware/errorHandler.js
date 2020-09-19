const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  //Log err
  console.log(err);

  res.status(error.statusCode || 500).json(err.body);
};

module.exports = errorHandler;
