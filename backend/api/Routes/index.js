const express = require("express");
const kelas = require("./kelas");
const user = require("./users");
const Router = express.Router();

Router.use("/kelas", kelas);
Router.use("/user", user);

module.exports = Router;