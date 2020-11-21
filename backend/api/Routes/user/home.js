const express = require("express");
const GuestController = require("../../Controllers/user/HomeController");
const Router = express.Router();

Router.get("/detail/:id", GuestController.getAllGuest);

module.exports = Router;
