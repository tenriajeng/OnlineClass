const db = require("../../../config/db.js");

module.exports = {
    showAllKelas: () => {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT id, nama, kelas.limit, aktif, harga, foto,deskripsi, deleted_at, created_at, DATE_FORMAT(updated_at,"%d-%m-%Y %H:%i:%s") AS updated_at FROM kelas WHERE deleted_at IS NULL ORDER BY updated_at DESC`,
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
    addKelas: (body) => {
        return new Promise((resolve, reject) => {
            db.query("INSERT INTO kelas SET ?", [body], (err, response) => {
                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }
            });
        });
    },
    updateKelas: (body, id) => {
        return new Promise((resolve, reject) => {
            db.query("UPDATE kelas SET ? WHERE id = ?", [body, id], (err, response) => {
                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }
            });
        });
    },
    deleteKelas: (body, id) => {
        return new Promise((resolve, reject) => {
            db.query("UPDATE kelas SET ? WHERE id = ?", [body, id], (err, response) => {
                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }
            });
        });
    },
    showOneKelas: (id) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM kelas WHERE deleted_at IS NULL AND id = ${id} `, (err, response) => {
                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }
            });
        });
    },
};
