const db = require("../../../config/db.js");

module.exports = {
  showAllPemateri: () => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM pemateris WHERE deleted_at IS NULL",
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
  addPemateri: (body) => {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO pemateris SET ?", [body], (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },
  updatePemateri: (body, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE pemateris SET ? WHERE id = ?",
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
  deletePemateri: (body, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE pemateris SET ? WHERE id = ?",
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
