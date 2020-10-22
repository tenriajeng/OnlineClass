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
const userkelas = require("./user/indexuser.js");
const pembayaran = require("./admin/Pembayarans");
const transaksi = require("./admin/Transaksis");
const Register = require("./user/register");
const profile = require("./user/profile");
const transaksi = require("./user/transaksi");
const ReadMore = require("./user/readmore");

// admin
Router.use("/admin/kelas", kelas);
Router.use("/admin/user", user);
Router.use("/admin/materi", materi);
Router.use("/admin/pemateri", pemateri);
Router.use("/admin/pembayaran", pembayaran);
Router.use("/admin/transaksi", transaksi);
Router.use("/admin/kelas-user", KelasUser);

// home
Router.use("/home", home);
Router.use("/login", Login);
Router.use("/register", Register);
Router.use("/profile", profile);
Router.use("/transaksi", transaksi);
Router.use("/readmore", ReadMore);
Router.use("/user/kelas", userkelas);

module.exports = Router;
