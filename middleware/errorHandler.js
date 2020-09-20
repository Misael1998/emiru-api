const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  //Log err
  console.log(err);

  //Handle mongo errors
  if ((err.name = "MongoError")) {
    if (err.code == 11000) {
      error = new ErrorResponse("Can't create user", 400, {
        error: "Duplicate email",
      });
    }
  }

  return res.status(error.code || 500).json({
    message: error.message,
    error: error.body,
  });
};

module.exports = errorHandler;
