"use strict";
const LoginModel = require("../Models/admin/Login");
const formRes = require("../Helpers/formRes");

module.exports = {
    getAllLogin: (req, res) => {
        // const bookGenre = req.query.genre
        LoginModel
            .showAllLogin()
            .then((response) => formRes.resUser(res, response, "sukses"))
            .catch((err) => console.log(err));
    },
};
