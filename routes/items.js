const express = require("express");
const router = express.Router();

// Get items list.
router.get("/", (req, res, next) => {
  res.end("GET items list.");
});

// Get an item by id.
router.get("/:id", (req, res, next) => {
  res.end("GET item by id.");
});

// Create an item.
router.post("/", (req, res, next) => {
  res.end("POST - Create an item.");
});

// Update an item.
router.put("/:id", (req, res, next) => {
  res.end("PUT - Update an item.");
});

// Delete an item.
router.delete("/:id", (req, res, next) => {
  res.end("DELETE an item.");
});

module.exports = router;
