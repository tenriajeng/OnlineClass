const db = require("../../../config/db.js");

module.exports = {
  showAllUser: () => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT transaksis.,users.name AS users, kelas.nama AS kelas, pembayarans.nama AS pembayaran FROM transaksis INNER JOIN users ON users.id = transaksis.user_id INNER JOIN kelas ON kelas.id = transaksis.kelas_id INNER JOIN pembayarans ON pembayarans.id = transaksis.pembayaran_id WHERE AND deleted_at IS NULL`,
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
  showOneUser: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT transaksis.,users.name AS users, kelas.nama AS kelas, pembayarans.nama AS pembayaran FROM transaksis INNER JOIN users ON users.id = transaksis.user_id INNER JOIN kelas ON kelas.id = transaksis.kelas_id INNER JOIN pembayarans ON pembayarans.id = transaksis.pembayaran_id WHERE transaksis.id = ${id} AND deleted_at IS NULL`,
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
