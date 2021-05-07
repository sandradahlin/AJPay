const { check, validationResult } = require("express-validator");
const encryptPassword = require("../services/encryptionService");
const User = require("../models/User");

const register = (app) => {
  app.post(
    "/api/register",
    [
      check("name", "Name is required").not().isEmpty(),
      check("email", "Please include valid email").isEmail(),
      check("phone", "Please include your phone number").not().isEmpty(),
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

      const { email, password } = req.body;
      try {
        let user = await User.findOne({ email });
        if (user) {
          return res
            .status(400)
            .json({ success: false, msg: "User already exists." });
        }

        user = new User({
          ...req.body,
          password: encryptPassword(password),
        });

        await user.save();

        res.status(200).json({ success: true, msg: "User registered." });
      } catch (err) {
        res.status(500).json({ msg: err.message });
      }
    }
  );
};

module.exports = register;
