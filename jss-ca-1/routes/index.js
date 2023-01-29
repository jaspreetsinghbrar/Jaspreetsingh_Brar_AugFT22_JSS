const express = require("express");
const router = express.Router();
const memes = require("./memes");
const meme = require("./meme");
const login = require("./login");
const logout = require("./logout");

router.get("/", (req, res) => {
  res.redirect("/memes");
});

router.use("/memes", memes);
router.use("/meme", meme);
router.use("/login", login);
router.use("/logout", logout);

module.exports = router;
