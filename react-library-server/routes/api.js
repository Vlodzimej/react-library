var express = require("express");
var fs = require("fs");
var router = express.Router();

/**
 * GET Books
 */
router.get("/books", function(req, res, next) {
  const data = JSON.parse(fs.readFileSync("data.json", "utf8"));
  const result = data || [];
  res.json(result);
});

/**
 * GET Book by Id
 */
router.get("/book/:id", function(req, res, next) {
  const data = JSON.parse(fs.readFileSync("data.json", "utf8"));
  const result = data.find(x => x.id === req.params.id) || {};
  res.json(result);
});

module.exports = router;
