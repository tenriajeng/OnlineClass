const db = require("../Configs/db");

module.exports = {
  getMenu: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM menu ORDER BY id DESC", (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },

  postMenu: body => {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO menu SET ?", [body], (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },

  updateMenu: (body, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE menu SET ? WHERE id = ?",
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
  updateMenuImg: (body, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE menu SET ? WHERE id = ?",
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

  deleteMenu: id => {
    return new Promise((resolve, reject) => {
      db.query("DELETE FROM menu WHERE id = ?", [id], (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  }
};
