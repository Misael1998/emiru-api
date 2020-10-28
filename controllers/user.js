const asyncHandler = require("../middleware/asyncHandler");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../db/models/User");
const { validationResult } = require("express-validator");

//@desc     Block User
//@route    Patch    /emiru/api/user/block
//@access   Private, Restricted
exports.blockUser = asyncHandler(async (req, res, next) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return next(new ErrorResponse("Validation errors", 400, err.array()));
  }

  const { id } = req.body;

  const user = await User.findByIdAndUpdate(id, { isBlocked: true });
  user.isBlocked = true;

  return res.status(200).json(user);
});

//@desc     Unblock User
//@route    Patch    /emiru/api/user/unblock
//@access   Private, Restricted
exports.unblockUser = asyncHandler(async (req, res, next) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return next(new ErrorResponse("Validation errors", 400, err.array()));
  }

  const { id } = req.body;

  const user = await User.findByIdAndUpdate(id, { isBlocked: false });
  user.isBlocked = false;

  return res.status(200).json(user);
});
