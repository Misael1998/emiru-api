const asyncHandler = require("../middleware/asyncHandler");
const { validationResult } = require("express-validator");
const ErrorResponse = require("../utils/errorResponse");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../db/models/User");

//ENV constants
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRE = process.env.JWT_EXPIRE;

//@desc     User login
//@route    POST    /emiru/api/login
//@access   Public
exports.login = asyncHandler(async (req, res, next) => {
  const err = validationResult(req);
  if (!err.isEmpty) {
    return next(new ErrorResponse("Validation error", 400, err.array()));
  }

  const { email, password } = req.body;

  let user = await User.findOne({ email });

  if (!user) {
    return next(
      new ErrorResponse("Invalid credentials", 400, {
        msg: "Invalid email or password",
      })
    );
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return next(
      new ErrorResponse("Invalid credentials", 400, {
        msg: "Invalid email or password",
      })
    );
  }

  //Generate toke
  const payload = {
    user: user.id,
    role: user.role,
  };

  jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRE }, (err, token) => {
    if (err) {
      next(new Error(err));
    } else {
      return res.status(201).json({
        token,
      });
    }
  });
});
