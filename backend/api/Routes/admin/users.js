const express = require("express");
const userController = require("../../Controllers/admin/UsersController");
const Router = express.Router();
const { check } = require("express-validator");
const auth = require("../../../config/auth");

Router.get("/", auth.verifyAdmin, userController.getAllUser);
Router.get("/detail/:id", auth.verifyAdmin, userController.getOneUser);
Router.post(
	"/create",
	[
		check("email", "Your email is not valid").isEmail(),
		check("name").not().isEmpty().withMessage("Name must have more than 5 characters"),
		check("password", "Your password must be at least 5 characters").not().isEmpty(),
	],
	auth.verifyAdmin,
	userController.addUser
);

Router.put("/:id", auth.verifyAdmin, userController.updateUser);
Router.put("/delete/:id", auth.verifyAdmin, userController.deleteUser);

module.exports = Router;
