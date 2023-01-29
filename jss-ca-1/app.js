require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const fs = require("fs");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JsonStore = require("express-session-json")(session);
const User = JSON.parse(fs.readFileSync("./users.json", { encoding: "utf8" }));
const indexRouter = require("./routes/index");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.set("trust proxy", 1);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.SECRET));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "node_modules/bootstrap/dist/")));

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    store: new JsonStore({ path: "./" }),
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(
  new LocalStrategy(function (username, password, done) {
    let user = User.filter((user) => user.username == username);
    if (!user.length) {
      return done(null, false);
    }
    if (user.length && user[0].password != password) {
      return done(null, false);
    }
    if (user.length && user[0].password == password) {
      delete user[0].password;
      return done(null, user);
    }
  })
);
passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});
app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
