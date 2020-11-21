"use strict";
const registerModel = require("../Models/users/Register");
const formRes = require("../Helpers/formRes");
const { validationResult } = require("express-validator");

module.exports = {
    UserRegister: (req, res) => {
        const errors = validationResult(req);
        console.log(req.body);

        if (!errors.isEmpty()) {
            return res.status(422).jsonp(errors.array());
        }
        // const bookGenre = req.query.genre
        const email = req.body.email;
        const body = {
            ...req.body,
        };
        registerModel
            .UserRegister(body, email)
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => formRes.resUser(res, err, 404));
    },
};
