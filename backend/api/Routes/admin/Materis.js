const express = require("express");
const materiController = require("../../Controllers/admin/MaterisController");
const {check} = require("express-validator");
// const materiController = require("../../Controllers/Admin/MaterisController");
const Router = express.Router();
const auth = require("../../../config/auth");
// use auth.verifyToken for secure route

Router.get("/", materiController.getAllMateri);
// Router.get('/:_id', userController.read_data);
Router.post("/create",materiController.addMateri);
    // [
    //     check("nama")
    //         .isLength({min: 5})
    //         .withMessage("Name must have more than 5 characters"),
    //     check("jadwal").isEmpty().isDate(),
    // ],
    
Router.put("/:id",materiController.updateMateri);
    // [
    //     check("nama")
    //         .isLength({min: 5})
    //         .withMessage("Name must have more than 5 characters"),
    //     check("jadwal").isEmpty().isDate(),
    // ],
    
Router.post("/verify", auth.verifytoken, materiController.addMateri);
Router.put("/delete/:id", materiController.deleteMateri);
Router.get("/detail/:id", materiController.getOneMateri);

module.exports = Router;
