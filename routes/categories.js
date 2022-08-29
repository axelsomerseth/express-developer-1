const express = require("express");
const router = express.Router();

// Get categories list
router.get("/", (req, res, next) => {
  res.end("GET categories list.");
});

// Get a category by id
router.get("/:id", (req, res, next) => {
  res.end("GET a category by id.");
});

// Create a category
router.post("/", (req, res, next) => {
  res.end("POST - Create a category.");
});

// Update a category
router.put("/:id", (req, res, next) => {
  res.end("PUT - Update a category.");
});

// Delete a category
router.delete("/:id", (req, res, next) => {
  res.end("DELETE a category.");
});

module.exports = router;
