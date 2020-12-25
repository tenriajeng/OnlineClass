"use strict";
const loginModel = require("../../Models/users/Login");
const formRes = require("../../Helpers/formRes");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

module.exports = {
    loginUser: async (req, res, next) => {
        try {
            const errors = validationResult(req);
            console.log(req.body);

            if (!errors.isEmpty()) {
                return res.status(422).jsonp(errors.array());
            }
            const {email, password} = req.body;
            await loginModel
                .loginUser(email)
                .then((response) => {
                    if (response.length === 0) {
                        res.status(400).json({
                            message: `email ${email} Not Found`,
                        });
                    } else {
                        if (password == response[0].password) {
                            let token = jwt.sign(
                                { response: response[0] }, //level: "user"
                                "process.env.SECRET_KEY",
                                { expiresIn: "60m" }
                            );
                            res.json({
                                sucess: true,
                                err: null,
                                token,
                            });
                            // res.send(token);
                            console.log({ msg: "berhasil login" });
                        } else {
                            res.status(400).json({
                                message: "Wrong password or Email",
                            });
                        }
                    }
                })
                .catch((err) => {
                    res.json(err);
                });
        } catch (err) {
            next(err);
        }
    },
};
