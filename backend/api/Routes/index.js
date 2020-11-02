const express = require("express");
const Router = express.Router();
//admin
const kelas = require("./admin/kelas");
const user = require("./admin/users");
const materi = require("./admin/materis");
const pemateri = require("./admin/pemateris");
const KelasUser = require("./admin/KelasUsers");
const transaksi = require("./admin/Transaksis");

//home
const home = require("./user/home.js");
const Transaksi = require("./user/transaksi");
const MoreMateri = require("./user/moremateri");
const userkelas = require("./user/indexuser");
const pembayaran = require("./admin/Pembayarans");
//user
const Register = require("./user/register");
const profile = require("./user/profile");
const ReadMore = require("./user/readmore");
const Login = require("./user/login");

// admin
Router.use("/admin/kelas", kelas);
Router.use("/admin/user", user);
Router.use("/admin/materi", materi);
Router.use("/admin/pemateri", pemateri);
Router.use("/admin/pembayaran", pembayaran);
Router.use("/admin/transaksis", transaksi);
Router.use("/admin/kelas-user", KelasUser);

// home
Router.use("/home", home);
Router.use("/login", Login);
Router.use("/register", Register);
Router.use("/profile", profile);
Router.use("/user/Transaksi", Transaksi);
Router.use("/readmore", ReadMore);
Router.use("/user/kelas", userkelas);
Router.use("/moremateri", MoreMateri);

module.exports = Router;
