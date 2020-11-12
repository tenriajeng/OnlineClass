const express = require("express");
const indexuserController = require("../../Controllers/IndexuserController");
const Router = express.Router();

Router.get("/:id", indexuserController.userKelas);

module.exports = Router;