const crypto = require("crypto");
const salt = require("../config/settings");

const encryptPassword = (password) => {
  return crypto.createHmac("sha256", salt).update(password).digest("hex");
};

module.exports = encryptPassword;
