"use strict";
const pemateriModel = require("../../Models/admin/Pemateris");
const formRes = require("../../Helpers/formRes");


module.exports = {
    getAllPemateri: (req, res) => {
        // const bookGenre = req.query.genre
        pemateriModel
            .showAllPemateri()
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => formRes.resUser(res, err, 404));
    },
    addPemateri: (req, res, body) => {
        //  const book genre = req.query.genre
        pemateriModel
            .addPemateri(body)
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => formRes.resUser(res, err, 404));     
    },

    updatePemateri: (req, res) => {
        var date = new Date();
        const id = req.params.id;

        // console.log('ini adalah id:',id)
        const body = {
            ...req.body,
            updated_at: date,
        };
        // console.log(body)
        pemateriModel
            .updatePemateri(body, id)
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => formRes.resUser(res, err, 404));
    },
    deletePemateri: (req, res) => {
        var date = new Date();
        const id = req.params.id;
        // console.log('ini adalah id:',id)
        const body = {
            updated_at: date,
            deleted_at: date,
        };
        // console.log(body)
        pemateriModel
            .deletePemateri(body, id)
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => formRes.resUser(res, err, 404));
    },
    getOnePemateri: (req, res) => {
        // const bookGenre = req.query.genre
        pemateriModel
            .showOnePemateri(req.params.id)
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => formRes.resUser(res, err, 404));
    },
};
