const db = require("../../../config/db.js");

module.exports = {
  showAllTransaksi: () => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT transaksis. ,users.name AS users, kelas.nama AS kelas, pembayarans.nama AS pembayaran FROM transaksis INNER JOIN users ON users.id = transaksis.user_id INNER JOIN kelas ON kelas.id = transaksis.kelas_id INNER JOIN pembayarans ON pembayarans.id = transaksis.pembayaran_id WHERE AND deleted_at IS NULL`,
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
      db.query(`SELECT transaksis.*,users.name AS users, kelas.nama AS kelas, pembayarans.nama AS pembayaran FROM transaksis INNER JOIN users ON users.id = transaksis.user_id INNER JOIN kelas ON kelas.id = transaksis.kelas_id INNER JOIN pembayarans ON pembayarans.id = transaksis.pembayaran_id WHERE transaksis.id = ${id} AND deleted_at IS NULL`,
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
