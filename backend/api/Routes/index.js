const express = require("express");
const kelas = require("./admin/kelas");
const user = require("./admin/users");
const Login = require("./admin/login");
const guest = require("./user/home.js")
const Router = express.Router();

Router.use("/kelas", kelas);
Router.use("/user", user);
Router.use("/login", Login);
Router.use("/guest", guest);
Router.use("/admin/kelas", kelas);
Router.use("/admin/user", user);
Router.use("/admin/Login",Login);
Router.use("/home", guest);

module.exports = Router;