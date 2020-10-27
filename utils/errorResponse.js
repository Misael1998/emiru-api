class ErrorResponse extends Error {
  constructor(message, statusCode, body) {
    super(message);
    this.statusCode = statusCode;
    this.body = body;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ErrorResponse;
