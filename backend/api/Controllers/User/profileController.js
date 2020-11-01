"use strict";
const profileModel = require("../../Models/users/Profile");
const formRes = require("../../Helpers/formRes");

module.exports = {
    getProfile: (req, res) => {
        // const bookGenre = req.query.genre
        profileModel
            .getProfile(req.params.id)
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => formRes.resUser(res, err, 404));
    },
    getProfileUser: (req, res) => {
        // const bookGenre = req.query.genre
        profileModel
            .getProfileUser(req.params.id)
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => formRes.resUser(res, err, 404));
    },
    getProfilePemateri: (req, res) => {
        // const bookGenre = req.query.genre
        profileModel
            .getProfilePemateri(req.params.id)
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => formRes.resUser(res, err, 404));
    },
};
