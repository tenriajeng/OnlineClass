const db = require("../Configs/db");

module.exports = {
  postTransaction: body => {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO transaction SET ?", [body], (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },
  postTransactionMenu: body => {
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO transaction_menu SET ?",
        [body],
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
  getTransaction: () => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM transaction ORDER BY id DESC",
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
  getTransactionMenu: () => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT transaction_menu.id AS id, transaction_menu.transaction_code, transaction_menu.id_menu,menu.name,menu.img, menu.category, transaction_menu.quantity,transaction_menu.price,transaction_menu.created_at FROM transaction_menu JOIN menu ON transaction_menu.id_menu=menu.id ORDER BY id DESC",
        (err, response) => {
          if (!err) {
            resolve(response);
          } else {
            reject(err);
          }
        }
      );
    });
  }
};
