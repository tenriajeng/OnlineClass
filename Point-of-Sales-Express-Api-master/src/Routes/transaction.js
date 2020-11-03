const express = require("express");
const transactionController = require("../Controllers/transaction");
const Router = express.Router();

Router.get("/", transactionController.getTransaction);
Router.get("/menu", transactionController.getTransactionMenu);
Router.post("/", transactionController.postTransaction);
Router.post("/menu", transactionController.postTransactionMenu);

module.exports = Router;
