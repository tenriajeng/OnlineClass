"use strict";
const loginModel = require("../Models/admin/Login");
const formRes = require("../Helpers/formRes");

module.exports = {
    getLogin: (req, res) => {
        // const bookGenre = req.query.genre
        loginModel
            .showLogin()
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => console.log(err));
    },
};