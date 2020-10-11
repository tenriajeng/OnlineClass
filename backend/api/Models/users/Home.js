const db = require("../../../config/db.js");

module.exports = {
  showAllGuest: () => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM kelas "+
        "INNER JOIN materis ON kelas.id = materis.kelas_id"+
        " WHERE kelas.deleted_at IS NULL  && materis.deleted_at  IS NULL && kelas.aktif = 1 && materis.aktif = 1",
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