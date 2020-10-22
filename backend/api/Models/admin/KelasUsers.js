const db = require("../../../config/db.js");

module.exports = {
	showAllKelasUser: () => {
		return new Promise((resolve, reject) => {
			db.query(
				`SELECT kelas.id as kelasId ,kelas.nama as kelasNama, users.name as usersName, users.id as usersId, kelas_users.id as kelasUserId,DATE_FORMAT(kelas_users.updated_at,"%d-%m-%Y %H:%i:%s") AS updated_at FROM kelas_users INNER JOIN users ON users.id = kelas_users.user_id INNER JOIN kelas ON kelas.id = kelas_users.kelas_id WHERE kelas_users.deleted_at IS NULL`,
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
	addKelasUser: (body) => {
		return new Promise((resolve, reject) => {
			db.query("INSERT INTO kelas_users SET ?", [body], (err, response) => {
				if (!err) {
					resolve(response);
				} else {
					reject(err);
				}
			});
		});
	},
	updateKelasUser: (body, id) => {
		return new Promise((resolve, reject) => {
			db.query("UPDATE kelas_users SET ? WHERE id = ?", [body, id], (err, response) => {
				if (!err) {
					resolve(response);
				} else {
					reject(err);
				}
			});
		});
	},
	deleteKelasUser: (body, id) => {
		return new Promise((resolve, reject) => {
			db.query("UPDATE kelas_users SET ? WHERE id = ?", [body, id], (err, response) => {
				if (!err) {
					resolve(response);
				} else {
					reject(err);
				}
			});
		});
	},
	showOneKelasUser: (id) => {
		return new Promise((resolve, reject) => {
			db.query(`SELECT * FROM KelasUser WHERE deleted_at IS NULL AND id = ${id} ORDER BY updated_at DESC`, (err, response) => {
				if (!err) {
					resolve(response);
				} else {
					reject(err);
				}
			});
		});
	},
};
