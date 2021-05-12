const { check, validationResult } = require("express-validator");
const encryptPassword = require("../services/encryptionService");
const User = require("../models/User");

const login = (app) => {
  app.post(
    "/api/login",
    [
      check("email", "Please include valid email").isEmail(),
      check(
        "password",
        "Please enter a password with 6 or more characters"
      ).isLength({ min: 6 }),
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      let { email, password } = req.body;

      password = encryptPassword(password);

      try {
        let user = await User.findOne({ email });
        if (user) {
          if (user.password === password) {
            req.session.user = user;
            console.log(req.session);
            return res.status(200).json({ success: true, loggedInUser: user });
          } else {
            return res
              .status(400)
              .json({ success: false, msg: "Wrong credentials" });
          }
        }

        return res.status(400).json({ success: false, msg: "User not found" });
      } catch (err) {
        res.status(500).json({ msg: err.message });
      }
    }
  );

  app.get("/api/login", async (req, res) => {
    res.json(req.session.user ? req.session.user : false);
  });
};

module.exports = login;
