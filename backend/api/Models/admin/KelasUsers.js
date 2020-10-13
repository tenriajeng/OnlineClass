const db = require("../../../config/db.js");

module.exports = {
    showAllKelasUser: () => {
        return new Promise((resolve, reject) => {
            db.query(
                "SELECT * FROM kelas_users WHERE deleted_at IS NULL",
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
            db.query(
                "UPDATE kelas_users SET ? WHERE id = ?",
                [body, id],
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
    deleteKelas: (body, id) => {
        return new Promise((resolve, reject) => {
            db.query(
                "UPDATE kelas_users SET ? WHERE id = ?",
                [body, id],
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
};
