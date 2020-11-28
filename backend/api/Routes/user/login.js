const express = require("express");
const Router = express.Router();
const LoginController = require("../../Controllers/user/LoginController");
const {check} = require("express-validator");

Router.post(
    "/",
    [check("email", "Your email is not valid").isEmail()],
    LoginController.loginUser
);

module.exports = Router;
