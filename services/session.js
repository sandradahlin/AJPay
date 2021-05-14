const session = require("express-session");
const connectMongo = require("connect-mongo")(session);
const mongoose = require("mongoose");
const salt = require("../config/settings");

const hour = 3600000;
const establishSession = (app) => {
  app.use(
    session({
      secret: salt,
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false, maxAge: new Date(Date.now() + hour) },
      store: new connectMongo({ mongooseConnection: mongoose.connection }),
    })
  );
};

module.exports = establishSession;
