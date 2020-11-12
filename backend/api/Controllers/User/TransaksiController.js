"use strict";
const TransaksiModel = require("../../Models/users/Transaksi");
const formRes = require("../../Helpers/formRes");

module.exports = {
    addTransaksi: (req, res) => {
        //  const bodyReq = req.body;
        var date = new Date();
        const body = {
            ...req.body,
            created_at: date,
            updated_at: date,
        };
        // console.log(body)
        TransaksiModel
            .addTransaksi(body)
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => formRes.resUser(res, err, 404));
    },
    getOneTransaksi: (req, res) => {
        // const bookGenre = req.query.genre
        TransaksiModel
            .showOneTransaksi(req.params.id)
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => formRes.resUser(res, err, 404));
    },
};