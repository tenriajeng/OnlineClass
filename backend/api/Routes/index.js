const express = require("express");
const kelas = require("./admin/kelas");
const user = require("./admin/users");
const Router = express.Router();

Router.use("/admin/kelas", kelas);
Router.use("/admin/user", user);

module.exports = Router;