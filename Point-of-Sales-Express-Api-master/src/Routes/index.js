const express = require("express");
const Router = express.Router();
const menu = require("./menu");
const admin = require("./admin");
const transaction = require("./transaction");

Router.use("/menu", menu);
Router.use("/admin", admin);
Router.use("/transaction", transaction);

module.exports = Router;
