const express = require("express");
const Router = express.Router();
const kelas = require("./admin/kelas");
const user = require("./admin/users");
const Login = require("./admin/login");
const guest = require("./user/home.js");
const materi = require("./admin/materis");
const pemateri = require("./admin/pemateris");
const KelasUser = require("./admin/KelasUsers");

Router.use("/admin/kelas", kelas);
Router.use("/admin/user", user);
Router.use("/admin/login", Login);
Router.use("/admin/materi", materi);
Router.use("/admin/pemateri", pemateri);
Router.use("/admin/kelas-user", KelasUser);

Router.use("/home", guest);
Router.use("/kelas", kelas);
Router.use("/user", user);
Router.use("/login", Login);

module.exports = Router;
