const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get("/", async (req, res) => {
  if (req.isAuthenticated()) res.redirect("/memes");
  if (!req.isAuthenticated()) res.render("login", { authenticated: false });
});

router.post(
  "/",
  passport.authenticate("local", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/memes");
  }
);

module.exports = router;
