const express = require("express");
const userController = require("../../Controllers/admin/UsersController");
const Router = express.Router();
const { check } = require("express-validator");

Router.get("/", userController.getAllUser);
Router.get("/detail/:id", userController.getOneUser);
Router.post(
	"/create",
	[
		check("email", "Your email is not valid").isEmail(),
		check("name").not().isEmpty().withMessage("Name must have more than 5 characters"),
		check("password", "Your password must be at least 5 characters").not().isEmpty(),
	],
	userController.addUser
);
Router.put("/:id", userController.updateUser);
Router.put("/delete/:id", userController.deleteUser);

module.exports = Router;
