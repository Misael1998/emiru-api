const jwt = require("jsonwebtoken");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("./asyncHandler");

module.exports = asyncHandler(async (req, res, next) => {
  const token = req.header("auth-token");

  if (!token) {
    return res.status(401).json({
      message: "Access denied",
      error: {
        message: "No token, access denied",
      },
    });
  }

  try {
    const decoded = jwt.decode(token, process.env.JWT_SECRET);
    const user = {
      id: decoded.id,
      role: decoded.role,
    };

    req.user = user;

    next();
  } catch (err) {
    return res.status(401).json({
      message: "Access denied",
      error: {
        message: "Invalid token, access denied",
      },
    });
  }
});
