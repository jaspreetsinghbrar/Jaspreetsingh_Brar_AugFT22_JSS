const express = require("express");
const router = express.Router();


router.post("/", async (req, res) => {
  if (req.isAuthenticated()) {
    req.body.authenticated = req.isAuthenticated();
    req.body.username = req.user[0].username;
    res.render("meme", req.body);
  }
  if (!req.isAuthenticated()) res.redirect("login");
});

module.exports = router;
