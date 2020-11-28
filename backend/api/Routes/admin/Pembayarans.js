const express = require("express");
const pembayaranController = require("../../Controllers/admin/PembayaransControllers");
const Router = express.Router();
const auth = require("../../../config/auth");

Router.get("/", auth.verifyAdmin, pembayaranController.getAllPembayaran);
// Router.get('/:_id', userController.read_data);
Router.post("/create", auth.verifyAdmin, pembayaranController.addPembayaran);
Router.put("/:id", auth.verifyAdmin, pembayaranController.updatePembayaran);
Router.put(
    "/delete/:id",
    auth.verifyAdmin,
    pembayaranController.deletePembayaran
);
Router.get(
    "/detail/:id",
    auth.verifyAdmin,
    pembayaranController.getOnePembayaran
);

module.exports = Router;
