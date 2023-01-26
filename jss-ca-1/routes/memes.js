var express = require("express");
var router = express.Router();
// const { resolve } = require('path');
const axios = require("axios");

//BM New API endpoint to use for the data from the soccer API
router.get("/", (req, res) => {
  // console.log(global.memes);
  res.render("memes", { memes: global.memes });
});

module.exports = router;
