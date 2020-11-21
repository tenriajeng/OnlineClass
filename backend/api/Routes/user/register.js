const express = require("express");
const RegisterController = require("../../Controllers/RegisterController");
const Router = express.Router();
const { check } = require("express-validator");

Router.post(
    "/",
    [
        check("name").isLength({ min: 5 }).withMessage("Name must have more than 5 characters"),
        check("password", "Your password must be at least 5 characters").isLength({
            min: 5,
        }),
    ],
    RegisterController.UserRegister
);

module.exports = Router;
