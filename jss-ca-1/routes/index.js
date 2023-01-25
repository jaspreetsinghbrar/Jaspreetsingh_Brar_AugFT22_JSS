var express = require("express");
var router = express.Router();
var memes = require("./memes");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { memes: global.memes });
});

router.use("/memes", memes);

module.exports = router;
