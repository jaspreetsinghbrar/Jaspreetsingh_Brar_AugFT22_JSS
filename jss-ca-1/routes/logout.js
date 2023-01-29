const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  req.logout((err) => {
    if (err) console.log(`unable to logout`, err);
  });

  req.session.destroy(function (err) {
    if (err) {
      console.log(`unable to destroy session`, err);
      res.sendStatus(500);
    }
    if (!err) res.redirect("/memes");
  });
});

module.exports = router;
