const db = require("../../../config/db.js");

module.exports = {
    showAllReadMore: (id) => {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT kelas.id AS kelas_id ,kelas.nama AS nama_kelas ,kelas.limit AS batas ,kelas.aktif ,kelas.harga AS harga_kelas ,kelas.foto AS foto ,kelas.updated_at ,materis.kelas_id,materis.id as materi_id ,materis.nama AS nama_materi ,materis.aktif ,materis.file ,materis.teks ,materis.jadwal AS jadwal_materi ,materis.updated_at FROM materis INNER JOIN kelas ON kelas.id = materis.kelas_id WHERE kelas.id =${id}`,
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
