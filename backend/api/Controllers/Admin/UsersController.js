"use strict";
const userModel = require("../../Models/admin/Users");
const formRes = require("../../Helpers/formRes");
const upload = require("../../../config/Multer");
const cloudinary = require("../../../config/cloudinary");

module.exports = {
    getAllUser: (req, res) => {
        // const bookGenre = req.query.genre
        userModel
            .showAllUser()
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => formRes.resUser(res, err, 404));
    },
    updateUser: (req, res) => {
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

                    userModel
                        .updateUser(body, id)
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
                                const {name, password} = req.body;
                                if (name.length < 6) {
                                    res.status(400).json({
                                        msg: "Nama must than 6 characters",
                                    });
                                } else if (password.length < 6) {
                                    res.status(400).json({
                                        msg: "Password must than 6 characters",
                                    });
                                }
                                console.log(body, id);
                                userModel
                                    .updateUser(body, id)
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
            .catch((err) => formRes.resUser(res, err, 404));
    },
    getOneUser: (req, res) => {
        // const bookGenre = req.query.genre
        userModel
            .showOneUser(req.params.id)
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => formRes.resUser(res, err, 404));
    },
    addUser: (req, res) => {
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

                    userModel
                        .addUser(body)
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
                                const validateEmail = (email) => {
                                    const emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
                                    return emailRegex.test(email);
                                };
                                const {name, password, email} = req.body;
                                if (name.length < 6) {
                                    res.status(400).json({
                                        msg: "Nama must than 6 characters",
                                    });
                                } else if (password.length < 6) {
                                    res.status(400).json({
                                        msg: "Password must than 6 characters",
                                    });
                                } else if (!validateEmail(email)) {
                                    res.status(400).json({
                                        msg: "Email is not valid",
                                    });
                                }
                                userModel
                                    .addUser(body)
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
};
