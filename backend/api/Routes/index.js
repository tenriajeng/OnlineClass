const express = require("express");
const kelas = require("./admin/kelas");
const user = require("./admin/users");
const Login = require("./admin/login");
const home = require("./user/home.js")
const Router = express.Router();

Router.use("/admin/kelas", kelas);
Router.use("/admin/user", user);
Router.use("/admin/Login",Login);
Router.use("/home", home);

module.exports = Router;