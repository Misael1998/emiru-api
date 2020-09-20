const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const { login } = require("../controllers/login");

router
  .route("/")
  .post([check("email").isEmail(), check("password").exists()], login);

module.exports = router;
