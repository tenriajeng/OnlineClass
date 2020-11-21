const express = require("express");
const pembayaranController = require("../../Controllers/admin/PembayaransControllers");
const Router = express.Router();

Router.get("/", pembayaranController.getAllPembayaran);
// Router.get('/:_id', userController.read_data);
Router.post("/create", pembayaranController.addPembayaran);
Router.put("/:id", pembayaranController.updatePembayaran);
Router.put("/delete/:id", pembayaranController.deletePembayaran);
Router.get("/detail/:id", pembayaranController.getOnePembayaran);

module.exports = Router;
