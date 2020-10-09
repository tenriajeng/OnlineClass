const db = require("../../../config/db.js");

module.exports = {
  showAllUser: () => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM users WHERE deleted_at IS NULL ORDER BY updated_at DESC",
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
  addUser: (body) => {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO users SET ?", [body], (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },
  updateUser: (body, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE users SET ? WHERE id = ?",
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
  deleteUser: (body, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE users SET ? WHERE id = ?",
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
