const express = require("express");
const MoreMateriController = require("../../Controllers/User/MoreMaterisController");
const Router = express.Router();

Router.get("/detail/:id", MoreMateriController.getAllMoreMateri);

module.exports = Router;