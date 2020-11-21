const express = require("express");
const KelasController = require("../../Controllers/admin/KelasController");
const Router = express.Router();
const { check } = require("express-validator");

Router.get("/", KelasController.getAllKelas);

Router.post(
    "/create",
    [
        check("nama").isLength({ min: 5 }).withMessage("Name must have more than 5 characters"),
        check("limit").isNumeric().withMessage("Limit must be number"),
        check("aktif").isNumeric().withMessage("aktif must be number"),
        check("harga").isNumeric().withMessage("harga must be number"),
    ],
    KelasController.addKelas
);
Router.put(
    "/:id",
    [
        check("nama").isLength({ min: 5 }).withMessage("Name must have more than 5 characters"),
        check("limit").isNumeric().withMessage("Limit must be number"),
        check("aktif").isNumeric().withMessage("aktif must be number"),
        check("harga").isNumeric().withMessage("harga must be number"),
    ],
    KelasController.updateKelas
);
Router.put("/delete/:id", KelasController.deleteKelas);
Router.get("/detail/:id", KelasController.getOneKelas);

module.exports = Router;
