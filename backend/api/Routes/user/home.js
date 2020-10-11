const express = require("express");
const router = express.Router();
const GuestController = require("../../Controllers/User/HomeController");
const Router = express.Router();

Router.get("/", GuestController.getAllGuest);

module.exports = Router;