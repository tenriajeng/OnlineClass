const db = require("../../../config/db.js");

module.exports = {
  showAllGuest: () => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT kelas.id, kelas.nama, materis.id_nama, materis.teks FROM kelas, materis WHERE kelas.id = materis.teks",
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