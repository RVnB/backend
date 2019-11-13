const session = require("express-session");

module.exports = {
  name: "tetons",
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 1000 * 60 * 60,
    secure: process.env.NODE_ENV === "development" ? false : true,
    httpOnly: true
  },
  resave: false,
  saveUninitialized: true
};
