const asyncHandler = require("../middleware/asyncHandler");

//@desc     Register new user route
//@route    POST    /emiru/api/register
//@access   Public
exports.register = asyncHandler(async (req, res, next) => {
  res.send("register route");
});
