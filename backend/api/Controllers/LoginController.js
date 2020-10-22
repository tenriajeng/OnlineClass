"use strict";
const loginModel = require("../Models/users/Login");
const formRes = require("../Helpers/formRes");

module.exports = {
    loginUser: (req, res) => {
        // const bookGenre = req.query.genre
        const body = {
            ...req.body,
        };
        loginModel
            .loginUser(body)
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => formRes.resUser(res, err, 404));
    },
};
