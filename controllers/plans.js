const { validationResult } = require("express-validator");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandlder = require("../middleware/asyncHandler");
const Plans = require("../db/models/Plans");
const asyncHandler = require("../middleware/asyncHandler");

//@desc     Get plans
//@route    GET    /emiru/api/plans
//@access   Public
exports.getPlans = asyncHandlder(async (req, res, next) => {
  const plans = await Plans.find();

  return res.status(200).json(plans);
});

//@desc     Create plans
//@route    POST    /emiru/api/plans
//@access   Private, Restricted
exports.createPlan = asyncHandler(async (req, res, next) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return next(new ErrorResponse("Validation error", 400, err.array()));
  }

  const { name, price, stores, pages } = req.body;

  const plan = new Plans({ name, price, stores, pages });

  await plan.save();

  return res.ststus(201).json(plans);
});

//@desc     Create plans
//@route    PATCH    /emiru/api/plans
//@access   Private, Restricted
exports.updatePlan = asyncHandler(async (req, res, next) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return next(new ErrorResponse("Validation error", 400, err.array()));
  }

  const { name, price, stores, pages, id } = req.body;

  return res.status(200);
});

//@desc     Create plans
//@route    DELETE    /emiru/api/plans
//@access   Private, Restricted
exports.deletePlan = asyncHandler(async (req, res, next) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return next(new ErrorResponse("Validation error", 400, err.array()));
  }

  const { name, price, stores, pages, id } = req.body;

  return res.status(200);
});
