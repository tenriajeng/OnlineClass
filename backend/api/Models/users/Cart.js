const db = require("../../../config/db.js");

module.exports = {
	// addTransaksi: (body) => {
	// 	return new Promise((resolve, reject) => {
	// 		db.query("INSERT INTO transaksis SET ?", [body], (err, response) => {
	// 			if (!err) {
	// 				resolve(response);
	// 			} else {
	// 				reject(err);
	// 			}
	// 		});
	// 	});
	// },
	showAllCart: (id) => {
		return new Promise((resolve, reject) => {
			db.query(
				`SELECT cart.id, cart.harga, kelas.nama FROM cart
				INNER JOIN kelas ON kelas.id = cart.kelas_id 
				WHERE user_id = ${id} AND cart.deleted_at IS NULL`,
				(err, response) => {
					if (!err) {
						resolve(response);
					} else {
						reject(err);
					}
				}
			);
		});
	},
	showTotalPrice: (id) => {
		return new Promise((resolve, reject) => {
			db.query(`SELECT SUM(harga) as totalharga FROM cart WHERE user_id = ${id}`, (err, response) => {
				if (!err) {
					resolve(response);
				} else {
					reject(err);
				}
			});
		});
	},
};
