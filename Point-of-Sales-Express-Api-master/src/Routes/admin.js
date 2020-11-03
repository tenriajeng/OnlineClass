const express = require("express");
const adminController = require("../Controllers/admin");
const Router = express.Router();

Router.post("/", adminController.loginAdmin);

module.exports = Router;
