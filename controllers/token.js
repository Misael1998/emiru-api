const asyncHandler = require("../middleware/asyncHandler");
const ayncHandler = require("../middleware/asyncHandler");
const ErrorResponse = require("../utils/errorResponse");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

exports.validateToken = asyncHandler(async (req, res, next) => {
  const { token } = req.params;

  jwt.verify(token, JWT_SECRET);

  return res.status(200).json({ token });
});
