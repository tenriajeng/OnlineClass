const db = require("../../../config/db.js");

module.exports = {
    loginUser: (body) => {
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
};
