"use strict";
const userModel = require("../../Models/admin/Users");
const formRes = require("../../Helpers/formRes");
const { validationResult } = require("express-validator");
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
    // addUser: (req, res) => {
    // 	const errors = validationResult(req, res);
    // 	console.log(req.body);

    // 	if (!errors.isEmpty()) {
    // 		return res.status(422).jsonp(errors.array());
    // 	}
    // 	//  const bodyReq = req.body;
    // 	var date = new Date();
    // 	const body = {
    // 		...req.body,
    // 		created_at: date,
    // 		updated_at: date,
    // 	};
    // 	// console.log(body)
    // 	userModel
    // 		.addUser(body)
    // 		.then((response) => formRes.resUser(res, response, 200))
    // 		.catch((err) => formRes.resUser(res, err, 404));
    // },
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
            .catch((err) => formRes.resUser(res, err, 404));
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
        // const errors = validationResult(req, res);
        console.log(req.body);

        // if (!errors.isEmpty()) {
        //     return res.status(422).jsonp(errors.array());
        // }

        var date = new Date();
        upload.single("foto")(req, res, async (err) => {
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
                    userModel
                        .addUser(body)
                        .then((response) => formRes.resUser(res, response, 200))
                        .catch((err) => formRes.resUser(res, err, 404));
                } else {
                    try {
                        cloudinary.uploader.upload(req.file.path, { folder: "POS-IMG" }).then((result) => {
                            const body = {
                                ...req.body,
                                created_at: date,
                                updated_at: date,
                                foto: result.url,
                            };
                            userModel
                                .addUser(body)
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
};
