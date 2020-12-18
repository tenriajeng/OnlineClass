const express = require("express");
const KelasController = require("../../Controllers/Admin/KelasController");
const Router = express.Router();
const auth = require("../../../config/auth");

Router.get("/", auth.verifyAdminPemateri, KelasController.getAllKelas);

Router.post("/create", auth.verifyAdminPemateri, KelasController.addKelas);
Router.put("/:id", auth.verifyAdminPemateri, KelasController.updateKelas);
Router.put(
    "/delete/:id",
    auth.verifyAdminPemateri,
    KelasController.deleteKelas
);
Router.get(
    "/detail/:id",
    auth.verifyAdminPemateri,
    KelasController.getOneKelas
);

module.exports = Router;
