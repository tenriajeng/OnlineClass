const express = require("express");
const BuyKelasController = require("../../Controllers/user/BuyKelasController");
const Router = express.Router();

Router.get("/detail/:id", BuyKelasController.getOneKelas);

module.exports = Router;
