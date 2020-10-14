const express = require("express");
const kelas = require("./admin/kelas");
const user = require("./admin/users");
const login = require("./admin/login");
const Router = express.Router();

Router.use("/admin/kelas", kelas);
Router.use("/admin/user", user);
Router.use("/admin/login", login);

module.exports = Router;