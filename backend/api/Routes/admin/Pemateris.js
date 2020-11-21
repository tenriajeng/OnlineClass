const express = require("express");
const pemateriController = require("../../Controllers/admin/PematerisControllers");
const Router = express.Router();

Router.get("/", pemateriController.getAllPemateri);
// Router.get('/:_id', userController.read_data);
Router.post("/create", pemateriController.addPemateri);
Router.put("/:id", pemateriController.updatePemateri);
Router.put("/delete/:id", pemateriController.deletePemateri);
Router.get("/detail/:id", pemateriController.getOnePemateri);

module.exports = Router;
