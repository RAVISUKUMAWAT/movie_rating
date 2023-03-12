var express = require("express");
var router = express.Router();
const movieModel = require('../models/Movies');

/* GET users listing. */
router.get("/", async (req, res, next) => {
  const movies = await movieModel.find().lean();
  res.send(movies);
});

module.exports = router;