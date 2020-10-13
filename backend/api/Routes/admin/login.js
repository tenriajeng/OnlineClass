const express = require("express");
const LoginController = require("../../Controllers/LoginController");
const Router = express.Router();

Router.get("/", LoginController.getLogin);

module.exports = Router;
