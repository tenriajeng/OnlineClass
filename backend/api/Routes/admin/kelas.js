const express = require("express");
const router = express.Router();
const KelasController = require("../../Controllers/admin/KelasController");
const Router = express.Router();

Router.get("/", KelasController.getAllKelas);
Router.post("/create", KelasController.addKelas);
Router.put("/:id", KelasController.updateKelas);
Router.put("/delete/:id", KelasController.deleteKelas);
router.get("/update", KelasController.getOneKelas);

module.exports = Router;