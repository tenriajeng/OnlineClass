"use strict";
const registerModel = require("../../Models/users/Register");
const formRes = require("../../Helpers/formRes");

module.exports = {
    UserRegister: (req, res) => {
        // const bookGenre = req.query.genre
        const body = {
            ...req.body,
        };
         registerModel
         .RegisterUser(body)
         .then((response) => formRes.resUser(res, response, 200))
         .catch((err) => formRes.resUser(res, err, 404));        
    },
};