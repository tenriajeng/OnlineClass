"use strict";
const kelasModel = require("../../Models/admin/Kelas");
const formRes = require("../../Helpers/formRes");
const upload = require("../../../config/Multer");
const cloudinary = require("../../../config/cloudinary");

module.exports = {
    getAllKelas: (req, res) => {
        // const bookGenre = req.query.genre
        kelasModel
            .showAllKelas()
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => formRes.resUser(res, err, 404));
    },
    updateKelas: (req, res) => {
        var date = new Date();
        const id = req.params.id;
        upload.single("foto")(req, res, async (err) => {
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

                    kelasModel
                        .updateKelas(body, id)
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
                                    foto: result.url,
                                };
                                const {nama, aktif, limit, harga} = req.body;
                                if (nama.length < 6) {
                                    res.status(400).json({
                                        msg: "Nama must than 6 characters",
                                    });
                                } else if (Number.isNaN(parseInt(aktif))) {
                                    res.status(400).json({
                                        msg: "Aktif must be number",
                                    });
                                } else if (Number.isNaN(parseInt(limit))) {
                                    res.status(400).json({
                                        msg: "Limit must be number",
                                    });
                                } else if (Number.isNaN(parseInt(harga))) {
                                    res.status(400).json({
                                        msg: "harga must be number",
                                    });
                                } else {
                                    console.log(body, id);
                                    kelasModel
                                        .updateKelas(body, id)
                                        .then((response) =>
                                            formRes.resUser(res, response, 200)
                                        )
                                        .catch((err) => console.log(err));
                                }
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
            .catch((err) => formRes.resUser(res, err, 404));
    },
    getOneKelas: (req, res) => {
        // const bookGenre = req.query.genre
        kelasModel
            .showOneKelas(req.params.id)
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => formRes.resUser(res, err, 404));
    },
    addKelas: (req, res) => {
        var date = new Date();
        upload.single("foto")(req, res, async (err) => {
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

                    kelasModel
                        .addKelas(body)
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
                                    foto: result.url,
                                };
                                const {nama, aktif, limit, harga} = req.body;
                                if (nama.length < 6) {
                                    res.status(400).json({
                                        msg: "Nama must than 6 characters",
                                    });
                                } else if (Number.isNaN(parseInt(aktif))) {
                                    res.status(400).json({
                                        msg: "Aktif must be number",
                                    });
                                } else if (Number.isNaN(parseInt(limit))) {
                                    res.status(400).json({
                                        msg: "Limit must be number",
                                    });
                                } else if (Number.isNaN(parseInt(harga))) {
                                    res.status(400).json({
                                        msg: "harga must be number",
                                    });
                                } else {
                                    console.log(body);
                                    kelasModel
                                        .addKelas(body)
                                        .then((response) =>
                                            formRes.resUser(res, response, 200)
                                        )
                                        .catch((err) => console.log(err));
                                }
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
};
