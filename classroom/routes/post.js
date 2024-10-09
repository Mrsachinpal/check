const express = require("express");
const router = express.Router();
//POST
// index
router.get("/", (req, res) => {
  res.send("Get Route for post");
});

// Show
router.get("/:id", (req, res) => {
  res.send("Get  for Show post");
});

// Post
router.post("/", (req, res) => {
  res.send("Post  for  post");
});
// delete
router.delete("/:id", (req, res) => {
  res.send("Delete  for  post");
});

module.exports = router;
