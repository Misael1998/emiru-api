const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const auth = require("../middleware/auth");
const authorize = require("../middleware/authorize");

const { blockUser, unblockUser } = require("../controllers/user");

router
  .route("/block")
  .patch(check("id").isString(), auth, authorize("admin"), blockUser);
router
  .route("/unblock")
  .patch(check("id").isString(), auth, authorize("admin"), unblockUser);

module.exports = router;
