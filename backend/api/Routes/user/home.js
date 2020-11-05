const express = require("express");
const GuestController = require("../../Controllers/User/HomeController");
const Router = express.Router();

Router.get("/detail/:id", GuestController.getAllGuest);

module.exports = Router;