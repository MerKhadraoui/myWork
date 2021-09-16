const express = require("express");
const router = express.Router();
const allowedAccess = require("../controllers/authController");
const userControllers = require("../controllers/userController");

router.route("/").get(allowedAccess.roleCheck, userControllers.getAllUsers);
module.exports = router;
