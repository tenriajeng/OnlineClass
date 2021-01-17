"use strict";
const CartModel = require("../../Models/users/Cart");
const formRes = require("../../Helpers/formRes");

module.exports = {
	// addTransaksi: (req, res) => {
	//     //  const bodyReq = req.body;
	//     var date = new Date();
	//     const body = {
	//         ...req.body,
	//         created_at: date,
	//         updated_at: date,
	//     };
	//     // console.log(body)
	//     CartModel
	//         .addTransaksi(body)
	//         .then((response) => formRes.resUser(res, response, 200))
	//         .catch((err) => formRes.resUser(res, err, 404));
	// },
	getAllCart: (req, res) => {
		// const bookGenre = req.query.genre
		CartModel.showAllCart(req.params.id)
			.then((response) => formRes.resUser(res, response, 200))
			.catch((err) => console.log(err));
	},
	getTotalPrice: (req, res) => {
		// const bookGenre = req.query.genre
		CartModel.showTotalPrice(req.params.id)
			.then((response) => formRes.resUser(res, response, 200))
			.catch((err) => console.log(err));
	},
};
