const express = require("express");
const materiController = require("../../Controllers/admin/MaterisController");
const { check } = require("express-validator");
// const materiController = require("../../Controllers/Admin/MaterisController");
const Router = express.Router();
const auth = require("../../../config/auth");
// use auth.verifyToken for secure route

Router.get("/", auth.verifyAdminPemateri, materiController.getAllMateri);
// Router.get('/:_id', userController.read_data);
Router.post("/create", [check("nama").isLength({ min: 5 }).withMessage("Name must have more than 5 characters")], auth.verifyAdminPemateri, materiController.addMateri);
Router.put("/:id", [check("nama").isLength({ min: 5 }).withMessage("Name must have more than 5 characters")], auth.verifyAdminPemateri, materiController.updateMateri);
Router.put("/delete/:id", auth.verifyAdminPemateri, materiController.deleteMateri);
Router.get("/detail/:id", auth.verifyAdminPemateri, materiController.getOneMateri);

module.exports = Router;
