"use strict";
const loginModel = require("../../Models/users/Login");
const formRes = require("../../Helpers/formRes");

module.exports = {
    loginUser: async (req, res, next) => {
        const {email} = req.body;
        await loginModel
            .loginUser(email)
            .then(() => {
                // res.send(token);
                res.json({
                    message: `email ${email} is Logout`,
                });
            })
            .catch((err) => {
                res.json(err);
            });
    },
};
