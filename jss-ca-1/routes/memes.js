var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.render("memes", {
    memes: global.memes,
    authenticated: req.isAuthenticated(),
    username: req.isAuthenticated() ? req.user[0].username : "",
  });
});

module.exports = router;
