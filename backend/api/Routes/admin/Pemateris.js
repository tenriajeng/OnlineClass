const express = require("express");
const pemateriController = require("../../Controllers/admin/PematerisControllers");
const Router = express.Router();
const auth = require("../../../config/auth");

Router.get("/", auth.verifyAdminPemateri, pemateriController.getAllPemateri);
// Router.get('/:_id', userController.read_data);
Router.post(
    "/create",
    auth.verifyAdminPemateri,
    pemateriController.addPemateri
);
Router.put("/:id", auth.verifyAdminPemateri, pemateriController.updatePemateri);
Router.put(
    "/delete/:id",
    auth.verifyAdminPemateri,
    pemateriController.deletePemateri
);
Router.get(
    "/detail/:id",
    auth.verifyAdminPemateri,
    pemateriController.getOnePemateri
);

module.exports = Router;
