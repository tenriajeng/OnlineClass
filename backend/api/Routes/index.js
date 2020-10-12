const express = require("express");
const kelas = require("./admin/kelas");
const user = require("./admin/users");
const materi = require("./admin/materis");
const pemateri = require("./admin/pemateris");
const KelasUser = require("./admin/KelasUsers");
const Router = express.Router();

Router.use("/admin/kelas", kelas);
Router.use("/admin/user", user);
Router.use("/admin/materi", materi);
Router.use("/admin/pemateri", pemateri);
Router.use("/admin/kelas-user", KelasUser);

module.exports = Router;