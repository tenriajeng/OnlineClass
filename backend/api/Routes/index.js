const express = require("express");
const Router = express.Router();
const kelas = require("./admin/kelas");
const user = require("./admin/users");
const Login = require("./user/login");
const home = require("./user/home.js");
const materi = require("./admin/materis");
const pemateri = require("./admin/pemateris");
const KelasUser = require("./admin/KelasUsers");
const Register = require("./user/register");

// admin
Router.use("/admin/kelas", kelas);
Router.use("/admin/user", user);
Router.use("/admin/login",Login);
Router.use("/admin/materi", materi);
Router.use("/admin/pemateri", pemateri);
Router.use("/admin/kelas-user", KelasUser);

// home
Router.use("/home", home);
Router.use("/login", Login);
Router.use("/register", Register);

module.exports = Router;
