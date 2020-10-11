const express = require("express");
const router = express.Router();
const GuestController = require("../../Controllers/GuestController");
const Router = express.Router();

Router.get("/", GuestController.getAllGuest);

module.exports = Router;