"use strict";
const materiModel = require("../../Models/admin/Materis");
const formRes = require("../../Helpers/formRes");
const upload = require("../../../config/multer");
const cloudinary = require("../../../config/cloudinary");

module.exports = {
    getAllMateri: (req, res) => {
        // const bookGenre = req.query.genre
        materiModel
            .showAllMateri()
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => formRes.resUser(res, err, 404));
    },
    addMateri: (req, res) => {
        var date = new Date();
        upload.single("berkas")(req, res, async (err) => {
            if (err) {
                res.json({msg: err});
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

                    materiModel
                        .addMateri(body)
                        .then((response) => formRes.resUser(res, response, 200))
                        .catch((err) => console.log(err));
                } else {
                    try {
                        cloudinary.uploader
                            .upload(req.file.path, {folder: "POS-IMG"})
                            .then((result) => {
                                const body = {
                                    ...req.body,
                                    created_at: date,
                                    updated_at: date,
                                    berkas: result.url,
                                };
                                const {nama, aktif} = req.body;
                                if (nama.length < 6) {
                                    res.status(400).json({
                                        msg: "Nama must than 6 characters",
                                    });
                                } else if (Number.isNaN(parseInt(aktif))) {
                                    res.status(400).json({
                                        msg: "Aktif must be number",
                                    });
                                }
                                // console.log(body);
                                materiModel
                                    .addMateri(body)
                                    .then((response) =>
                                        formRes.resUser(res, response, 200)
                                    )
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
    updateMateri: (req, res) => {
        var date = new Date();
        const id = req.params.id;
        upload.single("berkas")(req, res, async (err) => {
            if (err) {
                res.json({msg: err});
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
                    console.log(body, id);

                    materiModel
                        .updateMateri(body, id)
                        .then((response) => formRes.resUser(res, response, 200))
                        .catch((err) => console.log(err));
                } else {
                    try {
                        cloudinary.uploader
                            .upload(req.file.path, {folder: "POS-IMG"})
                            .then((result) => {
                                const body = {
                                    ...req.body,
                                    created_at: date,
                                    updated_at: date,
                                    berkas: result.url,
                                };
                                const {nama, aktif} = req.body;
                                if (nama.length < 6) {
                                    res.status(400).json({
                                        msg: "Nama must than 6 characters",
                                    });
                                } else if (Number.isNaN(parseInt(aktif))) {
                                    res.status(400).json({
                                        msg: "Aktif must be number",
                                    });
                                }
                                console.log(body, id);
                                materiModel
                                    .updateMateri(body, id)
                                    .then((response) =>
                                        formRes.resUser(res, response, 200)
                                    )
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
    deleteMateri: (req, res) => {
        var date = new Date();
        const id = req.params.id;
        // console.log('ini adalah id:',id)
        const body = {
            updated_at: date,
            deleted_at: date,
        };
        // console.log(body)
        materiModel
            .deleteMateri(body, id)
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => formRes.resUser(res, err, 404));
    },
    getOneMateri: (req, res) => {
        // const bookGenre = req.query.genre
        materiModel
            .showOneMateri(req.params.id)
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => formRes.resUser(res, err, 404));
    },
};
