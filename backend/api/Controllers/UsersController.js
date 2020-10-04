"use strict";
const userModel = require("../Models/Users");
const formRes = require("../Helpers/formRes");

module.exports = {
  getAllUser: (req, res) => {
    // const bookGenre = req.query.genre
    userModel
      .showAllUser()
      .then((response) => formRes.resUser(res, response, 200))
      .catch((err) => console.log(err));
  },
  addUser: (req, res) => {
    //  const bodyReq = req.body;
    var date = new Date();
    const body = {
      ...req.body,
      created_at: date,
      updated_at: date,
    };
    // console.log(body)
    userModel
      .addUser(body)
      .then((response) => formRes.resUser(res, response, 200))
      .catch((err) => console.log(err));
  },
  updateUser: (req, res) => {
    var date = new Date();
    const id = req.params.id;

    // console.log('ini adalah id:',id)
    const body = {
      ...req.body,
      updated_at: date,
    };
    // console.log(body)
    userModel
      .updateUser(body, id)
      .then((response) => formRes.resUser(res, response, 200))
      .catch((err) => console.log(err));
  },
  deleteUser: (req, res) => {
    var date = new Date();
    const id = req.params.id;
    // console.log('ini adalah id:',id)
    const body = {
      updated_at: date,
      deleted_at: date,
    };
    // console.log(body)
    userModel
      .deleteUser(body, id)
      .then((response) => formRes.resUser(res, response, 200))
      .catch((err) => console.log(err));
  },
};
