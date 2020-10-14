const express = require("express");
const materiController = require("../../Controllers/Admin/MaterisController");
const Router = express.Router();

Router.get("/", materiController.getAllMateri);
// Router.get('/:_id', userController.read_data);
Router.post("/create", materiController.addMateri);
Router.put("/:id", materiController.updateMateri);
Router.put("/delete/:id", materiController.deleteMateri);
Router.get("/detail/:id", materiController.getOneMateri);

module.exports = Router;
