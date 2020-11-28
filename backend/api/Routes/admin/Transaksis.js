const express = require("express");
const transaksiController = require("../../Controllers/admin/TransaksisController");
const Router = express.Router();
const auth = require("../../../config/auth");

Router.get("/", auth.verifyAdmin, transaksiController.getAllTransaksi);
// Router.get('/:_id', userController.read_data);
Router.post("/create", auth.verifyAdmin, transaksiController.addTransaksi);
Router.put("/:id", auth.verifyAdmin, transaksiController.updateTransaksi);
Router.put(
    "/delete/:id",
    auth.verifyAdmin,
    transaksiController.deleteTransaksi
);
Router.get(
    "/detail/:id",
    auth.verifyAdmin,
    transaksiController.getOneTransaksi
);

module.exports = Router;
