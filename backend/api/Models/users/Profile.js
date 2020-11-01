const db = require("../../../config/db.js");

module.exports = {
    getProfile: (id) => {
        return new Promise((resolve, reject) => {
          db.query(
            `SELECT materis.* FROM kelas INNER JOIN materis ON materis.kelas_id = kelas.id WHERE kelas.id= ${id}`,
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
      getProfileUser: (id) => {
        return new Promise((resolve, reject) => {
          db.query(
            `SELECT users.id AS id_user ,users.name AS nama ,users.email AS email ,users.level AS level ,users.foto AS foto_profile ,kelas.id AS id_kelas ,kelas.nama AS kelas ,kelas.aktif AS status_kelas ,kelas.foto AS foto_kelas FROM kelas_users INNER JOIN users ON users.id = kelas_users.user_id INNER JOIN kelas ON kelas.id = kelas_users.kelas_id WHERE users.id = ${id}`,
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
      getProfilePemateri: (id) => {
        return new Promise((resolve, reject) => {
          db.query(
            `SELECT users.id AS id_user ,users.name AS nama ,users.email AS email ,users.level AS level ,users.foto AS foto_profile ,kelas.id AS id_kelas ,kelas.nama AS kelas ,kelas.aktif AS status_kelas ,kelas.foto AS foto_kelas FROM pemateris INNER JOIN users ON users.id = pemateris.user_id INNER JOIN kelas ON kelas.id  = pemateris.kelas_id WHERE users.id =${id}`,
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