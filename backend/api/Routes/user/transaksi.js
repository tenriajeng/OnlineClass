const express = require("express");
const TransaksiController = require("../../Controllers/user/TransaksiController");
const Router = express.Router();
const auth = require("../../../config/auth");

Router.post(
    "/create",
    auth.verifyUserPemateri,
    TransaksiController.addTransaksi
);
Router.get(
    "/detail/:id",
    auth.verifyUserPemateri,
    TransaksiController.getOneTransaksi
);

module.exports = Router;
