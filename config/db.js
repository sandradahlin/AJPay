const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");
const connectionString = require("./connectionstring");

const connectDB = () => {
  mongoose
    .connect(connectionString, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => {
      console.error(err.message);
      process.exit(1);
    });
};

module.exports = connectDB;
