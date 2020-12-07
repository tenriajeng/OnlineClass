const express = require("express");
const LoginController = require("../../Controllers/User/LoginController");
const Router = express.Router();

Router.get("/", LoginController.loginUser);

module.exports = Router;
