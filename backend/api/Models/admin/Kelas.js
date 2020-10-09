const db = require("../../../config/db.js");

module.exports = {
  showAllKelas: () => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM kelas WHERE deleted_at IS NULL ORDER BY updated_at DESC",
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
      db.query(
        "UPDATE kelas SET ? WHERE id = ?",
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
        "UPDATE kelas SET ? WHERE id = ?",
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
