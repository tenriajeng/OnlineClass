"use strict";
const pembayaranModel = require("../../Models/admin/Pembayarans");
const formRes = require("../../Helpers/formRes");

module.exports = {
    getAllPembayaran: (req, res) => {
        // const bookGenre = req.query.genre
        pembayaranModel
            .showAllPembayaran()
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => formRes.resUser(res, err, 404));
    },
    addPembayaran: (req, res) => {
        //  const bodyReq = req.body;
        var date = new Date();
        const body = {
            ...req.body,
            created_at: date,
            updated_at: date,
        };
        // console.log(body)
        pembayaranModel
            .addPembayaran(body)
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => formRes.resUser(res, err, 404));
    },
    updatePembayaran: (req, res) => {
        var date = new Date();
        const id = req.params.id;

        // console.log('ini adalah id:',id)
        const body = {
            ...req.body,
            updated_at: date,
        };
        // console.log(body)
        pembayaranModel
            .updatePembayaran(body, id)
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => formRes.resUser(res, err, 404));
    },
    deletePembayaran: (req, res) => {
        var date = new Date();
        const id = req.params.id;
        // console.log('ini adalah id:',id)
        const body = {
            updated_at: date,
            deleted_at: date,
        };
        // console.log(body)
        pembayaranModel
            .deletePembayaran(body, id)
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => formRes.resUser(res, err, 404));
    },
    getOnePembayaran: (req, res) => {
        // const bookGenre = req.query.genre
        pembayaranModel
            .showOnePembayaran(req.params.id)
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => formRes.resUser(res, err, 404));
    },
};
