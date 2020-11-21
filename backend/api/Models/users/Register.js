const db = require("../../../config/db.js");

module.exports = {
    UserRegister: (body, email) => {
        return new Promise((resolve, reject) => {
            db.query("INSERT INTO users SET ?", [body, email], (err, response) => {
                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }
            });
        });
    },
};
