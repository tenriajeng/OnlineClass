const express = require("express");
const ReadMoreController = require("../../Controllers/User/ReadMoreController");
const Router = express.Router();

Router.get("/detail/:id", ReadMoreController.getAllReadMore);

module.exports = Router;