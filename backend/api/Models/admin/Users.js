const db = require("../../../config/db.js");

module.exports = {
	showAllUser: () => {
		return new Promise((resolve, reject) => {
			db.query(
				`SELECT id,name,email,IF(level=1,"ADMIN",IF (level=3, "PEMATERI","USER")) as level,DATE_FORMAT(updated_at,"%d-%m-%Y %H:%i:%s") AS updated_at FROM users WHERE deleted_at IS NULL ORDER BY updated_at DESC`,
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
	addUser: (body) => {
		return new Promise((resolve, reject) => {
			db.query("INSERT INTO users SET ?", [body], (err, response) => {
				if (!err) {
					resolve(response);
				} else {
					reject(err);
				}
			});
		});
	},
	updateUser: (body, id) => {
		return new Promise((resolve, reject) => {
			db.query("UPDATE users SET ? WHERE id = ?", [body, id], (err, response) => {
				if (!err) {
					resolve(response);
				} else {
					reject(err);
				}
			});
		});
	},
	deleteUser: (body, id) => {
		return new Promise((resolve, reject) => {
			db.query("UPDATE users SET ? WHERE id = ?", [body, id], (err, response) => {
				if (!err) {
					resolve(response);
				} else {
					reject(err);
				}
			});
		});
	},
	showOneUser: (id) => {
		return new Promise((resolve, reject) => {
			db.query(`SELECT * FROM users WHERE deleted_at IS NULL AND id = ${id} ORDER BY updated_at DESC`, (err, response) => {
				if (!err) {
					resolve(response);
				} else {
					reject(err);
				}
			});
		});
	},
};
