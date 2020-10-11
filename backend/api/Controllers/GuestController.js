"use strict";
const GuestModel = require("../Models/admin/Kelas");
const formRes = require("../Helpers/formRes");

module.exports = {
    getAllGuest: (req, res) => {
        // const bookGenre = req.query.genre
        GuestModel
            .showAllGuest()
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => formRes.resUser(res, err, 404));
    },
};