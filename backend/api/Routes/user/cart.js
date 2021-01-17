const express = require("express");
const CartController = require("../../Controllers/User/CartController");
const Router = express.Router();

Router.get("/:id", CartController.getAllCart);
Router.get("/:id/total-price", CartController.getTotalPrice);

module.exports = Router;
