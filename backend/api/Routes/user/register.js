const express = require("express");
const RegisterController = require("../../Controllers/User/RegisterController");
const Router = express.Router();

Router.post("/", RegisterController.UserRegister);

module.exports = Router;