const express = require("express");
const router = express.Router();


const UserCtrl= require("../controllers/controllers_users");
router.post("/login", UserCtrl.loginUser);
router.post("/signup", UserCtrl.signupUser);
router.get("/:_id", UserCtrl.getUser);

module.exports = router;
