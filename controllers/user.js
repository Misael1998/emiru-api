const asyncHandler = require("../middleware/asyncHandler");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../db/models/User");
const { validationResult } = require("express-validator");

//@desc     Set enterprise user plan
//@route    Patch    /emiru/api/user/set-plan
//@access   Private
exports.setUserPlan = asyncHandler(async (req, res, next) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return next(new ErrorResponse("Validation errors", 400, err.array()));
  }
  return res.send("add or update user plan");
});

//@desc     Block User
//@route    Patch    /emiru/api/user/block
//@access   Private, Restricted
exports.blockUser = asyncHandler(async (req, res, next) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return next(new ErrorResponse("Validation errors", 400, err.array()));
  }

  const { id } = req.body;

  const user = await User.findByIdAndUpdate(id, { isBlocked: true }).select(
    "-password"
  );

  if (!user) {
    return next(
      new ErrorResponse("Bad request", 400, [{ message: "No user for id" }])
    );
  }

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

  const user = await User.findByIdAndUpdate(id, { isBlocked: false }).select(
    "-password"
  );

  if (!user) {
    return next(
      new ErrorResponse("Bad request", 400, [{ message: "No user for id" }])
    );
  }

  user.isBlocked = false;

  return res.status(200).json(user);
});
