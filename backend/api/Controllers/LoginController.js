"use strict";
const loginModel = require("../Models/users/Login");
const formRes = require("../Helpers/formRes");
const {validationResult} = require("express-validator");

module.exports = {
    loginUser: (req, res) => {
        const errors = validationResult(req);
        console.log(req.body);

        if (!errors.isEmpty()) {
            return res.status(422).jsonp(errors.array());
        }
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
