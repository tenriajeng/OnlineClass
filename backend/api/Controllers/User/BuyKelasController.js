"use strict";
const KelasModel = require("../../Models/users/BuyKelas");
const formRes = require("../../Helpers/formRes");

module.exports = {
    getOneKelas: (req, res) => {
        // const bookGenre = req.query.genre
        KelasModel
            .showOneKelas(req.params.id)
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => formRes.resUser(res, err, 404));
    },    
};