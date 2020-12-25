const express = require("express");
const Router = express.Router();
const LogoutController = require("../../Controllers/user/LogoutController");
const { check } = require("express-validator");

Router.get("/", LogoutController.loginUser);

module.exports = Router;
