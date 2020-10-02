"use strict";
const userModel = require("../Models/Users");

const formRes = require("../Helpers/formRes");

module.exports = {
  getAllUser: (req, res) => {
    // const bookGenre = req.query.genre
    userModel
      .showAllUser()
      .then((response) => formRes.resAllUser(res, response, 200))
      .catch((err) => console.log(err));
  },
};
