const express = require("express");
const transaksiController = require("../../Controllers/Admin/TransaksisController");
const Router = express.Router();

Router.get("/", transaksiController.getAllTransaksi);
// Router.get('/:_id', userController.read_data);
Router.post("/create", transaksiController.addTransaksi);
Router.put("/:id", transaksiController.updateTransaksi);
Router.put("/delete/:id", transaksiController.deleteTransaksi);

module.exports = Router;
