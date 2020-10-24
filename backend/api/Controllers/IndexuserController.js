"use strict";
const userkelasModel = require("../Models/users/indexuser");
const formRes = require("../Helpers/formRes");

module.exports = {
    userKelas: (req, res) => {
        // const bookGenre = req.query.genre
        userkelasModel
            .showOne(req.params.id)
            .then((response) => formRes.resUser(res, response, 200))
            .catch((response) => formRes.resUser(res, response, 404));
    },
    userKlas: (req, res) => {
        // const bookGenre = req.query.genre
        userkelasModel
            .showOne(req.params.id)
            .then((response) => formRes.resUser(res, response, 200))
            .catch((response) => formRes.resUser(res, response, 404));
    },
};