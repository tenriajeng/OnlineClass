const db = require("../../../config/db.js");

module.exports = {
  showAllGuest: (id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM kelas INNER JOIN materis ON kelas.id = materis.kelas_id WHERE kelas.deleted_at IS NULL  AND materis.deleted_at  IS NULL AND kelas.aktif = ${id} AND materis.aktif = ${id}`,
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