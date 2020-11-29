"use strict";
const pemateriModel = require("../../Models/admin/Pemateris");
const formRes = require("../../Helpers/formRes");
const upload = require("../../../config/multer");
const cloudinary = require("../../../config/cloudinary");

module.exports = {
    getAllPemateri: (req, res) => {
        // const bookGenre = req.query.genre
        pemateriModel
            .showAllPemateri()
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => formRes.resUser(res, err, 404));
    },
    addPemateri: (req, res, body) => {
        //  const bodyReq = req.body;
        var date = new Date();
        // console.log(body)
        pemateriModel
            .addPemateri(body)
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => formRes.resUser(res, err, 404));
        upload.single("foto")(req, res, async (err) =>{
            if (err) {
                res.json({ msg: err });
            } else {
                if (req.file == undefined) {
                    // res.json({
                    //   msg: "No File Selected"
                    // });
                    const body = {
                        ...req.body,
                        created_at: date,
                        updated_at: date,
                    };
                    // console.log(body)
                    pemateriModel
                        .addPemateri(body)
                        .then((response) => formRes.resUser(res, response, 200))
                        .catch((err) => console.log(err));
                } else {
                    try {
                        cloudinary.uploader.upload(req.file.path, { folder: "POS-IMG" }).then((result) => {
                            const body = {
                                ...req.body,
                                created_at: date,
                                updated_at: date,
                                foto: result.url,
                            };
                            pemateriModel
                                .addPemateri(body)
                                .then((response) => formRes.resUser(res, response, 200))
                                .catch((err) => console.log(err));
                        });
                    } catch (err) {
                        res.json({
                            err,
                        });
                    }
                }
            }
        });      
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
