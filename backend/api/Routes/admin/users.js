const express = require("express");
const userController = require("../../Controllers/Admin/UsersController");
const Router = express.Router();
const {check} = require("express-validator");

Router.get("/", userController.getAllUser);
Router.get("/detail/:id", userController.getOneUser);
Router.post(
    "/create",
    [
        check("email", "Your email is not valid").isEmail(),
        check("name")
            .isLength({min: 5})
            .withMessage("Name must have more than 5 characters"),
        check(
            "password",
            "Your password must be at least 5 characters"
        ).isLength({min: 5}),
    ],
    userController.addUser
);
Router.put(
    "/:id",
    [
        check("email", "Your email is not valid").isEmail(),
        check("name")
            .isLength({min: 5})
            .withMessage("Name must have more than 5 characters"),
        check(
            "password",
            "Your password must be at least 5 characters"
        ).isLength({min: 5}),
    ],
    userController.updateUser
);
Router.put("/delete/:id", userController.deleteUser);

module.exports = Router;
