const db = require("../../../config/db.js");

module.exports = {
    loginUser: (email) => {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM users WHERE email = ?  `;
            db.query(query, [email], (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(err);
                }
            });
        });
    },
    /*
        return new Promise((resolve, reject) => {
            db.query(
                "SELECT * FROM users WHERE email= ? AND password= ? AND deleted_at IS NULL",
                [body.email, body.password],
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
    */
};
