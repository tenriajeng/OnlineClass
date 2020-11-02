const db = require("../../../config/db.js");

module.exports = {
	showAllPemateri: () => {
		return new Promise((resolve, reject) => {
			db.query(
				`SELECT kelas.id as kelasId ,kelas.nama as kelasNama, users.name as usersName, users.id as usersId, pemateris.id as pematerisId,DATE_FORMAT(pemateris.updated_at,"%d-%m-%Y %H:%i:%s") AS updated_at FROM pemateris INNER JOIN users ON users.id = pemateris.user_id INNER JOIN kelas ON kelas.id = pemateris.kelas_id WHERE pemateris.deleted_at IS NULL`,
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
	addPemateri: (body) => {
		return new Promise((resolve, reject) => {
			db.query("INSERT INTO pemateris SET ?", [body], (err, response) => {
				if (!err) {
					resolve(response);
				} else {
					reject(err);
				}
			});
		});
	},
	updatePemateri: (body, id) => {
		return new Promise((resolve, reject) => {
			db.query("UPDATE pemateris SET ? WHERE id = ?", [body, id], (err, response) => {
				if (!err) {
					resolve(response);
				} else {
					reject(err);
				}
			});
		});
	},
	deletePemateri: (body, id) => {
		return new Promise((resolve, reject) => {
			db.query("UPDATE pemateris SET ? WHERE id = ?", [body, id], (err, response) => {
				if (!err) {
					resolve(response);
				} else {
					reject(err);
				}
			});
		});
	},
	showOnePemateri: (id) => {
		return new Promise((resolve, reject) => {
			db.query(`SELECT * FROM pemateris WHERE deleted_at IS NULL AND id = ${id} ORDER BY updated_at DESC`, (err, response) => {
				if (!err) {
					resolve(response);
				} else {
					reject(err);
				}
			});
		});
	},
};
