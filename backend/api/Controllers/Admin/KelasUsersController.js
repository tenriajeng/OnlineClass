"use strict";
const KelasUserModel = require("../../Models/admin/KelasUsers");
const formRes = require("../../Helpers/formRes");

module.exports = {
    getAllKelasUser: (req, res) => {
        // const bookGenre = req.query.genre
        KelasUserModel.showAllKelasUser()
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => formRes.resUser(res, err, 404));
    },
    addKelasUser: (req, res) => {
        //  const bodyReq = req.body;
        var date = new Date();
        const body = {
            ...req.body,
            created_at: date,
            updated_at: date,
        };
        // console.log(body)
        KelasUserModel.addKelasUser(body)
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => formRes.resUser(res, err, 404));
    },
    updateKelasUser: (req, res) => {
        var date = new Date();
        const id = req.params.id;

        // console.log('ini adalah id:',id)
        const body = {
            ...req.body,
            updated_at: date,
        };
        // console.log(body)
        KelasUserModel.updateKelasUser(body, id)
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => formRes.resUser(res, err, 404));
    },
    deleteKelasUser: (req, res) => {
        var date = new Date();
        const id = req.params.id;
        // console.log('ini adalah id:',id)
        const body = {
            updated_at: date,
            deleted_at: date,
        };
        // console.log(body)
        KelasUserModel.deleteKelasUser(body, id)
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => formRes.resUser(res, err, 404));
    },
    getOneKelasUser: (req, res) => {
        // const bookGenre = req.query.genre
        KelasUserModel
            .showOneKelasUser(req.params.id)
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => formRes.resUser(res, err, 404));
    },
};
