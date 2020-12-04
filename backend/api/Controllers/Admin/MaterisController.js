"use strict";
const materiModel = require("../../Models/admin/Materis");
const formRes = require("../../Helpers/formRes");
// const {validationResult, body} = require("express-validator");
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
    addMateri: (req, res, body) => {
        // const errors = validationResult(req);
        // console.log(req.body);

        // if (!errors.isEmpty()) {
        //     return res.status(422).jsonp(errors.array());
        // }
        //  const bodyReq = req.body;
        var date = new Date();
        // // console.log(body)
        // materiModel
        //     .addMateri(body)
        //     .then((response) => formRes.resUser(res, response, 200))
        //     .catch((err) => formRes.resUser(res, err, 404));
        upload.single("file")(req, res, async err => {
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
                  updated_at: date
                };
                // console.log(body)
                materiModel
                  .addMateri(body)
                  .then(response => formRes.resUser(res, response, 200))
                  .catch(err => console.log(err));
              } else {
                try {
                  cloudinary.uploader.upload(req.file.path, { folder: "POS-IMG" }).then(result => {
                      const body = {
                        ...req.body,
                        created_at: date,
                        updated_at: date,
                        file: result.url
                      };
                      materiModel
                        .addMateri(body)
                        .then(response => formRes.resUser(res, response, 200))
                        .catch(err => console.log(err));
                    });
                } catch (err) {
                  res.json({
                    err
                  });
                }
              }
            }
          });
    },
    updateMateri: (req, res) => {
        const errors = validationResult(req);
        console.log(req.body);

        if (!errors.isEmpty()) {
            return res.status(422).jsonp(errors.array());
        }
        var date = new Date();
        const id = req.params.id;

        // console.log('ini adalah id:',id)
        const body = {
            ...req.body,
            updated_at: date,
        };
        // console.log(body)
        materiModel
            .updateMateri(body, id)
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => formRes.resUser(res, err, 404));
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
