const express = require("express");
const TransaksiController = require("../../Controllers/user/TransaksiController");
const Router = express.Router();

Router.post("/create", TransaksiController.addTransaksi);
Router.get("/detail/:id", TransaksiController.getOneTransaksi);

module.exports = Router;
