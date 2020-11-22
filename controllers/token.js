const asyncHandler = require("../middleware/asyncHandler");
const ayncHandler = require("../middleware/asyncHandler");
const ErrorResponse = require("../utils/errorResponse");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

//@desc     Check if token is valid
//@route    GET    /emiru/api/token/:token
//@access   Public
exports.validateToken = asyncHandler(async (req, res, next) => {
  const { token } = req.params;

  jwt.verify(token, JWT_SECRET);

  return res.status(200).json({ token });
});

//@desc     Check if token is valid
//@route    GET    /emiru/api/token/:token/enterprise
//@access   Public
exports.checkTokenPermissions = asyncHandler(async (req, res, next) => {
  return res.satus(200);
});
