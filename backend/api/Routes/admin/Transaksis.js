const express = require("express");
const transaksiController = require("../../Controllers/admin/TransaksisController");
const Router = express.Router();

Router.get("/", transaksiController.getAllTransaksi);
// Router.get('/:_id', userController.read_data);
Router.post("/create", transaksiController.addTransaksi);
Router.put("/:id", transaksiController.updateTransaksi);
Router.put("/delete/:id", transaksiController.deleteTransaksi);
Router.get("/detail/:id", transaksiController.getOneTransaksi);

module.exports = Router;
