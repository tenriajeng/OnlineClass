"use strict";
const ReadMoreModel = require("../../Models/users/ReadMore");
const formRes = require("../../Helpers/formRes");

module.exports = {
    getAllReadMore: (req, res) => {
        // const bookGenre = req.query.genre
        ReadMoreModel
            .showAllReadMore(req.params.id)
            .then((response) => formRes.resUser(res, response, 200))
            .catch((err) => formRes.resUser(res, err, 404));
    },
};
