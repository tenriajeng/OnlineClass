const express = require("express");
const userController = require("../../Controllers/admin/UsersController");
const Router = express.Router();

Router.get("/", userController.getAllUser);
// Router.get('/:_id', userController.read_data);
Router.post("/create", userController.addUser);
Router.put("/:id", userController.updateUser);
Router.put("/delete/:id", userController.deleteUser);
Router.get("/update", userController.getOneUser)

module.exports = Router;
