const db = require("../../../config/db.js");

module.exports = {
  showOne: (id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * from kelas_users INNER JOIN kelas ON kelas.id = kelas_users.kelas_id INNER JOIN users ON users.id = kelas_users.user_id WHERE users.id = ${id}`,
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