const express = require("express");
const router = express.Router();

const { validateToken } = require("../controllers/token");

router.route("/:token").get(validateToken);

module.exports = router;
