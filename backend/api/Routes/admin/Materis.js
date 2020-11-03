const express = require("express");
const {check} = require("express-validator");
const materiController = require("../../Controllers/Admin/MaterisController");
const Router = express.Router();

Router.get("/", materiController.getAllMateri);
// Router.get('/:_id', userController.read_data);
Router.post(
    "/create",
    [
        check("nama")
            .isLength({min: 5})
            .withMessage("Name must have more than 5 characters"),
        check("jadwal").isEmpty().isDate(),
    ],
    materiController.addMateri
);
Router.put(
    "/:id",
    [
        check("nama")
            .isLength({min: 5})
            .withMessage("Name must have more than 5 characters"),
        check("jadwal").isEmpty().isDate(),
    ],
    materiController.updateMateri
);
Router.put("/delete/:id", materiController.deleteMateri);
Router.get("/detail/:id", materiController.getOneMateri);

module.exports = Router;
