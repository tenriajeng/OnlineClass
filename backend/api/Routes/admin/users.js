const express = require("express");
const userController = require("../../Controllers/admin/UsersController");
const Router = express.Router();
const auth = require("../../../config/auth");

Router.get("/", auth.verifyAdmin, userController.getAllUser);
Router.get("/detail/:id", auth.verifyAdmin, userController.getOneUser);
Router.post("/create", auth.verifyAdmin, userController.addUser);
Router.put("/:id", auth.verifyAdmin, userController.updateUser);
Router.put("/delete/:id", auth.verifyAdmin, userController.deleteUser);

module.exports = Router;
