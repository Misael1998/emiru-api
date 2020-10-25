const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const { register } = require("../controllers/register");

router
  .route("/")
  .post(
    [
      check("email").isEmail(),
      check("password").isLength({ min: 8 }),
      check("name").isLength({ min: 2 }),
      check("roles").isArray({ min: 1, max: 2 }),
    ],
    register
  );

module.exports = router;
