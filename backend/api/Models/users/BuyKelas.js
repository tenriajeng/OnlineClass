const db = require("../../../config/db.js");

module.exports = {
  showOneKelas: (id) => {
    return new Promise((resolve, reject) => {
        db.query(
            `SELECT * FROM kelas WHERE deleted_at IS NULL AND id = ${id} ORDER BY updated_at DESC`,
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
}