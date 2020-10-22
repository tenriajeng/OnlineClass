const db = require("../../../config/db.js");

module.exports = {
  showAllMateri: () => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM materis WHERE deleted_at IS NULL",
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
  addMateri: (body) => {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO materis SET ?", [body], (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },
  updateMateri: (body, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE materis SET ? WHERE id = ?",
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
  deleteMateri: (body, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE materis SET ? WHERE id = ?",
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
  showOneMateri: (id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM materis WHERE deleted_at IS NULL AND id = ${id} ORDER BY updated_at DESC`,
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
