"use strict";
const loginModel = require("../Models/users/Login");
const formRes = require("../Helpers/formRes");

module.exports= {
    loginUser: async (req, res, next) => {
      try {
        const { username, password } = req.body;
        await userModel
          .loginUser(username)
          .then(response => {
            if (response.length === 0) {
              res.status(400).json({
                message: `Username ${username} Not Found`
              });
            } else {
              // if (bcrypt.compareSync(password, response[0].password)) {
              if ((password, response[0].password)) {
                res.json({
                  response: response[0],
                  err: null,
                });
                console.log({ msg: "berhasil login" });
              } else {
                res.status(400).json({
                  message: "Wrong password or Email"
                });
              }
            }
          })
          .catch(err => {
            res.json(err);
          });
      } catch (err) {
        next(err);
      }
    },
  };
  