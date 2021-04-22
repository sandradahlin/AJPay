const express = require("express");
const router = express.Router();

//@route GET api/test
//@desc test api
//@access public
router.get("/", (req, res) => {
  res.send("Test api");
});

module.exports = router;
