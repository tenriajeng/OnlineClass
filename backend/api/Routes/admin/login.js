const express = require("express");
const router = express.Router();
const LoginController = require("../../Controllers/LoginController");
const Router = express.Router();

Router.get("/", LoginController.getAllLogin);

module.exports = Router;