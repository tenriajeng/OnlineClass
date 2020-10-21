const express = require("express");
const profileController = require("../../Controllers/User/profileController");
const Router = express.Router();

Router.get("/detail/:id", profileController.getProfile);

module.exports = Router;