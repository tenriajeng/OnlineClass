const express = require("express");
const BuyKelasController = require("../../Controllers/user/BuyKelasController");
const Router = express.Router();
const auth = require("../../../config/auth");

Router.get("/detail/:id", BuyKelasController.getOneKelas);

module.exports = Router;
