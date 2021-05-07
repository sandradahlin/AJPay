const express = require("express");
const router = express.Router();


//@route GET api/test
//@desc test api
//@access public
router.post("/", (req, res) => {
  console.log(req.body);
});

module.exports = router;
