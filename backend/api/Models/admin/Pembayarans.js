const db = require("../../../config/db.js");

module.exports = {
  showAllPembayaran: () => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM pembayarans WHERE deleted_at IS NULL",
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
  addPembayaran: (body) => {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO pembayarans SET ?", [body], (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },
  updatePembayaran: (body, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE pembayarans SET ? WHERE id = ?",
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
  deletePembayaran: (body, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE pembayarans SET ? WHERE id = ?",
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
