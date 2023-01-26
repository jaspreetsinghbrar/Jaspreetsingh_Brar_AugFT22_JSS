var express = require("express");
var router = express.Router();
// const { resolve } = require('path');
const axios = require("axios");

router.post("/", async (req, res) => {
  res.render("meme", req.body);
});

module.exports = router;
