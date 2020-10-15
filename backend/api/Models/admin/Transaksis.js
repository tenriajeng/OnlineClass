const db = require("../../../config/db.js");

module.exports = {
  showAllTransaksi: () => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM transaksis WHERE deleted_at IS NULL",
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
  addTransaksi: (body) => {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO transaksis SET ?", [body], (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },
  updateTransaksi: (body, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE transaksis SET ? WHERE id = ?",
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
  deleteTransaksi: (body, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE transaksis SET ? WHERE id = ?",
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
  showOneTransaksi: (id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM transaksis WHERE deleted_at IS NULL AND id = ${id} ORDER BY updated_at DESC`,
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
