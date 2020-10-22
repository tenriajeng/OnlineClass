const db = require("../../../config/db.js");

module.exports = {
    showLogin: () => {
        return new Promise((resolve, reject) => {
            db.query(
                "SELECT * FROM kelas WHERE deleted_at IS NULL",
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
