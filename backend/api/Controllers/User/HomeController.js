"use strict";
const homeModel = require("../../Models/users/Home");
const formRes = require("../../Helpers/formRes");

module.exports = {
    getAllGuest: (req, res) => {
        // const bookGenre = req.query.genre
        homeModel
            .showAllGuest(req.params.id)
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => formRes.resUser(res, err, 404));
    },
};
