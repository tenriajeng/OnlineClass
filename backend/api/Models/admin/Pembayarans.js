const db = require("../../../config/db.js");

module.exports = {
	showAllPembayaran: () => {
		return new Promise((resolve, reject) => {
			db.query(
				'SELECT id,nama,DATE_FORMAT(updated_at,"%d-%m-%Y %H:%i:%s") AS updated_at FROM pembayarans WHERE deleted_at IS NULL ORDER BY updated_at DESC',
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
	addPembayaran: (body) => {
		return new Promise((resolve, reject) => {
			db.query("INSERT INTO pembayarans SET ?", [body], (err, response) => {
				if (!err) {
					resolve(response);
				} else {
					reject(err);
				}
			});
		});
	},
	updatePembayaran: (body, id) => {
		return new Promise((resolve, reject) => {
			db.query("UPDATE pembayarans SET ? WHERE id = ?", [body, id], (err, response) => {
				if (!err) {
					resolve(response);
				} else {
					reject(err);
				}
			});
		});
	},
	deletePembayaran: (body, id) => {
		return new Promise((resolve, reject) => {
			db.query("UPDATE pembayarans SET ? WHERE id = ?", [body, id], (err, response) => {
				if (!err) {
					resolve(response);
				} else {
					reject(err);
				}
			});
		});
	},
	showOnePembayaran: (id) => {
		return new Promise((resolve, reject) => {
			db.query(`SELECT * FROM pembayarans WHERE deleted_at IS NULL AND id = ${id} ORDER BY updated_at DESC`, (err, response) => {
				if (!err) {
					resolve(response);
				} else {
					reject(err);
				}
			});
		});
	},
};
