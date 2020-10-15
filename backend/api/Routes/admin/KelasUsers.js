const express = require("express");
const KelasUserController = require("../../Controllers/Admin/KelasUsersController");
const Router = express.Router();

Router.get("/", KelasUserController.getAllKelasUser);
Router.post("/create", KelasUserController.addKelasUser);
Router.put("/:id", KelasUserController.updateKelasUser);
Router.put("/delete/:id", KelasUserController.deleteKelasUser);
Router.get("/detail/:id", KelasUserController.getOneKelasUser);

module.exports = Router;
