const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const auth = require("../middleware/auth");
const authorize = require("../middleware/authorize");

const { createPlan, updatePlan, getPlans } = require("../controllers/plans");

router
  .route("/")
  .get(getPlans)
  .post(
    [
      check("name").isString().isLength({ min: 2 }),
      check("price").isNumeric({ min: 0 }),
      check("store").isNumeric({ min: 0 }),
      check("pages").isNumeric({ min: 0 }),
    ],
    auth,
    authorize("admin")
  )
  .patch(
    [
      check("name"),
      check("price"),
      check("store"),
      check("pages"),
      check("id"),
    ],
    auth,
    authorize("admin")
  )
  .delete(
    [
      check("name"),
      check("price"),
      check("store"),
      check("pages"),
      check("id"),
    ],
    auth,
    authorize("admin")
  );

module.expports = router;
