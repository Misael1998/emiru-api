const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const authorize = require("../middleware/authorize");

const {
  validateToken,
  checkTokenPermissions,
} = require("../controllers/token");

router.route("/:token").get(validateToken);
router
  .route("/:token/enterprise")
  .get(auth, authorize("enterprise"), checkTokenPermissions);
router
  .route("/:token/admin")
  .get(auth, authorize("admin"), checkTokenPermissions);

module.exports = router;
