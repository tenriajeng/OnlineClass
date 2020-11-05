const express = require("express");
const KelasController = require("../../Controllers/admin/KelasController");
const Router = express.Router();
const {check} = require("express-validator");

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname));
    },
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
        cb(null, true);
    } else {
        cb(null, false);
    }
};
const upload = multer({storage: storage, fileFilter: fileFilter});

Router.get("/", KelasController.getAllKelas);

Router.post(
    "/create",
    [
        check("nama")
            .isLength({min: 5})
            .withMessage("Name must have more than 5 characters"),
        check("limit").isNumeric().withMessage("Limit must be number"),
        check("aktif").isNumeric().withMessage("aktif must be number"),
        check("harga").isNumeric().withMessage("harga must be number"),
    ],
    KelasController.addKelas
);
Router.put(
    "/:id",
    [
        check("nama")
            .isLength({min: 5})
            .withMessage("Name must have more than 5 characters"),
        check("limit").isNumeric().withMessage("Limit must be number"),
        check("aktif").isNumeric().withMessage("aktif must be number"),
        check("harga").isNumeric().withMessage("harga must be number"),
    ],
    KelasController.updateKelas
);
Router.put("/delete/:id", KelasController.deleteKelas);
Router.get("/detail/:id", KelasController.getOneKelas);

module.exports = Router;
