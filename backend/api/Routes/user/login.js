const express = require("express");
const { check } = require("express-validator");
const LoginController = require("../../Controllers/LoginController");
const Router = express.Router();

Router.post("/", [check("email", "Your email is not valid").isEmail()], LoginController.loginUser);

module.exports = Router;
