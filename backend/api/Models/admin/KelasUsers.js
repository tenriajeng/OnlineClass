const db = require("../../../config/db.js");

module.exports = {
    showAllKelasUser: () => {
        return new Promise((resolve, reject) => {
            db.query(
                "SELECT kelas.*,users.* FROM kelas_users INNER JOIN users ON users.id = kelas_users.user_id INNER JOIN kelas ON kelas.id = kelas_users.kelas_id WHERE kelas_users.deleted_at IS NULL",
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
    deleteKelasUser: (body, id) => {
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
