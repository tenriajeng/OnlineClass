const express = require("express");
const KelasController = require("../../Controllers/KelasController");
const Router = express.Router();

Router.get("/", KelasController.getAllKelas);
Router.post("/create", KelasController.addKelas);
Router.put("/:id", KelasController.updateKelas);
Router.put("/delete/:id", KelasController.deleteKelas);

module.exports = Router;