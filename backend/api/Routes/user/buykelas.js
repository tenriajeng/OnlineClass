const express = require("express");
const BuyKelasController = require("../../Controllers/User/BuyKelasController");
const Router = express.Router();

Router.get("/detail/:id", BuyKelasController.getOneKelas);

module.exports = Router;
