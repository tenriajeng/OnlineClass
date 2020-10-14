const express = require("express");
const KelasController = require("../../Controllers/admin/KelasController");
const Router = express.Router();

Router.get("/", KelasController.getAllKelas);
Router.post("/create", KelasController.addKelas);
Router.put("/:id", KelasController.updateKelas);
Router.put("/delete/:id", KelasController.deleteKelas);
Router.get("/detail/:id", KelasController.getOneKelas);


module.exports = Router;
