const express = require("express");
const materiController = require("../../Controllers/admin/MaterisController");
const Router = express.Router();
const auth = require("../../../config/auth");

Router.get("/", auth.verifyAdminPemateri, materiController.getAllMateri);
// Router.get('/:_id', userController.read_data);
Router.post("/create", auth.verifyAdminPemateri, materiController.addMateri);
Router.put("/:id", auth.verifyAdminPemateri, materiController.updateMateri);
Router.put(
    "/delete/:id",
    auth.verifyAdminPemateri,
    materiController.deleteMateri
);
Router.get(
    "/detail/:id",
    auth.verifyAdminPemateri,
    materiController.getOneMateri
);

module.exports = Router;
