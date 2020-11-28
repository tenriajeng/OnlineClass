const express = require("express");
const ReadMoreController = require("../../Controllers/user/ReadMoreController");
const Router = express.Router();

Router.get("/detail/:id", ReadMoreController.getAllReadMore);

module.exports = Router;
