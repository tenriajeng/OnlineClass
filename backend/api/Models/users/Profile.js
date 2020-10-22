const db = require("../../../config/db.js");

module.exports = {
    getProfile: (id) => {
        return new Promise((resolve, reject) => {
          db.query(
            `SELECT materis.* FROM kelas INNER JOIN materis ON materis.kelas_id = kelas.id WHERE kelas.id= ${id}`,
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