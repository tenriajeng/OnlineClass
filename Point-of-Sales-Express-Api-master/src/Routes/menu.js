const express = require("express");
const menuController = require("../Controllers/menu");
const Router = express.Router();

Router.get("/", menuController.getMenu);
Router.post("/", menuController.postMenu);
Router.put("/:id", menuController.updateMenu);
Router.delete("/:id", menuController.deleteMenu);
Router.put("/img/:id", menuController.updateMenuImg);

module.exports = Router;
