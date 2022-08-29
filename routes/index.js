const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.end("Welcome to Inventory App");
});

module.exports = router;
