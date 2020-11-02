const db = require("../../../config/db.js");

module.exports = {
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
      showOneTransaksi: (id) => {
        return new Promise((resolve, reject) => {
          db.query(
            `SELECT transaksis.*  ,users.name AS user ,kelas.nama AS kelas ,pembayarans.nama AS metode_pembayaran FROM transaksis INNER JOIN users ON users.id = transaksis.user_id INNER JOIN kelas ON kelas.id = transaksis.kelas_id INNER JOIN pembayarans ON pembayarans.id = transaksis.pembayaran_id WHERE transaksis.id = ${id}`,
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