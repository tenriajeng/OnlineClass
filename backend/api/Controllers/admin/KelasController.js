"use strict";
const kelasModel = require("../../Models/admin/Kelas");
const formRes = require("../../Helpers/formRes");

module.exports = {
    getAllKelas: (req, res) => {
        // const bookGenre = req.query.genre
        kelasModel
            .showAllKelas()
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => console.log(err));
    },
    addKelas: (req, res) => {
        //  const bodyReq = req.body;
        var date = new Date();
        const body = {
            ...req.body,
            created_at: date,
            updated_at: date,
        };
        // console.log(body)
        kelasModel
            .addKelas(body)
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => console.log(err));
    },
    updateKelas: (req, res) => {
        var date = new Date();
        const id = req.params.id;

        // console.log('ini adalah id:',id)
        const body = {
            ...req.body,
            updated_at: date,
        };
        // console.log(body)
        kelasModel
            .updateKelas(body, id)
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => console.log(err));
    },
    deleteKelas: (req, res) => {
        var date = new Date();
        const id = req.params.id;
        // console.log('ini adalah id:',id)
        const body = {
            updated_at: date,
            deleted_at: date,
        };
        // console.log(body)
        kelasModel
            .deleteKelas(body, id)
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => console.log(err));
    },
    getOneKelas: (req, res) => {
        // const bookGenre = req.query.genre
        kelasModel
          .showOneKelas(req.params.id)
          .then((response) => formRes.resUser(res, response, 200))
          .catch((err) => formRes.resUser(res, err, 404));
      },
};