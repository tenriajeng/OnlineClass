const express = require("express");
const router = express.Router();
const KelasUserController = require("../../Controllers/KelasUsersController");
const Router = express.Router();

Router.get("/", KelasUserController.getAllKelasUser);
Router.post("/create", KelasUserController.addKelasUser);
Router.put("/:id", KelasUserController.updateKelasUser);
Router.put("/delete/:id", KelasUserController.deleteKelasUser);

module.exports = Router;