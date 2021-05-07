const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
    default: 1000,
  },
  limit: {
    type: Number,
    required: true,
    default: 5000,
  },
  //TODO: add role
});

const userModel = new model("User", UserSchema);

module.exports = userModel;
