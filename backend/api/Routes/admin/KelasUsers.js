const express = require("express");
const KelasUserController = require("../../Controllers/admin/KelasUsersController");
const Router = express.Router();
const auth = require("../../../config/auth");

Router.get("/", auth.verifyAdmin, KelasUserController.getAllKelasUser);
Router.post("/create", auth.verifyAdmin, KelasUserController.addKelasUser);
Router.put("/:id", auth.verifyAdmin, KelasUserController.updateKelasUser);
Router.put(
    "/delete/:id",
    auth.verifyAdmin,
    KelasUserController.deleteKelasUser
);
Router.get(
    "/detail/:id",
    auth.verifyAdmin,
    KelasUserController.getOneKelasUser
);

module.exports = Router;
