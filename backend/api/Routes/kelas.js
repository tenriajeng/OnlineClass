const express = require("express");
const router = express.Router();
// const express = require("express");
const KelasController = require("../Controllers/KelasController");
const Router = express.Router();

var cors = require("cors");
var corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

Router.get("/", cors(corsOptions), KelasController.getAllKelas);
Router.post("/create", cors(corsOptions), KelasController.addKelas);
Router.put("/:id", cors(corsOptions), KelasController.updateKelas);
Router.put("/delete/:id", cors(corsOptions), KelasController.deleteKelas);

module.exports = Router;