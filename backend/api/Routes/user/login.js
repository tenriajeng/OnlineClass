const express = require("express");
const Router = express.Router();
const LoginController = require("../../Controllers/user/LoginController");
const { check } = require("express-validator");
const auth = require("../../../config/auth");

Router.post("/", [check("email", "your email is not valid").isEmail()], LoginController.loginUser);
// Router.post("/verify", auth.verifytoken, LoginController.loginUser);

module.exports = Router;
