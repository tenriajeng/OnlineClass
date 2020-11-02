"use strict";
const MoreMateriModel = require("../../Models/users/MoreMateri");
const formRes = require("../../Helpers/formRes");

module.exports = {
    getAllMoreMateri: (req, res) => {
        // const bookGenre = req.query.genre
        MoreMateriModel
            .showAllMoreMateri(req.params.id)
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => formRes.resUser(res, err, 404));
    },
};
