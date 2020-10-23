const asyncHandler = require("../middleware/asyncHandler");
const { validationResult } = require("express-validator");
const ErrorResponse = require("../utils/errorResponse");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../db/models/User");

//@desc     Register new user route
//@route    POST    /emiru/api/register
//@access   Public
exports.register = asyncHandler(async (req, res, next) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return next(new EerrorResponse("Validation error", 400, err.array()));
  }

  const { name, email, password, type } = req.body;
  let role = "placeholder";
  switch (type) {
    case "client":
      role = "client";
      break;

    default:
      return next(
        new ErrorResponse("Validation error", 400, [
          { error: "Invalid user type" },
        ])
      );
  }

  const user = new User({ name, email, password, role });

  const salt = await bcrypt.genSalt(10);
  const encodedPassword = await bcrypt.hash(password, salt);

  user.password = encodedPassword;

  await user.save();

  //Generate toke
  const payload = {
    user: user.id,
    role: user.role,
  };

  const JWT_SECRET = process.env.JWT_SECRET;
  const JWT_EXPIRE = process.env.JWT_EXPIRE;
  jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRE }, (err, token) => {
    if (err) {
      next(new Error(err));
    } else {
      return res.status(201).json({
        token,
        user: {
          name: user.name,
          email: user.email,
          roles: user.role,
        },
      });
    }
  });
});
